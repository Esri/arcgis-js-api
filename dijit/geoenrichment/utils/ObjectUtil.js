// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/number","./DateUtil"],(function(r,e){var t,n={};return Math.log10=Math.log10||function(r){return Math.log(r)*Math.LOG10E},n.populateObject=function(r,e,t){return function r(e,n){if(e&&n&&!(Array.isArray(e)&&!Array.isArray(n)||Array.isArray(n)&&!Array.isArray(e)))if(Array.isArray(e))e.forEach((function(r,e){i(e)}));else for(var a in e)i(a);function i(a){var i=e[a],o=n[a],f=i&&"object"==typeof i,u=o&&"object"==typeof o;void 0!==i&&(void 0===o?n[a]=i:u&&f?r(i,o):t&&(f?r(i,o=n[a]={}):n[a]=e[a]))}}(e,r),r},n.filterByPattern=function(r,e){var t={};return function r(e,t,n){for(var a in e){var i=e[a],o=t[a];if(Array.isArray(i)){var f=i[0];if(o&&Array.isArray(o)){var u=n[a]=[];o.forEach((function(e){if(e&&"object"==typeof e){var t=Array.isArray(e)?[]:{};r(f,e,t),u.push(t)}}))}}else if("object"==typeof i){if(o&&"object"==typeof o)r(i,o,n[a]={})}else void 0!==o&&(n[a]=o)}}(e,r,t),t},n.traverseObject=function(r,e){for(var t in r){var a=r[t];e(a,t,r),a&&"object"==typeof a&&n.traverseObject(a,e)}},n.copyOwnJsonProperties=function(r,e,t){for(var n in e=e||{},r){var a=r[n];r.hasOwnProperty(n)&&"function"!=typeof a&&(a&&"object"==typeof a&&t&&(a=t(n,a)),void 0!==a&&(e[n]=a))}return e},n.removeUndefinedProperties=function(r){return r&&Object.keys(r).forEach((function(e){void 0===r[e]&&delete r[e]})),r},n.getValue=function(r,e){if("string"!=typeof e)return r;for(var t=e.split("."),n=0;n<t.length;n++)r=r&&r[t[n]];return r},n.setValue=function(r,e,t){if("string"==typeof e){var n=e.split(".");if(n.length){for(var a=0;a<n.length-1;a++)r=r&&r[n[a]];r&&(r[n[n.length-1]]=t)}}},n.isNumber=function(r){return!isNaN(parseFloat(r))&&isFinite(r)},n.roundNumber=function(r,e){return"number"!=typeof r?r:parseFloat(r.toFixed(void 0!==e?e:0))},n.getBestPrecision=function(r){return 0===r?0:Math.max(0,Math.round(Math.log10(3e3/Math.abs(r))))},n.getPlaces=function(r,e){if(r=+r,isNaN(r))return-1;var t=(r+="").indexOf(".")+1,n=t?r.length-t:0;if(n<=2||!e)return n;var a=0;if(!+r.substr(0,t-1))for(;"0"===r.charAt(t);)t++,a++,n--;function i(e,a){var i=r.indexOf(e,t);if(i<0)return n;var o=r.charAt(i+e.length);return!o||a.indexOf(o)<0?n:i-t}for(var o=n-1;o>=2;o--){var f=Math.min(i("000000000000000".substr(0,o),"01234"),i("999999999999999".substr(0,o),"56789"));if(f!==n){n=f;break}}return n+a},n.formatNumber=function(t,a){var i=(a="number"==typeof a?{places:a}:a||{}).places,o={};i>=0?o.places=i:i=-1,o.locale=a.locale||e.getDateNumberLocale();var f=r.format(t,o);if(a.noSeparator){var u,c=n.getSeparator();if(c)for(;(u=f.indexOf(c))>=0;)f=f.substr(0,u)+f.substr(u+1)}if(a.preserveTrailingZeroes||i<=0||!f)return f;for(var s=f.length;i>0&&"0"==f.charAt(s-1);)s--,--i||s--;return f.substr(0,s)},n.formatNumberAsCurrency=function(r,e,t){return e?e.split(";")[r<0?1:0].replace("0",n.formatNumber(Math.abs(r),t)):n.formatNumber(r,t)},n.getSeparator=function(){return void 0===t&&(t=r.format(9999,{places:0}).replace(/9/g,"")),t},n.parseNumber=function(t,n,a,i){if(""===t)return void 0!==a?a:NaN;if(null==t||"string"!=typeof t&&isNaN(t))return NaN;if(!(t=String(t)).trim())return void 0!==a?a:NaN;var o=r.parse(t,{strict:i,locale:e.getDateNumberLocale()});return isNaN(o)&&t.trim().length&&(o=i?r.parse(t,{strict:i,locale:"en-US"}):Number(t)),isNaN(o)||void 0===n||n<0?o:r.round(o,n)},n.parsePercentOrCurrency=function(r,e,t,a,i){if("string"==typeof r&&(r=r.replace("%",""),e)){var o=e.split(";")[0].replace("0","");r=r.replace(o,"")}return n.parseNumber(r,t,a,i)},n.compareEqual=function(r,e,t){return void 0===t?r===e:Number(Number(r).toFixed(t))===Number(Number(e).toFixed(t))},n}));