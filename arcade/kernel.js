// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../geometry/Extent"],function(e,t,r){function n(e){if(void 0===e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109413;case"kilometers":case"kilometer":case"km":return 109414}return null}function o(e){if(null===e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.getExtent();case"point":return new r(e.x,e.y,e.x,e.y,e.spatialReference);case"extent":return e}return null}function i(e){if(void 0===e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9035;case"kilometers":case"kilometer":case"km":return 9036}return null}function s(e,t){return e===t?!0:"point"===e&&"esriGeometryPoint"===t?!0:"polyline"===e&&"esriGeometryPolyline"===t?!0:"polygon"===e&&"esriGeometryPolygon"===t?!0:"extent"===e&&"esriGeometryEnvelope"===t?!0:"multipoint"===e&&"esriGeometryMultipoint"===t?!0:"point"===t&&"esriGeometryPoint"===e?!0:"polyline"===t&&"esriGeometryPolyline"===e?!0:"polygon"===t&&"esriGeometryPolygon"===e?!0:"extent"===t&&"esriGeometryEnvelope"===e?!0:"multipoint"===t&&"esriGeometryMultipoint"===e?!0:!1}t.convertSquareUnitsToCode=n,t.shapeExtent=o,t.convertLinearUnitsToCode=i,t.sameGeomType=s});