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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","dojo/has","../../../geometry","../../../core/Accessor","../../../core/Promise","../../../core/requireUtils","../../../core/workers","../../../core/accessorSupport/decorators","../../../tasks/support/FeatureSet","module"],function(e,t,o,r,n,i,u,p,c,l,s,a,d){Object.defineProperty(t,"__esModule",{value:!0}),n.add("esri-workers-for-memory-layers",!1);var y=function(t){function u(){return null!==t&&t.apply(this,arguments)||this}return o(u,t),u.prototype.initialize=function(){var t=this;this.addResolvingPromise(l.open(c.getAbsMid("./support/CSVSourceWorker",e,d),{client:this,strategy:n("esri-workers-for-memory-layers")?"dedicated":"local"}).then(function(e){return t._connection=e,e.invoke("load",{url:t.url,parsing:{columnDelimiter:t.delimiter,fields:t.fields&&t.fields.map(function(e){return e.toJSON()}),latitudeField:t.latitudeField,longitudeField:t.longitudeField,spatialReference:t.spatialReference&&t.spatialReference.toJSON()}})}).then(function(e){t.locationInfo=e.locationInfo,t.layerDefinition=e.layerDefinition,t.columnDelimiter=e.columnDelimiter}))},u.prototype.openPorts=function(){var e=this;return this.when().then(function(){return e._connection.openPorts()})},u.prototype.queryFeatures=function(e){var t=this;return this.when().then(function(){return t._connection.invoke("queryFeatures",e?e.toJSON():null)}).then(function(e){return a.fromJSON(e)})},u.prototype.queryFeatureCount=function(e){var t=this;return this.when().then(function(){return t._connection.invoke("queryFeatureCount",e?e.toJSON():null)})},u.prototype.queryObjectIds=function(e){var t=this;return this.when().then(function(){return t._connection.invoke("queryObjectIds",e?e.toJSON():null)})},u.prototype.queryExtent=function(e){var t=this;return this.when().then(function(){return t._connection.invoke("queryExtent",e?e.toJSON():null)}).then(function(e){return{count:e.count,extent:i.Extent.fromJSON(e.extent)}})},r([s.property()],u.prototype,"url",void 0),r([s.property()],u.prototype,"delimiter",void 0),r([s.property()],u.prototype,"fields",void 0),r([s.property()],u.prototype,"latitudeField",void 0),r([s.property()],u.prototype,"longitudeField",void 0),r([s.property()],u.prototype,"spatialReference",void 0),r([s.property()],u.prototype,"locationInfo",void 0),r([s.property()],u.prototype,"layerDefinition",void 0),r([s.property()],u.prototype,"columnDelimiter",void 0),u=r([s.subclass("esri.layers.graphics.sources.CSVSource")],u)}(s.declared(u,p));t.default=y});