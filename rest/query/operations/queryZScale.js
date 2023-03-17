/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe","../../../geometry/support/zscale"],(function(e,t,o){"use strict";function r(e,r,n){if(!n||!n.features||!n.hasZ)return;const a=o.getGeometryZScaler(n.geometryType,r,e.outSpatialReference);if(!t.isNone(a))for(const t of n.features)a(t.geometry)}e.applyFeatureSetZUnitScaling=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
