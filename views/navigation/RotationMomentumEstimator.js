/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./MomentumEstimator"],(function(t,e,o){"use strict";let a=function(t){function o(e=3,o=.01,a=.95,i=12){return t.call(this,e,o,a,i)||this}return e._inheritsLoose(o,t),o.prototype.add=function(e,o){if(this.value.hasLastValue){const t=this.value.lastValue;let o=e-t;for(;o>Math.PI;)o-=2*Math.PI;for(;o<-Math.PI;)o+=2*Math.PI;e=t+o}t.prototype.add.call(this,e,o)},o}(o.MomentumEstimator);t.RotationMomentumEstimator=a,Object.defineProperty(t,"__esModule",{value:!0})}));
