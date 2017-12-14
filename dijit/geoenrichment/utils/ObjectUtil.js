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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/number"],function(r){var e={};return e.populateObject=function(r,e,t){function n(r,e){function o(o){var a=r[o],i=e[o],f=a&&"object"==typeof a,u=i&&"object"==typeof i;void 0!==a&&(void 0===i?e[o]=a:u&&f?n(a,i):t&&(f?(i=e[o]={},n(a,i)):e[o]=r[o]))}if(r&&e&&!(Array.isArray(r)&&!Array.isArray(e)||Array.isArray(e)&&!Array.isArray(r)))if(Array.isArray(r))r.forEach(function(r,e){o(e)});else for(var a in r)o(a)}return n(e,r),r},e.traverseObject=function(r,t){for(var n in r){var o=r[n];t(o),o&&"object"==typeof o&&e.traverseObject(o,t)}},e.copyOwnJsonProperties=function(r,e,t){e=e||{};for(var n in r){var o=r[n];r.hasOwnProperty(n)&&"function"!=typeof o&&(o&&"object"==typeof o&&t&&(o=t(n,o)),void 0!==o&&(e[n]=o))}return e},e.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))},e.formatNumber=function(e,t){t="number"==typeof t?{places:t}:t||{};var n=t.places,o={};n>=0?o.places=n:n=-1;var a=r.format(e,o);if(t.noSeparator){var i,f=r.format(9999,{places:0}).replace(/9/g,"");if(f)for(;(i=a.indexOf(f))>=0;)a=a.substr(0,i)+a.substr(i+1)}if(t.preserveTrailingZeroes||0>=n||!a)return a;for(var u=a.length;n>0&&"0"==a.charAt(u-1);)u--,--n||u--;return a.substr(0,u)},e.parseNumber=function(e,t,n){if(""===e)return"undefined"!=typeof n?n:NaN;if(null==e||"string"!=typeof e&&isNaN(e))return NaN;if(e=String(e),!e.trim())return void 0!==n?n:NaN;var o=r.parse(e);return isNaN(o)&&e.trim().length&&(o=Number(e)),isNaN(o)||void 0===t||0>t?o:r.round(o,t)},e});