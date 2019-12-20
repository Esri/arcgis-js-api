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

define(["dojo/number"],function(r){function e(){return void 0===n&&(n=r.format(9999,{places:0}).replace(/9/g,"")),n}var t={};Math.log10=Math.log10||function(r){return Math.log(r)*Math.LOG10E},t.populateObject=function(r,e,t){function n(r,e){function i(i){var a=r[i],o=e[i],u=a&&"object"==typeof a,f=o&&"object"==typeof o;void 0!==a&&(void 0===o?e[i]=a:f&&u?n(a,o):t&&(u?(o=e[i]={},n(a,o)):e[i]=r[i]))}if(r&&e&&!(Array.isArray(r)&&!Array.isArray(e)||Array.isArray(e)&&!Array.isArray(r)))if(Array.isArray(r))r.forEach(function(r,e){i(e)});else for(var a in r)i(a)}return n(e,r),r},t.filterByPattern=function(r,e){function t(r,e,n){for(var i in r){var a=r[i],o=e[i];if(Array.isArray(a)){var u=a[0];if(o&&Array.isArray(o)){var f=n[i]=[];o.forEach(function(r){if(r&&"object"==typeof r){var e=Array.isArray(r)?[]:{};t(u,r,e),f.push(e)}})}}else if("object"==typeof a){if(o&&"object"==typeof o){var s=n[i]={};t(a,o,s)}}else void 0!==o&&(n[i]=o)}}var n={};return t(e,r,n),n},t.traverseObject=function(r,e){for(var n in r){var i=r[n];e(i),i&&"object"==typeof i&&t.traverseObject(i,e)}},t.copyOwnJsonProperties=function(r,e,t){e=e||{};for(var n in r){var i=r[n];r.hasOwnProperty(n)&&"function"!=typeof i&&(i&&"object"==typeof i&&t&&(i=t(n,i)),void 0!==i&&(e[n]=i))}return e},t.removeUndefinedProperties=function(r){return r&&Object.keys(r).forEach(function(e){void 0===r[e]&&delete r[e]}),r},t.getValue=function(r,e){if("string"!=typeof e)return r;for(var t=e.split("."),n=0;n<t.length;n++)r=r&&r[t[n]];return r},t.setValue=function(r,e,t){if("string"==typeof e){var n=e.split(".");if(n.length){for(var i=0;i<n.length-1;i++)r=r&&r[n[i]];r&&(r[n[n.length-1]]=t)}}},t.isNumber=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},t.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))},t.getBestPrecision=function(r){return 0===r?0:Math.max(0,Math.round(Math.log10(3e3/Math.abs(r))))},t.getPlaces=function(r,e){function t(e,t){var a=r.indexOf(e,n);if(a<0)return i;var o=r.charAt(a+e.length);return!o||t.indexOf(o)<0?i:a-n}if(r=+r,isNaN(r))return-1;r+="";var n=r.indexOf(".")+1,i=n?r.length-n:0;if(i<=2||!e)return i;var a=0;if(!+r.substr(0,n-1))for(;"0"===r.charAt(n);)n++,a++,i--;for(var o=i-1;o>=2;o--){var u=Math.min(t("000000000000000".substr(0,o),"01234"),t("999999999999999".substr(0,o),"56789"));if(u!==i){i=u;break}}return i+a},t.formatNumber=function(t,n){n="number"==typeof n?{places:n}:n||{};var i=n.places,a={};i>=0?a.places=i:i=-1;var o=r.format(t,a);if(n.noSeparator){var u,f=e();if(f)for(;(u=o.indexOf(f))>=0;)o=o.substr(0,u)+o.substr(u+1)}if(n.preserveTrailingZeroes||i<=0||!o)return o;for(var s=o.length;i>0&&"0"==o.charAt(s-1);)s--,--i||s--;return o.substr(0,s)},t.formatNumberAsCurrency=function(r,e,n){return e?e.split(";")[r<0?1:0].replace("0",t.formatNumber(Math.abs(r),n)):t.formatNumber(r,n)};var n;return t.parseNumber=function(e,t,n,i){if(""===e)return void 0!==n?n:NaN;if(null==e||"string"!=typeof e&&isNaN(e))return NaN;if(e=String(e),!e.trim())return void 0!==n?n:NaN;var a=r.parse(e,{strict:i});return isNaN(a)&&e.trim().length&&(a=i?r.parse(e,{strict:i,locale:"en-US"}):Number(e)),isNaN(a)||void 0===t||t<0?a:r.round(a,t)},t.parsePercentOrCurrency=function(r,e,n,i,a){if("string"==typeof r&&(r=r.replace("%",""),e)){var o=e.split(";")[0].replace("0","");r=r.replace(o,"")}return t.parseNumber(r,n,i,a)},t.compareEqual=function(r,e,t){return void 0===t?r===e:Number(Number(r).toFixed(t))===Number(Number(e).toFixed(t))},t.objectToTime=function(r){return r?(r="string"==typeof r?new Date(r):r,r.getTime?r.getTime():Number(r)||null):null},t.objectToDate=function(r){return r?r.getTime?r:new Date(r):null},t});