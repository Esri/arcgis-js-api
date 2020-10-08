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

define(["require","exports","tslib","../../core/accessorSupport/decorators"],(function(o,e,r,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.GoToMixin=void 0,e.GoToMixin=function(o){return function(o){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var t=o.apply(this,e)||this;return t.goToOverride=null,t.view=null,t}return r.__extends(e,o),e.prototype.callGoTo=function(o){var e=this.view;return this.goToOverride?this.goToOverride(e,o):e.goTo(o.target,o.options)},r.__decorate([t.property()],e.prototype,"goToOverride",void 0),r.__decorate([t.property()],e.prototype,"view",void 0),e=r.__decorate([t.subclass("esri.widgets.support.GoTo")],e)}(o)}}));