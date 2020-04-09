// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry","../../../core/has","../../../core/Loadable","../../../core/maybe","../../../core/promiseUtils","../../../core/workers","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet"],(function(e,t,o,r,n,i,s,u,p,c,l,a,d,y){Object.defineProperty(t,"__esModule",{value:!0}),u.add("esri-workers-for-memory-layers",!1);var h=function(e){function t(t){var o=e.call(this,t)||this;return o.type="csv",o}return o(t,e),t.prototype.load=function(e){var t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),l.resolve(this)},t.prototype.destroy=function(){this._connection&&this._connection.close()},t.prototype.openPorts=function(){var e=this;return this.load().then((function(){return e._connection.openPorts()}))},t.prototype.queryFeatures=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)})).then((function(e){return y.fromJSON(e)}))},t.prototype.queryFeaturesJSON=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)}))},t.prototype.queryFeatureCount=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}))},t.prototype.queryObjectIds=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}))},t.prototype.queryExtent=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryExtent",e?e.toJSON():null,t)})).then((function(e){return{count:e.count,extent:s.Extent.fromJSON(e.extent)}}))},t.prototype._startWorker=function(e){return i(this,void 0,void 0,(function(){var t,o;return n(this,(function(r){switch(r.label){case 0:return t=this,[4,a.open("CSVSourceWorker",{strategy:u("esri-workers-for-memory-layers")?"dedicated":"local",signal:e})];case 1:return t._connection=r.sent(),[4,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((function(e){return e.toJSON()})),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e})];case 2:return o=r.sent(),this.locationInfo=o.locationInfo,this.sourceJSON=o.layerDefinition,this.columnDelimiter=o.columnDelimiter,[2]}}))}))},r([d.property()],t.prototype,"type",void 0),r([d.property()],t.prototype,"url",void 0),r([d.property()],t.prototype,"delimiter",void 0),r([d.property()],t.prototype,"fields",void 0),r([d.property()],t.prototype,"latitudeField",void 0),r([d.property()],t.prototype,"longitudeField",void 0),r([d.property()],t.prototype,"spatialReference",void 0),r([d.property()],t.prototype,"timeInfo",void 0),r([d.property()],t.prototype,"locationInfo",void 0),r([d.property()],t.prototype,"sourceJSON",void 0),r([d.property()],t.prototype,"columnDelimiter",void 0),t=r([d.subclass("esri.layers.graphics.sources.CSVSource")],t)}(d.declared(p));t.default=h}));