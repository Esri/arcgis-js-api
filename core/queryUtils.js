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

define(["require","exports"],(function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createQueryParamsHelper=void 0;var t=function(){function e(e){void 0===e&&(e={}),this._options=e}return e.prototype.toQueryParams=function(e){var r=this;if(!e)return null;var t=e.toJSON(),n={};return Object.keys(t).forEach((function(e){var o=r._options[e];if(o){var i="boolean"!=typeof o&&o.name?o.name:e,u="boolean"!=typeof o&&o.getter?o.getter(t):t[e];null!=u&&(n[i]=function(e){if(!Array.isArray(e))return!1;var r=e[0];return"number"==typeof r||"string"==typeof r}(u)?u.join(","):"object"==typeof u?JSON.stringify(u):u)}else n[e]=t[e]}),this),n},e}();r.createQueryParamsHelper=function(e){return new t(e)}}));