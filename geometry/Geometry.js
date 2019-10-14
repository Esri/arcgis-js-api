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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/accessorSupport/decorators","./SpatialReference"],function(e,r,t,o,n,p,a){return function(e){function r(){var r=e.call(this)||this;return r.type=null,r.extent=null,r.hasM=!1,r.hasZ=!1,r.spatialReference=a.WGS84,r}return t(r,e),Object.defineProperty(r.prototype,"cache",{get:function(){return{}},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){if(e instanceof a)return e;if(null!=e){var t=new a;return t.read(e,r),t}return e},r.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},r.prototype.clearCache=function(){this.notifyChange("cache")},r.prototype.getCacheValue=function(e){return this.cache[e]},r.prototype.setCacheValue=function(e,r){this.cache[e]=r},o([p.property()],r.prototype,"type",void 0),o([p.property({readOnly:!0,dependsOn:["spatialReference"]})],r.prototype,"cache",null),o([p.property({readOnly:!0,dependsOn:["spatialReference"]})],r.prototype,"extent",void 0),o([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],r.prototype,"hasM",void 0),o([p.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],r.prototype,"hasZ",void 0),o([p.property({type:a,json:{write:!0}})],r.prototype,"spatialReference",void 0),o([p.reader("spatialReference")],r.prototype,"readSpatialReference",null),r=o([p.subclass("esri.geometry.Geometry")],r)}(p.declared(n.JSONSupport))});