// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.NUMBER_MAX_FLOAT32=e.clampFloat32=e.floatEqualAbsolute=e.floatEqualRelative=e.asinClamped=e.acosClamped=e.reciprocalClamped=e.rad2deg=e.deg2rad=e.scale=e.lerp=e.log2=e.sign=e.nextHighestPowerOfTen=e.nextPowerOfTwo=e.isPowerOfTwo=e.glClamp=e.clamp=e.nextHighestPowerOfTwo=e.isNaN=e.isFinite=void 0;var n=new Float32Array(1);function r(t,e,n){return t<e?e:t>n?n:t}function a(t,e,n){return t+(e-t)*n}function i(t){return n[0]=t,n[0]}e.isFinite=Number.isFinite||function(t){return"number"==typeof t&&window.isFinite(t)},e.isNaN=Number.isNaN||function(t){return t!=t},e.nextHighestPowerOfTwo=function(t){--t;for(var e=1;e<32;e<<=1)t|=t>>e;return t+1},e.clamp=r,e.glClamp=function(t,e,n){return Math.min(Math.max(t,e),n)},e.isPowerOfTwo=function(t){return 0==(t&t-1)},e.nextPowerOfTwo=function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},e.nextHighestPowerOfTen=function(t){return Math.pow(10,Math.ceil(Math.LOG10E*Math.log(t)))},e.sign=Math.sign||function(t){return+(t>0)-+(t<0)||+t},e.log2=Math.log2||function(t){return Math.log(t)/Math.LN2},e.lerp=a,e.scale=function(t,e,n,r,i){return a(r,i,(t-e)/(n-e))},e.deg2rad=function(t){return t*Math.PI/180},e.rad2deg=function(t){return 180*t/Math.PI},e.reciprocalClamped=function(t,e){return void 0===e&&(e=1e-6),(t<0?-1:1)/Math.max(Math.abs(t),e)},e.acosClamped=function(t){return Math.acos(r(t,-1,1))},e.asinClamped=function(t){return Math.asin(r(t,-1,1))},e.floatEqualRelative=function(t,n,r){if(void 0===r&&(r=1e-6),e.isNaN(t)||e.isNaN(n))return!1;if(t===n)return!0;var a=Math.abs(t-n),i=Math.abs(t),o=Math.abs(n);if(0===t||0===n||i<1e-12&&o<1e-12){if(a>.01*r)return!1}else if(a/(i+o)>r)return!1;return!0},e.floatEqualAbsolute=function(t,n,r){return void 0===r&&(r=1e-6),!e.isNaN(t)&&!e.isNaN(n)&&(t>n?t-n:n-t)<=r},e.clampFloat32=function(t){return i(Math.max(-e.NUMBER_MAX_FLOAT32,Math.min(t,e.NUMBER_MAX_FLOAT32)))},e.NUMBER_MAX_FLOAT32=i(34028234663852886e22)}));