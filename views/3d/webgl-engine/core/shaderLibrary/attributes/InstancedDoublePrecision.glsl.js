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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/makeTemplateObjectHelper","../../../../../../core/libs/gl-matrix-2/vec3f64","../util/DoublePrecision.glsl","../../shaderModules/interfaces","../../../lib/doublePrecisionUtils"],(function(e,n,i,o,r,l,t){function a(e,n){n.instanced&&n.instancedDoublePrecision?(e.attributes.add("modelOriginHi","vec3"),e.attributes.add("modelOriginLo","vec3"),e.attributes.add("model","mat3"),e.attributes.add("modelNormal","mat3")):(e.vertex.uniforms.add("model","mat4"),e.vertex.uniforms.add("modelNormal","mat4")),n.instancedDoublePrecision&&(e.include(r.DoublePrecision,n),e.vertex.uniforms.add("viewOriginHi","vec3"),e.vertex.uniforms.add("viewOriginLo","vec3"));var o=[l.glsl(d||(d=i(["\n    vec3 calculateVPos() {\n      ","\n    }\n    "],["\n    vec3 calculateVPos() {\n      ","\n    }\n    "])),n.instancedDoublePrecision?"return model * localPosition().xyz;":"return (model * localPosition()).xyz;"),l.glsl(s||(s=i(["\n    vec3 subtractOrigin(vec3 _pos) {\n      ","\n    }\n    "],["\n    vec3 subtractOrigin(vec3 _pos) {\n      ","\n    }\n    "])),n.instancedDoublePrecision?l.glsl(c||(c=i(["\n          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);\n          return _pos - originDelta;"],["\n          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);\n          return _pos - originDelta;"]))):"return vpos;"),l.glsl(m||(m=i(["\n    vec3 dpNormal(vec4 _normal) {\n      ","\n    }\n    "],["\n    vec3 dpNormal(vec4 _normal) {\n      ","\n    }\n    "])),n.instancedDoublePrecision?"return normalize(modelNormal * _normal.xyz);":"return normalize((modelNormal * _normal).xyz);"),l.glsl(u||(u=i(["\n    vec3 dpNormalView(vec4 _normal) {\n      ","\n    }\n    "],["\n    vec3 dpNormalView(vec4 _normal) {\n      ","\n    }\n    "])),n.instancedDoublePrecision?"return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);":"return normalize((viewNormal * modelNormal * _normal).xyz);")];e.vertex.code.add(o[0]),e.vertex.code.add(o[1]),e.vertex.code.add(o[2]),2===n.output&&e.vertex.code.add(o[3])}Object.defineProperty(n,"__esModule",{value:!0}),n.InstancedDoublePrecision=a,function(e){var n=function(){};e.Uniforms=n,e.bindCustomOrigin=function(e,n){t.encodeDoubleArraySplit(n,v,g,3),e.setUniform3fv("viewOriginHi",v),e.setUniform3fv("viewOriginLo",g)}}(a=n.InstancedDoublePrecision||(n.InstancedDoublePrecision={}));var d,c,s,m,u,v=o.vec3f64.create(),g=o.vec3f64.create()}));