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

define(["require","exports","tslib","../shaderModules/interfaces"],(function(e,a,r,n){var t,i,o;Object.defineProperty(a,"__esModule",{value:!0}),a.ForwardLinearDepth=function(e,a){0===a.output&&a.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(n.glsl(t||(t=r.__makeTemplateObject(["\n      void forwardLinearDepth() { linearDepth = gl_Position.w; }\n    "],["\n      void forwardLinearDepth() { linearDepth = gl_Position.w; }\n    "]))))):1===a.output||3===a.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(n.glsl(i||(i=r.__makeTemplateObject(["\n      void forwardLinearDepth() {\n        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);\n      }\n    "],["\n      void forwardLinearDepth() {\n        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);\n      }\n    "]))))):e.vertex.code.add(n.glsl(o||(o=r.__makeTemplateObject(["\n      void forwardLinearDepth() {}\n    "],["\n      void forwardLinearDepth() {}\n    "]))))}}));