/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["require","exports","../../../chunks/_rollupPluginBabelHelpers","../../../core/Error","../../../geometry/support/contains","../../../geometry/support/intersects","../../../geometry/support/jsonUtils","../../../geometry/support/spatialReferenceUtils","../contains","../featureConversionUtils","../OptimizedGeometry","./projectionSupport","./utils"],(function(e,t,r,i,n,o,s,l,a,p,u,y,c){"use strict";const m="feature-store:unsupported-query",R={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},f={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function S(e){return!0===f.spatialRelationship[e]}function g(e){return!0===f.queryGeometry[s.getJsonType(e)]}function G(e){return!0===f.layerGeometry[e]}function P(){return new Promise((function(t,r){e(["../../../geometry/geometryEngineJSON"],t,r)}))}function h(e,t,r,i,l){if(s.isPolygon(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=p.convertFromPolygon(new u,t,!1,!1);return Promise.resolve((t=>a.polygonContainsPoint(e,!1,!1,t)))}if(s.isPolygon(t)&&"esriGeometryMultipoint"===r){const r=p.convertFromPolygon(new u,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>a.polygonContainsMultipoint(r,!1,!1,e,i,l)))}if(s.isExtent(t)&&"esriGeometryPoint"===r&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>n.extentContainsPoint(t,c.getGeometry(r,i,l,e))));if(s.isExtent(t)&&"esriGeometryMultipoint"===r&&"esriSpatialRelContains"===e)return Promise.resolve((e=>n.extentContainsMultipoint(t,c.getGeometry(r,i,l,e))));if(s.isExtent(t)&&"esriSpatialRelIntersects"===e){const e=o.getExtentIntersector(r);return Promise.resolve((n=>e(t,c.getGeometry(r,i,l,n))))}return P().then((n=>{const o=n[R[e]].bind(null,t.spatialReference,t);return e=>o(c.getGeometry(r,i,l,e))}))}function v(e,t,r){return d.apply(this,arguments)}function d(){return(d=r._asyncToGenerator((function*(e,t,r){const{spatialRel:n,geometry:o}=e;if(o){if(!S(n))throw new i(m,"Unsupported query spatial relationship",{query:e});if(l.isValid(o.spatialReference)&&l.isValid(r)){if(!g(o))throw new i(m,"Unsupported query geometry type",{query:e});if(!G(t))throw new i(m,"Unsupported layer geometry type",{query:e});if(e.outSR)return y.checkProjectionSupport(e.geometry&&e.geometry.spatialReference,e.outSR)}}}))).apply(this,arguments)}function C(e){if(s.isExtent(e))return!0;if(s.isPolygon(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}t.canQueryWithRBush=C,t.checkSpatialQuerySupport=v,t.getSpatialQueryOperator=h,Object.defineProperty(t,"__esModule",{value:!0})}));
