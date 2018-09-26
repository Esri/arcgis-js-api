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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/number"],function(r){function e(){return void 0===n&&(n=r.format(9999,{places:0}).replace(/9/g,"")),n}var t={};t.populateObject=function(r,e,t){function n(r,e){function o(o){var i=r[o],a=e[o],u=i&&"object"==typeof i,f=a&&"object"==typeof a;void 0!==i&&(void 0===a?e[o]=i:f&&u?n(i,a):t&&(u?(a=e[o]={},n(i,a)):e[o]=r[o]))}if(r&&e&&!(Array.isArray(r)&&!Array.isArray(e)||Array.isArray(e)&&!Array.isArray(r)))if(Array.isArray(r))r.forEach(function(r,e){o(e)});else for(var i in r)o(i)}return n(e,r),r},t.filterByPattern=function(r,e){function t(r,e,n){for(var o in r){var i=e[o];if("object"==typeof r[o]){if(i&&"object"==typeof i){var a=n[o]={};t(r[o],i,a)}}else void 0!==i&&(n[o]=i)}}var n={};return t(e,r,n),n},t.traverseObject=function(r,e){for(var n in r){var o=r[n];e(o),o&&"object"==typeof o&&t.traverseObject(o,e)}},t.copyOwnJsonProperties=function(r,e,t){e=e||{};for(var n in r){var o=r[n];r.hasOwnProperty(n)&&"function"!=typeof o&&(o&&"object"==typeof o&&t&&(o=t(n,o)),void 0!==o&&(e[n]=o))}return e},t.removeUndefinedProperties=function(r){return r&&Object.keys(r).forEach(function(e){void 0===r[e]&&delete r[e]}),r},t.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))};var n;return t.formatNumber=function(t,n){n="number"==typeof n?{places:n}:n||{};var o=n.places,i={};o>=0?i.places=o:o=-1;var a=r.format(t,i);if(n.noSeparator){var u,f=e();if(f)for(;(u=a.indexOf(f))>=0;)a=a.substr(0,u)+a.substr(u+1)}if(n.preserveTrailingZeroes||o<=0||!a)return a;for(var c=a.length;o>0&&"0"==a.charAt(c-1);)c--,--o||c--;return a.substr(0,c)},t.parseNumber=function(e,t,n){if(""===e)return void 0!==n?n:NaN;if(null==e||"string"!=typeof e&&isNaN(e))return NaN;if(e=String(e),!e.trim())return void 0!==n?n:NaN;var o=r.parse(e);return isNaN(o)&&e.trim().length&&(o=Number(e)),isNaN(o)||void 0===t||t<0?o:r.round(o,t)},t.compareEqual=function(r,e,t){return void 0===t?r===e:Number(Number(r).toFixed(t))===Number(Number(e).toFixed(t))},t.objectToTime=function(r){return r?(r="string"==typeof r?new Date(r):r,r.getTime?r.getTime():Number(r)||null):null},t.objectToDate=function(r){return r?r.getTime?r:new Date(r):null},t});