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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","./shared","../../polyfill/promiseUtils"],function(n,t,e,r){"use strict";function u(n){return n=+n,isFinite(n)?n-n%1||(n<0?-0:0===n?n:0):n}function a(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t/n.length}function c(n){for(var t=a(n),e=0,r=0;r<n.length;r++)e+=Math.pow(t-n[r],2);return e/n.length}function i(n){for(var t=a(n),e=0,r=0;r<n.length;r++)e+=Math.pow(t-n[r],2);return e/(n.length-1)}function l(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function o(n,t){for(var r=[],u={},a=[],c=0;c<n.length;c++){if(void 0!==n[c]&&null!==n[c]){var i=n[c];if(e.isNumber(i)||e.isString(i))void 0===u[i]&&(r.push(i),u[i]=1);else{for(var l=!1,o=0;o<a.length;o++)!0===e.equalityTest(a[o],i)&&(l=!0);!1===l&&(a.push(i),r.push(i))}}if(r.length>=t&&-1!==t)return r}return r}function s(n){switch(n.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""}function h(n,t,e){switch(void 0===e&&(e=1e3),n.toLowerCase()){case"distinct":return o(t,e);case"avg":case"mean":return a(t);case"min":return Math.min.apply(Math,t);case"sum":return l(t);case"max":return Math.max.apply(Math,t);case"stdev":case"stddev":return Math.sqrt(c(t));case"var":case"variance":return c(t);case"count":return t.length}return 0}function f(n,t,e){return y(n,t,e,!0).then(function(n){return 0===n.length?null:Math.min.apply(Math,n)})}function v(n,t,e){return y(n,t,e,!0).then(function(n){return 0===n.length?null:Math.max.apply(Math,n)})}function d(n,t,e){var r="";return!1===t.isSingleField()&&(r=t.predictType(n.fields,null)),y(n,t,e,!0).then(function(n){if(0===n.length)return null;var t=a(n);return null===t?t:"integer"===r?u(t):t})}function g(n,t,e){return y(n,t,e,!0).then(function(n){return 0===n.length?null:i(n)})}function m(n,t,e){return y(n,t,e,!0).then(function(n){return 0===n.length?null:Math.sqrt(i(n))})}function p(n,t,e){return y(n,t,e,!0).then(function(n){return 0===n.length?null:l(n)})}function M(n,t){try{return n.iterator(t).count()}catch(n){return r.reject(n)}}function y(n,t,e,u){void 0===u&&(u=!1);try{return x(n.iterator(e),[],t,u)}catch(n){return r.reject(n)}}function x(n,t,e,r){return n.next().then(function(u){return null!==u?e.calculateValueDeferred(u).then(function(u){return null===u?!1===r&&(t[t.length]=u):t[t.length]=u,x(n,t,e,r)}):t})}function w(n,t,e,r){return void 0===e&&(e=1e3),void 0===r&&(r=null),j(n,t,e,r)}function j(n,t,e,u){try{return q(n.iterator(u),{},[],t,e)}catch(n){return r.reject(n)}}function q(n,t,e,r,u){return n.next().then(function(a){return null!==a?r.calculateValueDeferred(a).then(function(a){return void 0!==a&&null!==a&&void 0===t[a]&&(e.push(a),t[a]=1),e.length>=u&&-1!==u?e:q(n,t,e,r,u)}):e})}Object.defineProperty(t,"__esModule",{value:!0}),t.decodeStatType=s,t.calculateStat=h,t.min=f,t.max=v,t.mean=d,t.variance=g,t.stdev=m,t.sum=p,t.count=M,t.distinct=w});