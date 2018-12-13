#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>

uniform vec4 eColor;
#ifdef VERTEX_COLORS
varying vec4 vColor;
#endif

varying vec3 vpos;

void main() {
  discardBySlice(vpos);

#ifdef VERTEX_COLORS
  gl_FragColor = vColor * eColor;
#else
  gl_FragColor = eColor;
#endif

  gl_FragColor = highlightSlice(gl_FragColor, vpos);
}
