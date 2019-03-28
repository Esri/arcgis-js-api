#include <util/vsPrecision.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;

attribute vec3 position;

#ifdef VERTEXCOLORS
attribute vec4 color;
#endif


varying vec3 vpos;

#ifdef VERTEXCOLORS
varying vec4 vcolor;
#endif


void main(void) {
  vpos = (model * vec4(position, 1.0)).xyz;
  #ifdef VERTEXCOLORS
    vcolor = color * 0.003921568627451; // = 1/255
  #endif

  gl_Position = proj * view * vec4(vpos, 1.0);
}
