#include <util/vsPrecision.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

attribute vec3 position;

void main(void) {
  gl_Position = proj * view * vec4((model * vec4(position, 1.0)).xyz, 1.0);
}
