/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,s,a,i,o,t){"use strict";let n=function(e){function s(){var r;return(r=e.apply(this,arguments)||this).opacity=1,r}return r._inheritsLoose(s,e),s}(i.NoParameters);function d(e){const r=new o.ShaderBuilder;return r.include(s.ScreenSpacePass),r.fragment.uniforms.add(new t.Texture2DPassUniform("tex",(e=>e.texture))),e.hasOpacityFactor&&r.fragment.uniforms.add(new a.FloatPassUniform("opacity",(e=>e.opacity))),r.fragment.code.add(i.glsl`
    void main() {
      gl_FragColor = texture2D(tex, uv) ${e.hasOpacityFactor?"* opacity":""};
    }`),r}const l=Object.freeze(Object.defineProperty({__proto__:null,CompositingPassParameters:n,build:d},Symbol.toStringTag,{value:"Module"}));e.Compositing=l,e.CompositingPassParameters=n,e.build=d}));
