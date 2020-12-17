/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass"],(function(e,r,a,o){"use strict";function t(e){const t=new a.ShaderBuilder;return t.include(o.ScreenSpacePass),t.fragment.uniforms.add("tex","sampler2D"),0===e.function&&(e.hasOpacityFactor?(t.fragment.uniforms.add("opacity","float"),t.fragment.code.add(r.glsl`
      void main() {
        gl_FragColor = texture2D(tex, uv) * opacity;
      }`)):t.fragment.code.add(r.glsl`
      void main() {
        gl_FragColor = texture2D(tex, uv);
      }`)),2===e.function&&t.fragment.code.add(r.glsl`
    void main() {
      gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
    }`),3===e.function&&(t.fragment.uniforms.add("colorTexture","sampler2D"),t.fragment.uniforms.add("alphaTexture","sampler2D"),t.fragment.uniforms.add("frontFaceTexture","sampler2D"),t.fragment.code.add(r.glsl`
    void main() {
      vec4 srcColor = texture2D(colorTexture, uv);
      float srcAlpha = texture2D(alphaTexture, uv).r;
      vec4 frontFace = texture2D(frontFaceTexture, uv);

      gl_FragColor = vec4(mix(srcColor.rgb/srcColor.a, frontFace.rgb, frontFace.a), 1.0 - srcAlpha);
    }`)),t}var n=Object.freeze({__proto__:null,build:t});e.CompositingShader=n,e.build=t}));
