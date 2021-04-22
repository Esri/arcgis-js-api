/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../chunks/_rollupPluginBabelHelpers","../../../chunks/tslib.es6","../../../core/has","../../../core/maybe","../../../core/Logger","../../../core/accessorSupport/ensureType","../../../core/accessorSupport/decorators/property","../../../core/accessorSupport/decorators/subclass","../../../core/Error","../../../core/urlUtils","../../../core/uuid","../../../portal/support/resourceExtension","../../../core/promiseUtils","../../../geometry/Extent","../../../geometry","../DimensionalDefinition","../rasterFunctions/pixelUtils","./BaseRaster","../wmsUtils","./multipartParser","./wcsCapabilitiesParser","./wcsCoverageParser"],(function(e,t,i,n,s,r,o,a,l,c,d,p,u,h,f,g,v,m,w,x,y,b){"use strict";const I=["nearest neighbor","bilinear","bicubic"],C=["nearest","linear","cubic"];let $=function(t){function i(){var e;return(e=t.apply(this,arguments)||this).datasetFormat="WCSServer",e}e._inheritsLoose(i,t);var s=i.prototype;return s.open=async function(e){await this.init();const t=null==e?void 0:e.signal,i=await this._getCapabilities(t);if(this.capabilities=i,!this.version){var n;let e=null==(n=i.capabilitiesVersion)?void 0:n.slice(0,3);"2.0"===e||"1.1"===e||"1.0"===e?this.version=i.capabilitiesVersion:(e=i.supportedVersions.find((e=>"2.0.1"===e))||i.supportedVersions.find((e=>"2.0"===e.slice(0,3)))||i.supportedVersions.find((e=>"1.1"===e.slice(0,3)))||i.supportedVersions.find((e=>"1.0"===e.slice(0,3)))||"1.0.0",this.version=e)}null==this.coverageId&&(this.coverageId=i.coverages[0].id);const s=i.coverages.filter((e=>e.id===this.coverageId))[0];if(null==s)throw new l("wcsraster-open",`the coverageId ${this.coverageId} does not exist in capabilities`);const r=await this._describeCoverage(t);this.coverageInfo=r[0],"2.0"===this.version.slice(0,3)&&(this.coverageInfo.lonLatEnvelope=s.lonLatEnvelope,this.coverageInfo.supportedInterpolations=b.standardizeInterpolations(i.supportedInterpolations)),this.datasetName=this.coverageInfo.title;const{rasterInfo:o}=this.coverageInfo;if(this.createRemoteDatasetStorageInfo(o,512,512),this._set("rasterInfo",o),null==o.spatialReference)throw new l("wcsraster-open",`coverage without spatial referernce is not supported: ${this.coverageId}`);const{pixelType:a,bandCount:c}=await this._getPixelTypeAndBandCount(t);o.pixelType=a,1===o.bandCount&&c>1&&(o.bandCount=c),this.updateTileInfo()},s.fetchRawTile=async function(e,t,i,n={}){if(this.isBlockOutside(e,t,i))return null;const{nativePixelSize:s,spatialReference:r}=this.rasterInfo,o=2**e,a=s.x*o,c=s.y*o,{blockWidth:d,blockHeight:p}=this.getBlockWidthHeight(e),{origin:u}=this.rasterInfo.storageInfo.tileInfo,h=this.getTileExtent({x:a,y:c},t,i,u,r,[d,p]),f=this.rasterInfo.extent,g=h.xmax>f.xmax||h.ymin<f.ymin;let m=h,w=d,x=p;if(g&&(m=h.clone().intersection(f),w=Math.floor((m.xmax-m.xmin)/a),x=Math.floor((m.ymax-m.ymin)/c),m.xmax=m.xmin+a*w,m.ymin=m.ymax-c*x),w<=1||x<=1)return null;const y=await this._getCoverage(m,w,x,o,n);if(!y)return null;let b=await this.decodePixelBlock(y,{width:w,height:x,planes:null,pixelType:null});if(b&&(b.width!==w||b.height!==x))throw new l("wcsraster-fetch",`the reponse has unexpected dimension width: ${b.width}, height: {pixelBlock.height}`);return g&&(b=v.clip(b,{x:0,y:0},{width:p,height:p})),b},s._getCapabilities=async function(e){const t={service:"WCS",request:"GetCapabilities"};this.version&&(t.version=this.version,t.acceptVersions=this.version);try{const{data:i}=await this.request(this.url,{query:t,responseType:"xml",signal:e});return y.parseCapabilities(i)}catch(i){if(!u.isAbortError(i))throw new l("wcslayer:open","wcs capabilities is not valid or supported");throw i}},s._describeCoverage=async function(e){const t={service:"WCS",request:"DescribeCoverage",version:this.version},i=this.version.slice(0,3);"1.0"===i?t.coverage=this.coverageId:"1.1"===i?t.identifiers=this.coverageId:"2.0"===i&&(t.coverageId=this.coverageId);try{const{data:i}=await this.request(this.url,{query:t,responseType:"xml",signal:e});return b.parseCoverages(i,this.version)}catch(n){if(!u.isAbortError(n))throw new l("wcslayer:open","wcs coverage description is not valid or supported");throw n}},s._getPixelTypeAndBandCount=async function(e){const{pixelSize:t,extent:i,multidimensionalInfo:s}=this.rasterInfo,r=i.center,o=new h({xmin:r.x-t.x,xmax:r.x+t.x,ymin:r.y-t.y,ymax:r.y+t.y,spatialReference:i.spatialReference});let a;if(n.isSome(s)){const e=s.variables[0];a=[],e.dimensions.forEach((t=>{a.push(new g({variableName:e.name,dimensionName:t.name,values:t.hasRegularIntervals?t.extent[0]:t.values[0],isSlice:!0}))}))}const c=await this._getCoverage(o,2,2,1,{multidimensionalDefinition:a,signal:n.unwrap(e)});if(!c)throw new l("wcsraster-open","unable to determine pixel type");const d=await this.decodePixelBlock(c,{width:2,height:2,planes:null,pixelType:null});return{pixelType:d.pixelType,bandCount:d.getPlaneCount()}},s._getCoverage=async function(e,t,i,n,s){const{coverageDescription:r}=this.coverageInfo,{version:o}=r,a="2.0"===r.version?this._getCoverage201Parameters(e,t,i,n,s,r):"1.1"===r.version?this._getCoverage110Parameters(e,t,i,s,r):this._getCoverage100Parameters(e,t,i,s),c="2.0"===r.version?await this.request(this._constructWCS201Url(a),{signal:s.signal,responseType:"array-buffer"}):await this.request(this.url,{query:a,signal:s.signal,responseType:"array-buffer"});if("1.0"===o)return c.data;const d=x.parse(c);if(d.isMultipart&&d.data){const e=d.data.filter((e=>{var t;return(null==(t=e.contentType)?void 0:t.toLowerCase().includes("image"))&&null!=e.contentData}))[0];return null==e?void 0:e.contentData}if(this.ioConfig.allowAnyMediaType)return c.data;throw new l("wcsraster:getcoverage","response is not a valid coverage, multipart response is expected")},s._getInterpolationIndex=function(e){return-1===this.coverageInfo.supportedInterpolations.indexOf(e)||"nearest"===e?0:"bilinear"===e?1:"cubic"===e?2:0},s._getCoverage100Parameters=function(e,t,i,n){const s=`${e.xmin},${e.ymin},${e.xmax},${e.ymax}`,r=e.spatialReference.wkid,o=(this.coverageInfo.supportedFormats||[]).find((e=>e.toLowerCase().indexOf("tiff")>-1))||"GEOTIFF",{bandIds:a,interpolation:l}=n,c=this._getInterpolationIndex(l),d=a?a.map((e=>this.coverageInfo.bandNames[e])):null,p=I[c];return{service:"WCS",request:"GetCoverage",version:this.version,coverage:this.coverageId,format:o,crs:`EPSG:${r}`,bbox:s,width:t,height:i,interpolation:p,band:null==d?void 0:d.join(",")}},s._getCoverage110Parameters=function(e,t,i,n,s){var r;const{multidimensionalDefinition:o,bandIds:a,interpolation:l}=n,c=e.spatialReference.wkid,d=`urn:ogc:def:crs:EPSG::${c}`,p=(this.coverageInfo.supportedFormats||[]).find((e=>e.toLowerCase().indexOf("tiff")>-1))||"image/tiff",u=this._getInterpolationIndex(l),h=C[u],f=null==l||0===(null==(r=this.coverageInfo.supportedInterpolations)?void 0:r.indexOf(l)),g=s.domain.spatialDomain,v=g.origin.x<=g.envelope.xmin&&g.origin.y<=g.envelope.ymin,m=e.width/t,x=e.height/i*(v?1:-1),y=v?[e.xmin,e.ymin]:[e.xmin,e.ymax],b=g.useEPSGAxis&&w.coordsReversedForWKID(c),I=b?`${y[1]},${y[0]}`:`${y[0]},${y[1]}`,$=b?`${x},0,0,${m}`:`${m},0,0,${x}`,S=m/2,_=e.xmin+S,T=e.xmax-S,O=Math.abs(x)/2,P=e.ymin+O,E=e.ymax-O,L=b?`${P},${_},${E},${T},${d}`:`${_},${P},${T},${E},${d}`,j=s.range.filter((e=>e.axis.some((e=>e.identifier.toLowerCase().indexOf("band")>-1))))[0];let R,k=j&&h&&a?f?`${j.identifier}[${j.axis[0].identifier}[${a.join(",")}]]`:`${j.identifier}:${h}[${j.axis[0].identifier}[${a.join(",")}]]`:null;if(null!=o&&o.length)for(let w=0;w<o.length;w++){let e=o[w].values;const t=o[w].dimensionName.toLowerCase(),i=o[w].variableName.toLowerCase();if(e.length>0)if(e[0]instanceof Array&&(e=e[0]),"stdtime"===t)R=e.map((e=>this._convertToISOTime(e))).join(",");else{const n=s.range.filter((e=>e.identifier.toLowerCase()===i))[0];if(n){const i=n.axis.filter((e=>e.identifier.toLowerCase()===t))[0];i&&(k=f?n.identifier+"["+i.identifier+"["+e.join(",")+"]]":n.identifier+":"+h+"["+i.identifier+"["+e.join(",")+"]]")}}}return{service:"WCS",request:"GetCoverage",version:this.version,identifier:this.coverageId,format:p,crs:`EPSG:${c}`,boundingbox:L,gridCS:"urn:ogc:def:cs:OGC:0.0:Grid2dSquareCS",gridType:"urn:ogc:def:method:WCS:1.1:2dGridIn2dCrs",gridOrigin:I,gridOffsets:$,gridBaseCRS:d,timeSequence:R,rangeSubset:k}},s._convertToISOTime=function(e,t=!1){return(t?new Date(24*(e-25569)*60*60*1e3):new Date(e)).toISOString()},s._getCoverage201Parameters=function(e,t,i,n,s,r){const{multidimensionalDefinition:o,interpolation:a}=s,l=this._getInterpolationIndex(a);let c=null;const{supportedInterpolations:d}=this.capabilities;if(null!=d&&d.length)switch(l){case 0:c=d.find((e=>e.includes("nearest")));break;case 1:c=d.find((e=>e.includes("linear")));break;case 2:c=d.find((e=>e.includes("cubic")||e.includes("quadratic")))}const p=(this.coverageInfo.supportedFormats||[]).find((e=>e.toLowerCase().indexOf("tiff")>-1))||"image/tiff",{bandNames:u}=this.coverageInfo,{boundedBy:h,domainSet:f,rangeType:g}=r,v=h.isEastFirst?0:1,m=1-v,{axisLabels:w}=h,x=w[v],y=w[m],b=`http://www.opengis.net/def/crs/EPSG/0/${e.spatialReference.wkid}`,I=b,C=[];C.push(`${x}(${e.xmin},${e.xmax})`),C.push(`${y}(${e.ymin},${e.ymax})`);const $=[];if(w.length>2)for(let E=2;E<w.length;E++){const e=f.origin[E];if(w[E].toLowerCase().indexOf("time")>-1){let t=e.toString();h.uomLabels[E].toLowerCase().indexOf("ole")>-1&&($.push(w[E]),t=this._convertToISOTime(e,!0)),C.push(w[E]+",http://www.opengis.net("+t+")")}else C.push(w[E]+",http://www.opengis.net("+e+")")}let S=null;if(null!=o&&o.length){const e=[];g.forEach((t=>t.forEach((t=>e.push(t.name)))));const t=[];for(let i=0;i<o.length;i++){const n=w.find((e=>e===o[i].dimensionName)),s=e.find((e=>e===o[i].variableName));if(-1===t.indexOf(s)&&t.push(s),n){let e=o[i].values;if(e.length>0){Array.isArray(e[0])&&(e=e[0]);let t="";t=n.toLowerCase().indexOf("time")>-1?e.map((e=>this._convertToISOTime(e))).join(","):e.join(",");const i=C.findIndex((e=>0===e.indexOf(n+",http://www.opengis.net")));-1===i&&C.push(n+",http://www.opengis.net("+t+")"),-1!==i&&-1===C[i].indexOf("("+t+")")&&C.splice(i,1,n+",http://www.opengis.net("+t+")")}}}t.length&&(S=t.join(","))}else if(null!=u&&u.length){S=(s.bandIds?s.bandIds.map((e=>u[e])):u).join(",")}const _=C.join("&subset="),T=!(r.domainSet.axisLabels.join("")===r.boundedBy.axisLabels.join(""))&&!1!==this.ioConfig.allowScaleFactor,O=T?null:`${x}(${t}),${y}(${i})`,P=T?1/n:null;return{service:"WCS",request:"GetCoverage",version:this.version,coverageId:this.coverageId,rangesubset:S,interpolation:c,scaleSize:O,scaleFactor:P,subset:_,format:p,mediaType:this.ioConfig.allowAnyMediaType?null:"multipart/related",outputcrs:b,subsettingcrs:I}},s._constructWCS201Url=function(e){const t={...this.ioConfig.customFetchParameters,...e},i=[];Object.keys(t).forEach((e=>{const n=t[e];null!=n&&("subset"===e?n.split("&subset=").forEach((e=>{e&&i.push(`subset=${encodeURIComponent(e)}`)})):i.push(`${e}=${encodeURIComponent(n)}`))}));return`${encodeURI(this.url)}?${i.join("&")}`},i}(m);return t.__decorate([o.property({type:String,json:{write:!0}})],$.prototype,"datasetFormat",void 0),t.__decorate([o.property()],$.prototype,"tileType",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],$.prototype,"version",void 0),t.__decorate([o.property({type:String,json:{write:!0}})],$.prototype,"coverageId",void 0),$=t.__decorate([a.subclass("esri.layers.support.rasterDatasets.ImageServerRaster")],$),$}));
