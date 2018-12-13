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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../3d/support/mathUtils","./FilteredFiniteDifference","./Momentum"],function(t,e,i,r,n,o){Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t,e,i,r){void 0===t&&(t=2.5),void 0===e&&(e=.01),void 0===i&&(i=.95),void 0===r&&(r=12),this.minimumInitialVelocity=t,this.stopVelocity=e,this.friction=i,this.maxVelocity=r,this.value=new n.FilteredFiniteDifference(.8),this.time=new n.FilteredFiniteDifference(.3)}return t.prototype.add=function(t,e){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){var i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)},t.prototype.reset=function(){this.value.reset(),this.time.reset()},t.prototype.evaluateMomentum=function(){if(!this.value.hasFilteredDelta)return null;var t=this.value.filteredDelta/this.time.filteredDelta;return t=r.clamp(t,-this.maxVelocity,this.maxVelocity),Math.abs(t)<this.minimumInitialVelocity?null:this.createMomentum(t,this.stopVelocity,this.friction)},t.prototype.createMomentum=function(t,e,i){return new o.Momentum(t,e,i)},t}();e.MomentumEstimator=l});