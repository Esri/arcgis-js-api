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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/contains","../../../geometry/support/intersects","../../../geometry/support/jsonUtils","../../../geometry/support/spatialReferenceUtils","../contains","../featureConversionUtils","../OptimizedGeometry","./projectionSupport","./utils","@dojo/framework/shim/Promise"],(function(e,t,r,i,n,o,s,l,a,u,p,y,c,f){Object.defineProperty(t,"__esModule",{value:!0});var m={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},R={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},g={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},S={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function v(){return new Promise((function(t,r){e(["../../../geometry/geometryEngineJSON"],t,r)}))}t.importGeometryEngine=v,t.getGeodesicBufferOperator=function(){return v().then((function(e){return e.geodesicBuffer}))},t.getSpatialQueryOperator=function(e,t,r,i,a){if(l.isPolygon(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var c=p.convertFromPolygon(new y.default,t,!1,!1);return n.resolve((function(e){return u.polygonContainsPoint(c,!1,!1,e)}))}if(l.isPolygon(t)&&"esriGeometryMultipoint"===r){var R=p.convertFromPolygon(new y.default,t,!1,!1);if("esriSpatialRelContains"===e)return n.resolve((function(e){return u.polygonContainsMultipoint(R,!1,!1,e,i,a)}))}if(l.isExtent(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return n.resolve((function(e){return o.extentContainsPoint(t,f.getGeometry(r,i,a,e))}));if(l.isExtent(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return n.resolve((function(e){return o.extentContainsMultipoint(t,f.getGeometry(r,i,a,e))}));if(l.isExtent(t)&&"esriSpatialRelIntersects"===e){var g=s.getExtentIntersector(r);return n.resolve((function(e){return g(t,f.getGeometry(r,i,a,e))}))}return v().then((function(n){var o=n[m[e]].bind(null,t.spatialReference,t);return function(e){return o(f.getGeometry(r,i,a,e))}}))},t.checkSpatialQuerySupport=function(e,t,n){return r.__awaiter(this,void 0,void 0,(function(){var o,s;return r.__generator(this,(function(r){if(o=e.spatialRel,!(s=e.geometry))return[2];if(!0!==R[o])throw new i("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(!a.isValid(s.spatialReference)||!a.isValid(n))return[2];if(!function(e){return!0===g[l.getJsonType(e)]}(s))throw new i("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===S[e]}(t))throw new i("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});return e.outSR?[2,c.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]}))}))},t.canQueryWithRBush=function(e){if(l.isExtent(e))return!0;if(l.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}));