// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports"],function(n,t){function e(n){--n;for(var t=1;t<32;t<<=1)n|=n>>t;return n+1}function r(n,t,e){return n<t?t:n>e?e:n}function i(n){return 0==(n&n-1)}function a(n){return Math.pow(10,Math.ceil(Math.LOG10E*Math.log(n)))}function u(n,t,e){return n+(t-n)*e}function o(n){return n*Math.PI/180}function f(n){return 180*n/Math.PI}function s(n){return Math.acos(r(n,-1,1))}function c(n){return Math.asin(r(n,-1,1))}function M(n,e,r){if(void 0===r&&(r=1e-6),t.isNaN(n)||t.isNaN(e))return!1;if(n===e)return!0;var i=Math.abs(n-e),a=Math.abs(n),u=Math.abs(e);if(0===n||0===e||a<1e-12&&u<1e-12){if(i>.01*r)return!1}else if(i/(a+u)>r)return!1;return!0}function l(n,e,r){return void 0===r&&(r=1e-6),!t.isNaN(n)&&!t.isNaN(e)&&(n>e?n-e:e-n)<=r}function h(n){return N(Math.max(-t.NUMBER_MAX_FLOAT32,Math.min(n,t.NUMBER_MAX_FLOAT32)))}function N(n){return d[0]=n,d[0]}Object.defineProperty(t,"__esModule",{value:!0});var d=new Float32Array(1);t.isFinite=Number.isFinite||function(n){return"number"==typeof n&&window.isFinite(n)},t.isNaN=Number.isNaN||function(n){return n!==n},t.nextHighestPowerOfTwo=e,t.clamp=r,t.isPowerOfTwo=i,t.nextHighestPowerOfTen=a,t.sign=Math.sign||function(n){return+(n>0)-+(n<0)||+n},t.log2=Math.log2||function(n){return Math.log(n)/Math.LN2},t.lerp=u,t.deg2rad=o,t.rad2deg=f,t.acosClamped=s,t.asinClamped=c,t.floatEqualRelative=M,t.floatEqualAbsolute=l,t.clampFloat32=h,t.NUMBER_MAX_FLOAT32=N(3.4028234663852886e38)});