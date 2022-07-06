/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clone as r}from"../core/lang.js";import{urlToObject as t}from"../core/urlUtils.js";function e(r,t){return t?{...t,query:{...r,...t.query}}:{query:r}}function n(e){return"string"==typeof e?t(e):r(e)}function o(r,t,e){const n={};for(const i in r){if("declaredClass"===i)continue;const f=r[i];if(null!=f&&"function"!=typeof f)if(Array.isArray(f)){n[i]=[];for(let r=0;r<f.length;r++)n[i][r]=o(f[r])}else if("object"==typeof f)if(f.toJSON){const r=f.toJSON(e&&e[i]);n[i]=t?r:JSON.stringify(r)}else n[i]=t?f:JSON.stringify(f);else n[i]=f}return n}export{e as asValidOptions,o as encode,n as parseUrl};
