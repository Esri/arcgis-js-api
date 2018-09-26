#include <util/vsPrecision.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

attribute vec3 position;
attribute vec2 uv0;

varying vec2 vtc;

void main(void) {
  gl_Position = proj * view * vec4((model * vec4(position, 1.0)).xyz, 1.0);
  vtc = uv0;
}
