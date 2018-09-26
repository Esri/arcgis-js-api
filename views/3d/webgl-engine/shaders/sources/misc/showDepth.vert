#include <util/vsPrecision.glsl>

uniform mat4 proj;
attribute vec2 position;
attribute vec2 uv0;
varying vec2 vtc;

void main(void) {
  gl_Position = proj * vec4(position.x, position.y, .0, 1.0);
  vtc = uv0;
}
