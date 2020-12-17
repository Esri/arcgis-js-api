/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../chunks/_rollupPluginBabelHelpers","./Momentum","./MomentumEstimator"],(function(t,e,o,n){"use strict";let r=function(t){function o(e,o,n){return t.call(this,e,o,n)||this}e._inheritsLoose(o,t);var n=o.prototype;return n.value=function(e){const o=t.prototype.value.call(this,e);return Math.exp(o)},n.valueDelta=function(e,o){const n=t.prototype.value.call(this,e),r=t.prototype.value.call(this,e+o)-n;return Math.exp(r)},o}(o.Momentum),u=function(t){function o(e=2.5,o=.01,n=.95,r=12){return t.call(this,e,o,n,r)||this}e._inheritsLoose(o,t);var n=o.prototype;return n.add=function(e,o){t.prototype.add.call(this,Math.log(e),o)},n.createMomentum=function(t,e,o){return new r(t,e,o)},o}(n.MomentumEstimator);t.ZoomMomentum=r,t.ZoomMomentumEstimator=u,Object.defineProperty(t,"__esModule",{value:!0})}));
