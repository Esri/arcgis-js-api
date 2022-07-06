/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../../core/maybe.js";import{euclideanHorizontalPlanarArea as r,euclideanPlanarArea as t,createEuclideanPlanarAreaCache as o}from"./euclideanAreaMeasurementUtils.js";import{geodesicArea as i}from"./geodesicAreaMeasurementUtils.js";function m(m,s,n=o()){if(s){const t=i(m);return e(t)?t:r(m,n)}return t(m,n)}export{m as autoAreaByDrapedStatus};
