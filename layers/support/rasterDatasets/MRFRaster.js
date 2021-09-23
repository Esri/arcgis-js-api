/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../PixelBlock","../RasterInfo","../RasterStorageInfo","./BaseRaster","./pamParser","./xmlUtilities","../rasterFormats/utils","../rasterFunctions/pixelUtils","../../../geometry/SpatialReference","../../../geometry/Extent","../../../geometry/Point"],(function(e,t,r,n,s,i,o,a,l,c,u,f,p,h,g,d,m,y,x,I,b){"use strict";const w=new Map;w.set("Int8","s8"),w.set("UInt8","u8"),w.set("Int16","s16"),w.set("UInt16","u16"),w.set("Int32","s32"),w.set("UInt32","u32"),w.set("Float32","f32"),w.set("Float64","f32"),w.set("Double64","f32");const _=new Map;_.set("lerc",".lrc"),_.set("none",".til"),_.set("deflate",".pzp"),_.set("jpeg",".jzp");let A=function(t){function r(){var e;return(e=t.apply(this,arguments)||this)._files=null,e._storageIndex=null,e.datasetFormat="MRF",e}e._inheritsLoose(r,t);var i=r.prototype;return i.open=function(){var t=e._asyncToGenerator((function*(e){var t;yield this.init(),this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const r=e?s.unwrap(e.signal):null,n=yield this.request(this.url,{responseType:"xml",signal:r}),{rasterInfo:i,files:o}=this._parseHeader(n.data);if(-1===(null==(t=this.ioConfig.skipExtensions)?void 0:t.indexOf("aux.xml"))){const t=yield this._fetchAuxiliaryData(e);var a;if(null!=t)i.statistics=null!=(a=t.statistics)?a:i.statistics,i.histograms=t.histograms,t.histograms&&!s.isSome(i.statistics)&&(i.statistics=y.estimateStatisticsFromHistograms(t.histograms))}this._set("rasterInfo",i),this._files=o;const l=yield this.request(o.index,{responseType:"array-buffer",signal:r});this._storageIndex=this._parseIndex(l.data);let c,u,f=0,p=-1;const{blockWidth:h,blockHeight:g,compression:d}=this.rasterInfo.storageInfo,m=this.rasterInfo.storageInfo.pyramidScalingFactor,{width:x,height:I,bandCount:b}=this.rasterInfo,w=[],_="none"===d?1:b;for(;f<this._storageIndex.length;)p++,c=Math.ceil(x/h/m**p),u=Math.ceil(I/g/m**p),f+=c*u*_*4,w.push({maxRow:u,maxCol:c,minCol:0,minRow:0});this.rasterInfo.storageInfo.blockBoundary=w,p>0&&(this.rasterInfo.storageInfo.firstPyramidLevel=1,this.rasterInfo.storageInfo.maximumPyramidLevel=p),this.updateTileInfo()}));function r(e){return t.apply(this,arguments)}return r}(),i.fetchRawTile=function(){var t=e._asyncToGenerator((function*(e,t,r,n={}){const{blockWidth:s,blockHeight:i,blockBoundary:o,compression:a}=this.rasterInfo.storageInfo,l=o[e];if(!l||l.maxRow<t||l.maxCol<r||l.minRow>t||l.minCol>r)return null;const{bandCount:c,pixelType:f}=this.rasterInfo,{ranges:p,actualTileWidth:h,actualTileHeight:g}=this._getTileLocation(e,t,r);if(!p||0===p.length)return null;if(0===p[0].from&&0===p[0].to){const e=new Uint8Array(s*i);return new u({width:s,height:i,pixels:null,mask:e,validPixelCount:0})}const{bandIds:d}=this.ioConfig,m="none"===a?1:c,y=[];let x=0;for(x=0;x<m;x++)(!d||d.indexOf[x]>-1)&&y.push(this.request(this._files.data,{range:{from:p[x].from,to:p[x].to},responseType:"array-buffer",signal:n.signal}));const I=yield Promise.all(y),b=I.map((e=>e.data.byteLength)).reduce(((e,t)=>e+t)),w=new Uint8Array(b);let _=0;for(x=0;x<m;x++)w.set(new Uint8Array(I[x].data),_),_+=I[x].data.byteLength;const A="lerc"===this.rasterInfo.storageInfo.compression?"lerc":"bip",T=yield this.decodePixelBlock(w.buffer,{width:s,height:i,format:A,pixelType:f});let R=0,F=0;if(h!==s||g!==i){let e=T.mask;if(e)for(x=0;x<i;x++)if(F=x*s,x<g)for(R=h;R<s;R++)e[F+R]=0;else for(R=0;R<s;R++)e[F+R]=0;else for(e=new Uint8Array(s*i),T.mask=e,x=0;x<g;x++)for(F=x*s,R=0;R<h;R++)e[F+R]=1}return T}));function r(e,r,n){return t.apply(this,arguments)}return r}(),i._parseIndex=function(e){if(e.byteLength%16>0)throw"invalid array buffer must be multiples of 16";let t,r,n,s,i,o;if(m.isPlatformLittleEndian){for(r=new Uint8Array(e),s=new ArrayBuffer(e.byteLength),n=new Uint8Array(s),i=0;i<e.byteLength/4;i++)for(o=0;o<4;o++)n[4*i+o]=r[4*i+3-o];t=new Uint32Array(s)}else t=new Uint32Array(e);return t},i._getTileLocation=function(e,t,r){const{blockWidth:n,blockHeight:s,pyramidScalingFactor:i,compression:o}=this.rasterInfo.storageInfo,{width:a,height:l,bandCount:c}=this.rasterInfo,u="none"===o?1:c;let f,p,h,g=0,d=0;for(h=0;h<e;h++)d=i**h,f=Math.ceil(a/n/d),p=Math.ceil(l/s/d),g+=f*p;d=i**e,f=Math.ceil(a/n/d),p=Math.ceil(l/s/d),g+=t*f+r,g*=4*u;const m=this._storageIndex.subarray(g,g+4*u);let y=0,x=0;const I=[];for(let b=0;b<u;b++)y=m[4*b+0]*2**32+m[4*b+1],x=y+m[4*b+2]*2**32+m[4*b+3],I.push({from:y,to:x});return{ranges:I,actualTileWidth:r<f-1?n:Math.ceil(a/d)-n*(f-1),actualTileHeight:t<p-1?s:Math.ceil(l/d)-s*(p-1)}},i._parseHeader=function(e){const t=d.getElement(e,"MRF_META/Raster");if(!t)throw new n("mrf:open","not a valid MRF format");const r=d.getElement(t,"Size"),s=parseInt(r.getAttribute("x"),10),i=parseInt(r.getAttribute("y"),10),o=parseInt(r.getAttribute("c"),10),a=(d.getElementValue(t,"Compression")||"none").toLowerCase();if(!a||-1===["none","lerc"].indexOf(a))throw new n("mrf:open","currently does not support compression "+a);const l=d.getElementValue(t,"DataType")||"UInt8",c=w.get(l);if(null==c)throw new n("mrf:open","currently does not support pixel type "+l);const u=d.getElement(t,"PageSize"),h=parseInt(u.getAttribute("x"),10),m=parseInt(u.getAttribute("y"),10),y=d.getElement(t,"DataValues");let A,T;y&&(T=y.getAttribute("NoData"),null!=T&&(A=T.trim().split(" ").map((e=>parseFloat(e)))));if(d.getElement(e,"MRF_META/CachedSource"))throw new n("mrf:open","currently does not support MRF referencing other data files");const R=d.getElement(e,"MRF_META/GeoTags"),F=d.getElement(R,"BoundingBox");if(null==F)throw new n("mrf:open","missing node MRF_META/GeoTags/BoundingBox");const M=parseFloat(F.getAttribute("minx")),E=parseFloat(F.getAttribute("miny")),k=parseFloat(F.getAttribute("maxx")),v=parseFloat(F.getAttribute("maxy")),C=d.getElementValue(R,"Projection")||"",S=d.getElementValue(e,"datafile"),L=d.getElementValue(e,"IndexFile");let U;if("LOCAL_CS[]"!==C)if(C.toLowerCase().startsWith("epsg:")){const e=Number(C.slice(5));isNaN(e)||0===e||(U=new x({wkid:e}))}else U=g.parseSpatialReference(C);const B=new I(M,E,k,v);B.spatialReference=U;const P=d.getElement(e,"MRF_META/Rsets"),H=parseInt(P&&P.getAttribute("scale")||"2",10),W=new p({origin:new b({x:B.xmin,y:B.ymax,spatialReference:U}),blockWidth:h,blockHeight:m,pyramidBlockWidth:h,pyramidBlockHeight:m,compression:a,pyramidScalingFactor:H}),D=new b({x:(k-M)/s,y:(v-E)/i,spatialReference:U});return{rasterInfo:new f({width:s,height:i,extent:B,spatialReference:U,bandCount:o,pixelType:c,pixelSize:D,noDataValue:A,storageInfo:W}),files:{mrf:this.url,index:L||this.url.replace(".mrf",".idx"),data:S||this.url.replace(".mrf",_.get(a))}}},i._fetchAuxiliaryData=function(){var t=e._asyncToGenerator((function*(e){try{const{data:t}=yield this.request(this.url+".aux.xml",{responseType:"xml",signal:null==e?void 0:e.signal});return g.parsePAMInfo(t)}catch{return null}}));function r(e){return t.apply(this,arguments)}return r}(),r}(h);return t.__decorate([i.property()],A.prototype,"_files",void 0),t.__decorate([i.property()],A.prototype,"_storageIndex",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],A.prototype,"datasetFormat",void 0),A=t.__decorate([c.subclass("esri.layers.support.rasterIO.MRFRaster")],A),A}));
