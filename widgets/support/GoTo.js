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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/declareExtendsHelper","../../core/tsSupport/decorateHelper","../../core/Accessor","../../core/accessorSupport/decorators"],function(r,e,o,t,p,i){return function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.goToOverride=null,e.view=null,e}return o(e,r),e.prototype.callGoTo=function(r){var e=this.view;return this.goToOverride?this.goToOverride(e,r):e.goTo(r.target,r.options)},t([i.property()],e.prototype,"goToOverride",void 0),t([i.property()],e.prototype,"view",void 0),e=t([i.subclass("esri.widgets.support.GoTo")],e)}(i.declared(p))});