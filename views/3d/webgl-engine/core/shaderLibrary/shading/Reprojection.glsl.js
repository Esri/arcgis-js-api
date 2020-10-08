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

define(["require","exports","tslib","../../shaderModules/interfaces"],(function(e,o,r,t){"use strict";function n(e){e.fragment.uniforms.add("lastFrameColorMap","sampler2D"),e.fragment.uniforms.add("reprojectionMat","mat4"),e.fragment.uniforms.add("rpProjectionMat","mat4"),e.fragment.code.add(t.glsl(i||(i=r.__makeTemplateObject(["\n  vec2 reprojectionCoordinate(vec3 projectionCoordinate)\n  {\n    vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);\n    vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);\n    reprojectedCoord.xy /= reprojectedCoord.w;\n    return reprojectedCoord.xy*0.5 + 0.5;\n  }\n  "],["\n  vec2 reprojectionCoordinate(vec3 projectionCoordinate)\n  {\n    vec4 zw = rpProjectionMat * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);\n    vec4 reprojectedCoord = reprojectionMat * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);\n    reprojectedCoord.xy /= reprojectedCoord.w;\n    return reprojectedCoord.xy*0.5 + 0.5;\n  }\n  "]))))}var i;Object.defineProperty(o,"__esModule",{value:!0}),o.Reprojection=void 0,o.Reprojection=n,function(e){e.bindUniforms=function(e,o,r){e.setUniform1i("lastFrameColorMap",r.lastFrameColorTextureID),o.bindTexture(r.lastFrameColorTexture,r.lastFrameColorTextureID),e.setUniformMatrix4fv("reprojectionMat",r.reprojectionMat),e.setUniformMatrix4fv("rpProjectionMat",r.camera.projectionMatrix)}}(n=o.Reprojection||(o.Reprojection={}))}));