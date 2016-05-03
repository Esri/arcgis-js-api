// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","./Error"],function(e,r,n,o){function t(e){var r=new n,o=[],t=e.length;return 0===t&&r.resolve(o),e.forEach(function(e){var n={promise:e};o.push(n),e.then(function(e){n.value=e}).otherwise(function(e){n.error=e}).then(function(){--t,0===t&&r.resolve(o)})}),r.promise}function i(e){var r=new n;return r.reject(e),r.promise}function u(e){void 0===e&&(e=null);var r=new n;return r.resolve(e),r.promise}function c(e,r){void 0===r&&(r=null);var o=0,t=new n(function(){o&&(clearTimeout(o),o=0)});return o=setTimeout(function(){t.resolve(r)},e),t.promise}function s(e,r,t){function i(){u&&(clearTimeout(u),u=0)}var u=0,c=new n(e.cancel);return e.then(function(e){c.isFulfilled()||(c.resolve(e),i())}),e.otherwise(function(e){c.isFulfilled()||(c.reject(e),i())}),u=setTimeout(function(){var e=t||new o("promiseUtils:timeout","The wrapped promise did not resolve within "+r+" ms");c.reject(e)},r),c.promise}r.eachAlways=t,r.reject=i,r.resolve=u,r.after=c,r.timeout=s});