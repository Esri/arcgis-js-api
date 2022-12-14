/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../core/unitUtils"],(function(e,t){"use strict";const n=96;function r(e,r){const i=r||e.extent,o=e.width,c=t.getMetersPerUnitForSR(i&&i.spatialReference);return i&&o?i.width/o*c*t.inchesPerMeter*n:0}function i(e,r){return e/(t.getMetersPerUnitForSR(r)*t.inchesPerMeter*n)}function o(e){return e/(t.inchesPerMeter*n)}function c(e,r){return e*(t.getMetersPerUnitForSR(r)*t.inchesPerMeter*n)}function s(e,t){const n=e.extent,r=e.width-(e.padding?e.padding.left+e.padding.right:0),o=i(t,n.spatialReference);return n.clone().expand(o*r/n.width)}e.getExtentForScale=s,e.getResolutionForScale=i,e.getResolutionInMetersForScale=o,e.getScale=r,e.getScaleForResolution=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
