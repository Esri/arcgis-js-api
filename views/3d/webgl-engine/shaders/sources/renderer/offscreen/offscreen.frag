#include <util/fsPrecision.glsl>

uniform sampler2D tex;

varying vec2 vtc;

void main() {
  gl_FragColor = texture2D(tex, vtc);
}
