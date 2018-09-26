#include <util/vsPrecision.glsl>

attribute vec2 position;

void main() {
  gl_Position = vec4(vec2(1.0) - position * 2.0, .0, 1.0);
}
