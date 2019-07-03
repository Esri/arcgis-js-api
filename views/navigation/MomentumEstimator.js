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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/mathUtils","./FilteredFiniteDifference","./Momentum"],function(e,t,i,r,n,o){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t,i,r){void 0===e&&(e=2.5),void 0===t&&(t=.01),void 0===i&&(i=.95),void 0===r&&(r=12),this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.maxVelocity=r,this.value=new n.FilteredFiniteDifference(.8),this.time=new n.FilteredFiniteDifference(.3)}return e.prototype.add=function(e,t){if(this.time.hasLastValue){if(this.time.computeDelta(t)<.01)return;if(this.value.hasFilteredDelta){var i=this.value.computeDelta(e);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(t),this.value.update(e)},e.prototype.reset=function(){this.value.reset(),this.time.reset()},e.prototype.evaluateMomentum=function(){if(!this.value.hasFilteredDelta)return null;var e=this.value.filteredDelta/this.time.filteredDelta;return e=r.clamp(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)},e.prototype.createMomentum=function(e,t,i){return new o.Momentum(e,t,i)},e}();t.MomentumEstimator=l});