/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../webgl-engine/lib/intersectorUtils"],(function(e,t){"use strict";function r(e){return t.isValidIntersectorResult(e)&&5===e.intersector&&!!e.target}function s(e){return t.isValidIntersectorResult(e)&&4===e.intersector&&!!e.target}e.isI3sIntersectorResult=s,e.isPclIntersectorResult=r,Object.defineProperty(e,"__esModule",{value:!0})}));
