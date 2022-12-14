/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./vec4f64","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/Float4PassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,r,o,n,s,t,l,a){"use strict";let i=function(e){function n(){var r;return(r=e.apply(this,arguments)||this).color=o.fromValues(1,1,1,1),r}return r._inheritsLoose(n,e),n}(t.NoParameters);function u(){const e=new l.ShaderBuilder;return e.include(n.ScreenSpacePass),e.fragment.uniforms.add([new a.Texture2DPassUniform("tex",(e=>e.texture)),new s.Float4PassUniform("uColor",(e=>e.color))]),e.fragment.code.add(t.glsl`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),e}const d=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:i,build:u},Symbol.toStringTag,{value:"Module"}));e.TextureOnly=d,e.TextureOnlyPassParameters=i,e.build=u}));
