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

define(["dojo/number"],function(r){function e(){return void 0===n&&(n=r.format(9999,{places:0}).replace(/9/g,"")),n}var t={};Math.log10=Math.log10||function(r){return Math.log(r)*Math.LOG10E},t.populateObject=function(r,e,t){function n(r,e){function a(a){var o=r[a],i=e[a],u=o&&"object"==typeof o,f=i&&"object"==typeof i;void 0!==o&&(void 0===i?e[a]=o:f&&u?n(o,i):t&&(u?(i=e[a]={},n(o,i)):e[a]=r[a]))}if(r&&e&&!(Array.isArray(r)&&!Array.isArray(e)||Array.isArray(e)&&!Array.isArray(r)))if(Array.isArray(r))r.forEach(function(r,e){a(e)});else for(var o in r)a(o)}return n(e,r),r},t.filterByPattern=function(r,e){function t(r,e,n){for(var a in r){var o=r[a],i=e[a];if(Array.isArray(o)){var u=o[0];if(i&&Array.isArray(i)){var f=n[a]=[];i.forEach(function(r){if(r&&"object"==typeof r){var e=Array.isArray(r)?[]:{};t(u,r,e),f.push(e)}})}}else if("object"==typeof o){if(i&&"object"==typeof i){var c=n[a]={};t(o,i,c)}}else void 0!==i&&(n[a]=i)}}var n={};return t(e,r,n),n},t.traverseObject=function(r,e){for(var n in r){var a=r[n];e(a),a&&"object"==typeof a&&t.traverseObject(a,e)}},t.copyOwnJsonProperties=function(r,e,t){e=e||{};for(var n in r){var a=r[n];r.hasOwnProperty(n)&&"function"!=typeof a&&(a&&"object"==typeof a&&t&&(a=t(n,a)),void 0!==a&&(e[n]=a))}return e},t.removeUndefinedProperties=function(r){return r&&Object.keys(r).forEach(function(e){void 0===r[e]&&delete r[e]}),r},t.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))},t.getBestPrecision=function(r){return 0===r?0:Math.max(0,Math.round(Math.log10(3e3/Math.abs(r))))},t.getPlaces=function(r,e){function t(e,t){var o=r.indexOf(e,n);if(o<0)return a;var i=r.charAt(o+e.length);return!i||t.indexOf(i)<0?a:o-n}if(r=+r,isNaN(r))return-1;r+="";var n=r.indexOf(".")+1,a=n?r.length-n:0;if(a<=2||!e)return a;var o=0;if(!+r.substr(0,n-1))for(;"0"===r.charAt(n);)n++,o++,a--;for(var i=a-1;i>=2;i--){var u=Math.min(t("000000000000000".substr(0,i),"01234"),t("999999999999999".substr(0,i),"56789"));if(u!==a){a=u;break}}return a+o},t.formatNumber=function(t,n){n="number"==typeof n?{places:n}:n||{};var a=n.places,o={};a>=0?o.places=a:a=-1;var i=r.format(t,o);if(n.noSeparator){var u,f=e();if(f)for(;(u=i.indexOf(f))>=0;)i=i.substr(0,u)+i.substr(u+1)}if(n.preserveTrailingZeroes||a<=0||!i)return i;for(var c=i.length;a>0&&"0"==i.charAt(c-1);)c--,--a||c--;return i.substr(0,c)},t.formatNumberAsCurrency=function(r,e,n){return e?e.split(";")[r<0?1:0].replace("0",t.formatNumber(Math.abs(r),n)):t.formatNumber(r,n)};var n;return t.parseNumber=function(e,t,n,a){if(""===e)return void 0!==n?n:NaN;if(null==e||"string"!=typeof e&&isNaN(e))return NaN;if(e=String(e),!e.trim())return void 0!==n?n:NaN;var o=r.parse(e,{strict:a});return isNaN(o)&&e.trim().length&&(o=a?r.parse(e,{strict:a,locale:"en-US"}):Number(e)),isNaN(o)||void 0===t||t<0?o:r.round(o,t)},t.parsePercentOrCurrency=function(r,e,n,a,o){if("string"==typeof r&&(r=r.replace("%",""),e)){var i=e.split(";")[0].replace("0","");r=r.replace(i,"")}return t.parseNumber(r,n,a,o)},t.compareEqual=function(r,e,t){return void 0===t?r===e:Number(Number(r).toFixed(t))===Number(Number(e).toFixed(t))},t.objectToTime=function(r){return r?(r="string"==typeof r?new Date(r):r,r.getTime?r.getTime():Number(r)||null):null},t.objectToDate=function(r){return r?r.getTime?r:new Date(r):null},t});