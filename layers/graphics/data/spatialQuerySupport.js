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

define(["require","exports","tslib","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/contains","../../../geometry/support/intersects","../../../geometry/support/jsonUtils","../../../geometry/support/spatialReferenceUtils","../contains","../featureConversionUtils","../OptimizedGeometry","./projectionSupport","./utils","@dojo/framework/shim/Promise"],(function(e,t,r,i,n,o,s,a,l,u,p,c,y,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canQueryWithRBush=t.checkSpatialQuerySupport=t.getSpatialQueryOperator=t.getGeodesicBufferOperator=t.importGeometryEngine=void 0;var m={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},g={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},R={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},S={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function v(){return new Promise((function(t,r){e(["../../../geometry/geometryEngineJSON"],t,r)}))}t.importGeometryEngine=v,t.getGeodesicBufferOperator=function(){return v().then((function(e){return e.geodesicBuffer}))},t.getSpatialQueryOperator=function(e,t,r,i,l){if(a.isPolygon(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var y=p.convertFromPolygon(new c.default,t,!1,!1);return n.resolve((function(e){return u.polygonContainsPoint(y,!1,!1,e)}))}if(a.isPolygon(t)&&"esriGeometryMultipoint"===r){var g=p.convertFromPolygon(new c.default,t,!1,!1);if("esriSpatialRelContains"===e)return n.resolve((function(e){return u.polygonContainsMultipoint(g,!1,!1,e,i,l)}))}if(a.isExtent(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return n.resolve((function(e){return o.extentContainsPoint(t,f.getGeometry(r,i,l,e))}));if(a.isExtent(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return n.resolve((function(e){return o.extentContainsMultipoint(t,f.getGeometry(r,i,l,e))}));if(a.isExtent(t)&&"esriSpatialRelIntersects"===e){var R=s.getExtentIntersector(r);return n.resolve((function(e){return R(t,f.getGeometry(r,i,l,e))}))}return v().then((function(n){var o=n[m[e]].bind(null,t.spatialReference,t);return function(e){return o(f.getGeometry(r,i,l,e))}}))},t.checkSpatialQuerySupport=function(e,t,n){return r.__awaiter(this,void 0,void 0,(function(){var o,s;return r.__generator(this,(function(r){if(o=e.spatialRel,!(s=e.geometry))return[2];if(!0!==g[o])throw new i("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(!l.isValid(s.spatialReference)||!l.isValid(n))return[2];if(!function(e){return!0===R[a.getJsonType(e)]}(s))throw new i("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===S[e]}(t))throw new i("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});return e.outSR?[2,y.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]}))}))},t.canQueryWithRBush=function(e){if(a.isExtent(e))return!0;if(a.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}));