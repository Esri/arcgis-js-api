/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";function t(e){const t=[];return e&&(t.push("applyProjection"),1===e.spacing[0]&&t.push("lookupProjection")),t}function i(e,t,i){const n=!i.capabilities.textureFloat?.textureFloatLinear,o=[];return"cubic"===e?o.push("bicubic"):"bilinear"===e&&(t?(o.push("bilinear"),o.push("nnedge")):n&&o.push("bilinear")),o}e.getInterpolationDefines=i,e.getProjectionDefines=t,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
