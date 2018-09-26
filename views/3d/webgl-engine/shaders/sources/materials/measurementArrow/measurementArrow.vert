#include <util/vsPrecision.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

uniform float width;

attribute vec3 position;
attribute vec3 normal;
attribute vec2 uv0;
attribute float auxpos1;

varying vec2 vtc;
varying float vlength;
varying float vradius;

void main(void) {
  vec3 bitangent = normal;

  vtc = uv0;
  vlength = auxpos1;
  vradius = 0.5 * width;

  vec4 pos = view * vec4((model * vec4(position + vradius * bitangent * uv0.y, 1.0)).xyz, 1.0);
  gl_Position = proj * pos;
}
