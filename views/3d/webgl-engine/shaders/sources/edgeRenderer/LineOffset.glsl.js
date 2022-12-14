/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../../../core/shaderLibrary/util/WebGL2Utils","../../../core/shaderModules/FloatDrawUniform","../../../core/shaderModules/interfaces","../../../core/shaderModules/Texture2DDrawUniform","../../../core/shaderModules/TextureSizeUniformType","./EdgeUtil.glsl","./UnpackAttributes.glsl"],(function(e,t,r,a,s,l,o,u,n,i){"use strict";let c=function(e){function r(){return e.apply(this,arguments)||this}return t._inheritsLoose(r,e),r}(l.NoParameters);function d(e,t){e.include(i.UnpackAttributes,t);const{vertex:c,fragment:d}=e;switch(n.usesSketchLogic(t)&&(c.uniforms.add(o.createTexture2DDrawSizeUniforms("strokesTexture",(e=>e.strokesTexture.texture),t.hasWebGL2Context?u.TextureSizeUniformType.None:u.TextureSizeUniformType.InvSize)),c.uniforms.add([new s.FloatDrawUniform("strokesLog2Resolution",(e=>Math.log2(e.strokesTexture.resolution))),new s.FloatDrawUniform("strokeVariants",(e=>e.strokesTexture.variants))]),e.varyings.add("vStrokeUV","vec2"),d.uniforms.add([new o.Texture2DDrawUniform("strokesTexture",(e=>e.strokesTexture.texture)),new s.FloatDrawUniform("strokesNormalizationScale",(e=>e.strokesTexture.normalizationScale))]),c.code.add(l.glsl`
      void calculateStyleOutputsSketch(float lineLength, UnpackedAttributes unpackedAttributes) {
        vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

        float lineIndex = clamp(ceil(log2(lineLength)), 0.0, strokesLog2Resolution);

        vec2 textureSizeInverse = ${a.textureSize(t,"strokesTexture",!0)};
        vStrokeUV = vec2(exp2(lineIndex) * sidenessNorm.y, lineIndex * strokeVariants + variantStroke + 0.5) * textureSizeInverse;
        vStrokeUV.x += variantOffset;
      }
    `),e.fragment.include(r.RgbaFloatEncoding),d.code.add(l.glsl`float calculateLineOffsetSketch() {
float offsetNorm = rgba2float(texture2D(strokesTexture, vStrokeUV));
return (offsetNorm - 0.5) * strokesNormalizationScale;
}
float calculateLinePressureSketch() {
return rgba2float(texture2D(strokesTexture, vStrokeUV + vec2(0.0, 0.5)));
}`)),t.mode){case n.EdgeUtilMode.SOLID:c.code.add(l.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes) {}`),d.code.add(l.glsl`float calculateLineOffset() {
return 0.0;
}
float calculateLinePressure() {
return 1.0;
}`);break;case n.EdgeUtilMode.SKETCH:c.code.add(l.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}`),d.code.add(l.glsl`float calculateLineOffset() {
return calculateLineOffsetSketch();
}
float calculateLinePressure() {
return calculateLinePressureSketch();
}`);break;case n.EdgeUtilMode.MIXED:e.varyings.add("vType","float"),c.code.add(l.glsl`void calculateStyleOutputs(UnpackedAttributes unpackedAttributes)
{
vType = unpackedAttributes.type;
if (unpackedAttributes.type <= 0.0) {
calculateStyleOutputsSketch(vLineLengthPixels, unpackedAttributes);
}
}`),d.code.add(l.glsl`float calculateLineOffset() {
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
}`)}}e.LineOffset=d,e.LineOffsetDrawParameters=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
