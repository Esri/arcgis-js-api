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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../3d/lib/gl-matrix","../3d/state/utils/navigationUtils","./FilteredFiniteDifference","./FilteredValue","./Momentum"],function(e,t,i,n,r,s,a,l){Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){function t(t,i,n,r,s){var a=e.call(this,t,i,n)||this;return a.angularVelocity=r,a.axis=s,a}return i(t,e),t.prototype.value=function(t){return e.prototype.valueFromInitialVelocity.call(this,this.angularVelocity,t)},t}(l.Momentum);t.PanSphericalMomentum=o;var c=function(){function e(e,t,i){void 0===e&&(e=300),void 0===t&&(t=12),void 0===i&&(i=.84),this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.tmpAxis=n.vec3d.create(),this.time=new s.FilteredFiniteDifference(.3),this.screen=[new s.FilteredFiniteDifference(.4),new s.FilteredFiniteDifference(.4)],this.angle=new a.FilteredValue(.6),this.axis=n.vec3d.create(),this.lastScene=n.vec3d.create()}return e.prototype.add=function(e,t,i){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.01)return;var s=r.rotationAndAxisFromPoints(this.lastScene,t,this.tmpAxis);n.vec3d.length2(this.tmpAxis)<1e-5?s=0:n.vec3d.normalize(this.tmpAxis,this.axis),this.angle.update(s),n.vec3d.set(t,this.lastScene)}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.time.update(i)},e.prototype.reset=function(){this.screen[0].reset(),this.screen[1].reset(),this.angle.reset(),this.time.reset()},e.prototype.evaluateMomentum=function(){if(!this.screen[0].hasFilteredDelta)return null;var e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t),n=i/this.time.filteredDelta;return Math.abs(n)<this.minimumInitialVelocity?null:this.createMomentum(n,this.stopVelocity,this.friction)},e.prototype.createMomentum=function(e,t,i){var n=this.angle.filteredValue/this.time.filteredDelta;return new o(e,t,i,n,this.axis)},e}();t.PanSphericalMomentumEstimator=c});