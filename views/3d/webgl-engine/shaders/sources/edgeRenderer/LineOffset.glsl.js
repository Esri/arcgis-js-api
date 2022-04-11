/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../../../core/shaderModules/interfaces","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,a,l,s){"use strict";function r(e,r){const c=e.vertex;e.include(s.UnpackAttributes,r);const u=e.fragment;switch(l.usesSketchLogic(r)&&(c.uniforms.add("strokesTextureScale","vec2"),c.uniforms.add("strokesLog2Resolution","float"),c.uniforms.add("strokeVariants","float"),e.varyings.add("vStrokeUV","vec2"),u.uniforms.add("strokesTexture","sampler2D"),u.uniforms.add("strokesNormalizationScale","float"),c.code.add(a.glsl`void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
vec2 sidenessNorm = unpackedAttributes.sidenessNorm;
float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);
vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) * strokesTextureScale;
vStrokeUV.x += variantOffset;
}`),e.fragment.include(t.RgbaFloatEncoding),u.code.add(a.glsl`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture2D(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture2D(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`)),r.mode){case l.EdgeUtilMode.SOLID:c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`),u.code.add(a.glsl`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case l.EdgeUtilMode.SKETCH:c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`),u.code.add(a.glsl`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case l.EdgeUtilMode.MIXED:e.varyings.add("vType","float"),c.code.add(a.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),u.code.add(a.glsl`float calculateLineOffset() {
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
}`)}}e.LineOffset=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
