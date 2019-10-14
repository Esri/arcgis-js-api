#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>
#include <util/depth.glsl>

varying float depth;

void main() {
#ifndef BIAS_SHADOWMAP
  gl_FragColor = float2rgba(depth);
#else
  gl_FragColor = float2rgba(calcFragDepth(depth));
#endif
}
