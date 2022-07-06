/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{canProjectWithoutEngine as o}from"../../geometry/projection.js";import{getSphericalPCPF as r,SphericalECEFSpatialReference as t,WGS84ECEFSpatialReference as e}from"../../geometry/projectionEllipsoid.js";function i(i){const m=r(i),n=m===t?e:m;return o(i,n)?n:i}export{i as computeEuclideanMeasurementSR};
