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

define(["require","exports","tslib","./Momentum","./MomentumEstimator"],(function(t,e,o,n,r){Object.defineProperty(e,"__esModule",{value:!0});var u=function(t){function e(e,o,n){return t.call(this,e,o,n)||this}return o.__extends(e,t),e.prototype.value=function(e){var o=t.prototype.value.call(this,e);return Math.exp(o)},e.prototype.valueDelta=function(e,o){var n=t.prototype.value.call(this,e),r=t.prototype.value.call(this,e+o)-n;return Math.exp(r)},e}(n.Momentum);e.ZoomMomentum=u;var i=function(t){function e(e,o,n,r){return void 0===e&&(e=2.5),void 0===o&&(o=.01),void 0===n&&(n=.95),void 0===r&&(r=12),t.call(this,e,o,n,r)||this}return o.__extends(e,t),e.prototype.add=function(e,o){t.prototype.add.call(this,Math.log(e),o)},e.prototype.createMomentum=function(t,e,o){return new u(t,e,o)},e}(r.MomentumEstimator);e.ZoomMomentumEstimator=i}));