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

define(["require","exports","dojo/Deferred","dojo/promise/all"],function(n,e,r,t){"use strict";function o(n){return t(n)}function u(n,e){var r=n.slice();return o(n.map(function(n,r){return e(n,r)})).then(function(n){return r.filter(function(e,r){return n[r]})})}function i(n,e){var t=new r(e);return n(function(n){return w(n).then(t.resolve)},t.reject),t.promise}function c(n){var e=null,r=i(function(n,r){e={resolve:n,reject:r}},n);return e.promise=r,e.cancel=function(){var n=new Error("AbortError");e.reject(n)},e}function f(n){if(n){if("function"!=typeof n.forEach){var e=Object.keys(n);return f(e.map(function(e){return n[e]})).then(function(n){var r={};return e.forEach(function(e,t){return r[e]=n[t]}),r})}var r=n,t=null;return i(function(n,e){var o=[],u=r.length;0===u&&n(o),r.forEach(function(r){var i={promise:r};o.push(i),r.then(function(n){i.value=n}).catch(function(n){i.error=n}).then(function(){0===--u&&(t?e(new Error("AbortError")):n(o))})})},function(n){t=n||"Invocation cancellation",r.forEach(function(e){return e.cancel(n)})})}}function a(n){return f(n).then(function(n){return n.filter(function(n){return!!n.value}).map(function(n){return n.value})})}function l(n){return n&&n.length?i(function(e,r){for(var t=0,o=n;t<o.length;t++){o[t].then(e,r)}}):v()}function s(n){var e=new r;return e.reject(n),e.promise}function v(n){void 0===n&&(n=void 0);var e=new r;return e.resolve(n),e.promise}function h(n,e){void 0===e&&(e=void 0);var r=0;return i(function(t){r=setTimeout(function(){t(e)},n)},function(){r&&(clearTimeout(r),r=0)})}function p(n,e,t){function o(){u&&(clearTimeout(u),u=0)}var u=0,i=new r(n.cancel);return n.then(function(n){i.isFulfilled()||(i.resolve(n),o())}),n.catch(function(n){i.isFulfilled()||(i.reject(n),o())}),u=setTimeout(function(){var n=t||new Error("promiseUtils:timeout");i.reject(n)},e),i.promise}function m(n){var e=!1;return i(function(){n(function(n){e||v(n)})},function(){return e=!0})}function d(n){return n&&"function"==typeof n.then}function j(n){return n&&"function"==typeof n.then}function w(n){return j(n)?n:v(n)}function E(n){var e,r,t=i(function(n,t){e=n,r=t},n),o=function(n){e(n)};return o.resolve=function(n){return e(n)},o.reject=function(n){return r(n)},o.promise=t,o}Object.defineProperty(e,"__esModule",{value:!0}),e.all=o,e.filter=u,e.create=i,e.createDeferred=c,e.eachAlways=f,e.eachAlwaysValues=a,e.first=l,e.reject=s,e.resolve=v,e.after=h,e.timeout=p,e.wrapCallback=m,e.isThenable=d,e.when=w,e.createResolver=E});