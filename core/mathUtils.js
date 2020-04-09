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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(t,n){Object.defineProperty(n,"__esModule",{value:!0});var e=new Float32Array(1);function r(t,n,e){return t<n?n:t>e?e:t}function a(t){return e[0]=t,e[0]}n.isFinite=Number.isFinite||function(t){return"number"==typeof t&&window.isFinite(t)},n.isNaN=Number.isNaN||function(t){return t!=t},n.nextHighestPowerOfTwo=function(t){--t;for(var n=1;n<32;n<<=1)t|=t>>n;return t+1},n.clamp=r,n.glClamp=function(t,n,e){return Math.min(Math.max(t,n),e)},n.isPowerOfTwo=function(t){return 0==(t&t-1)},n.nextHighestPowerOfTen=function(t){return Math.pow(10,Math.ceil(Math.LOG10E*Math.log(t)))},n.sign=Math.sign||function(t){return+(t>0)-+(t<0)||+t},n.log2=Math.log2||function(t){return Math.log(t)/Math.LN2},n.lerp=function(t,n,e){return t+(n-t)*e},n.deg2rad=function(t){return t*Math.PI/180},n.rad2deg=function(t){return 180*t/Math.PI},n.reciprocalClamped=function(t,n){return void 0===n&&(n=1e-6),(t<0?-1:1)/Math.max(Math.abs(t),n)},n.acosClamped=function(t){return Math.acos(r(t,-1,1))},n.asinClamped=function(t){return Math.asin(r(t,-1,1))},n.floatEqualRelative=function(t,e,r){if(void 0===r&&(r=1e-6),n.isNaN(t)||n.isNaN(e))return!1;if(t===e)return!0;var a=Math.abs(t-e),i=Math.abs(t),u=Math.abs(e);if(0===t||0===e||i<1e-12&&u<1e-12){if(a>.01*r)return!1}else if(a/(i+u)>r)return!1;return!0},n.floatEqualAbsolute=function(t,e,r){return void 0===r&&(r=1e-6),!n.isNaN(t)&&!n.isNaN(e)&&(t>e?t-e:e-t)<=r},n.clampFloat32=function(t){return a(Math.max(-n.NUMBER_MAX_FLOAT32,Math.min(t,n.NUMBER_MAX_FLOAT32)))},n.NUMBER_MAX_FLOAT32=a(34028234663852886e22)}));