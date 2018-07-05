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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/array"],function(n){var t={},r={},o=r.toString(),i="__ArrayUtil.js_uniqueKey__";return t.composeIdentityFunction=function(n,t){var r="function"==typeof n?n:n?function(t){return t[n]}:function(n){return n};return function(n){var o=r(n);return o&&o.toString?o.toString():t&&void 0===o?o:String(o)}},t.removeDuplicates=function(r,u){var e=[],c={};return u=t.composeIdentityFunction(u,!0),n.forEach(r,function(n,t){var r=u(n);r===o&&(void 0===n[i]&&(n[i]=i+t),r=n[i]),void 0===r||r in c||(c[r]=n,e.push(n))}),e},t.splitArrayToBunches=function(n,t){t=t||100;for(var r,o=[],i=0,u=n.length;i<u;i++)r&&r.length!==t||(r=[],o.push(r)),r.push(n[i]);return o},t});