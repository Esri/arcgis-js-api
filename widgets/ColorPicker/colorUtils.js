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

define(["require","exports","../../Color"],function(n,r,t){function e(n,r){return n&&r&&n.r===r.r&&n.g===r.g&&n.b===r.b&&n.a===r.a}function o(n){return n?"#"+n.trim().replace(/#/g,"").substr(0,6):""}function i(n){return new t(n)}function u(n){return a(n)||h(n)}function a(n){return n&&4===n.length&&l.test(n)}function h(n){return n&&7===n.length&&s.test(n)}function c(n){return i(n).toHex()}function d(n){return f(n)?g(n):M(n,3)}function f(n){var r=.299*n.r+.587*n.g+.114*n.b;return r>=127}function g(n,r){void 0===r&&(r=1);var e=Math.pow(.7,r);return new t([Math.round(n.r*e),Math.round(n.g*e),Math.round(n.b*e),n.a])}function M(n,r){void 0===r&&(r=1);var e=Math.pow(.7,r),o=n.r,i=n.g,u=n.b,a=30;return a>o&&(o=a),a>i&&(i=a),a>u&&(u=a),new t([Math.min(255,Math.round(o/e)),Math.min(255,Math.round(i/e)),Math.min(255,Math.round(u/e)),n.a])}var l=/^#[0-9A-F]{3}$/i,s=/^#[0-9A-F]{6}$/i;r.equal=e,r.normalizeHex=o,r.normalizeColor=i,r.isValidHex=u,r.isShorthandHex=a,r.isLonghandHex=h,r.toHex=c,r.getContrastingColor=d,r.isBright=f,r.darker=g,r.brighter=M});