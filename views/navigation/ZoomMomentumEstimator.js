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

define(["require","exports","tslib","./Momentum","./MomentumEstimator"],(function(t,o,e,n,r){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.ZoomMomentumEstimator=o.ZoomMomentum=void 0;var u=function(t){function o(o,e,n){return t.call(this,o,e,n)||this}return e.__extends(o,t),o.prototype.value=function(o){var e=t.prototype.value.call(this,o);return Math.exp(e)},o.prototype.valueDelta=function(o,e){var n=t.prototype.value.call(this,o),r=t.prototype.value.call(this,o+e)-n;return Math.exp(r)},o}(n.Momentum);o.ZoomMomentum=u;var i=function(t){function o(o,e,n,r){return void 0===o&&(o=2.5),void 0===e&&(e=.01),void 0===n&&(n=.95),void 0===r&&(r=12),t.call(this,o,e,n,r)||this}return e.__extends(o,t),o.prototype.add=function(o,e){t.prototype.add.call(this,Math.log(o),e)},o.prototype.createMomentum=function(t,o,e){return new u(t,o,e)},o}(r.MomentumEstimator);o.ZoomMomentumEstimator=i}));