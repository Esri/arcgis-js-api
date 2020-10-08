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

define(["require","exports","../../symbols","../../symbols/support/jsonUtils"],(function(e,r,o,y){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.rendererBackgroundFillSymbolProperty=r.rendererSymbolProperty=void 0,r.rendererSymbolProperty={types:o.symbolTypesRenderer,json:{write:{writer:y.write},origins:{"web-scene":{types:o.symbolTypesRenderer3D,write:{writer:y.write}}}}},r.rendererBackgroundFillSymbolProperty={types:{base:o.BaseSymbol,key:"type",typeMap:{"simple-fill":o.symbolTypes.typeMap["simple-fill"],"picture-fill":o.symbolTypes.typeMap["picture-fill"],"polygon-3d":o.symbolTypes.typeMap["polygon-3d"]}},json:{write:{writer:y.write},origins:{"web-scene":{type:o.PolygonSymbol3D,write:{writer:y.write}}}}}}));