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

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/JSONSupport","../../Color","../../core/screenUtils","./materialUtils","../../core/accessorSupport/decorators"],function(r,o,e,t,n,p,l,c,a,s){var i=u=function(r){function o(){var o=null!==r&&r.apply(this,arguments)||this;return o.color=new l([0,0,0,1]),o.size=1,o}return e(o,r),o.prototype.readColor=function(r,o){var e=null!=o.transparency?a.transparencyToOpacity(o.transparency):1;return r&&n.isDefined(r[0])?[r[0],r[1],r[2],e]:void 0},o.prototype.writeColor=function(r,o){o.color=[r.r,r.g,r.b],1!==r.a&&(o.transparency=a.opacityToTransparency(r.a))},o.prototype.clone=function(){return new u({color:n.clone(this.color),size:this.size})},o}(s.declared(p));t([s.property({type:l})],i.prototype,"color",void 0),t([s.reader("color",["color","transparency"])],i.prototype,"readColor",null),t([s.writer("color")],i.prototype,"writeColor",null),t([s.property({json:{write:!0}}),s.cast(c.toPt)],i.prototype,"size",void 0),i=u=t([s.subclass("esri.symbols.support.Symbol3DOutline")],i),o.Symbol3DOutline=i,Object.defineProperty(o,"__esModule",{value:!0}),o["default"]=i;var u});