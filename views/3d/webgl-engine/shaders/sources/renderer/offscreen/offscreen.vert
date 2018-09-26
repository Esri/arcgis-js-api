#include <util/vsPrecision.glsl>

attribute vec2 position;
varying vec2 vtc;

void main(void) {
  gl_Position = vec4(position.xy, 0.0, 1.0);
  vtc = position.xy * 0.5 + 0.5;
}
