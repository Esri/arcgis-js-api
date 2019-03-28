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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../Color","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(o,r,e,t,c,p,l,n){return function(o){function r(r){var e=o.call(this)||this;return e.type="color",e.color=new p([0,0,0,1]),e}e(r,o),c=r,r.prototype.clone=function(){return new c({color:this.color&&this.color.clone()||null})};var c;return t([n.enumeration.serializable()({color:"color"})],r.prototype,"type",void 0),t([n.property({type:p})],r.prototype,"color",void 0),r=c=t([n.subclass("esri.webmap.background.ColorBackground")],r)}(n.declared(l))});