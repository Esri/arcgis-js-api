/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{VertexColor as o}from"../attributes/VertexColor.glsl.js";import{MixExternalColor as r}from"../util/MixExternalColor.glsl.js";import{Float4DrawUniform as e}from"../../shaderModules/Float4DrawUniform.js";import{FloatDrawUniform as a}from"../../shaderModules/FloatDrawUniform.js";import{glsl as t}from"../../shaderModules/interfaces.js";function l(l,s){l.include(o,s),l.fragment.include(r);const i=l.fragment;i.uniforms.add(new e("baseColor",(o=>o.baseColor))),i.uniforms.add(new a("objectOpacity",(o=>o.objectOpacity))),s.hasVertexColors?i.code.add(t`vec3 _baseColor() {
return baseColor.rgb * vColor.rgb;
}
float _baseOpacity() {
return baseColor.a * vColor.a;
}`):i.code.add(t`vec3 _baseColor() {
return baseColor.rgb;
}
float _baseOpacity() {
return baseColor.a;
}`),i.code.add(t`vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
vec3 baseColor = _baseColor();
float baseOpacity = _baseOpacity();
vec3 color = mixExternalColor(
baseColor,
textureColor.rgb,
externalColor.rgb,
externalColorMixMode
);
float opacity = objectOpacity * mixExternalOpacity(
baseOpacity,
textureColor.a,
externalColor.a,
externalColorMixMode
);
return vec4(color, opacity);
}`)}export{l as ComputeMaterialColor};
