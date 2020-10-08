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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../Color","../core/jsonMap","../core/lang","../core/accessorSupport/decorators","./FillSymbol","./SimpleLineSymbol"],(function(o,e,r,t,i,l,s,n,a){"use strict";var p=new i.default({esriSFSSolid:"solid",esriSFSNull:"none",esriSFSHorizontal:"horizontal",esriSFSVertical:"vertical",esriSFSForwardDiagonal:"forward-diagonal",esriSFSBackwardDiagonal:"backward-diagonal",esriSFSCross:"cross",esriSFSDiagonalCross:"diagonal-cross"});return function(o){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=o.apply(this,e)||this;return i.color=new t([0,0,0,.25]),i.outline=new a,i.type="simple-fill",i.style="solid",i}var i;return r.__extends(e,o),i=e,e.prototype.normalizeCtorArgs=function(o,e,r){if(o&&"string"!=typeof o)return o;var t={};return o&&(t.style=o),e&&(t.outline=e),r&&(t.color=r),t},e.prototype.clone=function(){return new i({color:l.clone(this.color),outline:this.outline&&this.outline.clone(),style:this.style})},e.prototype.hash=function(){return""+o.prototype.hash.call(this)+this.style+"."+(this.color&&this.color.hash())},r.__decorate([s.property()],e.prototype,"color",void 0),r.__decorate([s.property()],e.prototype,"outline",void 0),r.__decorate([s.enumeration({esriSFS:"simple-fill"},{readOnly:!0})],e.prototype,"type",void 0),r.__decorate([s.property({type:p.apiValues,json:{read:p.read,write:p.write}})],e.prototype,"style",void 0),e=i=r.__decorate([s.subclass("esri.symbols.SimpleFillSymbol")],e)}(n)}));