// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../core/shaderModules/interfaces"],function(e,a,r,d){function i(e,a){var i=e.fragment;i.defines.addFloat("COVERAGE_TEST_THRESHOLD",.01),a.antialiasing?i.code.add(d.glsl(o||(o=r(["\n      #define discardByCoverage(radius, coverage) { if (coverage < COVERAGE_TEST_THRESHOLD) discard; }\n    "],["\n      #define discardByCoverage(radius, coverage) { if (coverage < COVERAGE_TEST_THRESHOLD) discard; }\n    "])))):i.code.add(d.glsl(c||(c=r(["\n      #define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75; if (coverage < coverageLimit) discard; }\n    "],["\n      #define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75; if (coverage < coverageLimit) discard; }\n    "]))))}Object.defineProperty(a,"__esModule",{value:!0}),a.DiscardByCoverage=i;var o,c});