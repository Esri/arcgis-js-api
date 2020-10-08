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

define(["require","exports","tslib","../../core/JSONSupport","../../core/maybe","../../core/accessorSupport/decorators","./materialUtils"],(function(o,r,e,t,l,c,n){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.Symbol3DMaterial=void 0;var s=function(o){function r(){var r=null!==o&&o.apply(this,arguments)||this;return r.color=null,r}var t;return e.__extends(r,o),t=r,r.prototype.clone=function(){return new t({color:l.isSome(this.color)?this.color.clone():null})},e.__decorate([c.property(n.colorAndTransparencyProperty)],r.prototype,"color",void 0),r=t=e.__decorate([c.subclass("esri.symbols.support.Symbol3DMaterial")],r)}(t.JSONSupport);r.Symbol3DMaterial=s,r.default=s}));