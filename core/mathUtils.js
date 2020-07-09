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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports"],(function(n,t){Object.defineProperty(t,"__esModule",{value:!0});var e=new Float32Array(1);function r(n,t,e){return n<t?t:n>e?e:n}function a(n,t,e){return n+(t-n)*e}function i(n){return e[0]=n,e[0]}t.isFinite=Number.isFinite||function(n){return"number"==typeof n&&window.isFinite(n)},t.isNaN=Number.isNaN||function(n){return n!=n},t.nextHighestPowerOfTwo=function(n){--n;for(var t=1;t<32;t<<=1)n|=n>>t;return n+1},t.clamp=r,t.glClamp=function(n,t,e){return Math.min(Math.max(n,t),e)},t.isPowerOfTwo=function(n){return 0==(n&n-1)},t.nextHighestPowerOfTen=function(n){return Math.pow(10,Math.ceil(Math.LOG10E*Math.log(n)))},t.sign=Math.sign||function(n){return+(n>0)-+(n<0)||+n},t.log2=Math.log2||function(n){return Math.log(n)/Math.LN2},t.lerp=a,t.scale=function(n,t,e,r,i){return a(r,i,(n-t)/(e-t))},t.deg2rad=function(n){return n*Math.PI/180},t.rad2deg=function(n){return 180*n/Math.PI},t.reciprocalClamped=function(n,t){return void 0===t&&(t=1e-6),(n<0?-1:1)/Math.max(Math.abs(n),t)},t.acosClamped=function(n){return Math.acos(r(n,-1,1))},t.asinClamped=function(n){return Math.asin(r(n,-1,1))},t.floatEqualRelative=function(n,e,r){if(void 0===r&&(r=1e-6),t.isNaN(n)||t.isNaN(e))return!1;if(n===e)return!0;var a=Math.abs(n-e),i=Math.abs(n),u=Math.abs(e);if(0===n||0===e||i<1e-12&&u<1e-12){if(a>.01*r)return!1}else if(a/(i+u)>r)return!1;return!0},t.floatEqualAbsolute=function(n,e,r){return void 0===r&&(r=1e-6),!t.isNaN(n)&&!t.isNaN(e)&&(n>e?n-e:e-n)<=r},t.clampFloat32=function(n){return i(Math.max(-t.NUMBER_MAX_FLOAT32,Math.min(n,t.NUMBER_MAX_FLOAT32)))},t.NUMBER_MAX_FLOAT32=i(34028234663852886e22)}));