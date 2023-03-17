/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec4f64","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.glsl","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,o,s,n,l,t,a){"use strict";let i=function(e){function s(){var r;return(r=e.apply(this,arguments)||this).color=o.fromValues(1,1,1,1),r}return r._inheritsLoose(s,e),s}(l.NoParameters);function u(){const e=new t.ShaderBuilder;return e.include(s.ScreenSpacePass),e.fragment.uniforms.add([new a.Texture2DPassUniform("tex",(e=>e.texture)),new n.Float4PassUniform("uColor",(e=>e.color))]),e.fragment.code.add(l.glsl`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:i,build:u},Symbol.toStringTag,{value:"Module"}));e.TextureOnly=d,e.TextureOnlyPassParameters=i,e.build=u}));
