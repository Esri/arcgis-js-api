/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{RgbaFloatEncoding as e}from"../util/RgbaFloatEncoding.glsl.js";import{glsl as r}from"../../shaderModules/interfaces.js";function a(a){a.include(e),a.code.add(r`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`)}export{a as ReadLinearDepth};
