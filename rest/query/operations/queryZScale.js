/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","./zscale"],(function(e,t){"use strict";function r(e,r,o){if(!o||!o.features||!o.hasZ)return;const n=t.getGeometryZScaler(o.geometryType,r,e.outSpatialReference);if(n)for(const t of o.features)n(t.geometry)}e.applyFeatureSetZUnitScaling=r,Object.defineProperty(e,"__esModule",{value:!0})}));
