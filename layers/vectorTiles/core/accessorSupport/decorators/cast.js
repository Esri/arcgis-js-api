// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["require","exports","../ensureType","../metadata"],(function(t,e,a,r){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.prototype.toString;function o(t){var e="_meta"in t?a.ensureType(t):t;return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return t.push(e),"number"==typeof t[2]?u.apply(this,t):i.apply(this,t)}}function i(t,e,a,n){r.getPropertyMetadata(t,e).cast=n}function u(t,e,a,n){r.getParameterMetadata(t,e,a).cast=n}function c(t){return function(e,a,n){r.getPropertyMetadata(e,t).cast=e[a]}}e.autocastMethod=function(t,e,a){if(r.hasParametersMetadata(t,e)){var n=r.getParametersMetadata(t,e).filter((function(t){return null!=t.cast}));if(n.length){var o=a.value;return a.value=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];for(var a=0,r=n;a<r.length;a++){var i=r[a];t[i.index]=i.cast(t[i.index])}return o.apply(this,t)},a}console.warn("Method "+t.declaredClass+"::"+e+" is decorated with @cast but no parameters are decorated")}},e.cast=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===n.call(t[0])?o(t[0]):1===t.length&&"string"==typeof t[0]?c(t[0]):void 0}}));