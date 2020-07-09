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

define(["require","exports","tslib","../../Color","../../core/accessorSupport/decorators","../../symbols/support/materialUtils","./Background"],(function(o,r,e,t,n,c,s){var l=e.__assign(e.__assign({},c.colorAndTransparencyProperty),{nonNullable:!0});return function(o){function r(r){var e=o.call(this,r)||this;return e.type="color",e.color=new t([0,0,0,1]),e}var c;return e.__extends(r,o),c=r,r.prototype.clone=function(){return new c(this.cloneProperties())},r.prototype.cloneProperties=function(){return{color:this.color.clone()}},e.__decorate([n.enumeration({color:"color"})],r.prototype,"type",void 0),e.__decorate([n.property(l)],r.prototype,"color",void 0),r=c=e.__decorate([n.subclass("esri.webscene.background.ColorBackground")],r)}(s)}));