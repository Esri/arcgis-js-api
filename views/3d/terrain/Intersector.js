/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../webgl-engine/lib/IntersectorInterfaces","../webgl-engine/lib/intersectorUtils"],(function(e,t,r){"use strict";function n(e){return r.isValidIntersectorResult(e)&&e.intersector===t.IntersectorType.TERRAIN&&!!e.target}function s(e){return r.isValidIntersectorResult(e)&&e.intersector===t.IntersectorType.OVERLAY&&!!e.target}e.isOverlayIntersectorResult=s,e.isTerrainIntersectorResult=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
