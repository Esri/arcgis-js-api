#include <util/fsPrecision.glsl>
#include <util/slice.glsl>

uniform vec4 color;
varying vec3 vpos;

void main() {
  discardBySlice(vpos);

  gl_FragColor = color;
}
