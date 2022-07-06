/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as t}from"../ShaderOutputOptions.js";import{RgbaFloatEncoding as a}from"../util/RgbaFloatEncoding.glsl.js";import{glsl as o}from"../../shaderModules/interfaces.js";function e(e,l){e.fragment.include(a),l.output===t.Shadow?(e.extensions.add("GL_OES_standard_derivatives"),e.fragment.code.add(o`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):l.output===t.Depth&&e.fragment.code.add(o`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}export{e as OutputDepth};
