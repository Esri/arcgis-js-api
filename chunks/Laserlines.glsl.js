/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{deg2rad as e}from"../core/mathUtils.js";import{isSome as i}from"../core/maybe.js";import{a as n}from"./vec2.js";import{a as t}from"./vec2f64.js";import{Laserline as a}from"../views/3d/webgl-engine/core/shaderLibrary/Laserline.glsl.js";import{ScreenSpacePass as o}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{Float2PassUniform as s}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float3Uniform as l}from"../views/3d/webgl-engine/core/shaderModules/Float3Uniform.js";import{Float4Uniform as r}from"../views/3d/webgl-engine/core/shaderModules/Float4Uniform.js";import{FloatPassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{FloatUniform as c}from"../views/3d/webgl-engine/core/shaderModules/FloatUniform.js";import{glsl as f}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as p}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";const h=e(6);function m(e){const i=new p;i.extensions.add("GL_OES_standard_derivatives"),i.include(o),i.include(a,e);const n=i.fragment;return e.heightManifoldEnabled&&n.uniforms.add(new r("heightPlane")),e.pointDistanceEnabled&&n.uniforms.add(new r("pointDistanceSphere")),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new r("lineVerticalPlane")),n.uniforms.add(new l("lineVerticalStart")),n.uniforms.add(new l("lineVerticalEnd"))),(e.heightManifoldEnabled||e.pointDistanceEnabled||e.lineVerticalPlaneEnabled)&&n.uniforms.add(new c("maxPixelDistance")),(e.lineVerticalPlaneEnabled||e.heightManifoldEnabled)&&n.code.add(f`float planeDistancePixels(vec4 plane, vec3 pos) {
float dist = dot(plane.xyz, pos) + plane.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.pointDistanceEnabled&&n.code.add(f`float sphereDistancePixels(vec4 sphere, vec3 pos) {
float dist = distance(sphere.xyz, pos) - sphere.w;
float width = fwidth(dist);
dist /= min(width, maxPixelDistance);
return abs(dist);
}`),e.intersectsLineEnabled&&(n.uniforms.add(new l("intersectsLineStart")),n.uniforms.add(new l("intersectsLineEnd")),n.uniforms.add(new l("intersectsLineDirection")),n.uniforms.add(new c("intersectsLineRadius")),n.uniforms.add(new d("perScreenPixelRatio",((e,i)=>i.camera.perScreenPixelRatio))),n.code.add(f`float lineDistancePixels(vec3 start, vec3 dir, float radius, vec3 pos) {
float dist = length(cross(dir, pos - start)) / (length(pos) * perScreenPixelRatio);
return abs(dist) - radius;
}`)),(e.lineVerticalPlaneEnabled||e.intersectsLineEnabled)&&n.code.add(f`bool pointIsWithinLine(vec3 pos, vec3 start, vec3 end) {
vec3 dir = end - start;
float t2 = dot(dir, pos - start);
float l2 = dot(dir, dir);
return t2 >= 0.0 && t2 <= l2;
}`),n.code.add(f`void main() {
vec3 pos;
vec3 normal;
float depthDiscontinuityAlpha;
if (!laserlineReconstructFromDepth(pos, normal, depthDiscontinuityAlpha)) {
discard;
}
vec4 color = vec4(0, 0, 0, 0);`),e.heightManifoldEnabled&&(n.uniforms.add(new s("angleCutoff",(e=>u(e)))),n.code.add(f`{
float heightManifoldAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, heightPlane.xyz)));
vec4 heightManifoldColor = laserlineProfile(planeDistancePixels(heightPlane, pos));
color = max(color, heightManifoldColor * heightManifoldAlpha);
}`)),e.pointDistanceEnabled&&(n.uniforms.add(new s("angleCutoff",(e=>u(e)))),n.code.add(f`{
float pointDistanceSphereDistance = sphereDistancePixels(pointDistanceSphere, pos);
vec4 pointDistanceSphereColor = laserlineProfile(pointDistanceSphereDistance);
float pointDistanceSphereAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, normalize(pos - pointDistanceSphere.xyz))));
color = max(color, pointDistanceSphereColor * pointDistanceSphereAlpha);
}`)),e.lineVerticalPlaneEnabled&&(n.uniforms.add(new s("angleCutoff",(e=>u(e)))),n.code.add(f`{
if (pointIsWithinLine(pos, lineVerticalStart, lineVerticalEnd)) {
float lineVerticalDistance = planeDistancePixels(lineVerticalPlane, pos);
vec4 lineVerticalColor = laserlineProfile(lineVerticalDistance);
float lineVerticalAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, abs(dot(normal, lineVerticalPlane.xyz)));
color = max(color, lineVerticalColor * lineVerticalAlpha);
}
}`)),e.intersectsLineEnabled&&(n.uniforms.add(new s("angleCutoff",(e=>u(e)))),n.code.add(f`{
if (pointIsWithinLine(pos, intersectsLineStart, intersectsLineEnd)) {
float intersectsLineDistance = lineDistancePixels(intersectsLineStart, intersectsLineDirection, intersectsLineRadius, pos);
vec4 intersectsLineColor = laserlineProfile(intersectsLineDistance);
float intersectsLineAlpha = 1.0 - smoothstep(angleCutoff.x, angleCutoff.y, 1.0 - abs(dot(normal, intersectsLineDirection)));
color = max(color, intersectsLineColor * intersectsLineAlpha);
}
}`)),n.code.add(f`gl_FragColor = laserlineOutput(color * depthDiscontinuityAlpha);
}`),i}function u(t){const a=i(t.angleCutoff)?t.angleCutoff:h;return n(g,Math.cos(a),Math.cos(Math.max(0,a-e(2))))}const g=t(),w=Object.freeze(Object.defineProperty({__proto__:null,defaultAngleCutoff:h,build:m},Symbol.toStringTag,{value:"Module"}));export{w as L,m as b,h as d};
