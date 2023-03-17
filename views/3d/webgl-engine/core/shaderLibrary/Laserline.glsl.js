/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/maybe","./output/ReadLinearDepth.glsl","./util/CameraSpace.glsl","../shaderModules/Float2PassUniform","../shaderModules/Float3PassUniform","../shaderModules/FloatPassUniform","../shaderModules/interfaces","../shaderModules/Texture2DPassUniform"],(function(e,o,l,a,r,t,n,s,i){"use strict";function d(e,d){e.extensions.add("GL_OES_standard_derivatives");const u=e.fragment;u.include(l.ReadLinearDepth),e.include(a.CameraSpace),u.uniforms.add([new n.FloatPassUniform("globalAlpha",(e=>e.globalAlpha)),new t.Float3PassUniform("glowColor",(e=>e.glowColor)),new n.FloatPassUniform("glowWidth",((e,o)=>e.glowWidth*o.camera.pixelRatio)),new n.FloatPassUniform("glowFalloff",(e=>e.glowFalloff)),new t.Float3PassUniform("innerColor",(e=>e.innerColor)),new n.FloatPassUniform("innerWidth",((e,o)=>e.innerWidth*o.camera.pixelRatio)),new i.Texture2DPassUniform("depthMap",((e,o)=>o.linearDepthTexture)),new r.Float2PassUniform("nearFar",((e,o)=>o.camera.nearFar)),new i.Texture2DPassUniform("frameColor",((e,o)=>o.mainColorTexture))]),u.code.add(s.glsl`vec4 blendPremultiplied(vec4 source, vec4 dest) {
float oneMinusSourceAlpha = 1.0 - source.a;
return vec4(
source.rgb + dest.rgb * oneMinusSourceAlpha,
source.a + dest.a * oneMinusSourceAlpha
);
}`),u.code.add(s.glsl`vec4 premultipliedColor(vec3 rgb, float alpha) {
return vec4(rgb * alpha, alpha);
}`),u.code.add(s.glsl`vec4 laserlineProfile(float dist) {
if (dist > glowWidth) {
return vec4(0.0);
}
float innerAlpha = (1.0 - smoothstep(0.0, innerWidth, dist));
float glowAlpha = pow(max(0.0, 1.0 - dist / glowWidth), glowFalloff);
return blendPremultiplied(
premultipliedColor(innerColor, innerAlpha),
premultipliedColor(glowColor, glowAlpha)
);
}`),u.code.add(s.glsl`bool laserlineReconstructFromDepth(out vec3 pos, out vec3 normal, out float depthDiscontinuityAlpha) {
float depth = linearDepthFromTexture(depthMap, uv, nearFar);
if (-depth == nearFar[0]) {
return false;
}
pos = reconstructPosition(gl_FragCoord.xy, depth);
normal = normalize(cross(dFdx(pos), dFdy(pos)));
float ddepth = fwidth(depth);
depthDiscontinuityAlpha = 1.0 - smoothstep(0.0, 0.01, -ddepth / depth);
return true;
}`),d.contrastControlEnabled?(u.uniforms.add(new n.FloatPassUniform("globalAlphaContrastBoost",(e=>o.isSome(e.globalAlphaContrastBoost)?e.globalAlphaContrastBoost:1))),u.code.add(s.glsl`float rgbToLuminance(vec3 color) {
return dot(vec3(0.2126, 0.7152, 0.0722), color);
}
vec4 laserlineOutput(vec4 color) {
float backgroundLuminance = rgbToLuminance(texture2D(frameColor, uv).rgb);
float alpha = clamp(globalAlpha * max(backgroundLuminance * globalAlphaContrastBoost, 1.0), 0.0, 1.0);
return color * alpha;
}`)):u.code.add(s.glsl`vec4 laserlineOutput(vec4 color) {
return color * globalAlpha;
}`)}e.Laserline=d,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
