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

define(["require","exports","./definition"],(function(e,r,o){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.createExpression=void 0,r.createExpression=function(e){if(null!==e&&"string"!=typeof e&&"boolean"!=typeof e&&"number"!=typeof e||(e=["literal",e]),!Array.isArray(e)||0===e.length)throw new Error("Expression must be a non empty array");var r=e[0];if("string"!=typeof r)throw new Error("First element of expression must be a string");var n=o.ops[r];if(void 0===n)throw new Error('Invalid expression operator "'+r+'"');if(!n)throw new Error('Unimplemented expression operator "'+r+'"');return n.parse(e)}}));