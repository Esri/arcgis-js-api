/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderLibrary/attributes/VertexPosition.glsl","../../../core/shaderLibrary/util/IsNaN.glsl","../../../core/shaderModules/interfaces"],(function(o,e,r,a){"use strict";function t(o,t){o.vertex.include(r.IsNaN),o.include(e.VertexPosition,t);const s=o.vertex;s.uniforms.add("depthBias","vec2"),s.uniforms.add("inverseViewport","vec2"),t.legacy?(s.uniforms.add("view","mat4"),s.uniforms.add("proj","mat4")):s.uniforms.add("transformNormalViewFromGlobal","mat3"),t.legacy?s.code.add(a.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
float offsetZ  = depthBias.y;
vec4 projNormal = proj * view * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`):s.code.add(a.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = depthBias.x;
float offsetZ  = depthBias.y;
vec4 projNormal = transformProjFromView * vec4(transformNormalViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * inverseViewport * normalize(projNormal.xyz).xy;
}`),s.code.add(a.glsl`float _calculateProjectedBiasZ(vec4 projPos) {
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
}`)}o.AdjustProjectedPosition=t,Object.defineProperties(o,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
