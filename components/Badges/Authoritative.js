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

define(["dojo/i18n!../Badges/nls/resources","../Badges/Badge"],function(t,e){return function(t){function e(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var n in t)e.d(r,n,function(e){return t[e]}.bind(null,n));return r},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=252)}({17:function(t,o){t.exports=e},252:function(t,e,o){"use strict";o.r(e);var r=o(8),n=o(17),i=o.n(n);e.default=function(t,e){var o=t.size,n=t.tooltip,u=t.tooltipDirection,a=t.altOrg;return e(i.a,{backgroundColor:"#DDEEDB",textColor:"#2B622B",key:"authoritative-badge",size:o,text:r.authoritative,title:a?r.tooltips.altAuthoritative+" "+a:r.tooltips.authoritative,tooltip:n?r.tooltips.authoritative:void 0,tooltipDirection:u},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},e("path",{fill:"none",d:"M0 0h16v16H0z"}),e("g",{fill:"#2B622B"},e("path",{d:"M8 0a8 8 0 1 0 8 8 8.01 8.01 0 0 0-8-8zm0 15a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7z"}),e("path",{d:"M11.834 5.146l-5.646 5.647-2.334-2.334a.5.5 0 0 0-.708.707l3.042 3.041 6.353-6.353a.5.5 0 1 0-.707-.707z"}))))}},8:function(e,o){e.exports=t}})});