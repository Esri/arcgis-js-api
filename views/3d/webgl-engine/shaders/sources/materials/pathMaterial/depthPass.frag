#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>
#include <util/depth.glsl>
#include <util/slice.glsl>

varying float depth;
varying vec3 vpos;

void main() {
  discardBySlice(vpos);

#ifndef BIAS_SHADOWMAP
  gl_FragColor = float2rgba(depth);
#else
  gl_FragColor = float2rgba(calcFragDepth(depth));
#endif
}
