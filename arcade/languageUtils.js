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

define(["require","exports","../geometry/Geometry","../moment","dojo/number","./ImmutableArray","../kernel","./ImmutablePointArray","./ImmutablePathArray","../geometry/Point"],function(e,n,t,r,i,o,a,u,f,c){function l(e,n,t){if(""===n)return e;if(null===n)return e;if(void 0===n)return e;if(n===t)return e;if(n===t)return e;do e=e.replace(n,t);while(-1!==e.indexOf(n));return e}function s(e,n){return void 0===e?n:e}function d(e){return"string"==typeof e||e instanceof String}function x(e){return"boolean"==typeof e}function m(e){return"number"==typeof e}function g(e){return e instanceof Array}function v(e){return e instanceof o}function y(e){return e instanceof Date}function h(e,n,t){if(e.length<n||e.length>t)throw new Error("Function called with wrong number of Parameters")}function p(){var e=(new Date).getTime(),n="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(n){var t=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===n?t:3&t|8).toString(16)});return n}function b(e,n){return isNaN(e)===!1?void 0===n||null===n||""===n?e.toString():(n=l(n,"‰",""),n=l(n,"¤",""),i.format(e,{pattern:n})):e.toString()}function S(e,n){var t=r(e);return void 0===n||null===n||""===n?t.format():t.format(n)}function I(e,t){if(e===t)return!0;if(y(e)&&y(t))return e.getTime()===t.getTime();if(e instanceof f)return e.equalityTest(t);if(e instanceof u)return e.equalityTest(t);if(e instanceof c&&t instanceof c){var r=void 0,i=void 0;if(n.isVersion4?(r=e.cache._arcadeCacheId,i=t.cache._arcadeCacheId):(r=e.getCacheValue("_arcadeCacheId"),i=t.getCacheValue("_arcadeCacheId")),void 0!==r&&null!==r)return r===i}return void 0!==e&&void 0!==t&&null!==e&&null!==t&&"object"==typeof e&&"object"==typeof t&&e._arcadeCacheId===t._arcadeCacheId&&void 0!==e._arcadeCacheId&&null!==e._arcadeCacheId?!0:!1}function T(e,n){return d(e)?e:null===e?"":m(e)?b(e,n):x(e)?e.toString():y(e)?S(e,n):""}function C(e,n){if(d(e))return e;if(null===e)return"";if(m(e))return b(e,n);if(x(e))return e.toString();if(y(e))return S(e,n);if(e instanceof t)return JSON.stringify(e.toJSON());if(g(e)){for(var r=[],i=0;i<e.length;i++)r[i]=N(e[i]);return"["+r.join(",")+"]"}if(e instanceof o){for(var r=[],i=0;i<e.length();i++)r[i]=N(e.get(i));return"["+r.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():""}function N(e){return null===e?"null":x(e)||m(e)||d(e)?JSON.stringify(e):e instanceof t?C(e):e instanceof o?C(e):e instanceof Array?C(e):e instanceof Date?JSON.stringify(e):null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():"null"}function _(e,n){return m(e)?e:null===e?0/0:y(e)?0/0:x(e)?0/0:""===e?0/0:void 0===e?0/0:void 0!==n&&d(e)?(n=l(n,"‰",""),n=l(n,"¤",""),i.parse(e,{pattern:n})):Number(e)}function D(e,n){if(y(e))return e;if(d(e)){var t=r(e,[void 0===n||null===n||""===n?r.ISO_8601:n]);if(t.isValid())return t.toDate()}return null}function w(e,n){if(y(e))return r(e);if(d(e)){var t=r(e,[void 0===n||null===n||""===n?r.ISO_8601:n]);if(t.isValid())return t}return null}function O(e){if(x(e))return e;switch(d(e)&&(e=e.toLowerCase()),e){case!0:case"true":case 1:case"1":case"on":case"yes":return!0;default:return!1}}function j(e,n){return null===e?null:((null===e.spatialReference||void 0===e.spatialReference)&&(e.spatialReference=n),e)}n.isVersion4=0===a.version.indexOf("4."),n.multiReplace=l,n.defaultUndefined=s,n.isString=d,n.isBoolean=x,n.isNumber=m,n.isArray=g,n.isImmutableArray=v,n.isDate=y,n.pcCheck=h,n.generateUUID=p,n.formatNumber=b,n.formatDate=S,n.equalityTest=I,n.toString=T,n.toStringExplicit=C,n.toNumber=_,n.toDate=D,n.toDateM=w,n.toBoolean=O,n.fixSpatialReference=j});