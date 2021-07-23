// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

define(["dojo/_base/array"],(function(n){var r={},t={}.toString(),u="__ArrayUtil.js_uniqueKey__";return r.arraysEqual=function(n,r){if(!n&&!r)return!0;if(!n||!r)return!1;if(n.length!==r.length)return!1;for(var t=0;t<n.length;t++)if(n[t]!==r[t])return!1;return!0},r.composeIdentityFunction=function(n,r){var t="function"==typeof n?n:n?function(r){return r[n]}:function(n){return n};return function(n){var u=t(n);return u&&u.toString?u.toString():r&&void 0===u?u:String(u)}},r.removeDuplicates=function(e,i){var o=[],f={};return i=r.composeIdentityFunction(i,!0),n.forEach(e,(function(n,r){var e=i(n);e===t&&(void 0===n[u]&&(n[u]=u+r),e=n[u]),void 0===e||e in f||(f[e]=n,o.push(n))})),o},r.splitArrayToBunches=function(n,r){r=r||100;for(var t,u=[],e=0,i=n.length;e<i;e++)t&&t.length!==r||(t=[],u.push(t)),t.push(n[e]);return u},r}));