// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/JSONSupport","../../Color","./materialUtils","../../core/accessorSupport/decorators"],function(r,o,e,t,n,l,a,p,c){function i(r){return Math.max(0,Math.min(Math.round(r),255))}var s=u=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return e(o,r),o.prototype.readColor=function(r,o){var e=null!=o.transparency?p.transparencyToOpacity(o.transparency):1;return r&&n.isDefined(r[0])?[r[0],r[1],r[2],e]:void 0},o.prototype.writeColor=function(r,o){o.color=[i(r.r),i(r.g),i(r.b)];var e=p.opacityToTransparency(r.a);0!==e&&(o.transparency=e)},o.prototype.clone=function(){return new u({color:this.color?this.color.clone():null,colorMixMode:this.colorMixMode})},o}(c.declared(l));t([c.property({type:a})],s.prototype,"color",void 0),t([c.reader("color",["color","transparency"])],s.prototype,"readColor",null),t([c.writer("color")],s.prototype,"writeColor",null),t([c.property({type:String,json:{read:!1,write:!1}})],s.prototype,"colorMixMode",void 0),s=u=t([c.subclass("esri.symbols.support.Symbol3DMaterial")],s),o.Symbol3DMaterial=s,Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=s;var u});