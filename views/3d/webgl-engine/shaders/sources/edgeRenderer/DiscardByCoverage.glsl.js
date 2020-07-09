// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/shaderModules/interfaces"],(function(e,a,r,i){var d,c;Object.defineProperty(a,"__esModule",{value:!0}),a.DiscardByCoverage=function(e,a){var o=e.fragment;o.defines.addFloat("COVERAGE_TEST_THRESHOLD",.01),a.antialiasing?o.code.add(i.glsl(d||(d=r.__makeTemplateObject(["\n      #define discardByCoverage(radius, coverage) { if (coverage < COVERAGE_TEST_THRESHOLD) discard; }\n    "],["\n      #define discardByCoverage(radius, coverage) { if (coverage < COVERAGE_TEST_THRESHOLD) discard; }\n    "])))):o.code.add(i.glsl(c||(c=r.__makeTemplateObject(["\n      #define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75; if (coverage < coverageLimit) discard; }\n    "],["\n      #define discardByCoverage(radius, coverage) { float coverageLimit = radius <= 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75; if (coverage < coverageLimit) discard; }\n    "]))))}}));