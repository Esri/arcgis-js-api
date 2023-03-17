/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../core/maybe","./euclideanAreaMeasurementUtils","./geodesicAreaMeasurementUtils"],(function(e,a,r,n){"use strict";function t(e,t,o=r.createEuclideanPlanarAreaCache()){if("on-the-ground"===t){const t=n.geodesicArea(e);return a.isSome(t)?t:r.euclideanHorizontalPlanarArea(e,o)}return r.euclideanPlanarArea(e,o)}function o(e,a=r.createEuclideanPlanarAreaCache()){return t(e,"on-the-ground",a)}e.autoArea2D=o,e.autoAreaByElevationMode=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
