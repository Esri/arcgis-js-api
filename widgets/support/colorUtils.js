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

define(["require","exports","../../Color"],(function(n,r,t){Object.defineProperty(r,"__esModule",{value:!0});var e=/^#[0-9A-F]{3}$/i,o=/^#[0-9A-F]{6}$/i,u=new t({r:255,g:255,b:255});function i(n){return new t(n)}function a(n){return!!n&&4===n.length&&e.test(n)}function h(n){return!!n&&7===n.length&&o.test(n)}function d(n){return.299*n.r+.587*n.g+.114*n.b>=127}function g(n,r){void 0===r&&(r=1);var e=Math.pow(.7,r);return new t([Math.round(n.r*e),Math.round(n.g*e),Math.round(n.b*e),n.a])}function c(n,r){void 0===r&&(r=1);var e=Math.pow(.7,r),o=30,u=n.r,i=n.g,a=n.b;return u<o&&(u=o),i<o&&(i=o),a<o&&(a=o),new t([Math.min(255,Math.round(u/e)),Math.min(255,Math.round(i/e)),Math.min(255,Math.round(a/e)),n.a])}function f(n,r){var e=n.r,o=n.g,u=n.b,i=n.a;return i<1&&(e=Math.round(i*e+(1-i)*r.r),o=Math.round(i*o+(1-i)*r.g),u=Math.round(i*u+(1-i)*r.b)),new t({r:e,g:o,b:u})}r.equal=function(n,r){return n&&r&&n.r===r.r&&n.g===r.g&&n.b===r.b&&n.a===r.a},r.normalizeHex=function(n){return n?"#"+n.trim().replace(/#/g,"").substr(0,6):""},r.normalizeColor=i,r.isValidHex=function(n){return a(n)||h(n)},r.isShorthandHex=a,r.isLonghandHex=h,r.toHex=function(n){return i(n).toHex()},r.getContrastingColor=function(n){return d(n)?g(n):c(n,3)},r.isBright=d,r.darker=g,r.brighter=c,r.blendWithBackground=f,r.getColorTheme=function(n,r){return void 0===r&&(r=u),d(f(n,r))?"light":"dark"}}));