/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,a,o){"use strict";var n;function t(n){const t=new o.ShaderBuilder;return t.include(r.ScreenSpacePass),t.fragment.uniforms.add("tex","sampler2D"),n.function===e.CompositingFunction.Standard&&(n.hasOpacityFactor?(t.fragment.uniforms.add("opacity","float"),t.fragment.code.add(a.glsl`void main() {
gl_FragColor = texture2D(tex, uv) * opacity;
}`)):t.fragment.code.add(a.glsl`void main() {
gl_FragColor = texture2D(tex, uv);
}`)),n.function===e.CompositingFunction.OverlayWithTransparency&&(t.fragment.uniforms.add("overlayIdx","int"),n.hasOpacityFactor&&t.fragment.uniforms.add("opacity","float"),t.fragment.code.add(a.glsl`
      void main() {
        vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
        gl_FragColor = texture2D(tex, overlayUV) ${n.hasOpacityFactor?"* opacity":""};
      }`)),n.function===e.CompositingFunction.TransparentToHUDVisibility&&t.fragment.code.add(a.glsl`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`),n.function===e.CompositingFunction.Transparency&&(t.fragment.uniforms.add("colorTexture","sampler2D"),t.fragment.uniforms.add("alphaTexture","sampler2D"),t.fragment.uniforms.add("frontFaceTexture","sampler2D"),t.fragment.code.add(a.glsl`void main() {
vec4 srcColor = texture2D(colorTexture, uv);
float srcAlpha = texture2D(alphaTexture, uv).r;
vec4 frontFace = texture2D(frontFaceTexture, uv);
if(srcColor.a <= 1e-5){
discard;
}
gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
}`)),t}e.CompositingFunction=void 0,(n=e.CompositingFunction||(e.CompositingFunction={}))[n.Standard=0]="Standard",n[n.TransparentToHUDVisibility=1]="TransparentToHUDVisibility",n[n.Transparency=2]="Transparency",n[n.OverlayWithTransparency=3]="OverlayWithTransparency",n[n.COUNT=4]="COUNT";const i=Object.freeze(Object.defineProperty({__proto__:null,get CompositingFunction(){return e.CompositingFunction},build:t},Symbol.toStringTag,{value:"Module"}));e.CompositingShader=i,e.build=t}));
