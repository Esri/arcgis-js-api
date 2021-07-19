/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../core/unitUtils"],(function(e,t){"use strict";const n=96;function r(e,r){const i=r||e.extent,o=e.width,c=t.getMetersPerUnitForSR(i&&i.spatialReference);return i&&o?i.width/o*c*t.inchesPerMeter*n:0}function i(e,r){return e/(t.getMetersPerUnitForSR(r)*t.inchesPerMeter*n)}function o(e,r){return e*(t.getMetersPerUnitForSR(r)*t.inchesPerMeter*n)}function c(e,t){const n=e.extent,r=e.width,o=i(t,n.spatialReference);return n.clone().expand(o*r/n.width)}e.getExtentForScale=c,e.getResolutionForScale=i,e.getScale=r,e.getScaleForResolution=o,Object.defineProperty(e,"__esModule",{value:!0})}));
