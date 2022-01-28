/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../util/RgbaFloatEncoding.glsl","../../shaderModules/interfaces"],(function(e,t,l){"use strict";function i(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?a(e,t):r(e)}function a(e,i){const a=!(i.draped&&i.stipplePreferContinuous);e.fragment.include(t.RgbaFloatEncoding),e.vertex.uniforms.add("stipplePatternPixelSize","float"),e.vertex.uniforms.add("pixelRatio","float"),i.draped?e.vertex.uniforms.add("worldToScreenRatio","float"):(e.vertex.uniforms.add("worldToScreenPerDistanceRatio","float"),e.vertex.uniforms.add("camPos","vec3"),e.vertex.code.add(l.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - camPos);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),i.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2"),e.vertex.code.add(l.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${o};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),e.vertex.code.add(l.glsl`
  ${i.stippleRequiresStretchMeasure?l.glsl`vec3`:l.glsl`vec2`} computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {
  `),a&&e.vertex.code.add(l.glsl`
      if (segmentLengthPseudoScreen >= patternLength) {

        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${i.stippleRequiresStretchMeasure?l.glsl`return vec3(0.0, segmentLengthScreenRounded, repetitions / flooredRepetitions);`:l.glsl`return vec2(0.0, segmentLengthScreenRounded);`}
      }
    `),e.vertex.code.add(l.glsl`
      ${i.stippleRequiresStretchMeasure?l.glsl`return vec3(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen, 1.0)`:l.glsl`return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen)`};
    }
  `),e.fragment.uniforms.add("stipplePatternTexture","sampler2D"),e.fragment.uniforms.add("stipplePatternSDFNormalizer","float"),e.fragment.uniforms.add("stipplePatternTextureSize","float"),e.fragment.uniforms.add("stipplePatternPixelSizeInv","float"),i.stippleOffColorEnabled&&e.fragment.uniforms.add("stippleOffColor","vec4"),e.fragment.code.add(l.glsl`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),e.fragment.code.add(l.glsl`
    float getStippleSDF(out bool isClamped) {
      ${i.stippleRequiresClamp?l.glsl`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:l.glsl`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${i.stippleScaleWithLineWidth?l.glsl`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      return (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${i.stippleScaleWithLineWidth?l.glsl`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:l.glsl`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),i.stippleOffColorEnabled?e.fragment.code.add(l.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`):e.fragment.code.add(l.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function r(e){e.fragment.code.add(l.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}const o=l.glsl.float(.4);e.LineStipple=i,Object.defineProperty(e,"__esModule",{value:!0})}));
