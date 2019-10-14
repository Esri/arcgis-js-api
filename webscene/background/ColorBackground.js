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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/tsSupport/assignHelper","../../Color","../../core/accessorSupport/decorators","../../symbols/support/materialUtils","./Background"],function(r,o,e,t,n,c,l,p,s){var a=n({},p.colorAndTransparencyProperty,{nonNullable:!0});return function(r){function o(o){var e=r.call(this)||this;return e.type="color",e.color=new c([0,0,0,1]),e}e(o,r),n=o,o.prototype.clone=function(){return new n(this.cloneProperties())},o.prototype.cloneProperties=function(){return{color:this.color.clone()}};var n;return t([l.enumeration.serializable()({color:"color"})],o.prototype,"type",void 0),t([l.property(a)],o.prototype,"color",void 0),o=n=t([l.subclass("esri.webscene.background.ColorBackground")],o)}(l.declared(s))});