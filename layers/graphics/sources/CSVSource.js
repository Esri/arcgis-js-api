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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../geometry","../../../core/Accessor","../../../core/has","../../../core/Loadable","../../../core/promiseUtils","../../../core/requireUtils","../../../core/workers","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet","module"],function(e,t,o,r,n,i,u,c,p,l,s,a,d,y){Object.defineProperty(t,"__esModule",{value:!0}),u.add("esri-workers-for-memory-layers",!1);var f=function(t){function i(e){var o=t.call(this,e)||this;return o.type="csv",o}return o(i,t),i.prototype.load=function(){var t,o=this;return t=u("esri-webpack")?p.create(function(t){return e(["./support/CSVSourceWorker"],t)}):p.resolve(),this.addResolvingPromise(t.then(function(){return s.open(l.getAbsMid("./support/CSVSourceWorker",e,y),{strategy:u("esri-workers-for-memory-layers")?"dedicated":"local"}).then(function(e){return o._connection=e,e.invoke("load",{url:o.url,parsing:{columnDelimiter:o.delimiter,fields:o.fields&&o.fields.map(function(e){return e.toJSON()}),latitudeField:o.latitudeField,longitudeField:o.longitudeField,spatialReference:o.spatialReference&&o.spatialReference.toJSON()}})}).then(function(e){o.locationInfo=e.locationInfo,o.layerDefinition=e.layerDefinition,o.columnDelimiter=e.columnDelimiter})})),this.when()},i.prototype.destroy=function(){this._connection&&this._connection.close()},i.prototype.openPorts=function(){var e=this;return this.load().then(function(){return e._connection.openPorts()})},i.prototype.queryFeatures=function(e){var t=this;return this.load().then(function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null)}).then(function(e){return d.fromJSON(e)})},i.prototype.queryFeaturesJSON=function(e){var t=this;return this.load().then(function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null)})},i.prototype.queryFeatureCount=function(e){var t=this;return this.load().then(function(){return t._connection.invoke("queryFeatureCount",e?e.toJSON():null)})},i.prototype.queryObjectIds=function(e){var t=this;return this.load().then(function(){return t._connection.invoke("queryObjectIds",e?e.toJSON():null)})},i.prototype.queryExtent=function(e){var t=this;return this.load().then(function(){return t._connection.invoke("queryExtent",e?e.toJSON():null)}).then(function(e){return{count:e.count,extent:n.Extent.fromJSON(e.extent)}})},r([a.property()],i.prototype,"type",void 0),r([a.property()],i.prototype,"url",void 0),r([a.property()],i.prototype,"delimiter",void 0),r([a.property()],i.prototype,"fields",void 0),r([a.property()],i.prototype,"latitudeField",void 0),r([a.property()],i.prototype,"longitudeField",void 0),r([a.property()],i.prototype,"spatialReference",void 0),r([a.property()],i.prototype,"locationInfo",void 0),r([a.property()],i.prototype,"layerDefinition",void 0),r([a.property()],i.prototype,"columnDelimiter",void 0),i=r([a.subclass("esri.layers.graphics.sources.CSVSource")],i)}(a.declared(i,c));t.default=f});