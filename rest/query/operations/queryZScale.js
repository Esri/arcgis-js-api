/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../geometry/support/zscale"],(function(e,t,r){"use strict";function o(e,o,n){if(!n||!n.features||!n.hasZ)return;const a=r.getGeometryZScaler(n.geometryType,o,e.outSpatialReference);if(!t.isNone(a))for(const t of n.features)a(t.geometry)}e.applyFeatureSetZUnitScaling=o,Object.defineProperty(e,"__esModule",{value:!0})}));
