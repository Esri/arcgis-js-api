// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/promise/all","./Error"],function(n,e,r,t,o){function u(n){return t(n)}function i(n,e){var r=n.slice();return u(n.map(function(n,r){return e(n,r)})).then(function(n){return r.filter(function(e,r){return n[r]})})}function c(n,e){var t=new r(e);return n(function(n){return w(n).then(t.resolve)},t.reject),t.promise}function f(n){var e=null,r=c(function(n,r){e={resolve:n,reject:r}},n);return e.promise=r,e.cancel=function(){var n=new o("AbortError","AbortError");n.dojoType="cancel",e.reject(n)},e}function a(n){if(n){if("function"!=typeof n.forEach){var e=Object.keys(n);return a(e.map(function(e){return n[e]})).then(function(n){var r={};return e.forEach(function(e,t){return r[e]=n[t]}),r})}var r=n,t=null;return c(function(n,e){var u=[],i=r.length;0===i&&n(u),r.forEach(function(r){var c={promise:r};u.push(c),r.then(function(n){c.value=n}).catch(function(n){c.error=n}).then(function(){0===--i&&(t?e(new o("AbortError",t)):n(u))})})},function(n){t=n||"Invocation cancellation",r.forEach(function(e){return e.cancel(n)})})}}function l(n){return a(n).then(function(n){return n.filter(function(n){return!!n.value}).map(function(n){return n.value})})}function s(n){return n&&n.length?c(function(e,r){for(var t=0,o=n;t<o.length;t++){o[t].then(e,r)}}):h()}function v(n){var e=new r;return e.reject(n),e.promise}function h(n){void 0===n&&(n=void 0);var e=new r;return e.resolve(n),e.promise}function p(n,e){void 0===e&&(e=void 0);var r=0;return c(function(t){r=setTimeout(function(){t(e)},n)},function(){r&&(clearTimeout(r),r=0)})}function m(n,e,t){function u(){i&&(clearTimeout(i),i=0)}var i=0,c=new r(n.cancel);return n.then(function(n){c.isFulfilled()||(c.resolve(n),u())}),n.catch(function(n){c.isFulfilled()||(c.reject(n),u())}),i=setTimeout(function(){var n=t||new o("promiseUtils:timeout","The wrapped promise did not resolve within "+e+" ms");c.reject(n)},e),c.promise}function d(n){var e=!1;return c(function(){n(function(n){e||h(n)})},function(){return e=!0})}function j(n){return n&&"function"==typeof n.then}function w(n){return j(n)?n:h(n)}function E(n){var e,r,t=c(function(n,t){e=n,r=t},n),o=function(n){e(n)};return o.resolve=function(n){return e(n)},o.reject=function(n){return r(n)},o.promise=t,o}Object.defineProperty(e,"__esModule",{value:!0}),e.all=u,e.filter=i,e.create=c,e.createDeferred=f,e.eachAlways=a,e.eachAlwaysValues=l,e.first=s,e.reject=v,e.resolve=h,e.after=p,e.timeout=m,e.wrapCallback=d,e.isThenable=j,e.when=w,e.createResolver=E});