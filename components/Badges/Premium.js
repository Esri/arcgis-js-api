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

define(["dojo/i18n!../Badges/nls/resources","../Badges/Badge"],function(e,t){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(t){return e[t]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=259)}({17:function(e,r){e.exports=t},259:function(e,t,r){"use strict";r.r(t);var n=r(8),o=r(17),i=r.n(o);t.default=function(e,t){var r=e.size,o=e.tooltip,u=e.tooltipDirection,l=e.user,a=l?l.orgId?"Org":"Public":"Anon";return t(i.a,{backgroundColor:"#DBEDFA",textColor:"#196FA6",key:"premium-badge",size:r,text:n.premium,title:n.tooltips["premium"+a],tooltip:o?n.tooltips["premium"+a]:void 0,tooltipDirection:u},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},t("path",{fill:"none",d:"M0 0h16v16H0z"}),t("path",{fill:"none",d:"M0 0h16v16H0z"}),t("path",{d:"M8.05 15.5a.497.497 0 0 1-.25-.067C.6 11.275 1.542 2.038 1.552 1.944a.5.5 0 0 1 .259-.382.507.507 0 0 1 .463-.009 5.15 5.15 0 0 0 5.459-.94.5.5 0 0 1 .64.006c1.817 1.54 3.601 1.844 5.457.932a.5.5 0 0 1 .718.394 16.944 16.944 0 0 1-.344 4.965.5.5 0 1 1-.978-.211 16.952 16.952 0 0 0 .367-3.962 5.57 5.57 0 0 1-5.55-1.098A6.178 6.178 0 0 1 2.51 2.706c-.057 2.086.231 8.651 5.79 11.86a.5.5 0 0 1-.25.934z",fill:"#196fa6"}),t("path",{d:"M12 15.5a4 4 0 1 1 4-4 4.005 4.005 0 0 1-4 4zm0-7a3 3 0 1 0 3 3 3.003 3.003 0 0 0-3-3z",fill:"#196fa6"})))}},8:function(t,r){t.exports=e}})});