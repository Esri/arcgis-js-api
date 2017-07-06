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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/lang","../../Color"],function(n,r){var t={equal:function(n,r){return n&&r&&n.r===r.r&&n.g===r.g&&n.b===r.b&&n.a===r.a},normalizeHex:function(r){return"#"+n.trim(r).replace(/#/g,"").substr(0,6)},normalizeColor:function(n){return new r(n)},isValidHex:function(n){return t.isShorthandHex(n)||t.isLonghandHex(n)},_shortHandHex:/^#[0-9A-F]{3}$/i,isShorthandHex:function(n){return n&&4===n.length&&t._shortHandHex.test(n)},_longhandHex:/^#[0-9A-F]{6}$/i,isLonghandHex:function(n){return n&&7===n.length&&t._longhandHex.test(n)},getContrastingColor:function(n){return t.isBright(n)?this.darker(n):this.brighter(n,3)},isBright:function(n){var r=.299*n.r+.587*n.g+.114*n.b;return r>=127},darker:function(n,t){t=t?t:1;var e=Math.pow(.7,t);return new r([Math.round(n.r*e),Math.round(n.g*e),Math.round(n.b*e),n.a])},brighter:function(n,t){t=t?t:1;var e=Math.pow(.7,t),o=n.r,a=n.g,i=n.b,u=30;return u>o&&(o=u),u>a&&(a=u),u>i&&(i=u),new r([Math.min(255,Math.round(o/e)),Math.min(255,Math.round(a/e)),Math.min(255,Math.round(i/e)),n.a])}};return t});