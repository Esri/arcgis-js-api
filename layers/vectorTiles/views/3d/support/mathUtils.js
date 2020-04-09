// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","../lib/glMatrix"],(function(n,t,e){function r(n){var t=n>1?1:n<-1?-1:n;return Math.asin(t)}function i(n){var t=n>1?1:n<-1?-1:n;return Math.acos(t)}function a(n,t,e){return n<t?t:n>e?e:n}Object.defineProperty(t,"__esModule",{value:!0}),t.deg2rad=function(n){return n*Math.PI/180},t.rad2deg=function(n){return 180*n/Math.PI},t.asin=r,t.acos=i,t.sign=Math.sign||function(n){return+(n>0)-+(n<0)||+n},t.log2=Math.log2||function(n){return Math.log(n)/Math.LN2},t.fovx2fovy=function(n,t,e){return 2*Math.atan(e*Math.tan(.5*n)/t)},t.fovy2fovx=function(n,t,e){return 2*Math.atan(t*Math.tan(.5*n)/e)},t.makeOrthonormal=function(n,t,r){r=r||n;var i=e.vec3d.dot(n,t);e.vec3d.set3(n[0]-i*t[0],n[1]-i*t[1],n[2]-i*t[2],r),e.vec3d.normalize(r)},t.tangentFrame=function(n,t,r){Math.abs(n[0])>Math.abs(n[1])?e.vec3d.set3(0,1,0,t):e.vec3d.set3(1,0,0,t),e.vec3d.cross(n,t,r),e.vec3d.normalize(t),e.vec3d.cross(r,n,t),e.vec3d.normalize(r)},t.cartesianToSpherical=function(n,t){var i=e.vec3d.length(n),a=r(n[2]/i),o=Math.atan2(n[1]/i,n[0]/i);e.vec3d.set3(i,a,o,t)},t.sphericalToCartesian=function(n,t){var r=n[0],i=n[1],a=n[2],o=Math.cos(i);e.vec3d.set3(r*o*Math.cos(a),r*o*Math.sin(a),r*Math.sin(i),t)},t.lerp=function(n,t,e){return n+(t-n)*e},t.bilerp=function(n,t,e,r,i,a){var o=n+(t-n)*i;return o+(e+(r-e)*i-o)*a},t.slerp=function(n,t,r,i){void 0===i&&(i=n);var a=e.vec3d.length(n),o=e.vec3d.length(t),c=e.vec3d.dot(n,t)/(a*o);if(c<.9999999999999999){var u=Math.acos(c),h=((1-r)*a+r*o)/Math.sin(u),l=h/a*Math.sin((1-r)*u),v=h/o*Math.sin(r*u);return e.vec3d.scale(n,l,f),e.vec3d.scale(t,v,s),e.vec3d.add(f,s,i)}return e.vec3d.lerp(n,t,r,i)},t.angle=function(n,t,r){n=e.vec3d.normalize(n,f),t=e.vec3d.normalize(t,s);var a=i(e.vec3d.dot(n,t));if(r){var o=e.vec3d.cross(n,t,u);if(e.vec3d.dot(o,r)<0)return-a}return a},t.clamp=a,t.isFinite=Number.isFinite||function(n){return"number"==typeof n&&window.isFinite(n)},t.isNaN=Number.isNaN||function(n){return n!=n},t.makePiecewiseLinearFunction=function(n){var t=n.length;return function(e){var r=0;if(e<=n[0][0])return n[0][1];if(e>=n[t-1][0])return n[t-1][1];for(;e>n[r][0];)r++;var i=n[r-1][0],a=n[r][0],o=(a-e)/(a-i);return o*n[r-1][1]+(1-o)*n[r][1]}},t.vectorEquals=function(n,t){if(null==n||null==t)return n!==t;if(n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(n[e]!==t[e])return!1;return!0},t.floatEqualRelative=function(n,e,r){if(void 0===r&&(r=1e-6),t.isNaN(n)||t.isNaN(e))return!1;if(n===e)return!0;var i=Math.abs(n-e),a=Math.abs(n),o=Math.abs(e);if(0===n||0===e||a<1e-12&&o<1e-12){if(i>.01*r)return!1}else if(i/(a+o)>r)return!1;return!0},t.floatEqualAbsolute=function(n,e,r){return void 0===r&&(r=1e-6),!t.isNaN(n)&&!t.isNaN(e)&&(n>e?n-e:e-n)<=r};var o=function(){function n(n,t){this.min=n,this.max=t,this.range=t-n}return n.prototype.ndiff=function(n,t){return void 0===t&&(t=0),Math.ceil((n-t)/this.range)*this.range+t},n.prototype._normalize=function(n,t,e,r){return void 0===r&&(r=0),(e-=r)<n?e+=this.ndiff(n-e):e>t&&(e-=this.ndiff(e-t)),e+r},n.prototype.normalize=function(n,t){return this._normalize(this.min,this.max,n,t)},n.prototype.clamp=function(n,t){return void 0===t&&(t=0),a(n-t,this.min,this.max)+t},n.prototype.monotonic=function(n,t,e){return n<t?t:t+this.ndiff(n-t,e)},n.prototype.minimalMonotonic=function(n,t,e){return this._normalize(n,n+this.range,t,e)},n.prototype.center=function(n,t,e){return t=this.monotonic(n,t,e),this.normalize((n+t)/2,e)},n.prototype.diff=function(n,t,e){return this.monotonic(n,t,e)-n},n.prototype.contains=function(n,t,e){return t=this.minimalMonotonic(n,t),(e=this.minimalMonotonic(n,e))>n&&e<t},n}();function c(n){for(var t in n){var e=n[t];e instanceof Function&&(n[t]=e.bind(n))}return n}t.Cyclical=o,t.cyclical2PI=c(new o(0,2*Math.PI)),t.cyclicalPI=c(new o(-Math.PI,Math.PI)),t.cyclicalDeg=c(new o(0,360));var u=e.vec3d.create(),f=e.vec3d.create(),s=e.vec3d.create()}));