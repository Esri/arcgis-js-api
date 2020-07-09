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

define(["require","exports","tslib","../../../../../../core/libs/gl-matrix-2/vec3f64","../util/DoublePrecision.glsl","../../shaderModules/interfaces","../../../lib/doublePrecisionUtils"],(function(e,n,i,r,o,t,a){function l(e,n){n.instanced&&n.instancedDoublePrecision&&(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")),n.instancedDoublePrecision&&(e.include(o.DoublePrecision,n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));var r=[t.glsl(c||(c=i.__makeTemplateObject(["\n    vec3 calculateVPos() {\n      ","\n    }\n    "],["\n    vec3 calculateVPos() {\n      ","\n    }\n    "])),n.instancedDoublePrecision?"return model * localPosition().xyz;":"return localPosition().xyz;"),t.glsl(s||(s=i.__makeTemplateObject(["\n    vec3 subtractOrigin(vec3 _pos) {\n      ","\n    }\n    "],["\n    vec3 subtractOrigin(vec3 _pos) {\n      ","\n    }\n    "])),n.instancedDoublePrecision?t.glsl(d||(d=i.__makeTemplateObject(["\n          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);\n          return _pos - originDelta;"],["\n          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);\n          return _pos - originDelta;"]))):"return vpos;"),t.glsl(m||(m=i.__makeTemplateObject(["\n    vec3 dpNormal(vec4 _normal) {\n      ","\n    }\n    "],["\n    vec3 dpNormal(vec4 _normal) {\n      ","\n    }\n    "])),n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize(_normal.xyz);"),t.glsl(v||(v=i.__makeTemplateObject(["\n    vec3 dpNormalView(vec4 _normal) {\n      ","\n    }\n    "],["\n    vec3 dpNormalView(vec4 _normal) {\n      ","\n    }\n    "])),n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * _normal).xyz);"),n.vertexTangets?t.glsl(u||(u=i.__makeTemplateObject(["\n    vec4 dpTransformVertexTangent(vec4 _tangent) {\n      ","\n      \n    }\n    "],["\n    vec4 dpTransformVertexTangent(vec4 _tangent) {\n      ","\n      \n    }\n    "])),n.instancedDoublePrecision?"return vec4(modelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"):t.glsl(g||(g=i.__makeTemplateObject([""],[""])))];e.vertex.code.add(r[0]),e.vertex.code.add(r[1]),e.vertex.code.add(r[2]),2===n.output&&e.vertex.code.add(r[3]),e.vertex.code.add(r[4])}Object.defineProperty(n,"__esModule",{value:!0}),n.InstancedDoublePrecision=l,function(e){var n=function(){};e.Uniforms=n,e.bindCustomOrigin=function(e,n){a.encodeDoubleArraySplit(n,_,b,3),e.setUniform3fv("viewOriginHi",_),e.setUniform3fv("viewOriginLo",b)}}(l=n.InstancedDoublePrecision||(n.InstancedDoublePrecision={}));var c,d,s,m,v,u,g,_=r.vec3f64.create(),b=r.vec3f64.create()}));