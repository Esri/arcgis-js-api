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

define(["require","exports","../../languageUtils","./shared","./sqlUtils","../../polyfill/promiseUtils"],function(t,n,e,r,u,a){"use strict";function c(t){return t=+t,isFinite(t)?t-t%1||(t<0?-0:0===t?t:0):t}function i(t){for(var n=0,e=0;e<t.length;e++)n+=t[e];return n/t.length}function l(t){for(var n=i(t),e=0,r=0;r<t.length;r++)e+=Math.pow(n-t[r],2);return e/t.length}function o(t){for(var n=i(t),e=0,r=0;r<t.length;r++)e+=Math.pow(n-t[r],2);return e/(t.length-1)}function s(t){for(var n=0,e=0;e<t.length;e++)n+=t[e];return n}function h(t,n){for(var e=[],u={},a=[],c=0;c<t.length;c++){if(void 0!==t[c]&&null!==t[c]){var i=t[c];if(r.isNumber(i)||r.isString(i))void 0===u[i]&&(e.push(i),u[i]=1);else{for(var l=!1,o=0;o<a.length;o++)!0===r.equalityTest(a[o],i)&&(l=!0);!1===l&&(a.push(i),e.push(i))}}if(e.length>=n&&-1!==n)return e}return e}function f(t){switch(t.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""}function v(t,n,e){switch(void 0===e&&(e=1e3),t.toLowerCase()){case"distinct":return h(n,e);case"avg":case"mean":return i(n);case"min":return Math.min.apply(Math,n);case"sum":return s(n);case"max":return Math.max.apply(Math,n);case"stdev":case"stddev":return Math.sqrt(l(n));case"var":case"variance":return l(n);case"count":return n.length}return 0}function d(t,n,e){return w(t,n,e,!0).then(function(t){return 0===t.length?null:Math.min.apply(Math,t)})}function g(t,n,e){return w(t,n,e,!0).then(function(t){return 0===t.length?null:Math.max.apply(Math,t)})}function m(t,n,e){var r="";return!1===u.isSingleField(n)&&(r=u.predictType(n,t.fields,null)),w(t,n,e,!0).then(function(t){if(0===t.length)return null;var n=i(t);return null===n?n:"integer"===r?c(n):n})}function p(t,n,e){return w(t,n,e,!0).then(function(t){return 0===t.length?null:o(t)})}function y(t,n,e){return w(t,n,e,!0).then(function(t){return 0===t.length?null:Math.sqrt(o(t))})}function M(t,n,e){return w(t,n,e,!0).then(function(t){return 0===t.length?null:s(t)})}function x(t,n){try{return t.iterator(n).count()}catch(t){return a.reject(t)}}function w(t,n,e,r){void 0===r&&(r=!1);try{var u=t.iterator(e);return a.create(function(t,e){q(u,[],n,r,t,e)})}catch(t){return a.reject(t)}}function q(t,n,r,u,a,c){e.tick(t.next().then(function(e){try{if(null!==e){var i=r.calculateValue(e);return null===i?!1===u&&(n[n.length]=i):n[n.length]=i,q(t,n,r,u,a,c)}a(n)}catch(t){c(t)}},c))}function j(t,n,e,r){return void 0===e&&(e=1e3),void 0===r&&(r=null),S(t,n,e,r)}function S(t,n,e,r){try{return T(t.iterator(r),{},[],n,e)}catch(t){return a.reject(t)}}function T(t,n,e,r,u){return t.next().then(function(a){if(null!==a){var c=r.calculateValue(a);return void 0!==c&&null!==c&&void 0===n[c]&&(e.push(c),n[c]=1),e.length>=u&&-1!==u?e:T(t,n,e,r,u)}return e})}Object.defineProperty(n,"__esModule",{value:!0}),n.decodeStatType=f,n.calculateStat=v,n.min=d,n.max=g,n.mean=m,n.variance=p,n.stdev=y,n.sum=M,n.count=x,n.distinct=j});