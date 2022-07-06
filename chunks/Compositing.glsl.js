/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{neverReached as e}from"../core/compilerUtils.js";import{ScreenSpacePass as r}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{FloatPassUniform as o}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{IntegerPassUniform as a}from"../views/3d/webgl-engine/core/shaderModules/IntegerPassUniform.js";import{NoParameters as t,glsl as s}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as i}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as n}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{CompositingFunction as c}from"../views/3d/webgl-engine/shaders/CompositingTechniqueConfiguration.js";class d extends t{constructor(){super(...arguments),this.overlayIndex=0,this.opacity=1}}function u(t){const d=new i;d.include(r);const u=d.fragment;switch(t.function){case c.Standard:u.uniforms.add(new n("tex",(e=>e.texture))),t.hasOpacityFactor?(u.uniforms.add(new o("opacity",(e=>e.opacity))),u.code.add(s`void main() {
gl_FragColor = texture2D(tex, uv) * opacity;
}`)):u.code.add(s`void main() {
gl_FragColor = texture2D(tex, uv);
}`);break;case c.OverlayWithTransparency:u.uniforms.add(new n("tex",(e=>e.texture))),u.uniforms.add(new a("overlayIdx",(e=>e.overlayIndex))),t.hasOpacityFactor&&u.uniforms.add(new o("opacity",(e=>e.opacity))),u.code.add(s`
        void main() {
          vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
          gl_FragColor = texture2D(tex, overlayUV) ${t.hasOpacityFactor?"* opacity":""};
        }`);break;case c.TransparentToHUDVisibility:u.uniforms.add(new n("tex",(e=>e.texture))),u.code.add(s`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`);break;case c.Transparency:u.uniforms.add([new n("colorTexture",(e=>e.colorTexture)),new n("alphaTexture",(e=>e.alphaTexture)),new n("frontFaceTexture",(e=>e.frontFaceTexture))]),u.code.add(s`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`);break;case c.COUNT:break;default:e(t.function)}return d}const l=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:d,build:u},Symbol.toStringTag,{value:"Module"}));export{d as C,l as a,u as b};
