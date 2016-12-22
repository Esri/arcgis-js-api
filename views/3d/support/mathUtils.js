// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../lib/glMatrix"],function(n){function t(n){for(var t in n){var i=n[t];"function"==typeof i&&(n[t]=i.bind(n))}return n}var i=n.vec3d,r=n.mat4d,e=i.create(),a=r.create(),o=i.create(),u=i.create(),c={deg2rad:function(n){return n*Math.PI/180},rad2deg:function(n){return 180*n/Math.PI},asin:function(n){var t=n>1?1:-1>n?-1:n;return Math.asin(t)},acos:function(n){var t=n>1?1:-1>n?-1:n;return Math.acos(t)},log2:Math.log2||function(n){return Math.log(n)/Math.LN2},fovx2fovy:function(n,t,i){return 2*Math.atan(i*Math.tan(.5*n)/t)},fovy2fovx:function(n,t,i){return 2*Math.atan(t*Math.tan(.5*n)/i)},lerp:function(n,t,i){return n+(t-n)*i},bilerp:function(n,t,i,r,e,a){var o=n+(t-n)*e,u=i+(r-i)*e;return o+(u-o)*a},slerp:function(n,t,o,u){u||(u=n);var c=i.length(n),f=i.length(t),l=i.dot(n,t)/c/f;.999999999999>l&&(i.cross(n,t,e),r.identity(a),r.rotate(a,o*Math.acos(l),e),r.multiplyVec3(a,n,u));var s=((1-o)*c+o*f)/c;i.scale(u,s)},slerpOrLerp:function(n,t,o,u,c){var f=i.length(n),l=i.length(t);if(i.cross(n,t,e),i.length(e)/f/l>c){var s=Math.acos(i.dot(n,t)/f/l);r.identity(a),r.rotate(a,o*s,e),r.multiplyVec3(a,n,u);var h=((1-o)*f+o*l)/f;i.scale(u,h)}else i.lerp(n,t,o,u)},angle:function(n,t,r){n=i.normalize(n,o),t=i.normalize(t,u);var a=c.acos(i.dot(n,t));if(r){var f=i.cross(n,t,e);if(i.dot(f,r)<0)return-a}return a},clamp:function(n,t,i){return t>n?t:n>i?i:n},isFinite:Number.isFinite||function(n){return"number"==typeof n&&isFinite(n)},isNaN:Number.isNaN||function(n){return n!==n},makePiecewiseLinearFunction:function(n){var t=n.length;return function(i){var r=0;if(i<=n[0][0])return n[0][1];if(i>=n[t-1][0])return n[t-1][1];for(;i>n[r][0];)r++;var e=n[r-1][0],a=n[r][0],o=(a-i)/(a-e);return o*n[r-1][1]+(1-o)*n[r][1]}},vectorEquals:function(n,t){if(null==n||null==t)return n!==t;if(n.length!==t.length)return!1;for(var i=0;i<n.length;i++)if(n[i]!==t[i])return!1;return!0},floatEqualRelative:function(n,t,i){if(void 0===i&&(i=1e-6),isNaN(n)||isNaN(t))return!1;if(n===t)return!0;var r=Math.abs(n-t),e=Math.abs(n),a=Math.abs(t);if(0===n||0===t||1e-12>e&&1e-12>a){if(r>.01*i)return!1}else if(r/(e+a)>i)return!1;return!0},floatEqualAbsolute:function(n,t,i){if(void 0===i&&(i=1e-6),isNaN(n)||isNaN(t))return!1;var r=n>t?n-t:t-n;return i>=r},Cyclical:function(n,t){this.min=n,this.max=t,this.range=t-n,this.ndiff=function(n,t){return t=t||0,Math.ceil((n-t)/this.range)*this.range+t},this._normalize=function(n,t,i,r){return r=r||0,i-=r,n>i?i+=this.ndiff(n-i):i>t&&(i-=this.ndiff(i-t)),i+r},this.normalize=function(n,t){return this._normalize(this.min,this.max,n,t)},this.clamp=function(i,r){return r=r||0,c.clamp(i-r,n,t)+r},this.monotonic=function(n,t,i){return t>n?t:t+this.ndiff(n-t,i)},this.minimalMonotonic=function(n,t,i){return this._normalize(n,n+this.range,t,i)},this.center=function(n,t,i){return t=this.monotonic(n,t,i),this.normalize((n+t)/2,i)},this.diff=function(n,t,i){return this.monotonic(n,t,i)-n},this.contains=function(n,t,i){return t=this.minimalMonotonic(n,t),i=this.minimalMonotonic(n,i),i>n&&t>i}}};return c.cyclical2PI=t(new c.Cyclical(0,2*Math.PI)),c.cyclicalPI=t(new c.Cyclical(-Math.PI,Math.PI)),c.cyclicalDeg=t(new c.Cyclical(0,360)),c});