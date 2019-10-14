#include <util/vsPrecision.glsl>

attribute vec3 position;
attribute vec2 uv0;

uniform float scale;
uniform vec2 offset;

varying vec2 uv;

void main(void) {
  gl_Position = vec4(position, 1.0);
  uv = uv0 * scale + offset;
}
