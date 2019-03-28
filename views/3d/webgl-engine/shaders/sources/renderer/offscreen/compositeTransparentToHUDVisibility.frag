#include <util/fsPrecision.glsl>

uniform sampler2D tex;

varying vec2 vtc;

void main() {
  gl_FragColor = vec4(1.0 - texture2D(tex, vtc).a);
}
