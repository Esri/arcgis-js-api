/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{pathToArray as t,getProperties as n,isPropertyDeclared as r}from"./utils.js";function e(t,e){const i="?"===t[t.length-1]?t.slice(0,-1):t;if(null!=e.getItemAt||Array.isArray(e)){const t=parseInt(i,10);if(!isNaN(t))return Array.isArray(e)?e[t]:e.getItemAt(t)}const u=n(e);return r(u,i)?u.get(i):e[i]}function i(t,n,r){if(null==t)return t;const u=e(n[r],t);return!u&&r<n.length-1?void 0:r===n.length-1?u:i(u,n,r+1)}function u(n,r,u=0){return"string"!=typeof r||r.includes(".")?i(n,t(r),u):e(r,n)}function o(t,n){return u(t,n)}function s(t,n){return void 0!==u(n,t)}export{s as exists,o as get,u as valueOf};
