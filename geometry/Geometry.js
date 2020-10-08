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

define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators","./SpatialReference"],(function(e,t,r,o,n,p){"use strict";return function(e){function t(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];var o=e.apply(this,t)||this;return o.type=null,o.extent=null,o.hasM=!1,o.hasZ=!1,o.spatialReference=p.WGS84,o}return r.__extends(t,e),Object.defineProperty(t.prototype,"cache",{get:function(){return{}},enumerable:!1,configurable:!0}),t.prototype.readSpatialReference=function(e,t){if(e instanceof p)return e;if(null!=e){var r=new p;return r.read(e,t),r}return e},t.prototype.clone=function(){return console.warn(".clone() is not implemented for "+this.declaredClass),null},t.prototype.clearCache=function(){this.notifyChange("cache")},t.prototype.getCacheValue=function(e){return this.cache[e]},t.prototype.setCacheValue=function(e,t){this.cache[e]=t},r.__decorate([n.property()],t.prototype,"type",void 0),r.__decorate([n.property({readOnly:!0,dependsOn:["spatialReference"]})],t.prototype,"cache",null),r.__decorate([n.property({readOnly:!0,dependsOn:["spatialReference"]})],t.prototype,"extent",void 0),r.__decorate([n.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasM",void 0),r.__decorate([n.property({type:Boolean,json:{write:{overridePolicy:function(e){return{enabled:e}}}}})],t.prototype,"hasZ",void 0),r.__decorate([n.property({type:p,json:{write:!0}})],t.prototype,"spatialReference",void 0),r.__decorate([n.reader("spatialReference")],t.prototype,"readSpatialReference",null),t=r.__decorate([n.subclass("esri.geometry.Geometry")],t)}(o.JSONSupport)}));