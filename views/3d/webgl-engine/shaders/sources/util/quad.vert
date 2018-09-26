#include <util/vsPrecision.glsl>

attribute vec2 position;
varying vec2 uv;

void main(void) {
  gl_Position = vec4(position.x, position.y, .0, 1.0);
  uv = position * .5 + vec2(.5);
}
