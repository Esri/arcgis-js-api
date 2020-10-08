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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../geometry","../../../core/has","../../../core/Loadable","../../../core/maybe","../../../core/promiseUtils","../../../core/workers","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet"],(function(e,t,o,r,n,i,u,s,c,a,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t){var o=e.call(this,t)||this;return o.type="csv",o}return o.__extends(t,e),t.prototype.load=function(e){var t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),s.resolve(this)},t.prototype.destroy=function(){var e;null===(e=this._connection)||void 0===e||e.close(),this._connection=null},t.prototype.openPorts=function(){var e=this;return this.load().then((function(){return e._connection.openPorts()}))},t.prototype.queryFeatures=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)})).then((function(e){return l.fromJSON(e)}))},t.prototype.queryFeaturesJSON=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)}))},t.prototype.queryFeatureCount=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)}))},t.prototype.queryObjectIds=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryObjectIds",e?e.toJSON():null,t)}))},t.prototype.queryExtent=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then((function(){return o._connection.invoke("queryExtent",e?e.toJSON():null,t)})).then((function(e){return{count:e.count,extent:r.Extent.fromJSON(e.extent)}}))},t.prototype._startWorker=function(e){return o.__awaiter(this,void 0,void 0,(function(){var t,r;return o.__generator(this,(function(o){switch(o.label){case 0:return t=this,[4,c.open("CSVSourceWorker",{strategy:n("feature-layers-workers")?"dedicated":"local",signal:e})];case 1:return t._connection=o.sent(),[4,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map((function(e){return e.toJSON()})),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:e})];case 2:return r=o.sent(),this.locationInfo=r.locationInfo,this.sourceJSON=r.layerDefinition,this.columnDelimiter=r.columnDelimiter,[2]}}))}))},o.__decorate([a.property()],t.prototype,"type",void 0),o.__decorate([a.property()],t.prototype,"url",void 0),o.__decorate([a.property()],t.prototype,"delimiter",void 0),o.__decorate([a.property()],t.prototype,"fields",void 0),o.__decorate([a.property()],t.prototype,"latitudeField",void 0),o.__decorate([a.property()],t.prototype,"longitudeField",void 0),o.__decorate([a.property()],t.prototype,"spatialReference",void 0),o.__decorate([a.property()],t.prototype,"timeInfo",void 0),o.__decorate([a.property()],t.prototype,"locationInfo",void 0),o.__decorate([a.property()],t.prototype,"sourceJSON",void 0),o.__decorate([a.property()],t.prototype,"columnDelimiter",void 0),t=o.__decorate([a.subclass("esri.layers.graphics.sources.CSVSource")],t)}(i);t.default=p}));