#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>
#include <util/depth.glsl>
#include <util/slice.glsl>

varying float depth;
varying vec3 vpos;

#ifdef TEXTURING
uniform sampler2D tex;
uniform vec2 texSize;
varying vec2 vtc;
#ifdef TEXTURE_ATLAS
varying vec4 regionV;
#endif
#endif

#ifdef TEXTURING
#include <materials/pathMaterial/texturing.glsl>
#endif

void main() {
  discardBySlice(vpos);

#ifdef TEXTURING
  if (textureLookup(tex, vtc).a * coverageCorrectionFactor(vtc) < ALPHA_THRESHOLD) {
    discard;
  }
#endif

#ifndef BIAS_SHADOWMAP
  gl_FragColor = float2rgba(depth);
#else
  gl_FragColor = float2rgba(calcFragDepth(depth));
#endif
}
