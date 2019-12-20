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

define(["require","exports","../../../../../core/tsSupport/makeTemplateObjectHelper","../shaderModules/interfaces"],function(e,r,a,n){function i(e,r){0===r.output&&r.receiveShadows?(e.varyings.add("linearDepth","float"),e.vertex.code.add(n.glsl(o||(o=a(["\n      void forwardLinearDepth() { linearDepth = gl_Position.w; }\n    "],["\n      void forwardLinearDepth() { linearDepth = gl_Position.w; }\n    "]))))):1===r.output||3===r.output?(e.varyings.add("linearDepth","float"),e.vertex.uniforms.add("uCameraNearFar","vec2"),e.vertex.code.add(n.glsl(t||(t=a(["\n      void forwardLinearDepth() {\n        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);\n      }\n    "],["\n      void forwardLinearDepth() {\n        linearDepth = (-position_view().z - uCameraNearFar[0]) / (uCameraNearFar[1] - uCameraNearFar[0]);\n      }\n    "]))))):e.vertex.code.add(n.glsl(d||(d=a(["\n      void forwardLinearDepth() {}\n    "],["\n      void forwardLinearDepth() {}\n    "]))))}Object.defineProperty(r,"__esModule",{value:!0}),r.ForwardLinearDepth=i;var o,t,d});