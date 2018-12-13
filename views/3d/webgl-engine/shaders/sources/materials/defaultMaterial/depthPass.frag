#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>
#include <util/depth.glsl>
#include <util/slice.glsl>

varying float depth;
varying vec3 vpos;

#ifdef TEXTURING
#include <materials/defaultMaterial/texturingInputs.glsl>
#include <materials/defaultMaterial/texturing.glsl>
#endif

void main() {
  discardBySlice(vpos);

#if defined(TEXTURING) && defined(TEXTURE_ALPHA_TEST)
  if (textureLookup(tex, vtc).a * coverageCorrectionFactor(vtc) < textureAlphaCutoff) {
    discard;
  }
#endif

#ifndef BIAS_SHADOWMAP
  gl_FragColor = float2rgba(depth);
#else
  gl_FragColor = float2rgba(calcFragDepth(depth));
#endif
}
