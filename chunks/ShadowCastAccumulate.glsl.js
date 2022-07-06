/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e,j as a}from"./mat4.js";import{c as r}from"./mat4f64.js";import{ScreenSpacePass as o}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{ReadLinearDepth as s}from"../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js";import{ReadShadowMapBindParameters as i,ReadShadowMapPass as t}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{CameraSpace as d}from"../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js";import{RgbaFloatEncoding as l}from"../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float2PassUniform as n}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{glsl as c}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as p}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as h}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as m}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";class w extends i{}const u=255,g=1/u;function v(){const r=new h,i=r.fragment;return i.include(l),i.include(s),r.include(d),r.include(o),r.include(t,{receiveShadows:!0}),i.uniforms.add([new m("depthMap",(e=>e.linearDepthTexture)),new p("inverseViewMatrix",((r,o)=>e(f,a(f,o.camera.viewMatrix,o.camera.center)))),new n("nearFar",((e,a)=>a.camera.nearFar))]),i.constants.add("sampleValue","float",g),i.code.add(c`void main(void) {
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
discard;
}
vec4 currentPixelPos = vec4(reconstructPosition(gl_FragCoord.xy, currentPixelDepth), 1.0);
vec4 worldSpacePos = inverseViewMatrix * currentPixelPos;
mat4 shadowMatrix;
float linearDepth = -currentPixelDepth;
int i = chooseCascade(linearDepth, shadowMatrix);
if (i >= numCascades) {
discard;
}
vec3 lvpos = lightSpacePosition(worldSpacePos.xyz, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
discard;
}
vec2 uvShadow = cascadeCoordinates(i, lvpos);
float depthShadow = readShadowMapDepth(uvShadow, shadowMapTex);
bool shadow = depthShadow < lvpos.z;
if (!shadow) {
discard;
}
gl_FragColor = vec4(sampleValue);
}`),r}const f=r(),x=Object.freeze(Object.defineProperty({__proto__:null,ShadowCastAccumulatePassParameters:w,shadowCastMaxSamples:u,build:v},Symbol.toStringTag,{value:"Module"}));export{w as S,x as a,v as b,u as s};
