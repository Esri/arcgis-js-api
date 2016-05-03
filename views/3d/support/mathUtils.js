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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["../lib/glMatrix"],function(t){var n=t.vec3d,i=t.mat4d,r=n.create(),e=i.create(),a={deg2rad:function(t){return t*Math.PI/180},rad2deg:function(t){return 180*t/Math.PI},asin:function(t){var n=t>1?1:-1>t?-1:t;return Math.asin(n)},acos:function(t){var n=t>1?1:-1>t?-1:t;return Math.acos(n)},log2:Math.log2||function(t){return Math.log(t)/Math.LN2},fovx2fovy:function(t,n,i){return 2*Math.atan(i*Math.tan(.5*t)/n)},fovy2fovx:function(t,n,i){return 2*Math.atan(n*Math.tan(.5*t)/i)},lerp:function(t,n,i){return t+(n-t)*i},slerp:function(t,a,o,u){u||(u=t);var c=n.length(t),l=n.length(a),f=n.dot(t,a)/c/l;.999999999999>f&&(n.cross(t,a,r),i.identity(e),i.rotate(e,o*Math.acos(f),r),i.multiplyVec3(e,t,u));var s=((1-o)*c+o*l)/c;n.scale(u,s)},slerpOrLerp:function(t,a,o,u,c){var l=n.length(t),f=n.length(a);if(n.cross(t,a,r),n.length(r)/l/f>c){var s=Math.acos(n.dot(t,a)/l/f);i.identity(e),i.rotate(e,o*s,r),i.multiplyVec3(e,t,u);var h=((1-o)*l+o*f)/l;n.scale(u,h)}else n.lerp(t,a,o,u)},clamp:function(t,n,i){return n>t?n:t>i?i:t},isFinite:Number.isFinite||function(t){return"number"==typeof t&&isFinite(t)},isNaN:Number.isNaN||function(t){return t!==t},makePiecewiseLinearFunction:function(t){var n=t.length;return function(i){var r=0;if(i<=t[0][0])return t[0][1];if(i>=t[n-1][0])return t[n-1][1];for(;i>t[r][0];)r++;var e=t[r-1][0],a=t[r][0],o=(a-i)/(a-e);return o*t[r-1][1]+(1-o)*t[r][1]}},vectorEquals:function(t,n){if(null==t||null==n)return t!==n;if(t.length!==n.length)return!1;for(var i=0;i<t.length;i++)if(t[i]!==n[i])return!1;return!0},floatEqualRelative:function(t,n,i){if(void 0===i&&(i=1e-6),isNaN(t)||isNaN(n))return!1;if(t===n)return!0;var r=Math.abs(t-n),e=Math.abs(t),a=Math.abs(n);if(0===t||0===n||1e-12>e&&1e-12>a){if(r>.01*i)return!1}else if(r/(e+a)>i)return!1;return!0},floatEqualAbsolute:function(t,n,i){if(void 0===i&&(i=1e-6),isNaN(t)||isNaN(n))return!1;var r=t>n?t-n:n-t;return i>=r},Cyclical:function(t,n){this.min=t,this.max=n,this.range=n-t,this.ndiff=function(t,n){return n=n||0,Math.ceil((t-n)/this.range)*this.range+n},this._normalize=function(t,n,i,r){return r=r||0,i-=r,t>i?i+=this.ndiff(t-i):i>n&&(i-=this.ndiff(i-n)),i+r},this.normalize=function(t,n){return this._normalize(this.min,this.max,t,n)},this.clamp=function(i,r){return r=r||0,a.clamp(i-r,t,n)+r},this.monotonic=function(t,n,i){return n>t?n:n+this.ndiff(t-n,i)},this.minimalMonotonic=function(t,n,i){return this._normalize(t,t+this.range,n,i)},this.center=function(t,n,i){return n=this.monotonic(t,n,i),this.normalize((t+n)/2,i)},this.diff=function(t,n,i){return this.monotonic(t,n,i)-t},this.contains=function(t,n,i){return n=this.minimalMonotonic(t,n),i=this.minimalMonotonic(t,i),i>t&&n>i}}};return a.cyclical2PI=new a.Cyclical(0,2*Math.PI),a.cyclicalPI=new a.Cyclical(-Math.PI,Math.PI),a.cyclicalDeg=new a.Cyclical(0,360),a});