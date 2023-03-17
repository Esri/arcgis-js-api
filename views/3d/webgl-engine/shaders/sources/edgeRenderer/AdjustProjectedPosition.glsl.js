/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec2f64","../../../core/shaderLibrary/util/IsNaN.glsl","../../../core/shaderModules/Float2PassUniform","../../../core/shaderModules/interfaces","../../../core/shaderModules/Matrix3PassUniform","../../../core/shaderModules/Matrix4PassUniform"],(function(o,r,e,a,s,t,l){"use strict";const i=-4e-4,c=.5,f=r.fromValues(c,i);function n(o,r){const i=o.vertex;i.include(e.IsNaN),i.constants.add("depthBias","vec2",f),i.uniforms.add(new a.Float2PassUniform("inverseViewport",((o,r)=>r.inverseViewport))),r.legacy?(i.uniforms.add(new l.Matrix4PassUniform("proj",((o,r)=>r.camera.projectionMatrix))),i.code.add(s.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = proj * localView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)):(i.uniforms.add(new t.Matrix3PassUniform("transformNormalViewFromGlobal",(o=>o.transformNormalViewFromGlobal))),i.uniforms.add(new l.Matrix4PassUniform("transformProjFromView",(o=>o.transformProjFromView))),i.code.add(s.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`)),i.code.add(s.glsl`float _calculateProjectedBiasZ(vec4 projPos) {
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
}`)}o.AdjustProjectedPosition=n,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
