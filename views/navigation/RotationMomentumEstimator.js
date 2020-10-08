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

define(["require","exports","tslib","./MomentumEstimator"],(function(t,o,e,i){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.RotationMomentumEstimator=void 0;var a=function(t){function o(o,e,i,a){return void 0===o&&(o=3),void 0===e&&(e=.01),void 0===i&&(i=.95),void 0===a&&(a=12),t.call(this,o,e,i,a)||this}return e.__extends(o,t),o.prototype.add=function(o,e){if(this.value.hasLastValue){for(var i=this.value.lastValue,a=o-i;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;o=i+a}t.prototype.add.call(this,o,e)},o}(i.MomentumEstimator);o.RotationMomentumEstimator=a}));