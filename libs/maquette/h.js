// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function o(e,r,o){if(Array.isArray(r))o=r,r=void 0;else if(r&&("string"==typeof r||r.hasOwnProperty("vnodeSelector"))||o&&("string"==typeof o||o.hasOwnProperty("vnodeSelector")))throw new Error("h called with invalid arguments");var t,i;return o&&1===o.length&&"string"==typeof o[0]?t=o[0]:o&&(i=[],n(e,o,i),0===i.length&&(i=void 0)),{vnodeSelector:e,properties:r,children:i,text:""===t?void 0:t,domNode:null}}Object.defineProperty(r,"__esModule",{value:!0});var t=function(e){return{vnodeSelector:"",properties:void 0,children:void 0,text:e.toString(),domNode:null}},n=function(e,r,o){for(var i=0,d=r.length;i<d;i++){var l=r[i];Array.isArray(l)?n(e,l,o):null!==l&&void 0!==l&&!1!==l&&("string"==typeof l&&(l=t(l)),o.push(l))}};r.h=o});