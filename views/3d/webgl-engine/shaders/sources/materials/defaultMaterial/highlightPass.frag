#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>
#include <util/highlight.glsl>

varying vec3 vpos;

uniform sampler2D depthTex;
uniform vec4 highlightViewportPixelSz;

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

  gl_FragColor = highlightData(gl_FragCoord, depthTex, highlightViewportPixelSz);
}
