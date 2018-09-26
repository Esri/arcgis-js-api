#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>

#ifdef DEPTH_PASS
varying float depth;
#else
varying vec3 vColor;
#endif

void main(void) {
  vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
  float r2 = dot(vOffset, vOffset);

  if (r2 > 0.25) {
    discard;
  }

#ifdef DEPTH_PASS
  gl_FragColor = float2rgba(depth);
#else
  gl_FragColor = vec4(vColor, 1.0);
#endif
}
