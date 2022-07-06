/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{neverReached as o}from"../../../../../../../core/compilerUtils.js";import{packFloatRGBA as e}from"../../../../../../../core/floatRGBA.js";import{DecodeSymbolColor as r}from"./DecodeSymbolColor.glsl.js";import{RgbaFloatEncoding as n}from"../../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float2Uniform as t}from"../../../../core/shaderModules/Float2Uniform.js";import{Float4DrawUniform as l}from"../../../../core/shaderModules/Float4DrawUniform.js";import{IntegerDrawUniform as a}from"../../../../core/shaderModules/IntegerDrawUniform.js";import{glsl as d}from"../../../../core/shaderModules/interfaces.js";import{Texture2DUniform as i}from"../../../../core/shaderModules/Texture2DUniform.js";import{VertexAttribute as c}from"../../../../lib/VertexAttribute.js";var m;!function(o){o[o.Uniform=0]="Uniform",o[o.Varying=1]="Varying",o[o.COUNT=2]="COUNT"}(m||(m={}));const x=429496.7296;function s(o,r){e(o/x*.5+.5,r)}function C(e,r){switch(r.componentData){case m.Varying:return f(e);case m.Uniform:return v(e);case m.COUNT:return;default:o(r.componentData)}}function f(o){const{vertex:e,fragment:l}=o;e.include(n),e.uniforms.add([new i("componentColorTex"),new t("componentColorTexInvDim")]),o.attributes.add(c.COMPONENTINDEX,"float"),o.varyings.add("vExternalColorMixMode","mediump float"),o.varyings.add("vExternalColor","vec4"),o.include(r),e.constants.add("elevationScale","float",2*x),e.code.add(d`vec4 _readComponentColor() {
float normalizedIndex = (componentIndex * 2.0 + 0.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return texture2D(componentColorTex, indexCoord);
}
float readElevationOffset() {
float normalizedIndex = (componentIndex * 2.0 + 1.5) * componentColorTexInvDim.x;
vec2 indexCoord = vec2(
mod(normalizedIndex, 1.0),
(floor(normalizedIndex) + 0.5) * componentColorTexInvDim.y
);
return (rgba2float(texture2D(componentColorTex, indexCoord)) - 0.5) * elevationScale;
}
vec4 forwardExternalColor(out bool castShadows) {
vec4 componentColor = _readComponentColor() * 255.0;
float shadowFlag = mod(componentColor.b * 255.0, 2.0);
componentColor.b -= shadowFlag;
castShadows = shadowFlag >= 1.0;
int decodedColorMixMode;
vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451;
vExternalColorMixMode = float(decodedColorMixMode) + 0.5;
return vExternalColor;
}`),l.code.add(d`void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
externalColor = vExternalColor;
externalColorMixMode = int(vExternalColorMixMode);
}`)}function v(o){const{vertex:e,fragment:r}=o;e.uniforms.add(new l("externalColor",(o=>o.componentParameters.externalColor))),r.uniforms.add(new a("externalColorMixMode",(o=>o.componentParameters.externalColorMixMode))),o.varyings.add("vExternalColor","vec4"),e.code.add(d`float readElevationOffset() {
return 0.0;
}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`),r.code.add(d`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}`)}export{C as ComponentData,m as ComponentDataType,x as MAX_ELEVATION_OFFSET,s as encodeElevationOffset};
