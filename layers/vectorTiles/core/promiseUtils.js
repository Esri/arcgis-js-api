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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all","dojo/when","./Error"],function(e,n,r,t,o,i){function u(e){return t(e)}function c(e,n){var r=e.slice(),t=u(e.map(function(e,r){return n(e,r)}));return t.then(function(e){return r.filter(function(n,r){return e[r]})})}function f(e){if(e){if("function"!=typeof e.forEach){var n=Object.keys(e),t=n.map(function(n){return e[n]});return f(t).then(function(e){var r={};return n.forEach(function(n,t){return r[n]=e[t]}),r})}var o=e,i=new r,u=[],c=o.length;return 0===c&&i.resolve(u),o.forEach(function(e){var n={promise:e};u.push(n),e.then(function(e){n.value=e}).otherwise(function(e){n.error=e}).then(function(){--c,0===c&&i.resolve(u)})}),i.promise}}function l(e,n){var t=new r(n);return e(function(e){return void 0===e&&(e=null),w(e).then(t.resolve)},t.reject),t.promise}function s(e){var n=new r;return n.reject(e),n.promise}function a(e){void 0===e&&(e=null);var n=new r;return n.resolve(e),n.promise}function v(e,n){void 0===n&&(n=null);var t=0,o=new r(function(){t&&(clearTimeout(t),t=0)});return t=setTimeout(function(){o.resolve(n)},e),o.promise}function p(e,n,t){function o(){u&&(clearTimeout(u),u=0)}var u=0,c=new r(e.cancel);return e.then(function(e){c.isFulfilled()||(c.resolve(e),o())}),e.otherwise(function(e){c.isFulfilled()||(c.reject(e),o())}),u=setTimeout(function(){var e=t||new i("promiseUtils:timeout","The wrapped promise did not resolve within "+n+" ms");c.reject(e)},n),c.promise}function h(e){var n=!1,t=new r(function(){return n=!0}),o=function(e){n||t.resolve(e)};return e(o),t.promise}function m(e){return e&&"function"==typeof e.then}function w(e){return o(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.all=u,n.filter=c,n.eachAlways=f,n.create=l,n.reject=s,n.resolve=a,n.after=v,n.timeout=p,n.wrapCallback=h,n.isThenable=m,n.when=w});