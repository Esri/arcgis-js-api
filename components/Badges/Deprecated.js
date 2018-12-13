// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["dojo/i18n!../Badges/nls/resources","../Badges/Badge"],function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(t){return e[t]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=255)}({17:function(e,r){e.exports=t},255:function(e,t,r){"use strict";r.r(t);var o=r(8),n=r(17),i=r.n(n);t.default=function(e,t){var r=e.size,n=e.tooltip,u=e.tooltipDirection;return t(i.a,{backgroundColor:"#F3DED7",textColor:"#8C2907",key:"deprecated-badge",size:r,text:o.deprecated,title:o.tooltips.deprecated,tooltip:n?o.tooltips.deprecated:void 0,tooltipDirection:u},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},t("path",{fill:"none",d:"M0 0h16v16H0z"}),t("path",{fill:"#8C2907",d:"M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8zM1 8a6.99 6.99 0 0 1 11.577-5.284l-9.861 9.861A6.964 6.964 0 0 1 1 8zm7 7a6.964 6.964 0 0 1-4.577-1.716l9.861-9.861A6.99 6.99 0 0 1 8 15z"})))}},8:function(t,r){t.exports=e}})});