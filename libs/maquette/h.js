/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";const t=(e,r,o)=>{for(let n=0,i=r.length;n<i;n++){let i=r[n];Array.isArray(i)?t(e,i,o):null!=i&&!1!==i&&("string"==typeof i&&(i={vnodeSelector:"",properties:void 0,children:void 0,text:i.toString(),domNode:null}),o.push(i))}};e.h=function(e,r,o){if(Array.isArray(r))o=r,r=void 0;else if(r&&("string"==typeof r||r.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let n,i;return o&&1===o.length&&"string"==typeof o[0]?n=o[0]:o&&(i=[],t(e,o,i),0===i.length&&(i=void 0)),{vnodeSelector:e,properties:r,children:i,text:""===n?void 0:n,domNode:null}},Object.defineProperty(e,"__esModule",{value:!0})}));
