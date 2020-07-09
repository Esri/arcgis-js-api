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

define(["require","exports","tslib","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","../../core/accessorSupport/ensureType"],(function(e,r,t,o,i,n,s){return function(e){function r(r){var t=e.call(this,r)||this;return t.variableName=null,t.dimensionName=null,t.values=[],t.isSlice=!1,t}var o;return t.__extends(r,e),o=r,r.prototype.clone=function(){return new o({variableName:this.variableName,dimensionName:this.dimensionName,values:i.clone(this.values),isSlice:this.isSlice})},t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"variableName",void 0),t.__decorate([n.property({type:String,json:{write:!0}})],r.prototype,"dimensionName",void 0),t.__decorate([n.property({type:s.types.array(s.types.oneOf([s.types.native(Number),s.types.array(s.types.native(Number))])),json:{write:!0}})],r.prototype,"values",void 0),t.__decorate([n.property({type:Boolean,json:{write:!0}})],r.prototype,"isSlice",void 0),r=o=t.__decorate([n.subclass("esri.layers.support.DimensionalDefinition")],r)}(o.JSONSupport)}));