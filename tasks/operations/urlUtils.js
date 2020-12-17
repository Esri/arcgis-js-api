/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";e.mapParameters=function e(t){const n={};for(const o in t){if("declaredClass"===o)continue;const r=t[o];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){n[o]=[];for(let t=0;t<r.length;t++)n[o][t]=e(r[t])}else"object"==typeof r?r.toJSON&&(n[o]=JSON.stringify(r)):n[o]=r}return n},Object.defineProperty(e,"__esModule",{value:!0})}));
