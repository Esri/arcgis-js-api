/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=function(){function e(e={}){this._options=e}return e.prototype.toQueryParams=function(e){if(!e)return null;const t=e.toJSON(),n={};return Object.keys(t).forEach((e=>{const r=this._options[e];if(r){const o="boolean"!=typeof r&&r.name?r.name:e,i="boolean"!=typeof r&&r.getter?r.getter(t):t[e];null!=i&&(n[o]=(e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t})(i)?i.join(","):"object"==typeof i?JSON.stringify(i):i)}else n[e]=t[e]}),this),n},e}();e.createQueryParamsHelper=function(e){return new t(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
