// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.h=void 0;var t=function(e,r,o){for(var n=0,i=r.length;n<i;n++){var d=r[n];Array.isArray(d)?t(e,d,o):null!=d&&!1!==d&&("string"==typeof d&&(d={vnodeSelector:"",properties:void 0,children:void 0,text:d.toString(),domNode:null}),o.push(d))}};r.h=function(e,r,o){if(Array.isArray(r))o=r,r=void 0;else if(r&&("string"==typeof r||r.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");var n,i;return o&&1===o.length&&"string"==typeof o[0]?n=o[0]:o&&(t(e,o,i=[]),0===i.length&&(i=void 0)),{vnodeSelector:e,properties:r,children:i,text:""===n?void 0:n,domNode:null}}}));