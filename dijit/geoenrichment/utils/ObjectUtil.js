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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/number"],function(r){function e(){return void 0===o&&(o=r.format(9999,{places:0}).replace(/9/g,"")),o}var t={};t.populateObject=function(r,e,t){function o(r,e){function n(n){var a=r[n],i=e[n],f=a&&"object"==typeof a,u=i&&"object"==typeof i;void 0!==a&&(void 0===i?e[n]=a:u&&f?o(a,i):t&&(f?(i=e[n]={},o(a,i)):e[n]=r[n]))}if(r&&e&&!(Array.isArray(r)&&!Array.isArray(e)||Array.isArray(e)&&!Array.isArray(r)))if(Array.isArray(r))r.forEach(function(r,e){n(e)});else for(var a in r)n(a)}return o(e,r),r},t.filterByPattern=function(r,e){function t(r,e,o){for(var n in r){var a=e[n];if("object"==typeof r[n]){if(a&&"object"==typeof a){var i=o[n]={};t(r[n],a,i)}}else void 0!==a&&(o[n]=a)}}var o={};return t(e,r,o),o},t.traverseObject=function(r,e){for(var o in r){var n=r[o];e(n),n&&"object"==typeof n&&t.traverseObject(n,e)}},t.copyOwnJsonProperties=function(r,e,t){e=e||{};for(var o in r){var n=r[o];r.hasOwnProperty(o)&&"function"!=typeof n&&(n&&"object"==typeof n&&t&&(n=t(o,n)),void 0!==n&&(e[o]=n))}return e},t.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))};var o;return t.formatNumber=function(t,o){o="number"==typeof o?{places:o}:o||{};var n=o.places,a={};n>=0?a.places=n:n=-1;var i=r.format(t,a);if(o.noSeparator){var f,u=e();if(u)for(;(f=i.indexOf(u))>=0;)i=i.substr(0,f)+i.substr(f+1)}if(o.preserveTrailingZeroes||n<=0||!i)return i;for(var c=i.length;n>0&&"0"==i.charAt(c-1);)c--,--n||c--;return i.substr(0,c)},t.parseNumber=function(e,t,o){if(""===e)return void 0!==o?o:NaN;if(null==e||"string"!=typeof e&&isNaN(e))return NaN;if(e=String(e),!e.trim())return void 0!==o?o:NaN;var n=r.parse(e);return isNaN(n)&&e.trim().length&&(n=Number(e)),isNaN(n)||void 0===t||t<0?n:r.round(n,t)},console.log("Current locale number: "+t.formatNumber(100000.123,{places:3})),t});