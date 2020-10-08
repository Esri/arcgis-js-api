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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/number"],(function(r){var e,t={};return Math.log10=Math.log10||function(r){return Math.log(r)*Math.LOG10E},t.populateObject=function(r,e,t){return function r(e,n){if(e&&n&&!(Array.isArray(e)&&!Array.isArray(n)||Array.isArray(n)&&!Array.isArray(e)))if(Array.isArray(e))e.forEach((function(r,e){i(e)}));else for(var a in e)i(a);function i(a){var i=e[a],o=n[a],f=i&&"object"==typeof i,u=o&&"object"==typeof o;void 0!==i&&(void 0===o?n[a]=i:u&&f?r(i,o):t&&(f?r(i,o=n[a]={}):n[a]=e[a]))}}(e,r),r},t.filterByPattern=function(r,e){var t={};return function r(e,t,n){for(var a in e){var i=e[a],o=t[a];if(Array.isArray(i)){var f=i[0];if(o&&Array.isArray(o)){var u=n[a]=[];o.forEach((function(e){if(e&&"object"==typeof e){var t=Array.isArray(e)?[]:{};r(f,e,t),u.push(t)}}))}}else if("object"==typeof i){if(o&&"object"==typeof o)r(i,o,n[a]={})}else void 0!==o&&(n[a]=o)}}(e,r,t),t},t.traverseObject=function(r,e){for(var n in r){var a=r[n];e(a,n,r),a&&"object"==typeof a&&t.traverseObject(a,e)}},t.copyOwnJsonProperties=function(r,e,t){for(var n in e=e||{},r){var a=r[n];r.hasOwnProperty(n)&&"function"!=typeof a&&(a&&"object"==typeof a&&t&&(a=t(n,a)),void 0!==a&&(e[n]=a))}return e},t.removeUndefinedProperties=function(r){return r&&Object.keys(r).forEach((function(e){void 0===r[e]&&delete r[e]})),r},t.getValue=function(r,e){if("string"!=typeof e)return r;for(var t=e.split("."),n=0;n<t.length;n++)r=r&&r[t[n]];return r},t.setValue=function(r,e,t){if("string"==typeof e){var n=e.split(".");if(n.length){for(var a=0;a<n.length-1;a++)r=r&&r[n[a]];r&&(r[n[n.length-1]]=t)}}},t.isNumber=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},t.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))},t.getBestPrecision=function(r){return 0===r?0:Math.max(0,Math.round(Math.log10(3e3/Math.abs(r))))},t.getPlaces=function(r,e){if(r=+r,isNaN(r))return-1;var t=(r+="").indexOf(".")+1,n=t?r.length-t:0;if(n<=2||!e)return n;var a=0;if(!+r.substr(0,t-1))for(;"0"===r.charAt(t);)t++,a++,n--;function i(e,a){var i=r.indexOf(e,t);if(i<0)return n;var o=r.charAt(i+e.length);return!o||a.indexOf(o)<0?n:i-t}for(var o=n-1;o>=2;o--){var f=Math.min(i("000000000000000".substr(0,o),"01234"),i("999999999999999".substr(0,o),"56789"));if(f!==n){n=f;break}}return n+a},t.formatNumber=function(e,n){var a=(n="number"==typeof n?{places:n}:n||{}).places,i={};a>=0?i.places=a:a=-1;var o=r.format(e,i);if(n.noSeparator){var f,u=t.getSeparator();if(u)for(;(f=o.indexOf(u))>=0;)o=o.substr(0,f)+o.substr(f+1)}if(n.preserveTrailingZeroes||a<=0||!o)return o;for(var s=o.length;a>0&&"0"==o.charAt(s-1);)s--,--a||s--;return o.substr(0,s)},t.formatNumberAsCurrency=function(r,e,n){return e?e.split(";")[r<0?1:0].replace("0",t.formatNumber(Math.abs(r),n)):t.formatNumber(r,n)},t.getSeparator=function(){return void 0===e&&(e=r.format(9999,{places:0}).replace(/9/g,"")),e},t.parseNumber=function(e,t,n,a){if(""===e)return void 0!==n?n:NaN;if(null==e||"string"!=typeof e&&isNaN(e))return NaN;if(!(e=String(e)).trim())return void 0!==n?n:NaN;var i=r.parse(e,{strict:a});return isNaN(i)&&e.trim().length&&(i=a?r.parse(e,{strict:a,locale:"en-US"}):Number(e)),isNaN(i)||void 0===t||t<0?i:r.round(i,t)},t.parsePercentOrCurrency=function(r,e,n,a,i){if("string"==typeof r&&(r=r.replace("%",""),e)){var o=e.split(";")[0].replace("0","");r=r.replace(o,"")}return t.parseNumber(r,n,a,i)},t.compareEqual=function(r,e,t){return void 0===t?r===e:Number(Number(r).toFixed(t))===Number(Number(e).toFixed(t))},t}));