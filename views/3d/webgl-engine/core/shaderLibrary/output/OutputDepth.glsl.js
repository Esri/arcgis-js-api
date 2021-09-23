/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],(function(t,e,a){"use strict";function l(t,l){t.fragment.include(e.RgbaFloatEncoding),3===l.output?(t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(a.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`)):1===l.output&&t.fragment.code.add(a.glsl`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}t.OutputDepth=l,Object.defineProperty(t,"__esModule",{value:!0})}));
