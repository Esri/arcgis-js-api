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

define(["require","exports","tslib","../core/urlUtils"],(function(e,r,i,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.encode=r.parseUrl=r.asValidOptions=void 0,r.asValidOptions=function(e,r){var t={query:e};return r&&(t=i.__assign(i.__assign({},r),t)),t},r.parseUrl=function(e){return"string"==typeof e?t.urlToObject(e):e},r.encode=function e(r,i,t){var n={};for(var s in r)if("declaredClass"!==s){var o=r[s];if(null!=o&&"function"!=typeof o)if(Array.isArray(o)){n[s]=[];for(var a=0;a<o.length;a++)n[s][a]=e(o[a])}else if("object"==typeof o)if(o.toJSON){var f=o.toJSON(t&&t[s]);n[s]=i?f:JSON.stringify(f)}else n[s]=i?o:JSON.stringify(o);else n[s]=o}return n}}));