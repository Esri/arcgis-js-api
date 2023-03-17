/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../geometry/projection","../../geometry/spatialReferenceEllipsoidUtils"],(function(e,t,i){"use strict";function n(e){const n=i.getSphericalPCPF(e),r=n===i.SphericalECEFSpatialReference?i.WGS84ECEFSpatialReference:n;return t.canProjectWithoutEngine(e,r)?r:e}e.computeEuclideanMeasurementSR=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
