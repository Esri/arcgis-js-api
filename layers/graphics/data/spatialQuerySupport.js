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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/contains","../../../geometry/support/intersects","../../../geometry/support/webMercatorUtils"],function(e,t,r,n,o,i,u){function s(e){return!0===d.spatialRelationship[e]}function p(e){return!0===d.queryGeometry[e]}function y(e){return!0===d.layerGeometry[e]}function l(){return n.create(function(t){return e(["../../../geometry/geometryEngine"],t)})}function c(){return l().then(function(e){return e.geodesicBuffer})}function a(e,t,r){if("intersects"===e){if("polygon"===t.type&&"esriGeometryPoint"===r)return n.resolve(o.polygonContainsPoint.bind(null,t.toJSON()));if("extent"===t.type)return n.resolve(i.getExtentIntersector(r).bind(null,t))}return l().then(function(r){return r[e].bind(null,t.toJSON())})}function f(e,t,o){var i=e.spatialRelationship,l=e.geometry;return l?s(i)?p(l.type)?y(t)?u.canProject(l.spatialReference,o)?(l.hasZ,n.resolve()):n.reject(new r(m,"Unsupported geometry spatialReference",{query:e})):n.reject(new r(m,"Unsupported layer geometry type",{query:e})):n.reject(new r(m,"Unsupported query geometry type",{query:e})):n.reject(new r(m,"Unsupported query spatial relationship",{query:e})):null}function g(e){switch(e.type){case"extent":return!0;case"polygon":return e.rings.every(function(e){return 5===e.length&&(e[0][0]===e[1][0]&&e[0][0]===e[4][0]&&e[2][0]===e[3][0]&&e[0][1]===e[3][1]&&e[0][1]===e[4][1]&&e[1][1]===e[2][1])});default:return!1}}Object.defineProperty(t,"__esModule",{value:!0});var m="feature-store:unsupported-query",d={spatialRelationship:{intersects:!0,contains:!0,within:!0,crosses:!0,touches:!0,overlaps:!0,"envelope-intersects":!0},queryGeometry:{point:!0,multipoint:!0,polyline:!0,polygon:!0,extent:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0}};t.importGeometryEngine=l,t.getGeodesicBufferOperator=c,t.getSpatialQueryOperator=a,t.checkSpatialQuerySupport=f,t.canQueryWithRBush=g});