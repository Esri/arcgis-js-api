/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","./zscale"],(function(e,t){"use strict";e.applyFeatureSetZUnitScaling=function(e,r,o){if(!o||!o.features||!o.hasZ)return;const n=t.getGeometryZScaler(o.geometryType,r,e.outSpatialReference);if(n)for(const e of o.features)n(e.geometry)},Object.defineProperty(e,"__esModule",{value:!0})}));
