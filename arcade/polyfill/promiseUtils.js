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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all"],(function(e,n,r,t){"use strict";function o(e){return t(e)}function u(e,n){var t=new r(n);return e((function(e){return f(e).then(t.resolve)}),t.reject),t.promise}function i(e){if(e){if("function"!=typeof e.forEach){var n=Object.keys(e);return i(n.map((function(n){return e[n]}))).then((function(e){var r={};return n.forEach((function(n,t){return r[n]=e[t]})),r}))}var r=e,t=null;return u((function(e,n){var o=[],u=r.length;0===u&&e(o),r.forEach((function(r){var i={promise:r};o.push(i),r.then((function(e){i.value=e})).catch((function(e){i.error=e})).then((function(){0===--u&&(t?n(new Error("AbortError")):e(o))}))}))}),(function(e){t=e||"Invocation cancellation",r.forEach((function(n){return n.cancel(e)}))}))}}function c(e){void 0===e&&(e=void 0);var n=new r;return n.resolve(e),n.promise}function f(e){return function(e){return e&&"function"==typeof e.then}(e)?e:c(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.createResolver=n.when=n.isPromiseLike=n.wrapCallback=n.timeout=n.after=n.resolve=n.reject=n.first=n.eachAlwaysValues=n.eachAlways=n.createDeferred=n.create=n.filter=n.all=void 0,n.all=o,n.filter=function(e,n){var r=e.slice();return o(e.map((function(e,r){return n(e,r)}))).then((function(e){return r.filter((function(n,r){return e[r]}))}))},n.create=u,n.createDeferred=function(e){var n=null,r=u((function(e,r){n={resolve:e,reject:r}}),e);return n.promise=r,n.cancel=function(){var e=new Error("AbortError");n.reject(e)},n},n.eachAlways=i,n.eachAlwaysValues=function(e){return i(e).then((function(e){return e.filter((function(e){return!!e.value})).map((function(e){return e.value}))}))},n.first=function(e){return e&&e.length?u((function(n,r){for(var t=0,o=e;t<o.length;t++){o[t].then(n,r)}})):c()},n.reject=function(e){var n=new r;return n.reject(e),n.promise},n.resolve=c,n.after=function(e,n){void 0===n&&(n=void 0);var r=0;return u((function(t){r=setTimeout((function(){t(n)}),e)}),(function(){r&&(clearTimeout(r),r=0)}))},n.timeout=function(e,n,t){var o=0;function u(){o&&(clearTimeout(o),o=0)}var i=new r(e.cancel);return e.then((function(e){i.isFulfilled()||(i.resolve(e),u())})),e.catch((function(e){i.isFulfilled()||(i.reject(e),u())})),o=setTimeout((function(){var e=t||new Error("promiseUtils:timeout");i.reject(e)}),n),i.promise},n.wrapCallback=function(e){var n=!1;return u((function(){e((function(e){n||c(e)}))}),(function(){return n=!0}))},n.isPromiseLike=function(e){return e&&"function"==typeof e.then},n.when=f,n.createResolver=function(e){var n,r,t=u((function(e,t){n=e,r=t}),e),o=function(e){n(e)};return o.resolve=function(e){return n(e)},o.reject=function(e){return r(e)},o.promise=t,o}}));