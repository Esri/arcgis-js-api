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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","./Error"],function(e,n,r,t){function o(e){if(e){if("function"!=typeof e.forEach){var n=Object.keys(e),t=n.map(function(n){return e[n]});return o(t).then(function(e){var r={};return n.forEach(function(n,t){return r[n]=e[t]}),r})}var i=e,u=new r,c=[],f=i.length;return 0===f&&u.resolve(c),i.forEach(function(e){var n={promise:e};c.push(n),e.then(function(e){n.value=e}).otherwise(function(e){n.error=e}).then(function(){--f,0===f&&u.resolve(c)})}),u.promise}}function i(e){var n=new r;return e(function(e){return void 0===e&&(e=null),n.resolve(e)},n.reject),n.promise}function u(e){var n=new r;return n.reject(e),n.promise}function c(e){void 0===e&&(e=null);var n=new r;return n.resolve(e),n.promise}function f(e,n){void 0===n&&(n=null);var t=0,o=new r(function(){t&&(clearTimeout(t),t=0)});return t=setTimeout(function(){o.resolve(n)},e),o.promise}function s(e,n,o){function i(){u&&(clearTimeout(u),u=0)}var u=0,c=new r(e.cancel);return e.then(function(e){c.isFulfilled()||(c.resolve(e),i())}),e.otherwise(function(e){c.isFulfilled()||(c.reject(e),i())}),u=setTimeout(function(){var e=o||new t("promiseUtils:timeout","The wrapped promise did not resolve within "+n+" ms");c.reject(e)},n),c.promise}function l(e){var n=!1,t=new r(function(){return n=!0}),o=function(e){n||t.resolve(e)};return e(o),t.promise}n.eachAlways=o,n.create=i,n.reject=u,n.resolve=c,n.after=f,n.timeout=s,n.wrapCallback=l});