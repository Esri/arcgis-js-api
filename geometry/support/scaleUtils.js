/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../core/unitUtils"],(function(e,t){"use strict";function n(e,n){return e/(t.getMetersPerUnitForSR(n)*t.inchesPerMeter*96)}e.getExtentForScale=function(e,t){const r=e.extent,i=e.width,o=n(t,r.spatialReference);return r.clone().expand(o*i/r.width)},e.getResolutionForScale=n,e.getScale=function(e,n){const r=n||e.extent,i=e.width,o=t.getMetersPerUnitForSR(r&&r.spatialReference);return r&&i?r.width/i*o*t.inchesPerMeter*96:0},e.getScaleForResolution=function(e,n){return e*(t.getMetersPerUnitForSR(n)*t.inchesPerMeter*96)},Object.defineProperty(e,"__esModule",{value:!0})}));
