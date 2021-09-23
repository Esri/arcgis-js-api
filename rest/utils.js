/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../core/urlUtils"],(function(e,t){"use strict";function n(e,t){return t?{...t,query:{...e,...t.query}}:{query:e}}function r(e){return"string"==typeof e?t.urlToObject(e):e}function o(e,t,n){const r={};for(const i in e){if("declaredClass"===i)continue;const s=e[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){r[i]=[];for(let e=0;e<s.length;e++)r[i][e]=o(s[e])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(n&&n[i]);r[i]=t?e:JSON.stringify(e)}else r[i]=t?s:JSON.stringify(s);else r[i]=s}return r}e.asValidOptions=n,e.encode=o,e.parseUrl=r,Object.defineProperty(e,"__esModule",{value:!0})}));
