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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/array"],function(n){var r={},t={},u=t.toString(),e="__ArrayUtil.js_uniqueKey__";return r.arraysEqual=function(n,r){if(!n&&!r)return!0;if(!n||!r)return!1;if(n.length!==r.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0},r.composeIdentityFunction=function(n,r){var t="function"==typeof n?n:n?function(r){return r[n]}:function(n){return n};return function(n){var u=t(n);return u&&u.toString?u.toString():r&&void 0===u?u:String(u)}},r.removeDuplicates=function(t,i){var o=[],f={};return i=r.composeIdentityFunction(i,!0),n.forEach(t,function(n,r){var t=i(n);t===u&&(void 0===n[e]&&(n[e]=e+r),t=n[e]),void 0===t||t in f||(f[t]=n,o.push(n))}),o},r.splitArrayToBunches=function(n,r){r=r||100;for(var t,u=[],e=0,i=n.length;e<i;e++)t&&t.length!==r||(t=[],u.push(t)),t.push(n[e]);return u},r});