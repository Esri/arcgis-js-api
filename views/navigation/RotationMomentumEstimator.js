/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./MomentumEstimator"],(function(t,o,e){"use strict";let n=function(t){function e(o=3,e=.01,n=.95,i=12){return t.call(this,o,e,n,i)||this}return o._inheritsLoose(e,t),e.prototype.add=function(o,e){const n=this.value.lastValue;if(null!=n){let t=o-n;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;o=n+t}t.prototype.add.call(this,o,e)},e}(e.MomentumEstimator);t.RotationMomentumEstimator=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
