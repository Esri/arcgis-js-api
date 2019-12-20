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

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/libs/gl-matrix-2/vec2f64","../../core/libs/gl-matrix-2/vec3","../../core/libs/gl-matrix-2/vec3f64","../3d/state/utils/navigationUtils","./FilteredFiniteDifference","./FilteredValue","./Momentum"],function(e,t,i,s,n,a,r,l,h,o){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t,i,s,n,a,r,l){void 0===r&&(r=0);var h=e.call(this,t,i,s)||this;return h.angularVelocity1=n,h.axis1=a,h.angularVelocity2=r,h.axis2=l,h}return i(t,e),t.prototype.value1=function(t){return e.prototype.valueFromInitialVelocity.call(this,this.angularVelocity1,t)},t.prototype.value2=function(t){return e.prototype.valueFromInitialVelocity.call(this,this.angularVelocity2,t)},t}(o.Momentum);t.PanSphericalMomentum=c;var u=function(){function e(e,t,i){void 0===e&&(e=300),void 0===t&&(t=12),void 0===i&&(i=.84),this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=i,this.enabled=!0,this.tmpAxis1=a.vec3f64.create(),this.tmpAxis2=a.vec3f64.create(),this.tmpAngles=s.vec2f64.create(),this.time=new l.FilteredFiniteDifference(.3),this.screen=[new l.FilteredFiniteDifference(.4),new l.FilteredFiniteDifference(.4)],this.angle1=new h.FilteredValue(.6),this.angle2=new h.FilteredValue(.6),this.axis1=a.vec3f64.create(),this.axis2=a.vec3f64.create(),this.lastScene=a.vec3f64.create()}return e.prototype.addMomentumDirectRotation=function(e,t,i,s,a,l){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.01)return;var h=r.rotationAngleAndAxisDirectRotation(this.lastScene,t,this.tmpAxis2,s,a,l);this.angle2.update(0),n.vec3.squaredLength(this.tmpAxis2)<1e-5?h=0:n.vec3.normalize(this.axis1,this.tmpAxis2),this.angle1.update(h),n.vec3.copy(this.lastScene,t)}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.time.update(i)}},e.prototype.addMomentumPreserveHeading=function(e,t,i,s,a,l,h){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(i)<.01)return;r.rotationAnglesAndAxesHeadingPreserving(this.lastScene,t,this.tmpAxis2,this.tmpAxis1,this.tmpAngles,s,a,l,h,!1),n.vec3.squaredLength(this.tmpAxis2)<1e-5?(this.angle1.update(0),this.angle2.update(0)):(this.angle1.update(this.tmpAngles[1]),this.angle2.update(this.tmpAngles[0]),n.vec3.normalize(this.axis1,this.tmpAxis1),n.vec3.normalize(this.axis2,this.tmpAxis2)),n.vec3.copy(this.lastScene,t)}this.screen[0].update(e[0]),this.screen[1].update(e[1]),this.time.update(i)}},e.prototype.reset=function(){this.screen[0].reset(),this.screen[1].reset(),this.angle1.reset(),this.angle2.reset(),this.time.reset()},e.prototype.evaluateMomentum=function(){if(!this.enabled||!this.screen[0].hasFilteredDelta)return null;var e=this.screen[0].filteredDelta,t=this.screen[1].filteredDelta,i=Math.sqrt(e*e+t*t),s=i/this.time.filteredDelta;return Math.abs(s)<this.minimumInitialVelocity?null:this.createMomentum(s,this.stopVelocity,this.friction)},e.prototype.createMomentum=function(e,t,i){var s=this.angle1.filteredValue/this.time.filteredDelta,n=this.angle2.filteredValue/this.time.filteredDelta;return new c(e,t,i,s,this.axis1,n,this.axis2)},e}();t.PanSphericalMomentumEstimator=u});