#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>

uniform vec4 constantColor;

varying vec3 vpos;

#ifdef VERTEXCOLORS
varying vec4 vcolor;
#endif

void main() {
  discardBySlice(vpos);
#ifdef VERTEXCOLORS
  gl_FragColor = highlightSlice(vcolor, vpos);
#else
  gl_FragColor = highlightSlice(constantColor, vpos);
#endif
}
