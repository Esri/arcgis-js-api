/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{RgbaFloatEncoding as e}from"../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float2Uniform as t}from"../../../core/shaderModules/Float2Uniform.js";import{FloatUniform as r}from"../../../core/shaderModules/FloatUniform.js";import{glsl as a}from"../../../core/shaderModules/interfaces.js";import{Texture2DUniform as s}from"../../../core/shaderModules/Texture2DUniform.js";import{usesSketchLogic as o,EdgeUtilMode as c}from"./EdgeUtil.glsl.js";import{UnpackAttributes as l}from"./UnpackAttributes.glsl.js";function u(u,n){const i=u.vertex;u.include(l,n);const d=u.fragment;switch(o(n)&&(i.uniforms.add(new t("strokesTextureScale")),i.uniforms.add(new r("strokesLog2Resolution")),i.uniforms.add(new r("strokeVariants")),u.varyings.add("vStrokeUV","vec2"),d.uniforms.add(new s("strokesTexture")),d.uniforms.add(new r("strokesNormalizationScale")),i.code.add(a`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) * strokesTextureScale;
vStrokeUV.x += variantOffset;
}`),u.fragment.include(e),d.code.add(a`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture2D(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture2D(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`)),n.mode){case c.SOLID:i.code.add(a`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`),d.code.add(a`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case c.SKETCH:i.code.add(a`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`),d.code.add(a`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case c.MIXED:u.varyings.add("vType","float"),i.code.add(a`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),d.code.add(a`float calculateLineOffset() {
if (vType <= 0.0) {
return calculateLineOffsetSketch();
}
else {
return 0.0;
}
}
float calculateLinePressure() {
if (vType <= 0.0) {
return calculateLinePressureSketch();
}
else {
return 1.0;
}
}`)}}export{u as LineOffset};
