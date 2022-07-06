/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as o}from"../../../../../core/maybe.js";import{ReadLinearDepth as e}from"./output/ReadLinearDepth.glsl.js";import{CameraSpace as r}from"./util/CameraSpace.glsl.js";import{Float2PassUniform as l}from"../shaderModules/Float2PassUniform.js";import{Float3PassUniform as a}from"../shaderModules/Float3PassUniform.js";import{FloatPassUniform as t}from"../shaderModules/FloatPassUniform.js";import{glsl as n}from"../shaderModules/interfaces.js";import{Texture2DPassUniform as d}from"../shaderModules/Texture2DPassUniform.js";import{Texture2DUniform as i}from"../shaderModules/Texture2DUniform.js";function s(s,p){s.extensions.add("GL_OES_standard_derivatives");const u=s.fragment;u.include(e),s.include(r),u.uniforms.add([new t("globalAlpha",(o=>o.globalAlpha)),new a("glowColor",(o=>o.glowColor)),new t("glowWidth",((o,e)=>o.glowWidth*e.camera.pixelRatio)),new t("glowFalloff",(o=>o.glowFalloff)),new a("innerColor",(o=>o.innerColor)),new t("innerWidth",((o,e)=>o.innerWidth*e.camera.pixelRatio)),new d("depthMap",((o,e)=>e.linearDepthTexture)),new l("nearFar",((o,e)=>e.camera.nearFar)),new i("frameColor")]),u.code.add(n`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),u.code.add(n`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),u.code.add(n`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),u.code.add(n`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),p.contrastControlEnabled?(u.uniforms.add(new t("globalAlphaContrastBoost",(e=>o(e.globalAlphaContrastBoost)?e.globalAlphaContrastBoost:1))),u.code.add(n`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):u.code.add(n`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}export{s as Laserline};
