/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexTextureCoordinates.glsl","./Normals.glsl","../util/WebGL2Utils","../../shaderModules/interfaces","../../shaderModules/Texture2DDrawUniform","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType","../../shaderTechnique/BindType","../../../lib/VertexAttribute"],(function(e,t,n,r,a,o,s,d,i,u,l){"use strict";function T(e,T){const c=e.fragment;if(T.hasVertexTangents?(e.attributes.add(l.VertexAttribute.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),T.doubleSidedMode===r.NormalsDoubleSidedMode.WindingOrder?c.code.add(o.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):c.code.add(o.glsl`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):(e.extensions.add("GL_OES_standard_derivatives"),c.code.add(o.glsl`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`)),T.textureCoordinateType!==t.TextureCoordinateAttributeType.None){e.include(n.VertexTextureCoordinates,T);const t=T.supportsTextureAtlas?T.hasWebGL2Context?i.TextureSizeUniformType.None:i.TextureSizeUniformType.Size:i.TextureSizeUniformType.None;c.uniforms.add(T.pbrTextureBindType===u.BindType.Pass?d.createTexture2DPassSizeUniforms("normalTexture",(e=>e.textureNormal),t):s.createTexture2DDrawSizeUniforms("normalTexture",(e=>e.textureNormal),t)),c.code.add(o.glsl`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${T.supportsTextureAtlas?o.glsl`vtc.size = ${a.textureSize(T,"normalTexture")};`:""}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `)}}e.ComputeNormalTexture=T,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
