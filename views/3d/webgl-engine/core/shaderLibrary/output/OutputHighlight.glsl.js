/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"../../../../../../chunks/vec2f64.js";import{f as o}from"../../../../../../chunks/vec4f64.js";import{Float2PassUniform as r}from"../../shaderModules/Float2PassUniform.js";import{glsl as t,NoParameters as i}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as s}from"../../shaderModules/Texture2DPassUniform.js";const d=o(1,1,0,1),g=o(1,0,1,1);function a(e){e.fragment.uniforms.add(new s("depthTex",((e,o)=>o.highlightDepthTexture))),e.fragment.uniforms.add(new r("highlightViewportPixelSz",((e,o)=>o.inverseViewport))),e.fragment.constants.add("occludedHighlightFlag","vec4",d).add("unoccludedHighlightFlag","vec4",g),e.fragment.code.add(t`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, fragCoord.xy * highlightViewportPixelSz.xy).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`)}class h extends i{constructor(){super(...arguments),this.inverseViewport=e()}}export{a as OutputHighlight,h as OutputHighlightUniforms,d as occludedHighlightFlag,g as unoccludedHighlightFlag};
