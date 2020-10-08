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

define(["require","exports","../ensureType","../metadata"],(function(t,e,r,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cast=void 0;var o=Object.prototype.toString;function a(t){var e="__accessorMetadata__"in t?r.ensureType(t):t;return function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t.push(e),"number"==typeof t[2])throw new Error("Using @cast has parameter decorator is not supported since 4.16");return i.apply(this,t)}}function i(t,e,r,o){n.getOwnPropertyMetadata(t,e).cast=o}function c(t){return function(e,r){n.getOwnPropertyMetadata(e,t).cast=e[r]}}e.cast=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(3!==t.length||"string"!=typeof t[1])return 1===t.length&&"[object Function]"===o.call(t[0])?a(t[0]):1===t.length&&"string"==typeof t[0]?c(t[0]):void 0}}));