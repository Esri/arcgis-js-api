// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["require","exports","../geometry/Extent"],function(e,r,s){function a(e){return function(r){e.reject(r)}}function t(e,r){return function(){try{e.apply(null,arguments)}catch(e){r.reject(e)}}}function c(e){if(void 0===e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"square-meter":case"square_meters":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":case"square-miles":case"square-mile":return 109413;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"square-kilometers":case"square-kilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"square-yards":case"square-yard":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"square-feet":case"square-foot":case"squarefeet":case"squarefoot":return 109405}return null}function n(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new s({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function u(e){if(void 0===e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":case"square-meter":case"square-meters":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":case"square-miles":case"square-mile":return 9035;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"square-kilometers":case"square-kilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"square-yards":case"square-yard":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"square-feet":case"square-foot":case"squarefeet":case"squarefoot":return 9002}return null}function o(e,r){return e===r||("point"===e&&"esriGeometryPoint"===r||("polyline"===e&&"esriGeometryPolyline"===r||("polygon"===e&&"esriGeometryPolygon"===r||("extent"===e&&"esriGeometryEnvelope"===r||("multipoint"===e&&"esriGeometryMultipoint"===r||("point"===r&&"esriGeometryPoint"===e||("polyline"===r&&"esriGeometryPolyline"===e||("polygon"===r&&"esriGeometryPolygon"===e||("extent"===r&&"esriGeometryEnvelope"===e||"multipoint"===r&&"esriGeometryMultipoint"===e)))))))))}Object.defineProperty(r,"__esModule",{value:!0}),r.errback=a,r.callback=t,r.convertSquareUnitsToCode=c,r.shapeExtent=n,r.convertLinearUnitsToCode=u,r.sameGeomType=o});