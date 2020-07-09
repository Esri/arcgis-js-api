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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/JSONSupport","../../core/Logger","../../core/accessorSupport/decorators","../../geometry/support/jsonUtils"],(function(e,t,r,o,a,n,s){var i=a.getLogger("esri.tasks.support.ProjectParameters");return function(e){function t(t){var r=e.call(this,t)||this;return r.geometries=null,r.outSpatialReference=null,r.transformation=null,r.transformForward=null,r}return r.__extends(t,e),Object.defineProperty(t.prototype,"outSR",{get:function(){return i.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference},set:function(e){i.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead."),this.outSpatialReference=e},enumerable:!0,configurable:!0}),t.prototype.toJSON=function(){var e=this.geometries.map((function(e){return e.toJSON()})),t=this.geometries[0],r={};return r.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),r.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),r.geometries=JSON.stringify({geometryType:s.getJsonType(t),geometries:e}),this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(r.transformForward=this.transformForward),r},r.__decorate([n.property()],t.prototype,"geometries",void 0),r.__decorate([n.property({json:{read:{source:"outSR"}}})],t.prototype,"outSpatialReference",void 0),r.__decorate([n.property({json:{read:!1}})],t.prototype,"outSR",null),r.__decorate([n.property()],t.prototype,"transformation",void 0),r.__decorate([n.property()],t.prototype,"transformForward",void 0),t=r.__decorate([n.subclass("esri.tasks.support.ProjectParameters")],t)}(o.JSONSupport)}));