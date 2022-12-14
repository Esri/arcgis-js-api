/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./MomentumEstimator"],(function(t,e,o){"use strict";let n=function(t){function o(e=3,o=.01,n=.95,i=12){return t.call(this,e,o,n,i)||this}return e._inheritsLoose(o,t),o.prototype.add=function(e,o){const n=this.value.lastValue;if(null!=n){let t=e-n;for(;t>Math.PI;)t-=2*Math.PI;for(;t<-Math.PI;)t+=2*Math.PI;e=n+t}t.prototype.add.call(this,e,o)},o}(o.MomentumEstimator);t.RotationMomentumEstimator=n,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
