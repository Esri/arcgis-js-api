/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./jsxWidgetSupport"],(function(e,r){"use strict";var t=function(e){return{vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}},o=function(e,r){for(var n=0,i=e.length;n<i;n++){var d=e[n];Array.isArray(d)?o(d,r):null!=d&&!1!==d&&(d.hasOwnProperty("vnodeSelector")||(d=t(d)),r.push(d))}},n=function(e,r){for(var t=[],n=2;n<arguments.length;n++)t[n-2]=arguments[n];if(1===t.length&&"string"==typeof t[0])return{vnodeSelector:e,properties:r||void 0,children:void 0,text:t[0],domNode:null};var i=[];return o(t,i),{vnodeSelector:e,properties:r||void 0,children:i,text:void 0,domNode:null}};function i(e,t,...o){return"function"!=typeof e||r.isWidgetConstructor(e)?n(e,t,...o):e(t,...o)}e.tsx=i,Object.defineProperty(e,"__esModule",{value:!0})}));
