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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/accessorSupport/decorators"],(function(e,o,r,t){Object.defineProperty(o,"__esModule",{value:!0}),o.GoToMixin=function(e){return function(e){function o(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];var t=e.apply(this,o)||this;return t.goToOverride=null,t.view=null,t}return r.__extends(o,e),o.prototype.callGoTo=function(e){var o=this.view;return this.goToOverride?this.goToOverride(o,e):o.goTo(e.target,e.options)},r.__decorate([t.property()],o.prototype,"goToOverride",void 0),r.__decorate([t.property()],o.prototype,"view",void 0),o=r.__decorate([t.subclass("esri.widgets.support.GoTo")],o)}(e)}}));