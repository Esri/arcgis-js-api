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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../Color","../core/jsonMap","../core/lang","../core/accessorSupport/decorators","./FillSymbol","./SimpleLineSymbol"],(function(e,o,r,t,i,l,s,n,a,p,c){var u=new s.default({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});return function(e){function o(o,r,t){var i=e.call(this,o)||this;return i.color=new l([0,0,0,.25]),i.outline=new c,i.type="simple-fill",i.style="solid",i}var i;return r(o,e),i=o,o.prototype.normalizeCtorArgs=function(e,o,r){if(e&&"string"!=typeof e)return e;var t={};return e&&(t.style=e),o&&(t.outline=o),r&&(t.color=r),t},o.prototype.clone=function(){return new i({color:n.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})},o.prototype.hash=function(){return""+this.inherited(arguments)+this.style+"."+(this.color&&this.color.hash())},t([a.property()],o.prototype,"color",void 0),t([a.property()],o.prototype,"outline",void 0),t([a.enumeration.serializable()({esriSFS:"simple-fill"})],o.prototype,"type",void 0),t([a.property({type:u.apiValues,json:{read:u.read,write:u.write}})],o.prototype,"style",void 0),o=i=t([a.subclass("esri.symbols.SimpleFillSymbol")],o)}(a.declared(p))}));