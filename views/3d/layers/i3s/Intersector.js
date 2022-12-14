/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../webgl-engine/lib/IntersectorInterfaces","../../webgl-engine/lib/intersectorUtils"],(function(e,t,r){"use strict";function n(e){return r.isValidIntersectorResult(e)&&e.intersector===t.IntersectorType.PCL&&!!e.target}function s(e){return r.isValidIntersectorResult(e)&&e.intersector===t.IntersectorType.I3S&&!!e.target}e.isI3sIntersectorResult=s,e.isPclIntersectorResult=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
