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

define(["require","exports","../../languageUtils","./shared","./sqlUtils","../../polyfill/promiseUtils"],(function(t,n,e,r,u,a){"use strict";function c(t){for(var n=0,e=0;e<t.length;e++)n+=t[e];return n/t.length}function i(t){for(var n=c(t),e=0,r=0;r<t.length;r++)e+=Math.pow(n-t[r],2);return e/t.length}function l(t){for(var n=c(t),e=0,r=0;r<t.length;r++)e+=Math.pow(n-t[r],2);return e/(t.length-1)}function s(t){for(var n=0,e=0;e<t.length;e++)n+=t[e];return n}function o(t,n,r,u){void 0===u&&(u=!1);try{var c=t.iterator(r);return a.create((function(t,r){!function t(n,r,u,a,c,i){e.tick(n.next().then((function(e){try{if(null!==e){var l=u.calculateValue(e);return null===l?!1===a&&(r[r.length]=l):r[r.length]=l,t(n,r,u,a,c,i)}c(r)}catch(t){i(t)}}),i))}(c,[],n,u,t,r)}))}catch(t){return a.reject(t)}}Object.defineProperty(n,"__esModule",{value:!0}),n.decodeStatType=function(t){switch(t.toLowerCase()){case"distinct":return"distinct";case"avg":case"mean":return"avg";case"min":return"min";case"sum":return"sum";case"max":return"max";case"stdev":case"stddev":return"stddev";case"var":case"variance":return"var";case"count":return"count"}return""},n.calculateStat=function(t,n,e){switch(void 0===e&&(e=1e3),t.toLowerCase()){case"distinct":return function(t,n){for(var e=[],u={},a=[],c=0;c<t.length;c++){if(void 0!==t[c]&&null!==t[c]){var i=t[c];if(r.isNumber(i)||r.isString(i))void 0===u[i]&&(e.push(i),u[i]=1);else{for(var l=!1,s=0;s<a.length;s++)!0===r.equalityTest(a[s],i)&&(l=!0);!1===l&&(a.push(i),e.push(i))}}if(e.length>=n&&-1!==n)return e}return e}(n,e);case"avg":case"mean":return c(n);case"min":return Math.min.apply(Math,n);case"sum":return s(n);case"max":return Math.max.apply(Math,n);case"stdev":case"stddev":return Math.sqrt(i(n));case"var":case"variance":return i(n);case"count":return n.length}return 0},n.min=function(t,n,e){return o(t,n,e,!0).then((function(t){return 0===t.length?null:Math.min.apply(Math,t)}))},n.max=function(t,n,e){return o(t,n,e,!0).then((function(t){return 0===t.length?null:Math.max.apply(Math,t)}))},n.mean=function(t,n,e){var r="";return!1===u.isSingleField(n)&&(r=u.predictType(n,t.fields,null)),o(t,n,e,!0).then((function(t){if(0===t.length)return null;var n,e=c(t);return null===e?e:"integer"===r?(n=+(n=e),isFinite(n)?n-n%1||(n<0?-0:0===n?n:0):n):e}))},n.variance=function(t,n,e){return o(t,n,e,!0).then((function(t){return 0===t.length?null:l(t)}))},n.stdev=function(t,n,e){return o(t,n,e,!0).then((function(t){return 0===t.length?null:Math.sqrt(l(t))}))},n.sum=function(t,n,e){return o(t,n,e,!0).then((function(t){return 0===t.length?null:s(t)}))},n.count=function(t,n){try{return t.iterator(n).count()}catch(t){return a.reject(t)}},n.distinct=function(t,n,e,r){return void 0===e&&(e=1e3),void 0===r&&(r=null),function(t,n,e,r){try{return function t(n,e,r,u,a){return n.next().then((function(c){if(null!==c){var i=u.calculateValue(c);return null!=i&&void 0===e[i]&&(r.push(i),e[i]=1),r.length>=a&&-1!==a?r:t(n,e,r,u,a)}return r}))}(t.iterator(r),{},[],n,e)}catch(t){return a.reject(t)}}(t,n,e,r)}}));