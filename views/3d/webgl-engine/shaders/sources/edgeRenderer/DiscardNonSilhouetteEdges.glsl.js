/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{glsl as e}from"../../../core/shaderModules/interfaces.js";function o(o,r){const l=o.vertex;r.silhouette?(l.code.add(e`bool isSilhouetteEdge(vec3 viewDir, vec3 normalA, vec3 normalB) {
float faceAVisible = dot(viewDir, normalA);
float faceBVisible = dot(viewDir, normalB);
return faceAVisible * faceBVisible < 0.0;
}`),r.legacy?l.code.add(e`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
vec3 viewNormalA = _modelToViewNormal(normalA);
vec3 viewNormalB = _modelToViewNormal(normalB);
vec3 viewDir = -viewPos;
if (isSilhouetteEdge(viewDir, viewNormalA, viewNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`):l.code.add(e`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
vec3 worldNormalA = _modelToWorldNormal(normalA);
vec3 worldNormalB = _modelToWorldNormal(normalB);
vec3 viewDir = -worldPos;
if (isSilhouetteEdge(viewDir, worldNormalA, worldNormalB)) {
return false;
}
gl_Position = vec4(10.0, 10.0, 10.0, 1.0);
return true;
}`)):l.code.add(e`bool discardNonSilhouetteEdges(vec3 viewPos, vec3 worldPos) {
return false;
}`)}export{o as DiscardNonSilhouetteEdges};
