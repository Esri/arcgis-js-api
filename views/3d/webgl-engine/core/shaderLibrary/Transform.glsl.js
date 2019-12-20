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

define(["require","exports","../../../../../core/tsSupport/makeTemplateObjectHelper","../../../../../core/libs/gl-matrix-2/mat4","../../../../../core/libs/gl-matrix-2/mat4f32","../shaderModules/interfaces"],function(e,r,n,t,o,a){function i(e,r){r.linearDepth?e.vertex.code.add(a.glsl(s||(s=n(["\n    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {\n      vec4 eye = view * vec4(pos, 1.0);\n      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\n      return proj * eye;\n    }\n    "],["\n    vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {\n      vec4 eye = view * vec4(pos, 1.0);\n      depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;\n      return proj * eye;\n    }\n    "])))):e.vertex.code.add(a.glsl(p||(p=n(["\n    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {\n      // Make sure the order of operations is the same as in transformPositionWithDepth.\n      return proj * (view * vec4(pos, 1.0));\n    }\n    "],["\n    vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {\n      // Make sure the order of operations is the same as in transformPositionWithDepth.\n      return proj * (view * vec4(pos, 1.0));\n    }\n    "]))))}Object.defineProperty(r,"__esModule",{value:!0}),r.Transform=i,function(e){function r(e,r){t.mat4.translate(v,r.view,r.origin),e.setUniform3fv("localOrigin",r.origin),e.setUniformMatrix4fv("view",v)}e.bindUniforms=r}(i=r.Transform||(r.Transform={}));var s,p,v=o.mat4f32.create()});