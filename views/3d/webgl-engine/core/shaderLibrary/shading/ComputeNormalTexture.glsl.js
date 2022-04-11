/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexTextureCoordinates.glsl","./Normals.glsl","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,n,a,r,o){"use strict";function s(e,s){const d=e.fragment;s.vertexTangents?(e.attributes.add(o.VertexAttribute.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),s.doubleSidedMode===a.NormalsDoubleSidedMode.WindingOrder?d.code.add(r.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):d.code.add(r.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),d.code.add(r.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),s.attributeTextureCoordinates!==t.TextureCoordinateAttributeType.None&&(e.include(n.VertexTextureCoordinates,s),d.uniforms.add("normalTexture","sampler2D"),d.uniforms.add("normalTextureSize","vec2"),d.code.add(r.glsl`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${s.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `))}e.ComputeNormalTexture=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
