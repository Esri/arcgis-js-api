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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all"],(function(n,e,r,t){"use strict";function o(n){return t(n)}function u(n,e){var t=new r(e);return n((function(n){return f(n).then(t.resolve)}),t.reject),t.promise}function i(n){if(n){if("function"!=typeof n.forEach){var e=Object.keys(n);return i(e.map((function(e){return n[e]}))).then((function(n){var r={};return e.forEach((function(e,t){return r[e]=n[t]})),r}))}var r=n,t=null;return u((function(n,e){var o=[],u=r.length;0===u&&n(o),r.forEach((function(r){var i={promise:r};o.push(i),r.then((function(n){i.value=n})).catch((function(n){i.error=n})).then((function(){0===--u&&(t?e(new Error("AbortError")):n(o))}))}))}),(function(n){t=n||"Invocation cancellation",r.forEach((function(e){return e.cancel(n)}))}))}}function c(n){void 0===n&&(n=void 0);var e=new r;return e.resolve(n),e.promise}function f(n){return function(n){return n&&"function"==typeof n.then}(n)?n:c(n)}Object.defineProperty(e,"__esModule",{value:!0}),e.all=o,e.filter=function(n,e){var r=n.slice();return o(n.map((function(n,r){return e(n,r)}))).then((function(n){return r.filter((function(e,r){return n[r]}))}))},e.create=u,e.createDeferred=function(n){var e=null,r=u((function(n,r){e={resolve:n,reject:r}}),n);return e.promise=r,e.cancel=function(){var n=new Error("AbortError");e.reject(n)},e},e.eachAlways=i,e.eachAlwaysValues=function(n){return i(n).then((function(n){return n.filter((function(n){return!!n.value})).map((function(n){return n.value}))}))},e.first=function(n){return n&&n.length?u((function(e,r){for(var t=0,o=n;t<o.length;t++){o[t].then(e,r)}})):c()},e.reject=function(n){var e=new r;return e.reject(n),e.promise},e.resolve=c,e.after=function(n,e){void 0===e&&(e=void 0);var r=0;return u((function(t){r=setTimeout((function(){t(e)}),n)}),(function(){r&&(clearTimeout(r),r=0)}))},e.timeout=function(n,e,t){var o=0;function u(){o&&(clearTimeout(o),o=0)}var i=new r(n.cancel);return n.then((function(n){i.isFulfilled()||(i.resolve(n),u())})),n.catch((function(n){i.isFulfilled()||(i.reject(n),u())})),o=setTimeout((function(){var n=t||new Error("promiseUtils:timeout");i.reject(n)}),e),i.promise},e.wrapCallback=function(n){var e=!1;return u((function(){n((function(n){e||c(n)}))}),(function(){return e=!0}))},e.isPromiseLike=function(n){return n&&"function"==typeof n.then},e.when=f,e.createResolver=function(n){var e,r,t=u((function(n,t){e=n,r=t}),n),o=function(n){e(n)};return o.resolve=function(n){return e(n)},o.reject=function(n){return r(n)},o.promise=t,o}}));