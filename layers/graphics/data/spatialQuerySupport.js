// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/contains","../../../geometry/support/intersects","../../../geometry/support/spatialReferenceUtils","./projectionSupport"],function(e,t,r,n,o,i,u,s){function p(e){return!0===h.spatialRelationship[e]}function l(e){return!0===h.queryGeometry[e]}function y(e){return!0===h.layerGeometry[e]}function c(){return n.create(function(t){return e(["../../../geometry/geometryEngine"],t)})}function a(){return c().then(function(e){return e.geodesicBuffer})}function f(e,t,r){if("intersects"===e){if("polygon"===t.type&&"esriGeometryPoint"===r)return n.resolve(o.polygonContainsPoint.bind(null,t.toJSON()));if("extent"===t.type)return n.resolve(i.getExtentIntersector(r).bind(null,t))}return c().then(function(r){return r[e].bind(null,t.toJSON())})}function g(e,t,o){var i=e.spatialRelationship,c=e.geometry;return c?p(i)?u.isValid(c.spatialReference)&&u.isValid(o)?l(c.type)?y(t)?s.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSpatialReference):n.reject(new r(d,"Unsupported layer geometry type",{query:e})):n.reject(new r(d,"Unsupported query geometry type",{query:e})):n.resolve():n.reject(new r(d,"Unsupported query spatial relationship",{query:e})):null}function m(e){switch(e.type){case"extent":return!0;case"polygon":return e.rings.every(function(e){return 5===e.length&&(e[0][0]===e[1][0]&&e[0][0]===e[4][0]&&e[2][0]===e[3][0]&&e[0][1]===e[3][1]&&e[0][1]===e[4][1]&&e[1][1]===e[2][1])});default:return!1}}Object.defineProperty(t,"__esModule",{value:!0});var d="feature-store:unsupported-query",h={spatialRelationship:{intersects:!0,contains:!0,within:!0,crosses:!0,touches:!0,overlaps:!0,"envelope-intersects":!0},queryGeometry:{point:!0,multipoint:!0,polyline:!0,polygon:!0,extent:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0}};t.importGeometryEngine=c,t.getGeodesicBufferOperator=a,t.getSpatialQueryOperator=f,t.checkSpatialQuerySupport=g,t.canQueryWithRBush=m});