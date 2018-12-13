#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>

varying vec3 vnormal;
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

  vec3 normal = normalize(vnormal);
  if (gl_FrontFacing == false) normal = -normal;

#ifndef ALPHA_ZERO
  gl_FragColor = vec4(vec3(.5) + .5 * normal, 1.0);
#else
  gl_FragColor = vec4(vec3(.5) + .5 * normal, 0.0);
#endif
}
