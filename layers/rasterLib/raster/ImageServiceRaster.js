// COPYRIGHT © 2021 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/Deferred","dojo/_base/array","dojo/_base/config","dojo/_base/json","dojo/sniff","dojo/DeferredList","dojo/when","../../../kernel","../../../Evented","../../../request","../../../geometry/Extent","../../../geometry/Point","../../../SpatialReference","../../../WKIDUnitConversion","../../../deferredUtils","../../../urlUtils","../../MosaicRule","../../ImageServiceParameters","../../PixelBlock","./RasterInfo","./BasicRaster","../../rasterFormats/rasterCodec","../tile/RasterTileInfo"],(function(e,i,n,t,a,r,s,o,l,c,u,m,f,h,d,p,v,g,I,_,b,x,y,R,P,k){var j=i([R],{declaredClass:"esri.layers.rasterLib.raster.ImageServiceRaster",sourceType:"ImageService",constructor:function(e){e&&(this._imageServiceParams=e.imageServiceParameters,this._commonReqParams=e._commonReqParams,this._imageServiceParams||(this._imageServiceParams={interpolation:e.interpolation,pixelType:e.pixelType,format:e.format||"lerc",compressionQuality:e.compressionQuality,bandIds:e.bandIds,noDataInterpretation:e.noDataInterpretation,adjustAspectRatio:e.adjustAspectRatio,mosaicRule:e.mosaicRule,renderingRule:e.interpolation}))},open:function(){var e=new t;if(this.serviceInfo&&this.rasterInfo)return this.loaded=!0,this._findCredential(),this.setFetchParameters(this._imageServiceParams),e.resolve(this),e.promise;var i=this.serviceInfo||this._generateServiceInfo(this._imageServiceParams&&this._imageServiceParams.renderingRule),a=n.hitch(this,(function(i){this._fixServiceInfo(i),this.serviceInfo=i,this._findCredential();var t=this._parseRasterInfo(i),a={};i.defaultMosaicMethod?(a.method=i.defaultMosaicMethod,a.operation=i.mosaicOperator,a.sortField=i.sortField,a.sortValue=i.sortValue):a.method=_.METHOD_NONE,this.serviceInfo.defaultMosaicRule=new _(a),this.serviceInfo.defaultMosaicRule.ascending=!0;var r=this._getColormap(this),s=this._getHistograms(this),o=this._getRasterAttributeTable(this),c=this._getKeyProperties(this),u=this._getMultidimensionalInfo(),m=this._getSlices();new l([r,s,o,c,u,m]).then(n.hitch(this,(function(i){i[0][0]&&(t.colormap=i[0][1]),i[1][0]&&(t.histograms=i[1][1]),i[2][0]&&(t.vat=i[2][1]),i[3][0]&&(t.keyProperties=i[3][1]),i[4][0]&&(t.multidimensionalInfo=i[4][1]),this._slices=i[5][0]?i[5][1]:null,t.keyProperties&&t.keyProperties.DataType&&(this.dataType=t.keyProperties.DataType),this.loaded=!0,this.rasterInfo=t,this.setFetchParameters(this._imageServiceParams),e.resolve(this)})))})),r=n.hitch(this,(function(i){this.loaded=!0,e.reject(i)}));return c(i,a,r),e.promise},setFetchParameters:function(e,i){if(i)this.imageServiceParams=e;else{var n=this.imageServiceParams;n&&e?Object.keys(e).forEach((function(i){n[i]=e[i]})):this.imageServiceParams=e}this._constructGetImageParams(),this._getRasterIdentifier(!0)},read:function(e){if(e.pixelBlock||e.texture){var i=new t;return i.resolve(e),i.promise}if(!1===e.virtual&&this.tileInfo&&!this.tileInfo.virtual)return this.readTile(e);if(this._slices){var a=this._getSliceId();if(null==a)return(i=new t).resolve(e),i.promise}var r=e.extent,o=r.spatialReference.wkid||s.toJson(r.spatialReference.toJson(!1)),l=e.timeExtent?e.timeExtent.toJson().join(","):null,c=this.url+"/exportImage",u={};this._slices&&(u.sliceid=a),this.disableClientCaching&&(u._ts=(new Date).getTime());var m=n.mixin({},this._commonReqParams,{bbox:r.xmin+","+r.ymin+","+r.xmax+","+r.ymax,imageSR:o,bboxSR:o,size:e.width+","+e.height,time:l},u),f={width:e.width,height:e.height,planes:null,pixelType:null,format:null,decodeFunc:null,isPoint:!1};return this._requestPixels({url:c,payload:m,decodeParams:f,tileOptions:e})},readTile:function(e){var i=this.tileBoundary&&this.tileBoundary[e.level];if(i&&(i.minRow>e.row||i.maxRow<e.row||i.minCol>e.col||i.maxCol<e.col)){var n=new t;return n.resolve(e),n.promise}if(this._slices){var a=this._getSliceId();if(null==a)return(n=new t).resolve(e),n.promise}var r=this.url+"/tile/"+e.level+"/"+e.row+"/"+e.col,s={width:this.tileInfo.cols,height:this.tileInfo.rows,planes:null,pixelType:null,format:null,decodeFunc:null,isPoint:"elevation"===e.tileType.toLowerCase()},o=this._slices?"sliceid="+a+"&":"";return o=this.disableClientCaching?"_ts= "+(new Date).getTime():o.replace(/&$/,""),this._requestPixels({url:r+(o.length>0?"?"+o:""),payload:{},decodeParams:s,tileOptions:e})},toJson:function(){return{url:this.url,tileInfo:this.tileInfo,rasterInfo:this.rasterInfo,serviceInfo:this.serviceInfo,sourceType:this.sourceType,_commonReqParams:this._commonReqParams,_rasterId:this._rasterId}},_getSliceId:function(){var e=n.clone(this._imageServiceParams.multidimensionalDefinition),i=n.clone(this._imageServiceParams.time);if(null==this._slices||null==i&&(null==e||0===e.length))return 0;var t=e||this.defaultMultidimensionalDefinition,a=t[0].variableName,r=null;if(null==(t=this._getAllDimensionDefinition(t,a).definition)||0===t.length)return null;if(i&&this.serviceInfo.timeInfo){var s;if(null==i[1]||i[1]===i[0])s=i[0];else{var o=this.serviceInfo.timeInfo.startTimeField,l=this.rasterInfo.multidimensionalInfo.variables.find((function(e){return e.name===a})).dimensions.find((function(e){return e.name===o})).values.filter((function(e){return Array.isArray(e)?Math.max(e[0],i[0])<Math.min(e[1],i[1]):e>=i[0]&&e<=i[1]}));s=l.sort((function(e,n){return e=Array.isArray(e)?e[1]:e,n=Array.isArray(n)?e[1]:n,Math.abs(i[1]-e)-Math.abs(i[1]-n)}))[0]||[i[1]]}if(!t.some((function(e){return e.dimensionName===o?(e.values[0]=s,!0):e.dimensionName?void 0:(e.dimensionName=o,e.isSlice=!0,e.values=[s],!0)}))){var c={variableName:a,dimensionName:o,isSlice:!0,values:[s]};t.push(c)}}for(var u=0;u<this._slices.length;u++){var m=this._slices[u].multidimensionalDefinition;if(m.length===t.length&&!m.some((function(e){var i=t.filter((function(i){return e.variableName===i.variableName&&i.dimensionName===e.dimensionName}))[0];return!i||(Array.isArray(e.values[0])?e.values[0][0]:e.values[0])!==(Array.isArray(i.values[0])?i.values[0][0]:i.values[0])}))){r=u;break}}return r},_getAllDimensionDefinition:function(e,i){var n=e.map((function(e){return e.dimensionName})),t=!1;return this.rasterInfo.multidimensionalInfo.variables.forEach((function(a){a.name===i&&(a.dimensions.length===e.length&&n[0]||(a.dimensions.forEach((function(t){n.indexOf(t.name)<0&&(n[0]?e.push({variableName:i,dimensionName:t.name,values:[t.values[0]]}):(e[0].dimensionName=t.name,e[0].values=[t.values[0]],t[0]=t.name))})),t=!0))}),this),{defChanged:t,definition:e}},_generateServiceInfo:function(e){var i=this.url,n=new t(g._dfdCanceller);return n._pendingDfd=f({url:i,content:{f:"json",renderingRule:e?s.toJson(e.toJson()):null},handleAs:"json",callbackParamName:"callback"}),n._pendingDfd.then((function(e){n.callback(e)}),(function(e){n.errback(e)})),n},_fixServiceInfo:function(e){var i=e.spatialReference.wkid;e.tileInfo&&0===e.extent.xmin&&360===e.extent.xmax&&i&&null==v[i]&&(e.tileInfo.applyGCS360Transform=!0)},_parseRasterInfo:function(e){var i,n,t=new y;if(t.bandCount=e.bandCount,t.extent=new h(e.fullExtent),t.spatialReference=e.spatialReference,t.pixelType=e.pixelType,t.width=Math.floor((e.fullExtent.xmax-e.fullExtent.xmin)/e.pixelSizeX+.5),t.height=Math.floor((e.fullExtent.ymax-e.fullExtent.ymin)/e.pixelSizeY+.5),t.cellSize=new d({x:e.pixelSizeX,y:e.pixelSizeY,spatialReference:e.spatialReference}),e.minValues&&e.minValues.length>0&&e.maxValues&&e.stdvValues&&e.meanValues){for(i=[],n=0;n<e.minValues.length;n++)i.push({min:e.minValues[n],max:e.maxValues[n],mean:e.meanValues[n],stddev:e.stdvValues[n]});e.bandCount!==i.length&&(i=null)}if(this.dataType=e.serviceDataType?e.serviceDataType.replace("esriImageServiceDataType",""):"Generic",t.statistics=i,e.objectIdField&&e.fields&&(t.catalogInfo={objectIdField:e.objectIdField,fields:e.fields}),t.timeInfo=e.timeInfo,e.tileInfo){this.tileInfo=new k(e.tileInfo),this.tileInfo.tileType=e.cacheType||"Map",t.tileInfo=this.tileInfo;var a=t.extent,r=this.tileInfo.origin,s=this.tileInfo.cols,o=this.tileInfo.rows;this.tileBoundary=this.tileInfo.lods.map((function(e){return{minCol:Math.floor((a.xmin-r.x+.1*e.resolution)/s/e.resolution),maxCol:Math.floor((a.xmax-r.x-.1*e.resolution)/s/e.resolution),minRow:Math.floor((r.y-a.ymax+.1*e.resolution)/o/e.resolution),maxRow:Math.floor((r.y-a.ymin-.1*e.resolution)/o/e.resolution)}}))}return t},_getColormap:function(e){var i=this.url+"/colormap",n=new t(g._dfdCanceller),a=this.serviceInfo.hasColormap||this.rasterInfo&&this.rasterInfo.hasColormap;return this.serviceInfo.currentVersion>10&&a?(n._pendingDfd=f({url:i,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),n._pendingDfd.then((function(e){n.callback(e.colormap)}),(function(e){n.errback(e)}))):n.callback(null),n},_getHistograms:function(e){var i=this.url+"/histograms",n=new t(g._dfdCanceller),a={f:"json"},r=this.serviceInfo.hasHistograms||this.rasterInfo&&this.rasterInfo.hasHistograms;return e&&e.renderingRule&&(a.renderingRule=s.toJson(e.renderingRule.toJson()),r=!0),this.serviceInfo.currentVersion>10&&r?(n._pendingDfd=f({url:i,content:a,handleAs:"json",callbackParamName:"callback"}),n._pendingDfd.then((function(e){n.callback(e.histograms)}),(function(e){n.errback(e)}))):n.callback(null),n},_getRasterAttributeTable:function(e){var i=this.url+"/rasterAttributeTable",n=new t(g._dfdCanceller),a={f:"json"},r=this.serviceInfo.hasRasterAttributeTable;return e&&e.renderingRule&&(a.renderingRule=s.toJson(e.renderingRule.toJson()),r=!0),this.serviceInfo.currentVersion>10&&r?(n._pendingDfd=f({url:i,content:a,handleAs:"json",callbackParamName:"callback"}),n._pendingDfd.then((function(e){n.callback(e)}),(function(e){n.errback(e)}))):n.callback(null),n},_getKeyProperties:function(e){var i=this.url+"/keyProperties",n=new t(g._dfdCanceller),a={f:"json"};return e&&e.renderingRule&&(a.renderingRule=s.toJson(e.renderingRule.toJson())),this.serviceInfo.currentVersion>10?(n._pendingDfd=f({url:i,content:a,handleAs:"json",callbackParamName:"callback"}),n._pendingDfd.then((function(e){n.callback(e)}),(function(e){n.errback(e)}))):n.callback(null),n},_getMultidimensionalInfo:function(){var e=this.url+"/multidimensionalInfo",i=new t(g._dfdCanceller);return this.serviceInfo.currentVersion>=10.3&&this.serviceInfo.hasMultidimensions?(i._pendingDfd=f({url:e,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),i._pendingDfd.then(n.hitch(this,(function(e){i.callback(e.multidimensionalInfo)})),(function(e){i.errback(e)}))):i.callback(null),i},_getSlices:function(){var e=this.url+"/slices",i=new t(g._dfdCanceller);return this.serviceInfo.hasMultidimensions?(i._pendingDfd=f({url:e,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}),i._pendingDfd.then(n.hitch(this,(function(e){i.callback(e.slices)})),(function(e){i.errback(e)}))):i.callback(null),i},_initializationFailed:function(){},_constructGetImageParams:function(){var e=this.imageServiceParams||{},i=n.mixin({},this._query,{f:"image",interpolation:e.interpolation,pixelType:e.pixelType,format:e.format||"lerc",compressionQuality:e.compressionQuality,bandIds:e.bandIds?e.bandIds.join(","):null,noData:null!=e.noData?e.noData.join(","):null,noDataInterpretation:e.noDataInterpretation,adjustAspectRatio:null==e.adjustAspectRatio?null:e.adjustAspectRatio,mosaicRule:e.mosaicRule?s.toJson(e.mosaicRule.toJson()):null,renderingRule:e.renderingRule?s.toJson(e.renderingRule.toJson()):null,token:this.credential&&this.credential.token||null});"lerc"===i.format.toLowerCase()?(i.compressionTolerance=e.compressionTolerance,this.serviceInfo.currentVersion>=10.5&&(i.lercVersion=e.lercVersion||2)):"tiff"===i.format.toLowerCase()?i.compression=e.compression:["jpg","jpeg","jpg","jpgpng"].indexOf(i.format.toLowerCase())>-1&&(i.compression=e.compression),this._commonReqParams=i},_getRasterIdentifier:function(e){if(this._rasterId)return this._rasterId;var i=this.url.replace("http:","").replace("https:",""),n=[],t=this.imageServiceParams||{};n.push(i),n.push(t.interpolation),n.push(t.pixelType),n.push(t.compressionQuality),n.push(t.bandIds?t.bandIds.join(","):""),n.push(t.mosaicRule?s.toJson(t.mosaicRule.toJson()):""),n.push(t.renderingRule?s.toJson(t.renderingRule.toJson()):"");var a=n.join("|");return this._rasterId=this._computeSignature(a),this._rasterId},_wrapExtent:function(e){var i,n=e.spatialReference._getInfo();if(n){var t=n.valid[0],a=n.valid[1];(e.xmin<t-this.resolution.x||e.xmax>a+this.resolution.y)&&(i=new h((e.xmin-t)%(a-t),e.ymin,(e.xmax-a)%(a-t),e.ymax,e.spatialReference)).xmax<i.xmin&&(i=null)}return i||e}});return o("extend-esri")&&n.setObject("layers.rasterLib.raster.ImageServiceRaster",j,u),j}));