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

define(["require","exports","../../core/tsSupport/extendsHelper","./Momentum","./MomentumEstimator"],function(t,e,o,r,n){Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(e,o,r){return t.call(this,e,o,r)||this}return o(e,t),e.prototype.value=function(e){var o=t.prototype.value.call(this,e);return Math.exp(o)},e.prototype.valueDelta=function(e,o){var r=t.prototype.value.call(this,e),n=t.prototype.value.call(this,e+o),u=n-r;return Math.exp(u)},e}(r.Momentum);e.ZoomMomentum=u;var i=function(t){function e(e,o,r,n){return void 0===e&&(e=2.5),void 0===o&&(o=.01),void 0===r&&(r=.95),void 0===n&&(n=12),t.call(this,e,o,r,n)||this}return o(e,t),e.prototype.add=function(e,o){t.prototype.add.call(this,Math.log(e),o)},e.prototype.createMomentum=function(t,e,o){return new u(t,e,o)},e}(n.MomentumEstimator);e.ZoomMomentumEstimator=i});