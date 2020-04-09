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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/declareExtendsHelper","../../../core/tsSupport/decorateHelper","../../../Color","../../../core/JSONSupport","../../../core/accessorSupport/decorators","../../../core/accessorSupport/ensureType"],(function(e,r,o,t,l,p,u,n){return function(e){function r(r){var o=e.call(this,r)||this;return o.color=null,o.label=null,o.value=null,o}var p;return o(r,e),p=r,r.prototype.writeValue=function(e,r,o){r[o]=null==e?0:e},r.prototype.clone=function(){return new p({color:this.color&&this.color.clone(),label:this.label,value:this.value})},t([u.property({type:l,json:{type:[n.Integer],write:!0}})],r.prototype,"color",void 0),t([u.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),t([u.property({type:Number,json:{write:{allowNull:!0}}})],r.prototype,"value",void 0),t([u.writer("value")],r.prototype,"writeValue",null),r=p=t([u.subclass("esri.renderers.visualVariables.support.ColorStop")],r)}(u.declared(p.JSONSupport))}));