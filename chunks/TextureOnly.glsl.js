/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ScreenSpacePass as e}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{Float4Uniform as r}from"../views/3d/webgl-engine/core/shaderModules/Float4Uniform.js";import{glsl as o}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as n}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DUniform as i}from"../views/3d/webgl-engine/core/shaderModules/Texture2DUniform.js";function s(){const s=new n;return s.include(e),s.fragment.uniforms.add([new i("tex"),new r("uColor")]),s.fragment.code.add(o`void main() {
vec4 texColor = texture2D(tex, uv);
gl_FragColor = texColor * uColor;
}`),s}const t=Object.freeze(Object.defineProperty({__proto__:null,build:s},Symbol.toStringTag,{value:"Module"}));export{t as T,s as b};
