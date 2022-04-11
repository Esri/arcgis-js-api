/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=e=>{if(!Array.isArray(e))return!1;const[t]=e;return"number"==typeof t||"string"==typeof t};let n=function(){function e(e={}){this._options=e}return e.prototype.toQueryParams=function(e){if(!e)return null;const n=e.toJSON(),o={};return Object.keys(n).forEach((e=>{const r=this._options[e];if(r){const i="boolean"!=typeof r&&r.name?r.name:e,s="boolean"!=typeof r&&r.getter?r.getter(n):n[e];null!=s&&(o[i]=t(s)?s.join(","):"object"==typeof s?JSON.stringify(s):s)}else o[e]=n[e]}),this),o},e}();function o(e){return new n(e)}e.createQueryParamsHelper=o,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
