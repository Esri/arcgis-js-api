#include <util/fsPrecision.glsl>

uniform sampler2D occludedColorMap;
uniform float opacity;

varying vec2 vtc;

void main() {
  vec4 occludedColor = texture2D(occludedColorMap, vtc);
  gl_FragColor = occludedColor * opacity;
}
