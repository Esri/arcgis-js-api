/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../geometry","../../../core/Error","../../../core/maybe","../../../core/accessorSupport/decorators/property","../../../core/has","../../../core/accessorSupport/ensureType","../../../core/Logger","../../../core/accessorSupport/decorators/subclass","../RasterInfo","../RasterStorageInfo","../TileInfo","./BaseRaster","./DBFParser","../rasterTransforms/utils","../../../rest/support/FeatureSet","../../../geometry/SpatialReference","../../../geometry/Extent","../../../geometry/Point"],(function(e,t,r,n,o,i,a,s,l,f,u,c,d,p,m,h,y,g,x,I){"use strict";const v=new Map;v.set("int16","esriFieldTypeSmallInteger"),v.set("int32","esriFieldTypeInteger"),v.set("int64","esriFieldTypeInteger"),v.set("float32","esriFieldTypeSingle"),v.set("float64","esriFieldTypeDouble"),v.set("text","esriFieldTypeString");const S=8;let b=function(t){function r(){var e;return(e=t.apply(this,arguments)||this).storageInfo=null,e.datasetFormat="CRF",e}e._inheritsLoose(r,t);var i=r.prototype;return i.open=function(){var t=e._asyncToGenerator((function*(e){yield this.init();const{data:t}=yield this.request(this.url+"/conf.json",{signal:null==e?void 0:e.signal});if(!this._validateHeader(t))throw new n("cloudraster:open","Invalid or unsupported conf.json.");this.datasetName=this.url.slice(this.url.lastIndexOf("/")+1);const{storageInfo:r,rasterInfo:o}=this._parseHeader(t);if("thematic"===o.dataType){const e=yield this._fetchAuxiliaryInformation();o.attributeTable=e}this._set("storageInfo",r),this._set("rasterInfo",o),this.ioConfig.retryCount=this.ioConfig.retryCount||0}));function r(e){return t.apply(this,arguments)}return r}(),i.fetchRawTile=function(){var t=e._asyncToGenerator((function*(e,t,r,n={}){const o=this.rasterInfo.storageInfo.maximumPyramidLevel-e;if(o<0)return null;const i=this._buildCacheFilePath(o,t,r,n.multidimensionalDefinition),a=this._getIndexRecordFromBundle(t,r),s=yield this.request(i,{range:{from:0,to:this.storageInfo.headerSize-1},responseType:"array-buffer",signal:n.signal});if(!s)return null;const l=new Uint8Array(s.data),f=this._getTileEndAndContentType(l,a);if(0===f.recordSize)return null;const u=yield this.request(i,{range:{from:f.position,to:f.position+f.recordSize},responseType:"array-buffer",signal:n.signal});return u?this.decodePixelBlock(u.data,{width:this.rasterInfo.storageInfo.tileInfo.size[0],height:this.rasterInfo.storageInfo.tileInfo.size[1],planes:null,pixelType:null}):null}));function r(e,r,n){return t.apply(this,arguments)}return r}(),i._validateHeader=function(e){const t=["origin","extent","geodataXform","LODInfos","blockWidth","blockHeight","bandCount","pixelType","pixelSizeX","pixelSizeY","format","packetSize"];return e&&"RasterInfo"===e.type&&!t.some((t=>!e[t]))},i._parseHeader=function(e){var t,r;const n=["u1","u2","u4","u8","s8","u16","s16","u32","s32","f32","f64"][e.pixelType],{bandCount:o,histograms:i,colormap:a,blockWidth:s,blockHeight:l,firstPyramidLevel:f,maximumPyramidLevel:p}=e,m=e.statistics&&e.statistics.map((e=>({min:e.min,max:e.max,avg:e.mean,stddev:e.standardDeviation,median:e.median,mode:e.mode}))),h=e.extent.spatialReference,y=null==(t=e.geodataXform)?void 0:t.spatialReference,v=new g(null!=h&&h.wkid||null!=h&&h.wkt?h:y);let b=new x({xmin:e.extent.xmin,ymin:e.extent.ymin,xmax:e.extent.xmax,ymax:e.extent.ymax,spatialReference:v});const T=new I({x:e.pixelSizeX,y:e.pixelSizeY,spatialReference:v}),_=Math.round((b.xmax-b.xmin)/T.x),w=Math.round((b.ymax-b.ymin)/T.y),k=this._parseTransform(e.geodataXform),z=k?b:null;k&&(b=k.forwardTransform(b),T.x=(b.xmax-b.xmin)/_,T.y=(b.ymax-b.ymin)/w);const C=null!=(r=e.properties)?r:{},R=e.format.toLowerCase().replace("cache/",""),F=new I(e.origin.x,e.origin.y,v);let P,H,L,B;if(a&&a.colors)for(P=[],H=0;H<a.colors.length;H++)L=a.colors[H],B=a.values?a.values[H]:H,P.push([B,255&L,L<<16>>>24,L<<8>>>24,L>>>24]);const D=e.LODInfos,M=[];for(H=0;H<D.levels.length;H++)M.push({level:D.levels[H],resolution:D.resolutions[H],scale:96/.0254*D.resolutions[H]});const O=new d({dpi:96,lods:M,format:R,origin:F,size:[s,l],spatialReference:v}),$={recordSize:S,packetSize:e.packetSize,headerSize:e.packetSize*e.packetSize*S+64},q=[{maxCol:Math.ceil(_/s)-1,maxRow:Math.ceil(w/l)-1,minCol:0,minRow:0}];let A=2;if(p>0)for(H=0;H<p;H++)q.push({maxCol:Math.ceil(_/A/s)-1,maxRow:Math.ceil(w/A/l)-1,minCol:0,minRow:0}),A*=2;const E=e.mdInfo;return{storageInfo:$,rasterInfo:new u({width:_,height:w,pixelType:n,bandCount:o,extent:b,nativeExtent:z,transform:k,spatialReference:v,pixelSize:T,keyProperties:C,statistics:m,histograms:i,multidimensionalInfo:E,colormap:P,storageInfo:new c({blockWidth:s,blockHeight:l,pyramidBlockWidth:s,pyramidBlockHeight:l,origin:F,tileInfo:O,firstPyramidLevel:f,maximumPyramidLevel:p,blockBoundary:q})})}},i._parseTransform=function(e){var t,r;if(!h.isTransformSupported(e))throw new n("cloudraster:open","the data contains unsupported geodata transform types");const o=h.readTransform(e);if("identity"===o.type)return null;if("polynomial"!==o.type||null==(t=o.forwardCoefficients)||!t.length||null==(r=o.inverseCoefficients)||!r.length)throw new n("cloudraster:open","the data contains unsupported geodata transforms - both forward and inverse coefficients are required currently");return o},i._fetchAuxiliaryInformation=function(){var t=e._asyncToGenerator((function*(e){const t=this.request(this.url+"/conf.vat.json",{signal:e}).then((e=>e.data)).catch((()=>null)),r=this.request(this.url+"/conf.vat.dbf",{responseType:"array-buffer",signal:e}).then((e=>e.data)).catch((()=>null)),n=yield Promise.all([t,r]);let o;if(n[0]){let e=n[0].fields;const t=n[0].values;if(e&&t){e=e.map((e=>({type:"OID"===e.name?"esriFieldTypeOID":v.get(e.type),name:e.name,alias:e.alias||e.name})));const r=t.map((e=>({attributes:e})));e&&t&&(o={fields:e,features:r})}}if(!o&&n[1]){o=m.parse(n[1]).recordSet}return y.fromJSON(o)}));function r(e){return t.apply(this,arguments)}return r}(),i._buildCacheFilePath=function(e,t,r,n){const i=this.storageInfo.packetSize,a=Math.floor(t/i)*i,s=Math.floor(r/i)*i,l="R"+this._toHexString4(a)+"C"+this._toHexString4(s);let f="L";f+=e>=10?e.toString():"0"+e.toString();const{multidimensionalInfo:u}=this.rasterInfo,c=null==n?void 0:n[0];if(!o.isSome(u)||!c)return`${this.url}/_alllayers/${f}/${l}.bundle`;let d=u.variables.filter((e=>e.name===c.variableName))[0].dimensions[0].values.indexOf(c.values[0]).toString(16);const p=4-d.length;for(let o=0;o<p;o++)d="0"+d;return d="S"+d,`${this.url}/_alllayers/${c.variableName}/${d}/${f}/${l}.bundle`},i._getIndexRecordFromBundle=function(e,t){const r=this.storageInfo.packetSize,n=r*(e%r)+t%r;if(n<0)throw"Invalid level / row / col";return 20+n*this.storageInfo.recordSize+44},i._getTileEndAndContentType=function(e,t){const r=e.subarray(t,t+8);let n,o=0;for(n=0;n<5;n++)o|=(255&r[n])<<8*n;const i=0xffffffffff&o;for(o=0,n=5;n<8;n++)o|=(255&r[n])<<8*(n-5);return{position:i,recordSize:0xffffffffff&o}},i._toHexString4=function(e){let t=e.toString(16);if(4!==t.length){let e=4-t.length;for(;e-- >0;)t="0"+t}return t},r}(p);return t.__decorate([i.property({readOnly:!0})],b.prototype,"storageInfo",void 0),t.__decorate([i.property({type:String,json:{write:!0}})],b.prototype,"datasetFormat",void 0),b=t.__decorate([f.subclass("esri.layers.support.rasterDatasets.CloudRaster")],b),b}));
