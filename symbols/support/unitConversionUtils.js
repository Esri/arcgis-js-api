/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../renderers/support/lengthUtils"],(function(e,t){"use strict";function n(e){return null!=t.meterIn[e]}function r(e){return 1/(t.meterIn[e]||1)}function s(){const e=Object.keys(t.meterIn);return e.sort(),e}const u=s();e.getMetersPerUnit=r,e.supportedUnits=u,e.supportsUnit=n,Object.defineProperty(e,"__esModule",{value:!0})}));
