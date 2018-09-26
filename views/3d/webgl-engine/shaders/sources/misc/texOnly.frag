#include <util/fsPrecision.glsl>

uniform sampler2D tex;
uniform vec4 color;
varying vec2 vtc;

void main() {
  vec4 texColor = texture2D(tex, vtc);
  gl_FragColor = texColor * color;
}
