/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces"],(function(e,a){"use strict";function r(e,r){const d=e.fragment;d.constants.add("coverageTestThreshold","float",.01),r.antialiasing?d.code.add(a.glsl`#define discardByCoverage(radius, coverage) { if (coverage < coverageTestThreshold) discard; }`):d.code.add(a.glsl`#define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? coverageTestThreshold : 0.75; if (coverage < coverageLimit) discard; }`)}e.DiscardByCoverage=r,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
