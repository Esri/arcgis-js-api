/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../renderers/support/lengthUtils"],(function(t,e){"use strict";function n(t){return!!t&&null!=e.meterIn[t]}function r(t){return 1/(e.meterIn[t]||1)}function o(){const t=Object.keys(e.meterIn);return t.sort(),t}const s=o();t.getMetersPerUnit=r,t.supportedUnits=s,t.supportsUnit=n,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
