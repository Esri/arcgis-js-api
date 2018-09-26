#include <util/fsPrecision.glsl>

uniform sampler2D occludedColorMap;

varying vec2 uv;

void main() {
  vec4 occludedColor = texture2D(occludedColorMap, uv);
  gl_FragColor = occludedColor * vec4(1.0, 1.0, 1.0, 0.4);
}
