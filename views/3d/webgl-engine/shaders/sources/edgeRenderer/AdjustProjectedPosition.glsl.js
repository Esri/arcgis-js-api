/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderLibrary/attributes/VertexPosition.glsl","../../../core/shaderLibrary/util/IsNaN.glsl","../../../core/shaderModules/interfaces"],(function(o,e,r,a){"use strict";function t(o,t){o.vertex.include(r.IsNaN),o.include(e.VertexPosition,t);const s=o.vertex;s.uniforms.add("uDepthBias","vec2"),s.uniforms.add("uViewportDimInv","vec2"),t.legacy?(s.uniforms.add("uView","mat4"),s.uniforms.add("uProj","mat4")):s.uniforms.add("uTransformNormal_ViewFromGlobal","mat3"),t.legacy?s.code.add(a.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = uDepthBias.x;
float offsetZ  = uDepthBias.y;
vec4 projNormal = uProj * uView * vec4(globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * uViewportDimInv * normalize(projNormal.xyz).xy;
}`):s.code.add(a.glsl`vec2 calculateProjectedBiasXY(vec4 projPos, vec3 globalNormal) {
float offsetXY = uDepthBias.x;
float offsetZ  = uDepthBias.y;
vec4 projNormal = uTransform_ProjFromView * vec4(uTransformNormal_ViewFromGlobal * globalNormal, 0.0);
return offsetXY * projPos.w * 2.0 * uViewportDimInv * normalize(projNormal.xyz).xy;
}`),s.code.add(a.glsl`float _calculateProjectedBiasZ(vec4 projPos) {
float offsetZ = uDepthBias.y;
return sqrt(projPos.z) * offsetZ;
}
vec4 adjustProjectedPosition(vec4 projPos, vec3 worldNormal, float lineWidth) {
vec2 offsetXY = calculateProjectedBiasXY(projPos, worldNormal);
if (!isNaN(offsetXY.x) && !isNaN(offsetXY.y)) {
projPos.xy += offsetXY;
}
projPos.z += _calculateProjectedBiasZ(projPos);
return projPos;
}`)}o.AdjustProjectedPosition=t,Object.defineProperty(o,"__esModule",{value:!0})}));
