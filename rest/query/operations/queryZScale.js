/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isNone as e}from"../../../core/maybe.js";import{getGeometryZScaler as o}from"../../../geometry/support/zscale.js";function r(r,t,f){if(!f||!f.features||!f.hasZ)return;const s=o(f.geometryType,t,r.outSpatialReference);if(!e(s))for(const e of f.features)s(e.geometry)}export{r as applyFeatureSetZUnitScaling};
