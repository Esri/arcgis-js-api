#include <util/vsPrecision.glsl>

attribute vec3 position;
attribute vec2 uv0;

varying vec2 vtc;

void main(void) {
  gl_Position = vec4(position, 1.0);
  vtc = uv0;
}
