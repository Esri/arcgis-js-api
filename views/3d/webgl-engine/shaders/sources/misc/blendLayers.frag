#include <util/fsPrecision.glsl>

varying vec2 uv;

uniform sampler2D tex;
uniform float opacity;

void main() {
  vec4 color = texture2D(tex, uv);

  // Note: output in pre-multiplied alpha for correct alpha compositing
  gl_FragColor = vec4(color.xyz, 1.0) * color.a * opacity;
}
