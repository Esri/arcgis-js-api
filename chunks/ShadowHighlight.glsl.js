/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{isSome as e}from"../core/maybe.js";import{a as o,j as r}from"./mat4.js";import{c as i}from"./mat4f64.js";import{a as t}from"./vec2.js";import{Z as a,a as l}from"./vec2f64.js";import{n as s,m as h}from"./vec3.js";import{c as d}from"./vec3f64.js";import{ScreenSpacePass as n}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{unoccludedHighlightFlag as c}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{ReadLinearDepth as p}from"../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js";import{ReadShadowMapDraw as g}from"../views/3d/webgl-engine/core/shaderLibrary/shading/ReadShadowMap.glsl.js";import{CameraSpace as m}from"../views/3d/webgl-engine/core/shaderLibrary/util/CameraSpace.glsl.js";import{RgbaFloatEncoding as f}from"../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float2PassUniform as v}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float3PassUniform as u}from"../views/3d/webgl-engine/core/shaderModules/Float3PassUniform.js";import{Float4PassUniform as w}from"../views/3d/webgl-engine/core/shaderModules/Float4PassUniform.js";import{FloatPassUniform as x}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as P}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as D}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as b}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DPassUniform as M}from"../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform.js";import{SnapshotSlot as S}from"../views/3d/webgl-engine/lib/ShadowMap.js";const F={highlightedThreshold:.99999,selfShadowThreshold:.025};function y(){const i=new b;i.include(g,{receiveShadows:!0});const l=i.fragment;return l.include(f),l.include(p),i.include(m),i.include(n),l.uniforms.add([new M("defaultDepthTex",((e,o)=>o.shadowMap.getSnapshot(S.Default))),new M("highlightDepthTex",((e,o)=>o.shadowMap.getSnapshot(S.Highlight))),new M("depthMap",((e,o)=>o.linearDepthTexture)),new M("highlightMap",((e,o)=>o.highlightColorTexture)),new w("uColor",(e=>e.shadowColor)),new v("nearFar",((e,o)=>o.camera.nearFar)),new x("opacity",(e=>e.shadowOpacity)),new x("occludedOpacity",(e=>e.occludedShadowOpacity)),new x("terminationFactor",(e=>e.opacityElevation*e.dayNightTerminator)),new u("lightingMainDirectionView",((e,o)=>s(z,h(z,o.lighting.lightingMainDirection,o.camera.viewInverseTransposeMatrix)))),new v("texelSize",((o,r)=>e(r.linearDepthTexture)?t(T,1/r.linearDepthTexture.descriptor.width,1/r.linearDepthTexture.descriptor.height):a)),new D("inverseViewMatrix",((e,i)=>o(j,r(j,i.camera.viewMatrix,i.camera.center))))]),l.constants.add("unoccludedHighlightFlag","vec4",c).add("highlightedThreshold","float",F.highlightedThreshold).add("selfShadowThreshold","float",F.selfShadowThreshold),l.code.add(P`vec3 normalFromDepth(vec3 pixelPos, vec2 fragCoord, vec2 uv, vec2 texelSize, sampler2D depthMap, vec2 nearFar) {
float leftPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(-1.0, 0.0) * texelSize, nearFar);
float rightPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(1.0, 0.0) * texelSize, nearFar);
float bottomPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, -1.0) * texelSize, nearFar);
float topPixelDepth = linearDepthFromTexture(depthMap, uv + vec2(0.0, 1.0) * texelSize, nearFar);
bool pickLeft = abs(pixelPos.z - leftPixelDepth) < abs(pixelPos.z - rightPixelDepth);
bool pickBottom = abs(pixelPos.z - bottomPixelDepth) < abs(pixelPos.z - topPixelDepth);
vec3 fragCoordHorizontal = pickLeft
? vec3(fragCoord + vec2(-1.0, 0.0), leftPixelDepth)
: vec3(fragCoord + vec2(1.0, 0.0), rightPixelDepth);
vec3 fragCoordVertical = pickBottom
? vec3(fragCoord + vec2(0.0, -1.0), bottomPixelDepth)
: vec3(fragCoord + vec2(0.0, 1.0), topPixelDepth);
vec3 verticalPixelPos = reconstructPosition(fragCoordHorizontal.xy, fragCoordHorizontal.z);
vec3 horizontalPixelPos = reconstructPosition(fragCoordVertical.xy, fragCoordVertical.z);
vec3 normal = normalize(cross(verticalPixelPos - pixelPos, horizontalPixelPos - pixelPos));
return pickLeft == pickBottom ? normal : -normal;
}`),l.code.add(P`void main(void) {
vec4 highlightInfo = texture2D(highlightMap, uv);
float visiblyHighlighted = (1.0 - clamp(distance(unoccludedHighlightFlag, highlightInfo), 0.0, 1.0)) * highlightInfo.a;
if (visiblyHighlighted > highlightedThreshold) {
discard;
}
float depth = rgba2float(texture2D(depthMap, uv));
if (depth == 0.0) {
discard;
}
float currentPixelDepth = linearDepthFromFloat(depth, nearFar);
if (-currentPixelDepth>nearFar.y || -currentPixelDepth<nearFar.x) {
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
float depthHighlight = readShadowMapDepth(uvShadow, highlightDepthTex);
bool shadowHighlight = depthHighlight < lvpos.z;
if (!shadowHighlight) {
discard;
}
float depthDefault = readShadowMapDepth(uvShadow, defaultDepthTex);
bool shadowDefault = depthDefault < lvpos.z;
vec3 normal = normalFromDepth(currentPixelPos.xyz, gl_FragCoord.xy, uv, texelSize, depthMap, nearFar);
bool shaded = dot(normal, lightingMainDirectionView) < selfShadowThreshold;
float fragOpacity = (shadowDefault || shaded) ? occludedOpacity : opacity;
gl_FragColor = vec4(uColor.rgb, uColor.a * fragOpacity * terminationFactor);
}`),i}const j=i(),z=d(),T=l(),C=Object.freeze(Object.defineProperty({__proto__:null,build:y},Symbol.toStringTag,{value:"Module"}));export{C as S,y as b};
