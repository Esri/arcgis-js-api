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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/generatorHelper","../../../core/tsSupport/awaiterHelper","../../../core/Error","../../../core/promiseUtils","../../../geometry/support/contains","../../../geometry/support/intersects","../../../geometry/support/jsonUtils","../../../geometry/support/spatialReferenceUtils","../contains","../featureConversionUtils","../OptimizedGeometry","./projectionSupport","./utils"],(function(e,t,r,i,n,o,s,l,a,u,p,y,c,f,m){Object.defineProperty(t,"__esModule",{value:!0});var g={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},R={esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},S={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},v={esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1};function d(){return o.create((function(t){return e(["../../../geometry/geometryEngine"],t)}))}t.importGeometryEngine=d,t.getGeodesicBufferOperator=function(){return d().then((function(e){return e.geodesicBuffer}))},t.getSpatialQueryOperator=function(e,t,r){if(a.isPolygon(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){var i=y.convertFromPolygon(new c.default,t,!1,!1);return o.resolve((function(e){return p.polygonContainsPoint(i,!1,!1,e)}))}if(a.isPolygon(t)&&"esriGeometryMultipoint"===r.geometryType){var n=y.convertFromPolygon(new c.default,t,!1,!1);if("esriSpatialRelContains"===e)return o.resolve((function(e){return p.polygonContainsMultipoint(n,!1,!1,e,r.hasZ,r.hasM)}))}if(a.isExtent(t)&&"esriGeometryPoint"===r.geometryType&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return o.resolve((function(e){return s.extentContainsPoint(t,m.getGeometry(r,e))}));if(a.isExtent(t)&&"esriGeometryMultipoint"===r.geometryType&&"esriSpatialRelContains"===e)return o.resolve((function(e){return s.extentContainsMultipoint(t,m.getGeometry(r,e))}));if(a.isExtent(t)&&"esriSpatialRelIntersects"===e){var u=l.getExtentIntersector(r.geometryType);return o.resolve((function(e){return u(t,m.getGeometry(r,e))}))}return d().then((function(i){var n=i[g[e]].bind(null,t);return function(e){return n(m.getGeometry(r,e))}}))},t.checkSpatialQuerySupport=function(e,t,o){return i(this,void 0,void 0,(function(){var i,s;return r(this,(function(r){if(i=e.spatialRel,!(s=e.geometry))return[2];if(!0!==R[i])throw new n("feature-store:unsupported-query","Unsupported query spatial relationship",{query:e});if(!u.isValid(s.spatialReference)||!u.isValid(o))return[2];if(!function(e){return!0===S[a.getJsonType(e)]}(s))throw new n("feature-store:unsupported-query","Unsupported query geometry type",{query:e});if(!function(e){return!0===v[e]}(t))throw new n("feature-store:unsupported-query","Unsupported layer geometry type",{query:e});return e.outSR?[2,f.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)]:[2]}))}))},t.canQueryWithRBush=function(e){if(a.isExtent(e))return!0;if(a.isPolygon(e)){for(var t=0,r=e.rings;t<r.length;t++){var i=r[t];if(5!==i.length)return!1;if(i[0][0]!==i[1][0]||i[0][0]!==i[4][0]||i[2][0]!==i[3][0]||i[0][1]!==i[3][1]||i[0][1]!==i[4][1]||i[1][1]!==i[2][1])return!1}return!0}return!1}}));