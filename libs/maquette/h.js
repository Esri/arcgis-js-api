/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let t=e=>({vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}),r=(e,o,n)=>{for(let i=0,l=o.length;i<l;i++){let l=o[i];Array.isArray(l)?r(e,l,n):null!=l&&!1!==l&&("string"==typeof l&&(l=t(l)),n.push(l))}};function o(e,t,o){if(Array.isArray(t))o=t,t=void 0;else if(t&&("string"==typeof t||t.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");let n,i;return o&&1===o.length&&"string"==typeof o[0]?n=o[0]:o&&(i=[],r(e,o,i),0===i.length&&(i=void 0)),{vnodeSelector:e,properties:t,children:i,text:""===n?void 0:n,domNode:null}}e.h=o,Object.defineProperty(e,"__esModule",{value:!0})}));
