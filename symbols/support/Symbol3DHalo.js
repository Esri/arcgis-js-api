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

define(["require","exports","tslib","../../Color","../../core/JSONSupport","../../core/lang","../../core/accessorSupport/decorators","./materialUtils"],(function(o,e,r,t,s,l,c,p){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Symbol3DHalo=void 0;var i=function(o){function e(){var e=null!==o&&o.apply(this,arguments)||this;return e.color=new t([0,0,0,1]),e.size=0,e}var s;return r.__extends(e,o),s=e,e.prototype.clone=function(){return new s({color:l.clone(this.color),size:this.size})},r.__decorate([c.property(p.colorAndTransparencyProperty)],e.prototype,"color",void 0),r.__decorate([c.property(p.screenSizeProperty)],e.prototype,"size",void 0),e=s=r.__decorate([c.subclass("esri.symbols.support.Symbol3DHalo")],e)}(s.JSONSupport);e.Symbol3DHalo=i,e.default=i}));