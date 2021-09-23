/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../core/mathUtils","./FilteredFiniteDifference","./Momentum"],(function(e,t,i,l){"use strict";let n=function(){function e(e=2.5,t=.01,l=.95,n=12){this.minimumInitialVelocity=e,this.stopVelocity=t,this.friction=l,this.maxVelocity=n,this.enabled=!0,this.value=new i.FilteredFiniteDifference(.8),this.time=new i.FilteredFiniteDifference(.3)}var n=e.prototype;return n.add=function(e,t){if(this.enabled){if(this.time.hasLastValue){if(this.time.computeDelta(t)<.01)return;if(this.value.hasFilteredDelta){const t=this.value.computeDelta(e);this.value.filteredDelta*t<0&&this.value.reset()}}this.time.update(t),this.value.update(e)}},n.reset=function(){this.value.reset(),this.time.reset()},n.evaluateMomentum=function(){if(!this.enabled||!this.value.hasFilteredDelta)return null;let e=this.value.filteredDelta/this.time.filteredDelta;return e=t.clamp(e,-this.maxVelocity,this.maxVelocity),Math.abs(e)<this.minimumInitialVelocity?null:this.createMomentum(e,this.stopVelocity,this.friction)},n.createMomentum=function(e,t,i){return new l.Momentum(e,t,i)},e}();e.MomentumEstimator=n,Object.defineProperty(e,"__esModule",{value:!0})}));
