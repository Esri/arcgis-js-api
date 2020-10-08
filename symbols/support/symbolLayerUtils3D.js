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

define(["require","exports","../../core/compilerUtils","../../core/libs/gl-matrix-2/vec3f64","../../geometry/support/aaBoundingBox"],(function(e,_,r,B,i){"use strict";Object.defineProperty(_,"__esModule",{value:!0}),_.objectSymbolLayerPrimitiveBoundingBox=_.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=_.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=_.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=_.objectSymbolLayerSizeWithResourceSize=void 0,_.objectSymbolLayerSizeWithResourceSize=function(e,_){var r=_.isPrimitive,i=_.width,O=_.depth,o=_.height,t=r?10:1;if(null==i&&null==o&&null==O)return[t*e[0],t*e[1],t*e[2]];for(var n,u=B.vec3f64.fromValues(i,O,o),E=0;E<3;E++){var N=u[E];if(null!=N){n=N/e[E];break}}for(E=0;E<3;E++)null==u[E]&&(u[E]=e[E]*n);return u},_.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE=i.fromValues(-.5,-.5,-.5,.5,.5,.5),_.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER=i.fromValues(-.5,-.5,0,.5,.5,1),_.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON=i.fromValues(-.5,-.5,0,.5,.5,.5),_.objectSymbolLayerPrimitiveBoundingBox=function(e){switch(e){case"sphere":case"cube":case"diamond":return _.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CUBE;case"cylinder":case"cone":case"inverted-cone":return _.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_UNIT_CYLINDER;case"tetrahedron":return _.OBJECT_SYMBOL_LAYER_BOUNDING_BOX_TETRAHEDRON;default:return void r.neverReached(e)}}}));