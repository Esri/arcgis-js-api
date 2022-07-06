/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import"../../geometry.js";import{createArea as e}from"../../core/quantityUtils.js";import{geodesicArea as r}from"../../geometry/geometryEngine.js";import{projectPolygonToWGS84ComparableLonLat as t}from"../../geometry/projection.js";import{geodesicAreas as s}from"../../geometry/support/geodesicUtils.js";import{geodesicMeasure as o}from"./geodesicMeasurementUtils.js";import n from"../../geometry/SpatialReference.js";function m(e){const{spatialReference:r}=e;return o(r,i,a,u,e)}function i(r){return e(Math.abs(s([r],"square-meters")[0]),"square-meters")}function a(t){try{return e(Math.abs(r(t,"square-meters")),"square-meters")}catch(s){return null}}function u(r){const o=[];return t(r,o)?e(Math.abs(s([{type:"polygon",rings:o,spatialReference:n.WGS84}],"square-meters")[0]),"square-meters"):null}export{m as geodesicArea};
