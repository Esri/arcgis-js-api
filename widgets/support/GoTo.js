// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/accessorSupport/decorators"],function(e,r,o,t,i){Object.defineProperty(r,"__esModule",{value:!0}),r.GoToMixin=function(e){return function(e){function r(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];var t=e.apply(this,r)||this;return t.goToOverride=null,t.view=null,t}return o(r,e),r.prototype.callGoTo=function(e){var r=this.view;return this.goToOverride?this.goToOverride(r,e):r.goTo(e.target,e.options)},t([i.property()],r.prototype,"goToOverride",void 0),t([i.property()],r.prototype,"view",void 0),r=t([i.subclass("esri.widgets.support.GoTo")],r)}(i.declared(e))}});