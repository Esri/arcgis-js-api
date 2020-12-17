/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderModules/interfaces"],(function(e,a){"use strict";e.DiscardByCoverage=function(e,d){const i=e.fragment;i.defines.addFloat("COVERAGE_TEST_THRESHOLD",.01),d.antialiasing?i.code.add(a.glsl`
      #define discardByCoverage(radius, coverage) { if (coverage < COVERAGE_TEST_THRESHOLD) discard; }
    `):i.code.add(a.glsl`
      #define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75; if (coverage < coverageLimit) discard; }
    `)},Object.defineProperty(e,"__esModule",{value:!0})}));
