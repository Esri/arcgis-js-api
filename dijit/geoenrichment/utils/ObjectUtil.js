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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/number"],(function(r){var e,t={};function n(){return void 0===e&&(e=r.format(9999,{places:0}).replace(/9/g,"")),e}return Math.log10=Math.log10||function(r){return Math.log(r)*Math.LOG10E},t.populateObject=function(r,e,t){return function r(e,n){if(e&&n&&!(Array.isArray(e)&&!Array.isArray(n)||Array.isArray(n)&&!Array.isArray(e)))if(Array.isArray(e))e.forEach((function(r,e){a(e)}));else for(var i in e)a(i);function a(i){var a=e[i],o=n[i],f=a&&"object"==typeof a,u=o&&"object"==typeof o;void 0!==a&&(void 0===o?n[i]=a:u&&f?r(a,o):t&&(f?r(a,o=n[i]={}):n[i]=e[i]))}}(e,r),r},t.filterByPattern=function(r,e){var t={};return function r(e,t,n){for(var i in e){var a=e[i],o=t[i];if(Array.isArray(a)){var f=a[0];if(o&&Array.isArray(o)){var u=n[i]=[];o.forEach((function(e){if(e&&"object"==typeof e){var t=Array.isArray(e)?[]:{};r(f,e,t),u.push(t)}}))}}else if("object"==typeof a){if(o&&"object"==typeof o)r(a,o,n[i]={})}else void 0!==o&&(n[i]=o)}}(e,r,t),t},t.traverseObject=function(r,e){for(var n in r){var i=r[n];e(i,n,r),i&&"object"==typeof i&&t.traverseObject(i,e)}},t.copyOwnJsonProperties=function(r,e,t){for(var n in e=e||{},r){var i=r[n];r.hasOwnProperty(n)&&"function"!=typeof i&&(i&&"object"==typeof i&&t&&(i=t(n,i)),void 0!==i&&(e[n]=i))}return e},t.removeUndefinedProperties=function(r){return r&&Object.keys(r).forEach((function(e){void 0===r[e]&&delete r[e]})),r},t.getValue=function(r,e){if("string"!=typeof e)return r;for(var t=e.split("."),n=0;n<t.length;n++)r=r&&r[t[n]];return r},t.setValue=function(r,e,t){if("string"==typeof e){var n=e.split(".");if(n.length){for(var i=0;i<n.length-1;i++)r=r&&r[n[i]];r&&(r[n[n.length-1]]=t)}}},t.isNumber=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},t.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))},t.getBestPrecision=function(r){return 0===r?0:Math.max(0,Math.round(Math.log10(3e3/Math.abs(r))))},t.getPlaces=function(r,e){if(r=+r,isNaN(r))return-1;var t=(r+="").indexOf(".")+1,n=t?r.length-t:0;if(n<=2||!e)return n;var i=0;if(!+r.substr(0,t-1))for(;"0"===r.charAt(t);)t++,i++,n--;function a(e,i){var a=r.indexOf(e,t);if(a<0)return n;var o=r.charAt(a+e.length);return!o||i.indexOf(o)<0?n:a-t}for(var o=n-1;o>=2;o--){var f=Math.min(a("000000000000000".substr(0,o),"01234"),a("999999999999999".substr(0,o),"56789"));if(f!==n){n=f;break}}return n+i},t.formatNumber=function(e,t){var i=(t="number"==typeof t?{places:t}:t||{}).places,a={};i>=0?a.places=i:i=-1;var o=r.format(e,a);if(t.noSeparator){var f,u=n();if(u)for(;(f=o.indexOf(u))>=0;)o=o.substr(0,f)+o.substr(f+1)}if(t.preserveTrailingZeroes||i<=0||!o)return o;for(var s=o.length;i>0&&"0"==o.charAt(s-1);)s--,--i||s--;return o.substr(0,s)},t.formatNumberAsCurrency=function(r,e,n){return e?e.split(";")[r<0?1:0].replace("0",t.formatNumber(Math.abs(r),n)):t.formatNumber(r,n)},t.parseNumber=function(e,t,n,i){if(""===e)return void 0!==n?n:NaN;if(null==e||"string"!=typeof e&&isNaN(e))return NaN;if(!(e=String(e)).trim())return void 0!==n?n:NaN;var a=r.parse(e,{strict:i});return isNaN(a)&&e.trim().length&&(a=i?r.parse(e,{strict:i,locale:"en-US"}):Number(e)),isNaN(a)||void 0===t||t<0?a:r.round(a,t)},t.parsePercentOrCurrency=function(r,e,n,i,a){if("string"==typeof r&&(r=r.replace("%",""),e)){var o=e.split(";")[0].replace("0","");r=r.replace(o,"")}return t.parseNumber(r,n,i,a)},t.compareEqual=function(r,e,t){return void 0===t?r===e:Number(Number(r).toFixed(t))===Number(Number(e).toFixed(t))},t}));