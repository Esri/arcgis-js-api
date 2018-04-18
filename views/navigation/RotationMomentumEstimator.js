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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","./MomentumEstimator"],function(t,e,o,a){Object.defineProperty(e,"__esModule",{value:!0});var i=function(t){function e(e,o,a,i){return void 0===e&&(e=3),void 0===o&&(o=.01),void 0===a&&(a=.95),void 0===i&&(i=12),t.call(this,e,o,a,i)||this}return o(e,t),e.prototype.add=function(e,o){if(this.value.hasLastValue){for(var a=this.value.lastValue,i=e-a;i>Math.PI;)i-=2*Math.PI;for(;i<-Math.PI;)i+=2*Math.PI;e=a+i}t.prototype.add.call(this,e,o)},e}(a.MomentumEstimator);e.RotationMomentumEstimator=i});