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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){Object.defineProperty(r,"__esModule",{value:!0});var o=function(e,r,t){for(var n=0,i=r.length;n<i;n++){var l=r[n];Array.isArray(l)?o(e,l,t):null!=l&&!1!==l&&("string"==typeof l&&(l={vnodeSelector:"",properties:void 0,children:void 0,text:l.toString(),domNode:null}),t.push(l))}};r.h=function(e,r,t){if(Array.isArray(r))t=r,r=void 0;else if(r&&("string"==typeof r||r.hasOwnProperty("vnodeSelector"))||t&&("string"==typeof t||t.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");var n,i;return t&&1===t.length&&"string"==typeof t[0]?n=t[0]:t&&(o(e,t,i=[]),0===i.length&&(i=void 0)),{vnodeSelector:e,properties:r,children:i,text:""===n?void 0:n,domNode:null}}}));