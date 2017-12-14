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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/accessorSupport/decorators","../core/JSONSupport","./SpatialReference"],function(e,t,r,o,n,p,c){var a=function(e){function t(){var t=e.call(this)||this;return t.type=null,t.extent=null,t.hasM=!1,t.hasZ=!1,t.spatialReference=c.WGS84,t}return r(t,e),Object.defineProperty(t.prototype,"cache",{get:function(){return{}},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},t.prototype.clearCache=function(){this.notifyChange("cache")},t.prototype.getCacheValue=function(e){return this.cache[e]},t.prototype.setCacheValue=function(e,t){this.cache[e]=t},o([n.property()],t.prototype,"type",void 0),o([n.property({readOnly:!0,dependsOn:["spatialReference"]})],t.prototype,"cache",null),o([n.property({readOnly:!0,dependsOn:["spatialReference"]})],t.prototype,"extent",void 0),o([n.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),o([n.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),o([n.property({type:c,json:{write:!0}})],t.prototype,"spatialReference",void 0),t=o([n.subclass("esri.geometry.Geometry")],t)}(n.declared(p));return a});