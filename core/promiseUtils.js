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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all","./Error"],function(e,r,n,t,o){function i(e){return t(e)}function u(e){if(e){if("function"!=typeof e.forEach){var r=Object.keys(e),t=r.map(function(r){return e[r]});return u(t).then(function(e){var n={};return r.forEach(function(r,t){return n[r]=e[t]}),n})}var o=e,i=new n,c=[],f=o.length;return 0===f&&i.resolve(c),o.forEach(function(e){var r={promise:e};c.push(r),e.then(function(e){r.value=e}).otherwise(function(e){r.error=e}).then(function(){--f,0===f&&i.resolve(c)})}),i.promise}}function c(e,r){var t=new n(r);return e(function(e){return void 0===e&&(e=null),t.resolve(e)},t.reject),t.promise}function f(e){var r=new n;return r.reject(e),r.promise}function l(e){void 0===e&&(e=null);var r=new n;return r.resolve(e),r.promise}function s(e,r){void 0===r&&(r=null);var t=0,o=new n(function(){t&&(clearTimeout(t),t=0)});return t=setTimeout(function(){o.resolve(r)},e),o.promise}function a(e,r,t){function i(){u&&(clearTimeout(u),u=0)}var u=0,c=new n(e.cancel);return e.then(function(e){c.isFulfilled()||(c.resolve(e),i())}),e.otherwise(function(e){c.isFulfilled()||(c.reject(e),i())}),u=setTimeout(function(){var e=t||new o("promiseUtils:timeout","The wrapped promise did not resolve within "+r+" ms");c.reject(e)},r),c.promise}function v(e){var r=!1,t=new n(function(){return r=!0}),o=function(e){r||t.resolve(e)};return e(o),t.promise}Object.defineProperty(r,"__esModule",{value:!0}),r.all=i,r.eachAlways=u,r.create=c,r.reject=f,r.resolve=l,r.after=s,r.timeout=a,r.wrapCallback=v});