// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","./types"],(function(r,o,t){"use strict";function e(r,o){var e=t.ParsingErrorMessages[r];return o?e.replace(/\${(.*?)}/g,(function(r,t){var e,i;return null!==(i=null===(e=o[t])||void 0===e?void 0:e.toString())&&void 0!==i?i:""})):e}Object.defineProperty(o,"__esModule",{value:!0}),o.ErrorHandler=o.formatErrorDescription=void 0,o.formatErrorDescription=e;var i=function(){function r(r){void 0===r&&(r=!1),this.tolerant=r,this.errors=[]}return r.prototype.recordError=function(r){this.errors.push(r)},r.prototype.tolerate=function(r){if(!this.tolerant)throw r;this.recordError(r)},r.prototype.throwError=function(r){var o;throw r.description=null!==(o=r.description)&&void 0!==o?o:e(r.code,r.data),new t.ParsingError(r)},r.prototype.tolerateError=function(r){var o;r.description=null!==(o=r.description)&&void 0!==o?o:e(r.code,r.data);var i=new t.ParsingError(r);if(!this.tolerant)throw i;this.recordError(i)},r}();o.ErrorHandler=i}));