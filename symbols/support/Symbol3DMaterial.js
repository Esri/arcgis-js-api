// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/JSONSupport","../../Color","./materialUtils","../../core/accessorSupport/decorators"],function(r,o,e,t,l,n,p,a,c){var s=function(r){function o(){r.apply(this,arguments)}return e(o,r),o.prototype.readColor=function(r,o){var e=null!=o.transparency?a.transparencyToOpacity(o.transparency):1;return r&&l.isDefined(r[0])?[r[0],r[1],r[2],e]:void 0},o.prototype.writeColor=function(r,o){o.color=[r.r,r.g,r.b],1!==r.a&&(o.transparency=a.opacityToTransparency(r.a))},o.prototype.clone=function(){return new o({color:this.color?this.color.clone():null})},t([c.property({type:p})],o.prototype,"color",void 0),t([c.read("color",["color","transparency"])],o.prototype,"readColor",null),t([c.write("color")],o.prototype,"writeColor",null),o=t([c.subclass("esri.symbols.support.Symbol3DMaterial")],o)}(c.declared(n));o.Symbol3DMaterial=s,Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=s});