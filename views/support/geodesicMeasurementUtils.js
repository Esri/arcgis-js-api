/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSupported as o}from"../../geometry/support/geodesicUtils.js";import{isGeographic as p,isWebMercator as e}from"../../geometry/support/spatialReferenceUtils.js";function r(r,t,i,s,...l){return p(r)&&o(r)?t.apply(void 0,l):e(r)?i.apply(void 0,l):s.apply(void 0,l)}export{r as geodesicMeasure};
