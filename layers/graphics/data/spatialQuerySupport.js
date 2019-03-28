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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/contains","../../../geometry/support/intersects","../../../geometry/support/jsonUtils","../../../geometry/support/spatialReferenceUtils","../contains","../featureConversionUtils","../OptimizedGeometry","./projectionSupport","./utils"],function(e,t,r,i,n,o,s,l,a,p,u,y,c){function m(e){return!0===C.spatialRelationship[e]}function f(e){return!0===C.queryGeometry[s.getJsonType(e)]}function g(e){return!0===C.layerGeometry[e]}function R(){return i.create(function(t){return e(["../../../geometry/geometryEngine"],t)})}function S(){return R().then(function(e){return e.geodesicBuffer})}function v(e,t,r){if(s.isPolygon(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var l=p.convertFromPolygon(new u.default,t,!1,!1);return i.resolve(function(e){return a.polygonContainsPoint(l,!1,!1,e)})}if(s.isPolygon(t)&&"esriGeometryMultipoint"===r.geometryType){var y=p.convertFromPolygon(new u.default,t,!1,!1);if("esriSpatialRelContains"===e)return i.resolve(function(e){return a.polygonContainsMultipoint(y,!1,!1,e,r.hasZ,r.hasM)})}if(s.isExtent(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return i.resolve(function(e){return n.extentContainsPoint(t,c.getGeometry(r,e))});if(s.isExtent(t)&&"esriGeometryMultipoint"===r.geometryType&&"esriSpatialRelContains"===e)return i.resolve(function(e){return n.extentContainsMultipoint(t,c.getGeometry(r,e))});if(s.isExtent(t)&&"esriSpatialRelIntersects"===e){var m=o.getExtentIntersector(r.geometryType);return i.resolve(function(e){return m(t,c.getGeometry(r,e))})}return R().then(function(i){var n=i[P[e]].bind(null,t);return function(e){return n(c.getGeometry(r,e))}})}function G(e,t,n){var o=e.spatialRel,s=e.geometry;return s?m(o)?l.isValid(s.spatialReference)&&l.isValid(n)?f(s)?g(t)?e.outSR?y.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR):i.resolve():i.reject(new r(d,"Unsupported layer geometry type",{query:e})):i.reject(new r(d,"Unsupported query geometry type",{query:e})):i.resolve():i.reject(new r(d,"Unsupported query spatial relationship",{query:e})):i.resolve()}function h(e){if(s.isExtent(e))return!0;if(s.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0});var d="feature-store:unsupported-query",P={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},C={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};t.importGeometryEngine=R,t.getGeodesicBufferOperator=S,t.getSpatialQueryOperator=v,t.checkSpatialQuerySupport=G,t.canQueryWithRBush=h});