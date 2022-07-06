/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{s as e}from"../../../../../../chunks/vec4.js";import{c as o}from"../../../../../../chunks/vec4f64.js";import{Float4PassUniform as r}from"../../shaderModules/Float4PassUniform.js";import{glsl as t}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as s}from"../../shaderModules/Texture2DPassUniform.js";function a(o,a){const l=o.fragment;a.receiveAmbientOcclusion?(l.uniforms.add([new s("ssaoTex",((e,o)=>o.ssaoHelper.colorTexture)),new r("viewportPixelSz",((o,r)=>e(i,r.camera.fullViewport[0],r.camera.fullViewport[1],1/r.ssaoHelper.width,1/r.ssaoHelper.height)))]),l.code.add(t`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
return texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}`)):l.code.add(t`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`)}const i=o();export{a as EvaluateAmbientOcclusion};
