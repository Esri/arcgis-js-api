/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../support/debugFlags","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],(function(e,t,l,p){"use strict";function a(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?i(e,t):r(e)}function i(e,a){e.fragment.include(l.RgbaFloatEncoding);const i=a.draped&&t.ENABLE_CONTINUOUS_LINE_PATTERNS;i?e.vertex.uniforms.add("worldToScreenRatio","float"):e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),a.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float"),e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),e.fragment.uniforms.add("stipplePatternSDFNormalizer","float"),i&&e.fragment.uniforms.add("stipplePatternPixelSizeInv","float"),a.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4"),i?e.fragment.code.add(p.glsl`float getStippleValue() {
return rgba2float(texture2D(stipplePatternTexture, vec2(mod(stipplePatternUv * stipplePatternPixelSizeInv, 1.0), 0.5)));
}`):e.fragment.code.add(p.glsl`
      float getStippleValue() {
        float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
        ${a.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}
        return rgba2float(texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)));
      }
    `),e.fragment.code.add(p.glsl`float getStippleSDF() {
return (getStippleValue() * 2.0 - 1.0) * stipplePatternSDFNormalizer;
}
float getStippleAlpha() {
return clamp(getStippleSDF() + 0.5, 0.0, 1.0);
}`),a.stippleOffColorEnabled?e.fragment.code.add(p.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):e.fragment.code.add(p.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function r(e){e.fragment.code.add(p.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}e.LineStipple=a,Object.defineProperty(e,"__esModule",{value:!0})}));
