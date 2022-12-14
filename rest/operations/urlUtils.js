/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){const n={};for(const o in e){if("declaredClass"===o)continue;const r=e[o];if(null!=r&&"function"!=typeof r)if(Array.isArray(r)){n[o]=[];for(let e=0;e<r.length;e++)n[o][e]=t(r[e])}else"object"==typeof r?r.toJSON&&(n[o]=JSON.stringify(r)):n[o]=r}return n}e.mapParameters=t,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
