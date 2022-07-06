/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{glsl as e}from"../../../core/shaderModules/interfaces.js";function a(a,r){const d=a.fragment;d.constants.add("coverageTestThreshold","float",.01),r.antialiasing?d.code.add(e`#define discardByCoverage(radius, coverage) { if (coverage < coverageTestThreshold) discard; }`):d.code.add(e`#define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? coverageTestThreshold : 0.75; if (coverage < coverageLimit) discard; }`)}export{a as DiscardByCoverage};
