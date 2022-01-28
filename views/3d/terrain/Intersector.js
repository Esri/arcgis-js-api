/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../webgl-engine/lib/intersectorUtils"],(function(e,t){"use strict";function r(e){return t.isValidIntersectorResult(e)&&2===e.intersector&&!!e.target}function n(e){return t.isValidIntersectorResult(e)&&3===e.intersector&&!!e.target}e.isOverlayIntersectorResult=n,e.isTerrainIntersectorResult=r,Object.defineProperty(e,"__esModule",{value:!0})}));
