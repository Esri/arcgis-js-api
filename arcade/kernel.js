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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../geometry/Extent","../geometry/jsonUtils"],(function(e,r,s,a){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.cloneGeometry=r.sameGeomType=r.convertLinearUnitsToCode=r.shapeExtent=r.convertSquareUnitsToCode=void 0,r.convertSquareUnitsToCode=function(e){if(void 0===e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"square-meter":case"square-meters":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":case"square-miles":case"square-mile":return 109413;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"square-kilometers":case"square-kilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"square-yards":case"square-yard":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"square-feet":case"square-foot":case"squarefeet":case"squarefoot":return 109405}return null},r.shapeExtent=function(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new s({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null},r.convertLinearUnitsToCode=function(e){if(void 0===e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"square-meter":case"square-meters":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":case"square-miles":case"square-mile":return 9035;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"square-kilometers":case"square-kilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"square-yards":case"square-yard":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"square-feet":case"square-foot":case"squarefeet":case"squarefoot":return 9002}return null},r.sameGeomType=function(e,r){return e===r||("point"===e&&"esriGeometryPoint"===r||("polyline"===e&&"esriGeometryPolyline"===r||("polygon"===e&&"esriGeometryPolygon"===r||("extent"===e&&"esriGeometryEnvelope"===r||("multipoint"===e&&"esriGeometryMultipoint"===r||("point"===r&&"esriGeometryPoint"===e||("polyline"===r&&"esriGeometryPolyline"===e||("polygon"===r&&"esriGeometryPolygon"===e||("extent"===r&&"esriGeometryEnvelope"===e||"multipoint"===r&&"esriGeometryMultipoint"===e)))))))))},r.cloneGeometry=function(e){if(null===e)return null;var r=a.fromJson(e.toJson());return e.getCacheValue("_geVersion")&&r.setCacheValue("_geVersion",e.getCacheValue("_geVersion")),r}}));