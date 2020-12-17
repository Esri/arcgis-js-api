/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../core/urlUtils"],(function(e,t){"use strict";e.asValidOptions=function(e,t){let n={query:e};return t&&(n={...t,...n}),n},e.encode=function e(t,n,r){const o={};for(const i in t){if("declaredClass"===i)continue;const s=t[i];if(null!=s&&"function"!=typeof s)if(Array.isArray(s)){o[i]=[];for(let t=0;t<s.length;t++)o[i][t]=e(s[t])}else if("object"==typeof s)if(s.toJSON){const e=s.toJSON(r&&r[i]);o[i]=n?e:JSON.stringify(e)}else o[i]=n?s:JSON.stringify(s);else o[i]=s}return o},e.parseUrl=function(e){return"string"==typeof e?t.urlToObject(e):e},Object.defineProperty(e,"__esModule",{value:!0})}));
