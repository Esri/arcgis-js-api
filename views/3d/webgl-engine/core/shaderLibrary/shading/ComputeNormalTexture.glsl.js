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

define(["require","exports","tslib","../attributes/VertexTextureCoordinates.glsl","../../shaderModules/interfaces"],(function(n,e,t,a,o){var r,s,c,d;Object.defineProperty(e,"__esModule",{value:!0}),e.ComputeNormalTexture=function(n,e){var g=n.fragment;g.uniforms.add("normalTexture","sampler2D"),g.uniforms.add("normalTextureSize","vec2"),e.vertexTangets?(n.attributes.add("tangent","vec4"),n.varyings.add("vTangent","vec4"),2===e.doubleSidedMode?g.code.add(o.glsl(r||(r=t.__makeTemplateObject(["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;\n        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);\n        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "],["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;\n        vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);\n        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "])))):g.code.add(o.glsl(s||(s=t.__makeTemplateObject(["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness = vTangent.w;\n        vec3 tangent = normalize(vTangent.xyz);\n        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "],["\n      mat3 computeTangentSpace(vec3 normal) {\n        float tangentHeadedness = vTangent.w;\n        vec3 tangent = normalize(vTangent.xyz);\n        vec3 bitangent = cross(normal, tangent) * tangentHeadedness;\n        return mat3(tangent, bitangent, normal);\n      }\n    "]))))):(n.extensions.add("GL_OES_standard_derivatives"),g.code.add(o.glsl(c||(c=t.__makeTemplateObject(['\n    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {\n\n      vec3 Q1 = dFdx(pos);\n      vec3 Q2 = dFdy(pos);\n\n      vec2 stx = dFdx(st);\n      vec2 sty = dFdy(st);\n\n      float det = stx.t * sty.s - sty.t * stx.s;\n\n      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent\n      T = T - normal * dot(normal, T); // orthogonalize tangent\n      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0\n      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B\n      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates\n    }\n  '],['\n    mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {\n\n      vec3 Q1 = dFdx(pos);\n      vec3 Q2 = dFdy(pos);\n\n      vec2 stx = dFdx(st);\n      vec2 sty = dFdy(st);\n\n      float det = stx.t * sty.s - sty.t * stx.s;\n\n      vec3 T = stx.t * Q2 - sty.t * Q1; // compute tangent\n      T = T - normal * dot(normal, T); // orthogonalize tangent\n      T *= inversesqrt(max(dot(T,T), 1.e-10)); // "soft" normalize - goes to 0 when T goes to 0\n      vec3 B = sign(det) * cross(normal, T); // assume normal is normalized, B has the same lenght as B\n      return mat3(T, B, normal); // T and B go to 0 when the tangent space is not well defined by the uv coordinates\n    }\n  ']))))),0!==e.attributeTextureCoordinates&&(n.include(a.VertexTextureCoordinates,e),g.code.add(o.glsl(d||(d=t.__makeTemplateObject(["\n    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {\n      vtc.uv = uv;\n      ","\n      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;\n      return tangentSpace * rawNormal;\n    }\n  "],["\n    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {\n      vtc.uv = uv;\n      ","\n      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;\n      return tangentSpace * rawNormal;\n    }\n  "])),e.supportsTextureAtlas?"vtc.size = normalTextureSize;":"")))}}));