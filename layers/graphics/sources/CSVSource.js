// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../geometry","../../../core/Accessor","../../../core/has","../../../core/Loadable","../../../core/maybe","../../../core/promiseUtils","../../../core/requireUtils","../../../core/workers","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet","module"],function(e,t,o,r,n,i,s,u,c,p,l,a,d,y,f,h,v){Object.defineProperty(t,"__esModule",{value:!0}),c.add("esri-workers-for-memory-layers",!1);var m=function(t){function u(e){var o=t.call(this,e)||this;return o.type="csv",o}return o(u,t),u.prototype.load=function(e){var t=l.isSome(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),this.when()},u.prototype.destroy=function(){this._connection&&this._connection.close()},u.prototype.openPorts=function(){var e=this;return this.load().then(function(){return e._connection.openPorts()})},u.prototype.queryFeatures=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)}).then(function(e){return h.fromJSON(e)})},u.prototype.queryFeaturesJSON=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatures",e?e.toJSON():null,t)})},u.prototype.queryFeatureCount=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryFeatureCount",e?e.toJSON():null,t)})},u.prototype.queryObjectIds=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryObjectIds",e?e.toJSON():null,t)})},u.prototype.queryExtent=function(e,t){var o=this;return void 0===t&&(t={}),this.load(t).then(function(){return o._connection.invoke("queryExtent",e?e.toJSON():null,t)}).then(function(e){return{count:e.count,extent:s.Extent.fromJSON(e.extent)}})},u.prototype._startWorker=function(t){return i(this,void 0,void 0,function(){var o,r;return n(this,function(n){switch(n.label){case 0:return c("esri-webpack")?[4,a.create(function(t){return e(["./support/CSVSourceWorker"],t)})]:[3,2];case 1:n.sent(),n.label=2;case 2:return o=this,[4,y.open(d.getAbsMid("./support/CSVSourceWorker",e,v),{strategy:c("esri-workers-for-memory-layers")?"dedicated":"local",signal:t})];case 3:return o._connection=n.sent(),[4,this._connection.invoke("load",{url:this.url,parsing:{columnDelimiter:this.delimiter,fields:this.fields&&this.fields.map(function(e){return e.toJSON()}),latitudeField:this.latitudeField,longitudeField:this.longitudeField,spatialReference:this.spatialReference&&this.spatialReference.toJSON(),timeInfo:this.timeInfo&&this.timeInfo.toJSON()}},{signal:t})];case 4:return r=n.sent(),this.locationInfo=r.locationInfo,this.layerDefinition=r.layerDefinition,this.columnDelimiter=r.columnDelimiter,[2]}})})},r([f.property()],u.prototype,"type",void 0),r([f.property()],u.prototype,"url",void 0),r([f.property()],u.prototype,"delimiter",void 0),r([f.property()],u.prototype,"fields",void 0),r([f.property()],u.prototype,"latitudeField",void 0),r([f.property()],u.prototype,"longitudeField",void 0),r([f.property()],u.prototype,"spatialReference",void 0),r([f.property()],u.prototype,"timeInfo",void 0),r([f.property()],u.prototype,"locationInfo",void 0),r([f.property()],u.prototype,"layerDefinition",void 0),r([f.property()],u.prototype,"columnDelimiter",void 0),u=r([f.subclass("esri.layers.graphics.sources.CSVSource")],u)}(f.declared(u,p));t.default=m});