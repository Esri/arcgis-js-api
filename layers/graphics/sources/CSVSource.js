// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry","../../../core/has","../../../core/Loadable","../../../core/maybe","../../../core/promiseUtils","../../../core/requireUtils","../../../core/workers","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet","module"],function(e,t,o,r,n,i,s,u,c,p,l,a,d,y,h,f){Object.defineProperty(t,"__esModule",{value:!0}),u.add("esri-workers-for-memory-layers",!1);var v=function(t){function c(e){var o=t.call(this,e)||this;return o.type="csv",o}return o(c,t),c.prototype.load=function(e){var t=p.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),this.when()},c.prototype.destroy=function(){this._connection&&this._connection.close()},c.prototype.openPorts=function(){var e=this;return this.load().then(function(){return e._connection.openPorts()})},c.prototype.queryFeatures=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)}).then(function(e){return h.fromJSON(e)})},c.prototype.queryFeaturesJSON=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)})},c.prototype.queryFeatureCount=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)})},c.prototype.queryObjectIds=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryObjectIds",e?e.toJSON():null,t)})},c.prototype.queryExtent=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryExtent",e?e.toJSON():null,t)}).then(function(e){return{count:e.count,extent:s.Extent.fromJSON(e.extent)}})},c.prototype._startWorker=function(t){return i(this,void 0,void 0,function(){var o,r;return n(this,function(n){switch(n.label){case 0:return u("esri-webpack")?[4,l.create(function(t){return e(["./support/CSVSourceWorker"],t)})]:[3,2];case 1:n.sent(),n.label=2;case 2:return o=this,[4,d.open(a.getAbsMid("./support/CSVSourceWorker",e,f),{strategy:u("esri-workers-for-memory-layers")?"dedicated":"local",signal:t})];case 3:return o._connection=n.sent(),[4,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map(function(e){return e.toJSON()}),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:t})];case 4:return r=n.sent(),this.locationInfo=r.locationInfo,this.sourceJSON=r.layerDefinition,this.columnDelimiter=r.columnDelimiter,[2]}})})},r([y.property()],c.prototype,"type",void 0),r([y.property()],c.prototype,"url",void 0),r([y.property()],c.prototype,"delimiter",void 0),r([y.property()],c.prototype,"fields",void 0),r([y.property()],c.prototype,"latitudeField",void 0),r([y.property()],c.prototype,"longitudeField",void 0),r([y.property()],c.prototype,"spatialReference",void 0),r([y.property()],c.prototype,"timeInfo",void 0),r([y.property()],c.prototype,"locationInfo",void 0),r([y.property()],c.prototype,"sourceJSON",void 0),r([y.property()],c.prototype,"columnDelimiter",void 0),c=r([y.subclass("esri.layers.graphics.sources.CSVSource")],c)}(y.declared(c));t.default=v});