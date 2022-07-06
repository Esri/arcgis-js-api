/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{RgbaFloatEncoding as e}from"../util/RgbaFloatEncoding.glsl.js";import{addCameraPosition as t}from"../util/View.glsl.js";import{Float4PassUniform as i}from"../../shaderModules/Float4PassUniform.js";import{FloatPassUniform as o}from"../../shaderModules/FloatPassUniform.js";import{FloatUniform as r}from"../../shaderModules/FloatUniform.js";import{glsl as l}from"../../shaderModules/interfaces.js";import{Texture2DUniform as a}from"../../shaderModules/Texture2DUniform.js";import{ensureColor4 as s}from"../../../shaders/ensureColor4.js";function p(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?n(e,t):d(e)}function n(p,n){const d=!(n.draped&&n.stipplePreferContinuous),{vertex:f,fragment:m}=p;m.include(e),f.uniforms.add(new r("stipplePatternPixelSize")),n.draped||(t(f,n),f.uniforms.add(new o("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),f.code.add(l`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),p.varyings.add("vStippleDistance","float"),n.stippleRequiresClamp&&p.varyings.add("vStippleDistanceLimits","vec2"),n.stippleRequiresStretchMeasure&&p.varyings.add("vStipplePatternStretch","float"),f.code.add(l`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${c};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),f.code.add(l`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),f.code.add(l`
    if (segmentLengthPseudoScreen >= ${d?"patternLength":"1e4"}) {
  `),f.uniforms.add(new o("pixelRatio",((e,t)=>t.camera.pixelRatio))),f.code.add(l`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${n.stippleRequiresStretchMeasure?l`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),m.uniforms.add(new a("stipplePatternTexture")),m.uniforms.add(new r("stipplePatternSDFNormalizer")),m.uniforms.add(new r("stipplePatternTextureSize")),m.uniforms.add(new r("stipplePatternPixelSizeInv")),m.code.add(l`float padTexture(float u) {
return (u * stipplePatternTextureSize + 1.0)/(stipplePatternTextureSize + 2.0);
}`),m.code.add(l`
    float getStippleSDF(out bool isClamped) {
      ${n.stippleRequiresClamp?l`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:l`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${n.stippleScaleWithLineWidth?l`u *= vLineSizeInv;`:""}
      u = padTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${n.stippleRequiresStretchMeasure?l`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:l`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${n.stippleScaleWithLineWidth?l`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:l`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),n.stippleOffColorEnabled?(m.uniforms.add(new i("stippleOffColor",(e=>s(e.stippleOffColor)))),m.code.add(l`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):m.code.add(l`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function d(e){e.fragment.code.add(l`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}const c=l.float(.4);export{p as LineStipple};
