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

define(["require","exports","./AlgorithmicColorRamp","./ColorRamp","./MultipartColorRamp"],(function(t,e,r,o,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.fromJSON=e.types=void 0,e.types={key:"type",base:o,typeMap:{algorithmic:r,multipart:i}},e.fromJSON=function(t){return t&&t.type?"algorithmic"===t.type?r.fromJSON(t):"multipart"===t.type?i.fromJSON(t):null:null}}));