#include <util/fsPrecision.glsl>
#include <util/slice.glsl>

varying vec2 vtc;
varying vec3 vpos;

#ifdef STIPPLE
uniform float stippleLengthDoubleInv;
#endif

void main() {
  discardBySlice(vpos);

#ifdef STIPPLE
  if (fract(vtc.x * stippleLengthDoubleInv) > 0.5) {
    discard;
  }
#endif

  gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}
