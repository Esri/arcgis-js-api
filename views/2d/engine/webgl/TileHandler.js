// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","module","../../../../core/Error","../../../../core/promiseUtils","../../../../core/promiseUtils","../../../../core/kebabDictionary","../../../../core/workers/workers","../../../../core/requireUtils","../../../../tasks/QueryTask","../../../../tasks/support/Query","./TileData"],function(e,t,r,n,i,o,s,a,u,c,l,p){var y=s({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),f=function(){function t(e,t,r,n,i,o){this._parent=e,this._tilecoordRange=n,this._tileCoordRatio=i,this._quantizationFactor=o,this._wglFeatureView=t}return t.prototype.start=function(){var t=this;return a.open(this,u.getAbsMid("./WorkerTileHandler",e,r),!0).then(function(e){t._connection=e})},t.prototype.configure=function(e,t){var r=this._parent.layer;this._queryTask=new c(r.parsedUrl.path),this._returnCentroid=this._getReturnCentroid(r.renderer);var n=r.createQuery();return this._connection.invoke("configure",{renderer:e.toJSON(),spatialReference:this._parent.view.spatialReference.toJSON(),capabilities:r.capabilities,url:r.parsedUrl.path,geometryType:y.toJSON(r.geometryType),query:n.toJSON(),outFields:n.outFields,objectIdField:r.objectIdField,tileCoordRange:this._tilecoordRange,tileCoordRatio:this._tileCoordRatio,returnCentroid:this._returnCentroid,quantizationFactor:this._quantizationFactor,pixelRatio:window.devicePixelRatio||1,processing:t&&t.toWorker()||null,queryInMainThread:!0})},t.prototype.stop=function(){this._connection&&(this._connection.close(),this._connection=null)},t.prototype.registerTile=function(e){return this._connection.invoke("registerTile",{key:e.id}).then(function(e){return e&&e.displayData&&e.bufferData?p.deserialize(e):null})},t.prototype.removeTile=function(e){this._connection.invoke("unregisterTile",{key:e.id})},t.prototype.getFeatures=function(e){return this._connection.invoke("getFeatures",{featureIds:e})},t.prototype.getMaterialItems=function(e){var t=e.items;t&&0!==t.length||i.resolve({data:{items:[]},buffers:[]});var r=this._wglFeatureView.textureManager,n=[];return t.forEach(function(e){n.push(r.rasterizeItem(e.symbol,e.glyphIds))}),o.all(n).then(function(e){var t=e.map(function(e,t){return{id:t,mosaicItem:e}});return{data:{items:t},buffers:[]}})},t.prototype.executeProcessing=function(e){var t=this;return i.resolve().then(function(){var r=t._parent.layer.processing;if(!r)return i.resolve({data:e.featureSet});var o=r.process(JSON.parse(e.featureSet),l.fromJSON(e.query),r.options);return o?o:i.reject(new n("FeatureLayer","invalid processing.process() method, returns nothing"))}).then(function(e){return{data:{featureSet:JSON.stringify(e)},buffers:[]}})},t.prototype.queryFeatures=function(e){var t=this,r=l.fromJSON(e.query),o=this._queryTask,s=this._parent.layer,a=s.source&&"esri.layers.graphics.sources.CSVSource"===s.source.declaredClass;r.returnGeometry=!this._returnCentroid||s.renderer.backgroundFillSymbol,r.returnJSON=!0,r.returnCentroid=this._returnCentroid;var u=a?s.source.queryFeaturesJSON(r):o.rawExecute(r).then(function(e){return e.data});return u.then(function(e){var o=t._parent.layer.processing;if(!o)return e;var s=o.process(e,r,o.options);return s?s:i.reject(new n("FeatureLayer","invalid processing.process() method, returns nothing"))}).then(function(e){return{data:{featureSet:JSON.stringify(e)},buffers:[]}})},t.prototype._getReturnCentroid=function(e){function t(e){if(!e)return!1;var t=e.type;return"simple-marker"===t||"picture-marker"===t||"text"===t}if("polygon"!==this._parent.layer.geometryType)return!1;switch(e.type){case"simple":return t(e.symbol);case"unique-value":return t(e.defaultSymbol)||e.uniqueValueInfos.some(function(e){return t(e.symbol)});case"class-breaks":return t(e.defaultSymbol)||e.classBreakInfos.some(function(e){return t(e.symbol)});default:return!0}},t}();return f});