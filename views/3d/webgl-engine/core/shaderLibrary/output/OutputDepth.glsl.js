/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../ShaderOutput","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],(function(t,e,a,l){"use strict";function o(t,o){switch(t.fragment.include(a.RgbaFloatEncoding),o.output){case e.ShaderOutput.Shadow:case e.ShaderOutput.ShadowHighlight:case e.ShaderOutput.ShadowExludeHighlight:t.extensions.add("GL_OES_standard_derivatives"),t.fragment.code.add(l.glsl`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`);break;case e.ShaderOutput.Depth:t.fragment.code.add(l.glsl`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`)}}t.OutputDepth=o,Object.defineProperties(t,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
