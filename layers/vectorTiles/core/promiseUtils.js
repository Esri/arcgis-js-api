// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/when","dojo/promise/all","./Error"],(function(e,n,r,t,o,i){function u(e){return o(e)}function c(e){return t(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.all=u,n.filter=function(e,n){var r=e.slice();return u(e.map((function(e,r){return n(e,r)}))).then((function(e){return r.filter((function(n,r){return e[r]}))}))},n.eachAlways=function e(n){if(n){if("function"!=typeof n.forEach){var t=Object.keys(n);return e(t.map((function(e){return n[e]}))).then((function(e){var n={};return t.forEach((function(r,t){return n[r]=e[t]})),n}))}var o=n,i=new r,u=[],c=o.length;return 0===c&&i.resolve(u),o.forEach((function(e){var n={promise:e};u.push(n),e.then((function(e){n.value=e})).catch((function(e){n.error=e})).then((function(){0===--c&&i.resolve(u)}))})),i.promise}},n.create=function(e,n){var t=new r(n);return e((function(e){return void 0===e&&(e=null),c(e).then(t.resolve)}),t.reject),t.promise},n.reject=function(e){var n=new r;return n.reject(e),n.promise},n.resolve=function(e){void 0===e&&(e=null);var n=new r;return n.resolve(e),n.promise},n.after=function(e,n){void 0===n&&(n=null);var t=0,o=new r((function(){t&&(clearTimeout(t),t=0)}));return t=setTimeout((function(){o.resolve(n)}),e),o.promise},n.timeout=function(e,n,t){var o=0;function u(){o&&(clearTimeout(o),o=0)}var c=new r(e.cancel);return e.then((function(e){c.isFulfilled()||(c.resolve(e),u())})),e.catch((function(e){c.isFulfilled()||(c.reject(e),u())})),o=setTimeout((function(){var e=t||new i("promiseUtils:timeout","The wrapped promise did not resolve within "+n+" ms");c.reject(e)}),n),c.promise},n.wrapCallback=function(e){var n=!1,t=new r((function(){return n=!0}));return e((function(e){n||t.resolve(e)})),t.promise},n.isThenable=function(e){return e&&"function"==typeof e.then},n.when=c}));
