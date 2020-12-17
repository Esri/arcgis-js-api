/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../renderers/support/lengthUtils"],(function(e,t){"use strict";const n=function(){const e=Object.keys(t.meterIn);return e.sort(),e}();e.getMetersPerUnit=function(e){return 1/(t.meterIn[e]||1)},e.supportedUnits=n,e.supportsUnit=function(e){return null!=t.meterIn[e]},Object.defineProperty(e,"__esModule",{value:!0})}));
