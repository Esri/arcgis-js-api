/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ensureType as t}from"../ensureType.js";import{getOwnPropertyMetadata as n}from"../metadata.js";const r=Object.prototype.toString;function o(n){const r="__accessorMetadata__"in n?t(n):n;return function(...t){if(t.push(r),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return e.apply(this,t)}}function e(t,r,o,e){n(t,r).cast=e}function i(t){return(r,o)=>{n(r,t).cast=r[o]}}function s(...t){if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===r.call(t[0])?o(t[0]):1===t.length&&"string"==typeof t[0]?i(t[0]):void 0}export{s as cast};
