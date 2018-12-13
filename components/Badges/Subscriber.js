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

define(["dojo/i18n!../Badges/nls/resources","../Badges/Badge"],function(e,t){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,o){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)t.d(o,n,function(t){return e[t]}.bind(null,n));return o},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=260)}({17:function(e,r){e.exports=t},260:function(e,t,r){"use strict";r.r(t);var o=r(8),n=r(17),i=r.n(n);t.default=function(e,t){var r=e.size,n=e.tooltip,u=e.tooltipDirection,l=e.user,c=l?l.orgId?"Org":"Public":"Anon";return t(i.a,{backgroundColor:"#DBEDFA",textColor:"#196FA6",key:"subscriber-badge",size:r,text:o.subscriber,title:o.tooltips["subscriber"+c],tooltip:n?o.tooltips["subscriber"+c]:void 0,tooltipDirection:u},t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},t("path",{d:"M8.05371,15.5H8.0498a.49939.49939,0,0,1-.25-.06689C.59961,11.27539,1.542,2.0376,1.55225,1.94434A.49966.49966,0,0,1,1.811,1.56152a.50721.50721,0,0,1,.46338-.0083A5.15007,5.15007,0,0,0,7.73291.61328a.51762.51762,0,0,1,.6377,0,5.14642,5.14642,0,0,0,5.4585.93994.50711.50711,0,0,1,.46338.0083.49966.49966,0,0,1,.25879.38281c.01025.09326.95264,9.33105-6.24756,13.48877A.49939.49939,0,0,1,8.05371,15.5Zm0-.5h0ZM2.50977,2.70557c-.05615,2.05469.22266,8.45508,5.542,11.71387,5.31934-3.25879,5.59814-9.65967,5.542-11.71387a6.17691,6.17691,0,0,1-5.542-1.07324A6.18289,6.18289,0,0,1,2.50977,2.70557Z",fill:"#196fa6"})))}},8:function(t,r){t.exports=e}})});