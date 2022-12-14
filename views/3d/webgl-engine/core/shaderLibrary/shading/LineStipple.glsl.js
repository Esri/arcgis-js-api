/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/maybe","../util/RgbaFloatEncoding.glsl","../util/View.glsl","../util/WebGL2Utils","../../shaderModules/Float4PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType","../../../materials/StippleTextureRepository","../../../shaders/ensureColor4"],(function(e,t,i,l,o,a,r,s,p,n,d,c){"use strict";function u(e,t){e.constants.add("stippleAlphaColorDiscard","float",.001),e.constants.add("stippleAlphaHighlightDiscard","float",.5),t.stippleEnabled?f(e,t):S(e)}function f(e,t){const u=!(t.draped&&t.stipplePreferContinuous),{vertex:f,fragment:S}=e;S.include(i.RgbaFloatEncoding),t.draped||(l.addCameraPosition(f,t),f.uniforms.add(new r.FloatPassUniform("worldToScreenPerDistanceRatio",((e,t)=>1/t.camera.perScreenPixelRatio))),f.code.add(s.glsl`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add("vStippleDistance","float"),t.stippleRequiresClamp&&e.varyings.add("vStippleDistanceLimits","vec2"),t.stippleRequiresStretchMeasure&&e.varyings.add("vStipplePatternStretch","float"),f.code.add(s.glsl`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${h};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),f.code.add(s.glsl`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),f.code.add(s.glsl`
    if (segmentLengthPseudoScreen >= ${u?"patternLength":"1e4"}) {
  `),f.uniforms.add(new r.FloatPassUniform("pixelRatio",((e,t)=>t.camera.pixelRatio))),f.code.add(s.glsl`
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        ${t.stippleRequiresStretchMeasure?s.glsl`
              float stretch = repetitions / flooredRepetitions;

              // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
              // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
              vStipplePatternStretch = max(0.75, stretch);`:""}

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),S.constants.add("stippleTexturePadding","float",d.STIPPLE_TEXTURE_PADDING);const P=t.hasWebGL2Context?n.TextureSizeUniformType.None:n.TextureSizeUniformType.Size;S.uniforms.add(p.createTexture2DPassSizeUniforms("stipplePatternTexture",(e=>e.stippleTexture),P)),S.uniforms.add([new r.FloatPassUniform("stipplePatternSDFNormalizer",(e=>g(e.stipplePattern))),new r.FloatPassUniform("stipplePatternPixelSizeInv",(e=>1/m(e)))]),S.code.add(s.glsl`
    float padStippleTexture(float u) {
      float paddedTextureSize = ${o.textureSize(t,"stipplePatternTexture")}.x;
      float unpaddedTextureSize = paddedTextureSize - stippleTexturePadding;

      return (u * unpaddedTextureSize + stippleTexturePadding * 0.5) / paddedTextureSize;
    }
  `),S.code.add(s.glsl`
    float getStippleSDF(out bool isClamped) {
      ${t.stippleRequiresClamp?s.glsl`
          float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
          vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
          isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;`:s.glsl`
          float stippleDistanceClamped = vStippleDistance;
          isClamped = false;`}

      float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv;
      ${t.stippleScaleWithLineWidth?s.glsl`u *= vLineSizeInv;`:""}
      u = padStippleTexture(fract(u));

      float encodedSDF = rgba2float(texture2D(stipplePatternTexture, vec2(u, 0.5)));
      float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;

      ${t.stippleRequiresStretchMeasure?s.glsl`return (sdf - 0.5) * vStipplePatternStretch + 0.5;`:s.glsl`return sdf;`}
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha() {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);

      float antiAliasedResult = ${t.stippleScaleWithLineWidth?s.glsl`clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);`:s.glsl`clamp(stippleSDF + 0.5, 0.0, 1.0);`}

      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }
  `),t.stippleOffColorEnabled?(S.uniforms.add(new a.Float4PassUniform("stippleOffColor",(e=>c.ensureColor4(e.stippleOffColor)))),S.code.add(s.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) {}
#define blendStipple(color, stippleAlpha) mix(color, stippleOffColor, stippleAlpha)`)):S.code.add(s.glsl`#define discardByStippleAlpha(stippleAlpha, threshold) if (stippleAlpha < threshold) { discard; }
#define blendStipple(color, stippleAlpha) vec4(color.rgb, color.a * stippleAlpha)`)}function S(e){e.fragment.code.add(s.glsl`float getStippleAlpha() { return 1.0; }
#define discardByStippleAlpha(_stippleAlpha_, _threshold_) {}
#define blendStipple(color, _stippleAlpha_) color`)}function g(e){return t.isSome(e)?(Math.floor(.5*(d.computeLongestPattern(e)-1))+.5)/e.pixelRatio:1}function m(e){const i=e.stipplePattern;return t.isSome(i)?d.computeTextureSize(e.stipplePattern)/i.pixelRatio:1}const h=s.glsl.float(.4);e.LineStipple=u,e.computePixelSize=m,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
