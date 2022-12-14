/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{_ as e}from"../../../chunks/tslib.es6.js";import"../../../geometry.js";import t from"../../../core/Error.js";import{unwrap as r,isNone as i}from"../../../core/maybe.js";import{property as s}from"../../../core/accessorSupport/decorators/property.js";import"../../../core/arrayUtils.js";import"../../../core/has.js";import"../../../core/accessorSupport/ensureType.js";import{subclass as a}from"../../../core/accessorSupport/decorators/subclass.js";import n from"../RasterInfo.js";import o from"../RasterStorageInfo.js";import f from"./BaseRaster.js";import{parseSpatialReference as l,parsePAMInfo as m}from"./pamParser.js";import{parseSignature as u,getImageInfo as p,parseIFD as c,parseFieldValues as h,isBSQConfig as d}from"../rasterFormats/TiffDecoder.js";import y from"../rasterFormats/TiffTags.js";import{estimateStatisticsFromHistograms as g}from"../rasterFunctions/stretchUtils.js";import x from"../rasterTransforms/PolynomialTransform.js";import T from"../../../geometry/SpatialReference.js";import I from"../../../geometry/Extent.js";import w from"../../../geometry/Point.js";const _=(e,t)=>{const r=e.get(t);return r&&r.values},b=(e,t)=>{const r=e.get(t);return r&&r.values[0]};let E=class extends f{constructor(){super(...arguments),this._files=null,this._headerInfo=null,this._bufferSize=1048576,this.datasetFormat="TIFF"}async open(e){await this.init();const s=e?r(e.signal):null,{data:a}=await this.request(this.url,{range:{from:0,to:this._bufferSize},responseType:"array-buffer",signal:s});if(!a)throw new t("tiffraster:open","failed to open url "+this.url);this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const{littleEndian:f,firstIFD:m,isBigTiff:c}=u(a),h=[];await this._readIFDs(h,a,f,m,0,c?8:4,s);const d=p(h),{width:y,height:_,tileWidth:b,tileHeight:E,planes:S,pixelType:F,compression:R,firstPyramidLevel:k,maximumPyramidLevel:v,pyramidBlockWidth:j,pyramidBlockHeight:B,tileBoundary:D,affine:L,metadata:z}=d,O=d.extent.spatialReference?.wkt||d.extent.spatialReference?.wkid;let P=l(O),H=!1;null==P&&(H=!0,P=new T({wkid:3857}));const A=new I({...d.extent,spatialReference:P}),G=new w(A?{x:A.xmin,y:A.ymax,spatialReference:P}:{x:0,y:0}),q=new o({blockWidth:b,blockHeight:E,pyramidBlockWidth:j,pyramidBlockHeight:B,compression:R,origin:G,firstPyramidLevel:k,maximumPyramidLevel:v,blockBoundary:D}),C=new w({x:(A.xmax-A.xmin)/y,y:(A.ymax-A.ymin)/_,spatialReference:P}),W=z?{BandProperties:z.bandProperties,DataType:z.dataType}:{},U=new n({width:y,height:_,bandCount:S,pixelType:F,compression:R,pixelSize:C,storageInfo:q,spatialReference:P,isPseudoSpatialReference:H,keyProperties:W,extent:A,statistics:z?z.statistics:null});if(L?.length&&(U.nativeExtent=new I({xmin:-.5,ymin:.5-_,xmax:y-.5,ymax:.5,spatialReference:P}),U.transform=new x({polynomialOrder:1,forwardCoefficients:[L[2]+L[0]/2,L[5]-L[3]/2,L[0],L[3],-L[1],-L[4]]}),U.extent=U.transform.forwardTransform(U.nativeExtent),U.pixelSize=new w({x:(A.xmax-A.xmin)/y,y:(A.ymax-A.ymin)/_,spatialReference:P}),q.origin.x=-.5,q.origin.y=.5),!this.ioConfig.skipExtensions?.includes("aux.xml")){const t=await this._fetchAuxiliaryData(e);if(null!=t){if(U.statistics=t.statistics??U.statistics,U.histograms=t.histograms,t.histograms&&i(U.statistics)&&(U.statistics=g(t.histograms)),t.transform&&!L){U.transform=t.transform,U.nativeExtent=U.extent;const e=U.transform.forwardTransform(U.nativeExtent);U.pixelSize=new w({x:(e.xmax-e.xmin)/y,y:(e.ymax-e.ymin)/_,spatialReference:P}),U.extent=e}U.spatialReference||(U.spatialReference=t.spatialReference)}}if(this._set("rasterInfo",U),this._headerInfo={littleEndian:f,isBigTiff:c,ifds:h,...d},!this._headerInfo.isSupported)throw new t("tiffraster:open","this tiff is not supported: "+this._headerInfo.message);this.updateTileInfo()}async fetchRawTile(e,t,r,i={}){if(!this._headerInfo?.isSupported||this.isBlockOutside(e,t,r))return null;const s=this._getTileLocation(e,t,r);if(!s)return null;const{ranges:a,actualTileWidth:n,actualTileHeight:o,ifd:f}=s,l=a.map((e=>this.request(this.url,{range:e,responseType:"array-buffer",signal:i.signal}))),m=await Promise.all(l),u=m.map((e=>e.data.byteLength)).reduce(((e,t)=>e+t)),p=1===m.length?m[0].data:new ArrayBuffer(u),c=[0],h=[0];if(m.length>1){const e=new Uint8Array(p);for(let t=0,r=0;t<m.length;t++){const i=m[t].data;e.set(new Uint8Array(i),r),c[t]=r,r+=i.byteLength,h[t]=i.byteLength}}const{blockWidth:d,blockHeight:y}=this.getBlockWidthHeight(e),g=await this.decodePixelBlock(p,{format:"tiff",customOptions:{headerInfo:this._headerInfo,ifd:f,offsets:c,sizes:h},width:d,height:y,planes:null,pixelType:null});let x,T,I;if(n!==d||o!==y){let e=g.mask;if(e)for(x=0;x<y;x++)if(I=x*d,x<o)for(T=n;T<d;T++)e[I+T]=0;else for(T=0;T<d;T++)e[I+T]=0;else for(e=new Uint8Array(d*y),g.mask=e,x=0;x<o;x++)for(I=x*d,T=0;T<n;T++)e[I+T]=1}return g}async _readIFDs(e,t,r,i,s,a=4,n){if(!i)return null;if(i>=t.byteLength||i<0){t=(await this.request(this.url,{range:{from:i+s,to:i+s+this._bufferSize},responseType:"array-buffer",signal:n})).data,s=i+s,i=0}const o=await this._readIFD(t,r,i,s,y.TIFF_TAGS,a,n);if(e.push(o.ifd),!o.nextIFD)return null;await this._readIFDs(e,t,r,o.nextIFD-s,s,a,n)}async _readIFD(e,t,r,i,s=y.TIFF_TAGS,a=4,n){if(!e)return null;const o=c(e,t,r,i,s,a);if(o.success){const r=[];if(o.ifd.forEach((e=>{e.values||r.push(e)})),r.length>0){const s=r.map((e=>e.offlineOffsetSize)),a=Math.min.apply(null,s.map((e=>e[0])));if(Math.min.apply(null,s.map((e=>e[0]+e[1])))-a<=this._bufferSize){const{data:s}=await this.request(this.url,{range:{from:a,to:a+this._bufferSize},responseType:"array-buffer",signal:n});e=s,i=a,r.forEach((r=>h(e,t,r,i)))}}if(o.ifd.has("GEOKEYDIRECTORY")){const r=o.ifd.get("GEOKEYDIRECTORY"),s=r.values;if(s&&s.length>4){const a=s[0]+"."+s[1]+"."+s[2],o=await this._readIFD(e,t,r.valueOffset+6-i,i,y.GEO_KEYS,2,n);r.data=o.ifd,r.data&&r.data.set("GEOTIFFVersion",{id:0,type:2,valueCount:1,valueOffset:null,values:[a]})}}return o}if(o.requiredBufferSize&&o.requiredBufferSize!==e.byteLength){const r=await this.request(this.url,{range:{from:i,to:i+o.requiredBufferSize+4},responseType:"array-buffer",signal:n});return(e=r.data).byteLength<o.requiredBufferSize?null:this._readIFD(e,t,0,i,y.TIFF_TAGS,4,n)}}_getTileLocation(e,t,r){const{firstPyramidLevel:i,blockBoundary:s}=this.rasterInfo.storageInfo,a=0===e?0:e-(i-1),n=this._headerInfo.ifds[a];if(!n)return null;const o=d(n,this._headerInfo),f=_(n,"TILEOFFSETS");if(void 0===f)return null;const l=_(n,"TILEBYTECOUNTS"),{minRow:m,minCol:u,maxRow:p,maxCol:c}=s[a];if(t>p||r>c||t<m||r<u)return null;const h=b(n,"IMAGEWIDTH"),y=b(n,"IMAGELENGTH"),g=b(n,"TILEWIDTH"),x=b(n,"TILELENGTH"),T=o?this.rasterInfo.bandCount:1,I=T*t*(c+1)+r,w=[{from:f[I],to:f[I+T-1]+l[I+T-1]-1}];if(o){let e=!0;for(let t=0;t<T;t++)if(f[I+t]+l[I+t]!==f[I+t+1]){e=!1;break}if(!e)for(let t=0;t<T;t++)w[t]={from:f[I+t],to:f[I+t]+l[I+t]-1}}const E=f[I],S=l[I];if(null==E||null==S)return null;return{ranges:w,ifd:n,actualTileWidth:r===c?h%g:g,actualTileHeight:t===p?y%x:x}}async _fetchAuxiliaryData(e){try{const{data:t}=await this.request(this.url+".aux.xml",{responseType:"xml",signal:e?.signal});return m(t)}catch{return null}}};e([s()],E.prototype,"_files",void 0),e([s()],E.prototype,"_headerInfo",void 0),e([s()],E.prototype,"_bufferSize",void 0),e([s({type:String,json:{write:!0}})],E.prototype,"datasetFormat",void 0),E=e([a("esri.layers.support.rasterDatasets.TIFFRaster")],E);const S=E;export{S as default};