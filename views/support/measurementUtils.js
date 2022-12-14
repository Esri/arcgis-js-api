/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../geometry/projection","../../geometry/projectionEllipsoid"],(function(e,t,o){"use strict";function i(e){const i=o.getSphericalPCPF(e),n=i===o.SphericalECEFSpatialReference?o.WGS84ECEFSpatialReference:i;return t.canProjectWithoutEngine(e,n)?n:e}e.computeEuclideanMeasurementSR=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
