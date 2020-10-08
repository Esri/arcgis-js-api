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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/shaderModules/interfaces"],(function(e,t,i,n){"use strict";var s,d,r;Object.defineProperty(t,"__esModule",{value:!0}),t.DiscardShortEdges=void 0,t.DiscardShortEdges=function(e,t){var l=e.vertex;switch(t.mode){case 1:l.code.add(n.glsl(s||(s=i.__makeTemplateObject(["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "],["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "]))));break;case 2:l.code.add(n.glsl(d||(d=i.__makeTemplateObject(["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "],["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) { if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0) { gl_Position = vec4(10.0, 10.0, 10.0, 1.0); return; }}\n      "]))));break;case 0:l.code.add(n.glsl(r||(r=i.__makeTemplateObject(["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) {}\n      "],["\n        #define discardShortEdges(unpackedAttributes, lineLengthPixels) {}\n      "]))))}}}));