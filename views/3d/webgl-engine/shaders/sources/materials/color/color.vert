#include <util/vsPrecision.glsl>
#include <util/transform.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

attribute vec3 position;
#ifdef VERTEX_COLORS
attribute vec4 color;

varying vec4 vColor;
#endif

varying vec3 vpos;

void main(void) {
#ifdef VERTEX_COLORS
  vColor = color * 0.003921568627451; // = 1/255;
#endif
  vpos = (model * vec4(position, 1.0)).xyz;

  gl_Position = transformPosition(proj, view, vpos);
}
