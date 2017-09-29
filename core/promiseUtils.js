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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all","./Error"],function(e,n,r,t,o){function i(e){return t(e)}function u(e,n){var r=e.slice(),t=i(e.map(function(e,r){return n(e,r)}));return t.then(function(e){return r.filter(function(n,r){return e[r]})})}function c(e){if(e){if("function"!=typeof e.forEach){var n=Object.keys(e),t=n.map(function(n){return e[n]});return c(t).then(function(e){var r={};return n.forEach(function(n,t){return r[n]=e[t]}),r})}var o=e,i=new r,u=[],f=o.length;return 0===f&&i.resolve(u),o.forEach(function(e){var n={promise:e};u.push(n),e.then(function(e){n.value=e}).otherwise(function(e){n.error=e}).then(function(){--f,0===f&&i.resolve(u)})}),i.promise}}function f(e,n){var t=new r(n);return e(function(e){return void 0===e&&(e=null),t.resolve(e)},t.reject),t.promise}function l(e){var n=new r;return n.reject(e),n.promise}function s(e){void 0===e&&(e=null);var n=new r;return n.resolve(e),n.promise}function a(e,n){void 0===n&&(n=null);var t=0,o=new r(function(){t&&(clearTimeout(t),t=0)});return t=setTimeout(function(){o.resolve(n)},e),o.promise}function v(e,n,t){function i(){u&&(clearTimeout(u),u=0)}var u=0,c=new r(e.cancel);return e.then(function(e){c.isFulfilled()||(c.resolve(e),i())}),e.otherwise(function(e){c.isFulfilled()||(c.reject(e),i())}),u=setTimeout(function(){var e=t||new o("promiseUtils:timeout","The wrapped promise did not resolve within "+n+" ms");c.reject(e)},n),c.promise}function m(e){var n=!1,t=new r(function(){return n=!0}),o=function(e){n||t.resolve(e)};return e(o),t.promise}Object.defineProperty(n,"__esModule",{value:!0}),n.all=i,n.filter=u,n.eachAlways=c,n.create=f,n.reject=l,n.resolve=s,n.after=a,n.timeout=v,n.wrapCallback=m});