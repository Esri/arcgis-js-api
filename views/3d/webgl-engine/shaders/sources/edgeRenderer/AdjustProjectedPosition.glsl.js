/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{f as o}from"../../../../../../chunks/vec2f64.js";import{IsNaN as r}from"../../../core/shaderLibrary/util/IsNaN.glsl.js";import{Float2PassUniform as e}from"../../../core/shaderModules/Float2PassUniform.js";import{glsl as a}from"../../../core/shaderModules/interfaces.js";import{Matrix3PassUniform as s}from"../../../core/shaderModules/Matrix3PassUniform.js";import{Matrix4PassUniform as t}from"../../../core/shaderModules/Matrix4PassUniform.js";import{Matrix4Uniform as l}from"../../../core/shaderModules/Matrix4Uniform.js";const i=o(.5,-4e-4);function c(o,c){const f=o.vertex;f.include(r),f.constants.add("depthBias","vec2",i),f.uniforms.add(new e("inverseViewport",((o,r)=>r.inverseViewport))),c.legacy?(f.uniforms.add(new l("localView")),f.uniforms.add(new t("proj",((o,r)=>r.camera.projectionMatrix))),f.code.add(a`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = proj * localView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)):(f.uniforms.add(new s("transformNormalViewFromGlobal",(o=>o.transformNormalViewFromGlobal))),f.uniforms.add(new t("transformProjFromView",(o=>o.transformProjFromView))),f.code.add(a`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)),f.code.add(a`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = depthBias.y;
return sqrt(max(projPos.z,0.0)) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`)}export{c as AdjustProjectedPosition};
