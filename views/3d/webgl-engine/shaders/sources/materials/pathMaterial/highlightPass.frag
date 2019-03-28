#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>
#include <util/highlight.glsl>

varying vec3 vpos;

#ifdef TEXTURING
uniform sampler2D tex;
uniform vec2 texSize;
varying vec2 vtc;
#ifdef TEXTURE_ATLAS
varying vec4 regionV;
#endif
#endif

uniform sampler2D depthTex;
uniform vec4 highlightViewportPixelSz;

#ifdef TEXTURING
#include <materials/pathMaterial/texturing.glsl>
#endif

void main() {
  discardBySlice(vpos);

#ifdef TEXTURING
  if (textureLookup(tex, vtc).a < ALPHA_THRESHOLD) {
    discard;
  }
#endif

  gl_FragColor = highlightData(gl_FragCoord, depthTex, highlightViewportPixelSz);
}
