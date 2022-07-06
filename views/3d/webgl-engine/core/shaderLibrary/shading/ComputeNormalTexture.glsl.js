/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{TextureCoordinateAttributeType as e}from"../attributes/TextureCoordinateAttribute.glsl.js";import{VertexTextureCoordinates as t}from"../attributes/VertexTextureCoordinates.glsl.js";import{NormalsDoubleSidedMode as n}from"./Normals.glsl.js";import{glsl as a}from"../../shaderModules/interfaces.js";import{createTexture2DDrawSizeUniforms as r}from"../../shaderModules/Texture2DDrawUniform.js";import{createTexture2DPassSizeUniforms as o}from"../../shaderModules/Texture2DPassUniform.js";import{BindType as s}from"../../shaderTechnique/BindType.js";import{VertexAttribute as d}from"../../../lib/VertexAttribute.js";function m(m,c){const i=m.fragment;if(c.hasVertexTangents?(m.attributes.add(d.TANGENT,"vec4"),m.varyings.add("vTangent","vec4"),c.doubleSidedMode===n.WindingOrder?i.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):i.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(m.extensions.add("GL_OES_standard_derivatives"),i.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),c.textureCoordinateType!==e.None){m.include(t,c);const e=c.supportsTextureAtlas;i.uniforms.add(c.pbrTextureBindType===s.Pass?o("normalTexture",(e=>e.textureNormal),e):r("normalTexture",(e=>e.textureNormal),e)),i.code.add(a`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${c.supportsTextureAtlas?"vtc.size = normalTextureSize;":""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}export{m as ComputeNormalTexture};
