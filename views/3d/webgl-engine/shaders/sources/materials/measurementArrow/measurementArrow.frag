#include <util/fsPrecision.glsl>

uniform float outlineSize;
uniform vec4 outlineColor;
uniform float stripeLength;
uniform vec4 stripeEvenColor;
uniform vec4 stripeOddColor;

varying vec2 vtc;
varying float vlength;
varying float vradius;

#define INV_SQRT2 (1.0 / sqrt(2.0))

vec4 arrowColor(vec2 tc, float len) {
  float d = INV_SQRT2 * (tc.x - abs(tc.y));
  d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
  d = min(d, 1.0 - abs(tc.y));

  if (d < 0.0) {
    return vec4(0.0);
  } else if (d < outlineSize) {
    return outlineColor;
  } else {
    return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
  }
}

void main(void) {
  vec2 ntc = vec2(vtc.x / vradius, vtc.y);
  vec4 color = arrowColor(ntc, vlength / vradius);
  if (color.a == 0.0) {
    discard;
  }
  gl_FragColor = color;
}
