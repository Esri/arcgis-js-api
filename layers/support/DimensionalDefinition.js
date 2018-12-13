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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators"],function(e,r,o,t,i,n,s){return function(e){function r(r){var o=e.call(this)||this;return o.variableName=null,o.dimensionName=null,o.values=[],o.isSlice=!1,o}o(r,e),i=r,r.prototype.clone=function(){return new i({variableName:this.variableName,dimensionName:this.dimensionName,values:n.clone(this.values),isSlice:this.isSlice})};var i;return t([s.property({type:String,json:{write:!0}})],r.prototype,"variableName",void 0),t([s.property({type:String,json:{write:!0}})],r.prototype,"dimensionName",void 0),t([s.property({json:{write:!0}})],r.prototype,"values",void 0),t([s.property({type:Boolean,json:{write:!0}})],r.prototype,"isSlice",void 0),r=i=t([s.subclass("esri.layers.support.DimensionalDefinition")],r)}(s.declared(i))});