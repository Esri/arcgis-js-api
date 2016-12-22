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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/JSONSupport","../../Color","../../core/screenUtils","./materialUtils","../../core/accessorSupport/decorators"],function(r,o,e,t,n,p,c,l,s,a){var i=function(r){function o(){r.apply(this,arguments),this.color=new c([0,0,0,1]),this.size=1}return e(o,r),o.prototype.readColor=function(r,o){var e=null!=o.transparency?s.transparencyToOpacity(o.transparency):1;return r&&n.isDefined(r[0])?[r[0],r[1],r[2],e]:void 0},o.prototype.writeColor=function(r,o){o.color=[r.r,r.g,r.b],1!==r.a&&(o.transparency=s.opacityToTransparency(r.a))},o.prototype.clone=function(){return new o({color:n.clone(this.color),size:this.size})},t([a.property({type:c})],o.prototype,"color",void 0),t([a.read("color",["color","transparency"])],o.prototype,"readColor",null),t([a.write("color")],o.prototype,"writeColor",null),t([a.property({json:{writable:!0}}),a.cast(l.toPt)],o.prototype,"size",void 0),o=t([a.subclass("esri.symbols.support.Symbol3DOutline")],o)}(a.declared(p));o.Symbol3DOutline=i,Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=i});