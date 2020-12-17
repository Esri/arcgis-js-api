/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,l){"use strict";e.LineStipple=function(e,t){e.defines.addFloat("STIPPLE_ALPHA_COLOR_DISCARD",.001),e.defines.addFloat("STIPPLE_ALPHA_HIGHLIGHT_DISCARD",.5),t.stippleEnabled?function(e,t){e.vertex.uniforms.add("stipplePatternPixelSizeInv","float"),t.stippleUVMaxEnabled&&e.varyings.add("stipplePatternUvMax","float");e.varyings.add("stipplePatternUv","float"),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),t.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4");e.fragment.code.add(l.glsl`
  float getStippleAlpha() {
    float stipplePatternUvClamped = stipplePatternUv * gl_FragCoord.w;
    ${t.stippleUVMaxEnabled?"stipplePatternUvClamped = clamp(stipplePatternUvClamped, 0.0, stipplePatternUvMax);":""}

    return texture2D(stipplePatternTexture, vec2(mod(stipplePatternUvClamped, 1.0), 0.5)).a;
  }`),t.stippleOffColorEnabled?e.fragment.code.add(l.glsl`
    #define discardByStippleAlpha(stippleAlpha, threshold) {}
    #define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)
    `):e.fragment.code.add(l.glsl`
    #define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
    #define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)
    `)}(e,t):function(e){e.fragment.code.add(l.glsl`
  float getStippleAlpha() { return 1.0; }

  #define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
  #define blendStipple(color, _stippleAlpha_) color
  `)}(e)},Object.defineProperty(e,"__esModule",{value:!0})}));
