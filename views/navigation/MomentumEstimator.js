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

define(["require","exports","../../core/mathUtils","./FilteredFiniteDifference","./Momentum"],(function(t,e,i,n,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.MomentumEstimator=void 0;var l=function(){function t(t,e,i,a){void 0===t&&(t=2.5),void 0===e&&(e=.01),void 0===i&&(i=.95),void 0===a&&(a=12),this.minimumInitialVelocity=t,this.stopVelocity=e,this.friction=i,this.maxVelocity=a,this.enabled=!0,this.value=new n.FilteredFiniteDifference(.8),this.time=new n.FilteredFiniteDifference(.3)}return t.prototype.add=function(t,e){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(e)<.01)return;if(this.value.hasFilteredDelta){var i=this.value.computeDelta(t);this.value.filteredDelta*i<0&&this.value.reset()}}this.time.update(e),this.value.update(t)}},t.prototype.reset=function(){this.value.reset(),this.time.reset()},t.prototype.evaluateMomentum=function(){if(!this.enabled||!this.value.hasFilteredDelta)return null;var t=this.value.filteredDelta/this.time.filteredDelta;return t=i.clamp(t,-this.maxVelocity,this.maxVelocity),Math.abs(t)<this.minimumInitialVelocity?null:this.createMomentum(t,this.stopVelocity,this.friction)},t.prototype.createMomentum=function(t,e,i){return new a.Momentum(t,e,i)},t}();e.MomentumEstimator=l}));