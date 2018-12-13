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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/tsSupport/assignHelper","../Color","../core/kebabDictionary","../core/lang","../core/accessorSupport/decorators","./FillSymbol"],function(e,r,o,t,i,l,s,n,a,p){var c=s({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"}),u={outline:{type:"simple-line"}};return function(e){function r(r,o,t){var i=e.call(this,r)||this;return i.color=new l([0,0,0,.25]),i.type="simple-fill",i.style="solid",i}o(r,e),s=r,r.prototype.getDefaults=function(){return i({},this.inherited(arguments),u)},r.prototype.normalizeCtorArgs=function(e,r,o){if(e&&"string"!=typeof e)return e;var t={};return e&&(t.style=e),r&&(t.outline=r),o&&(t.color=o),t},r.prototype.clone=function(){return new s({color:n.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})};var s;return t([a.property()],r.prototype,"color",void 0),t([a.enumeration.serializable()({esriSFS:"simple-fill"})],r.prototype,"type",void 0),t([a.property({type:c.apiValues,json:{read:c.read,write:c.write}})],r.prototype,"style",void 0),r=s=t([a.subclass("esri.symbols.SimpleFillSymbol")],r)}(a.declared(p))});