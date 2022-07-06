/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ScreenSpacePass as e}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{DiscardOrAdjustAlphaBlend as r}from"../views/3d/webgl-engine/core/shaderLibrary/util/DiscardOrAdjustAlphaBlend.glsl.js";import{FloatPassUniform as i}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as s}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as n}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as o}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";function t(){const t=new n;return t.include(e),t.include(r),t.fragment.uniforms.add([new o("densityMap",(e=>e.densityMap)),new o("tex",(e=>e.colorRamp)),new i("densityNormalizer",(e=>1/(e.maxDensity-e.minDensity))),new i("minDensity",(e=>e.minDensity))]),t.fragment.uniforms.add(new i("densityMultiplier",(e=>3/(e.searchRadius*e.searchRadius*Math.PI)))),t.fragment.code.add(s`void main() {
float density = texture2D(densityMap, uv).r * densityMultiplier;
float densityRatio = (density - minDensity) * densityNormalizer;
vec4 color = texture2D(tex, vec2(clamp(densityRatio, 0.0, 1.0), 0.5));
discardOrAdjustAlpha(color);
gl_FragColor = color;
}`),t}const d=Object.freeze(Object.defineProperty({__proto__:null,build:t},Symbol.toStringTag,{value:"Module"}));export{d as H,t as b};
