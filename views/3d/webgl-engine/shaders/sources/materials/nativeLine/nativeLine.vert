#include <util/vsPrecision.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

attribute vec3 position;

varying vec3 vpos;

void main(void) {
  vpos = (model * vec4(position, 1.0)).xyz;
  gl_Position = proj * view * vec4(vpos, 1.0);
}
