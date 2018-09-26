#include <util/fsPrecision.glsl>

// ===============================================================================
// Smartly downsamples a texture, halfing its resolution. This allows for a square
// screen region to check if none, any or all pixels were set.

// The red channel is always ceiled after interpolating the 4 merged pixels.
// This allows to evaluate:
// any(pixels.red != 0.0) as red == 1.0
// none(pixels.red != 0.0) as red == 0.0

// The green and blue channels are set to floor(max(green, blue)).
// This allows to evaluate:
// all(pixels.green || pixels.blue) as green == 1.0
// ===============================================================================

uniform sampler2D tex;
uniform vec2 invFramebufferDim;

void main() {
  vec2 coord = gl_FragCoord.xy * invFramebufferDim;
  vec4 value = texture2D(tex, coord);
  float mx = floor(max(value.g, value.b));
  gl_FragColor = vec4(ceil(value.r), mx, mx, 1.0);
}
