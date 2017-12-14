// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix"],function(t,n,e){function r(t){return t*Math.PI/180}function i(t){return 180*t/Math.PI}function o(t){var n=t>1?1:-1>t?-1:t;return Math.asin(n)}function a(t){var n=t>1?1:-1>t?-1:t;return Math.acos(n)}function c(t,n,e){return 2*Math.atan(e*Math.tan(.5*t)/n)}function u(t,n,e){return 2*Math.atan(n*Math.tan(.5*t)/e)}function f(t,n,e){return t+(n-t)*e}function l(t,n,e,r,i,o){var a=t+(n-t)*i,c=e+(r-e)*i;return a+(c-a)*o}function s(t,n,r,i){void 0===i&&(i=t);var o=e.vec3d.length(t),a=e.vec3d.length(n),c=e.vec3d.dot(t,n)/o/a;if(.999999999999>c){e.vec3d.cross(t,n,b),e.mat4d.identity(P),e.mat4d.rotate(P,r*Math.acos(c),b),e.mat4d.multiplyVec3(P,t,i);var u=((1-r)*o+r*a)/o;e.vec3d.scale(i,u)}else e.vec3d.lerp(t,n,r,i);return i}function d(t,n,r,i,o){var a=e.vec3d.length(t),c=e.vec3d.length(n);if(e.vec3d.cross(t,n,b),e.vec3d.length(b)/a/c>o){var u=Math.acos(e.vec3d.dot(t,n)/a/c);e.mat4d.identity(P),e.mat4d.rotate(P,r*u,b),e.mat4d.multiplyVec3(P,t,i);var f=((1-r)*a+r*c)/a;e.vec3d.scale(i,f)}else e.vec3d.lerp(t,n,r,i);return i}function v(t,n,r){t=e.vec3d.normalize(t,x),n=e.vec3d.normalize(n,z);var i=a(e.vec3d.dot(t,n));if(r){var o=e.vec3d.cross(t,n,b);if(e.vec3d.dot(o,r)<0)return-i}return i}function h(t,n,e){return n>t?n:t>e?e:t}function m(t){var n=t.length;return function(e){var r=0;if(e<=t[0][0])return t[0][1];if(e>=t[n-1][0])return t[n-1][1];for(;e>t[r][0];)r++;var i=t[r-1][0],o=t[r][0],a=(o-e)/(o-i);return a*t[r-1][1]+(1-a)*t[r][1]}}function p(t,n){if(null==t||null==n)return t!==n;if(t.length!==n.length)return!1;for(var e=0;e<t.length;e++)if(t[e]!==n[e])return!1;return!0}function M(t,e,r){if(void 0===r&&(r=1e-6),n.isNaN(t)||n.isNaN(e))return!1;if(t===e)return!0;var i=Math.abs(t-e),o=Math.abs(t),a=Math.abs(e);if(0===t||0===e||1e-12>o&&1e-12>a){if(i>.01*r)return!1}else if(i/(o+a)>r)return!1;return!0}function g(t,e,r){if(void 0===r&&(r=1e-6),n.isNaN(t)||n.isNaN(e))return!1;var i=t>e?t-e:e-t;return r>=i}function y(t){for(var n in t){var e=t[n];e instanceof Function&&(t[n]=e.bind(t))}return t}Object.defineProperty(n,"__esModule",{value:!0}),n.deg2rad=r,n.rad2deg=i,n.asin=o,n.acos=a,n.sign=Math.sign||function(t){return+(t>0)-+(0>t)||+t},n.log2=Math.log2||function(t){return Math.log(t)/Math.LN2},n.fovx2fovy=c,n.fovy2fovx=u,n.lerp=f,n.bilerp=l,n.slerp=s,n.slerpOrLerp=d,n.angle=v,n.clamp=h,n.isFinite=Number.isFinite||function(t){return"number"==typeof t&&window.isFinite(t)},n.isNaN=Number.isNaN||function(t){return t!==t},n.makePiecewiseLinearFunction=m,n.vectorEquals=p,n.floatEqualRelative=M,n.floatEqualAbsolute=g;var N=function(){function t(t,n){this.min=t,this.max=n,this.range=n-t}return t.prototype.ndiff=function(t,n){return void 0===n&&(n=0),Math.ceil((t-n)/this.range)*this.range+n},t.prototype._normalize=function(t,n,e,r){return void 0===r&&(r=0),e-=r,t>e?e+=this.ndiff(t-e):e>n&&(e-=this.ndiff(e-n)),e+r},t.prototype.normalize=function(t,n){return this._normalize(this.min,this.max,t,n)},t.prototype.clamp=function(t,n){return void 0===n&&(n=0),h(t-n,this.min,this.max)+n},t.prototype.monotonic=function(t,n,e){return n>t?n:n+this.ndiff(t-n,e)},t.prototype.minimalMonotonic=function(t,n,e){return this._normalize(t,t+this.range,n,e)},t.prototype.center=function(t,n,e){return n=this.monotonic(t,n,e),this.normalize((t+n)/2,e)},t.prototype.diff=function(t,n,e){return this.monotonic(t,n,e)-t},t.prototype.contains=function(t,n,e){return n=this.minimalMonotonic(t,n),e=this.minimalMonotonic(t,e),e>t&&n>e},t}();n.Cyclical=N,n.cyclical2PI=y(new N(0,2*Math.PI)),n.cyclicalPI=y(new N(-Math.PI,Math.PI)),n.cyclicalDeg=y(new N(0,360));var b=e.vec3d.create(),P=e.mat4d.create(),x=e.vec3d.create(),z=e.vec3d.create()});