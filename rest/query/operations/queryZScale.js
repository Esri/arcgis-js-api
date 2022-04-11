/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../geometry/support/zscale"],(function(e,t,o){"use strict";function r(e,r,a){if(!a||!a.features||!a.hasZ)return;const n=o.getGeometryZScaler(a.geometryType,r,e.outSpatialReference);if(!t.isNone(n))for(const t of a.features)n(t.geometry)}e.applyFeatureSetZUnitScaling=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
