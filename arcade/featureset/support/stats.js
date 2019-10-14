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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["require","exports","./shared","./sqlUtils","../../polyfill/promiseUtils"],function(t,n,e,r,u){"use strict";function a(t){return t=+t,isFinite(t)?t-t%1||(t<0?-0:0===t?t:0):t}function i(t){for(var n=0,e=0;e<t.length;e++)n+=t[e];return n/t.length}function c(t){for(var n=i(t),e=0,r=0;r<t.length;r++)e+=Math.pow(n-t[r],2);return e/t.length}function l(t){for(var n=i(t),e=0,r=0;r<t.length;r++)e+=Math.pow(n-t[r],2);return e/(t.length-1)}function o(t){for(var n=0,e=0;e<t.length;e++)n+=t[e];return n}function s(t,n){for(var r=[],u={},a=[],i=0;i<t.length;i++){if(void 0!==t[i]&&null!==t[i]){var c=t[i];if(e.isNumber(c)||e.isString(c))void 0===u[c]&&(r.push(c),u[c]=1);else{for(var l=!1,o=0;o<a.length;o++)!0===e.equalityTest(a[o],c)&&(l=!0);!1===l&&(a.push(c),r.push(c))}}if(r.length>=n&&-1!==n)return r}return r}function h(t){switch(t.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""}function f(t,n,e){switch(void 0===e&&(e=1e3),t.toLowerCase()){case"distinct":return s(n,e);case"avg":case"mean":return i(n);case"min":return Math.min.apply(Math,n);case"sum":return o(n);case"max":return Math.max.apply(Math,n);case"stdev":case"stddev":return Math.sqrt(c(n));case"var":case"variance":return c(n);case"count":return n.length}return 0}function v(t,n,e){return x(t,n,e,!0).then(function(t){return 0===t.length?null:Math.min.apply(Math,t)})}function d(t,n,e){return x(t,n,e,!0).then(function(t){return 0===t.length?null:Math.max.apply(Math,t)})}function g(t,n,e){var u="";return!1===r.isSingleField(n)&&(u=r.predictType(n,t.fields,null)),x(t,n,e,!0).then(function(t){if(0===t.length)return null;var n=i(t);return null===n?n:"integer"===u?a(n):n})}function m(t,n,e){return x(t,n,e,!0).then(function(t){return 0===t.length?null:l(t)})}function p(t,n,e){return x(t,n,e,!0).then(function(t){return 0===t.length?null:Math.sqrt(l(t))})}function M(t,n,e){return x(t,n,e,!0).then(function(t){return 0===t.length?null:o(t)})}function y(t,n){try{return t.iterator(n).count()}catch(t){return u.reject(t)}}function x(t,n,e,r){void 0===r&&(r=!1);try{return w(t.iterator(e),[],n,r)}catch(t){return u.reject(t)}}function w(t,n,e,r){return t.next().then(function(u){if(null!==u){var a=e.calculateValue(u);return null===a?!1===r&&(n[n.length]=a):n[n.length]=a,w(t,n,e,r)}return n})}function q(t,n,e,r){return void 0===e&&(e=1e3),void 0===r&&(r=null),j(t,n,e,r)}function j(t,n,e,r){try{return S(t.iterator(r),{},[],n,e)}catch(t){return u.reject(t)}}function S(t,n,e,r,u){return t.next().then(function(a){if(null!==a){var i=r.calculateValue(a);return void 0!==i&&null!==i&&void 0===n[i]&&(e.push(i),n[i]=1),e.length>=u&&-1!==u?e:S(t,n,e,r,u)}return e})}Object.defineProperty(n,"__esModule",{value:!0}),n.decodeStatType=h,n.calculateStat=f,n.min=v,n.max=d,n.mean=g,n.variance=m,n.stdev=p,n.sum=M,n.count=y,n.distinct=q});