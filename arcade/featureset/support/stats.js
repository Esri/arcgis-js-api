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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","./shared","./sqlUtils","../../../core/promiseUtils"],function(n,t,e,r,u){function a(n){return n=+n,isFinite(n)?n-n%1||(n<0?-0:0===n?n:0):n}function c(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t/n.length}function i(n){for(var t=c(n),e=0,r=0;r<n.length;r++)e+=Math.pow(t-n[r],2);return e/n.length}function l(n){for(var t=c(n),e=0,r=0;r<n.length;r++)e+=Math.pow(t-n[r],2);return e/(n.length-1)}function o(n){for(var t=0,e=0;e<n.length;e++)t+=n[e];return t}function s(n,t){for(var r=[],u={},a=[],c=0;c<n.length;c++){if(void 0!==n[c]&&null!==n[c]){var i=n[c];if(e.isNumber(i)||e.isString(i))void 0===u[i]&&(r.push(i),u[i]=1);else{for(var l=!1,o=0;o<a.length;o++)!0===e.equalityTest(a[o],i)&&(l=!0);!1===l&&(a.push(i),r.push(i))}}if(r.length>=t&&-1!==t)return r}return r}function h(n){switch(n.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""}function f(n,t,e){switch(void 0===e&&(e=1e3),n.toLowerCase()){case"distinct":return s(t,e);case"avg":case"mean":return c(t);case"min":return Math.min.apply(Math,t);case"sum":return o(t);case"max":return Math.max.apply(Math,t);case"stdev":case"stddev":return Math.sqrt(i(t));case"var":case"variance":return i(t);case"count":return t.length}return 0}function v(n,t,e){return x(n,t,e,!0).then(function(n){return 0===n.length?null:Math.min.apply(Math,n)})}function d(n,t,e){return x(n,t,e,!0).then(function(n){return 0===n.length?null:Math.max.apply(Math,n)})}function g(n,t,e){var u="";return!1===r.isSingleField(t)&&(u=r.predictType(t,n.fields,null)),x(n,t,e,!0).then(function(n){if(0===n.length)return null;var t=c(n);return null===t?t:"integer"===u?a(t):t})}function m(n,t,e){return x(n,t,e,!0).then(function(n){return 0===n.length?null:l(n)})}function p(n,t,e){return x(n,t,e,!0).then(function(n){return 0===n.length?null:Math.sqrt(l(n))})}function M(n,t,e){return x(n,t,e,!0).then(function(n){return 0===n.length?null:o(n)})}function y(n,t){try{return n.iterator(t).count()}catch(n){return u.reject(n)}}function x(n,t,e,r){void 0===r&&(r=!1);try{return w(n.iterator(e),[],t,r)}catch(n){return u.reject(n)}}function w(n,t,e,r){return n.next().then(function(u){if(null!==u){var a=e.calculateValue(u);return null===a?!1===r&&(t[t.length]=a):t[t.length]=a,w(n,t,e,r)}return t})}function q(n,t,e,r){return void 0===e&&(e=1e3),void 0===r&&(r=null),j(n,t,e,r)}function j(n,t,e,r){try{return S(n.iterator(r),{},[],t,e)}catch(n){return u.reject(n)}}function S(n,t,e,r,u){return n.next().then(function(a){if(null!==a){var c=r.calculateValue(a);return void 0!==c&&null!==c&&void 0===t[c]&&(e.push(c),t[c]=1),e.length>=u&&-1!==u?e:S(n,t,e,r,u)}return e})}Object.defineProperty(t,"__esModule",{value:!0}),t.decodeStatType=h,t.calculateStat=f,t.min=v,t.max=d,t.mean=g,t.variance=m,t.stdev=p,t.sum=M,t.count=y,t.distinct=q});