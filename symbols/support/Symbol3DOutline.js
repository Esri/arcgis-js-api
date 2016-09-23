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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/lang","../../core/JSONSupport","../../Color","../../core/screenUtils","../../core/accessorSupport/decorators"],function(o,r,e,t,n,p,l,c,s){var i=function(o){function r(){o.apply(this,arguments),this.color=new l([0,0,0,1]),this.size=1}return e(r,o),r.prototype.readColor=function(o,r){var e=null!=r.transparency?1-.01*r.transparency:1;return o&&n.isDefined(o[0])?[o[0],o[1],o[2],e]:void 0},r.prototype.writeColor=function(o,r){r.color=[o.r,o.g,o.b],1!==o.a&&(r.transparency=100*(1-o.a))},r.prototype.clone=function(){return new r({color:n.clone(this.color),size:this.size})},t([s.property({type:l})],r.prototype,"color",void 0),t([s.read("color",["color","transparency"])],r.prototype,"readColor",null),t([s.write("color")],r.prototype,"writeColor",null),t([s.property({json:{writable:!0}}),s.cast(c.toPt)],r.prototype,"size",void 0),r=t([s.subclass("esri.symbols.support.Symbol3DOutline")],r)}(s.declared(p));r.Symbol3DOutline=i,Object.defineProperty(r,"__esModule",{value:!0}),r["default"]=i});