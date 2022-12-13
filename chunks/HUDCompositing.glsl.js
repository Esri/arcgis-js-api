/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,n,s,i,t){"use strict";let o=function(e){function n(){return e.apply(this,arguments)||this}return r._inheritsLoose(n,e),n}(s.NoParameters);function a(){const e=new i.ShaderBuilder;return e.include(n.ScreenSpacePass),e.fragment.uniforms.add(new t.Texture2DPassUniform("tex",(e=>e.texture))),e.fragment.code.add(s.glsl`void main() {
gl_FragColor = vec4(1.0 - texture2D(tex, uv).a);
}`),e}const l=Object.freeze(Object.defineProperty({__proto__:null,HUDCompositingPassParameters:o,build:a},Symbol.toStringTag,{value:"Module"}));e.HUDCompositing=l,e.HUDCompositingPassParameters=o,e.build=a}));
