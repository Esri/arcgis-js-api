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

define([],function(){return function(t){function e(r){if(o[r])return o[r].exports;var l=o[r]={i:r,l:!1,exports:{}};return t[r].call(l.exports,l,l.exports,e),l.l=!0,l.exports}var o={};return e.m=t,e.c=o,e.d=function(t,o,r){e.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,o){if(1&o&&(t=e(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var l in t)e.d(r,l,function(e){return t[e]}.bind(null,l));return r},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=253)}({253:function(t,e,o){"use strict";o.r(e),e.default=function(t,e){var o=t.key,r=t.size,l=t.text,n=t.title,a=t.tooltip,i=t.tooltipDirection,u=t.backgroundColor,c=t.textColor,s=t.children,f={"qual-badge__container":!0,"qual-badge__container--small":"small"===r,"qual-badge__container--tooltip":!!a,"qual-badge__container--tooltip-left":"left"===i,"qual-badge__container--tooltip-top":"top"===i,"qual-badge__container--tooltip-right":"right"===i,"tooltip-bottom":!i||"bottom"===i,"tooltip-left":"left"===i,"tooltip-top":"top"===i,"tooltip-right":"right"===i};return"small"===r?e("span",{key:o+"-small",classes:f,class:"qual-badge__container--small","aria-label":a,style:"background-color: "+u+"; color: "+c+";",title:a?void 0:n},s):e("span",{key:o+"-regular",classes:f,class:"qual-badge__container--regular","aria-label":a,style:"background-color: "+u+"; color: "+c+";",title:n},e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},s),e("span",{class:"qual-badge__text"},l))}}})});