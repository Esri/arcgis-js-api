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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/libs/gl-matrix-2/vec3","../../core/libs/gl-matrix-2/vec3f64","./FilteredFiniteDifference","./Momentum"],function(e,t,i,n,r,s,c){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,i,n,r,s){var c=e.call(this,t,i,n)||this;return c.sceneVelocity=r,c.direction=s,c}return i(t,e),t.prototype.value=function(t){return e.prototype.valueFromInitialVelocity.call(this,this.sceneVelocity,t)},t}(c.Momentum);t.PanPlanarMomentum=o;var l=function(){function e(e,t,i){void 0===e&&(e=300),void 0===t&&(t=12),void 0===i&&(i=.84),this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.time=new s.FilteredFiniteDifference(.6),this.screen=[new s.FilteredFiniteDifference(.4),new s.FilteredFiniteDifference(.4)],this.scene=[new s.FilteredFiniteDifference(.6),new s.FilteredFiniteDifference(.6),new s.FilteredFiniteDifference(.6)],this.tmpDirection=r.vec3f64.create()}return e.prototype.add=function(e,t,i){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.015)return}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.scene[0].update(t[0]),this.scene[1].update(t[1]),this.scene[2].update(t[2]),this.time.update(i)},e.prototype.reset=function(){this.screen[0].reset(),this.screen[1].reset(),this.scene[0].reset(),this.scene[1].reset(),this.scene[2].reset(),this.time.reset()},e.prototype.evaluateMomentum=function(){if(!this.screen[0].hasFilteredDelta)return null;var e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t),n=i/this.time.filteredDelta;return Math.abs(n)<this.minimumInitialVelocity?null:this.createMomentum(n,this.stopVelocity,this.friction)},e.prototype.createMomentum=function(e,t,i){n.vec3.set(this.tmpDirection,this.scene[0].filteredDelta,this.scene[1].filteredDelta,this.scene[2].filteredDelta);var r=n.vec3.length(this.tmpDirection);r>0&&n.vec3.scale(this.tmpDirection,this.tmpDirection,1/r);var s=r/this.time.filteredDelta;return new o(e,t,i,s,this.tmpDirection)},e}();t.PanPlanarMomentumEstimator=l});