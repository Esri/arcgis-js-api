#include <util/fsPrecision.glsl>

uniform vec4 color;
uniform vec4 borderColor;

varying vec4 coverageSampling;
varying vec2 lineSizes;

void main() {
  // Mix between line and border coverage offsets depending on whether we need
  // a border (based on the sidedness).
  vec2 coverage = min(1.0 - clamp(abs(coverageSampling.xy) - coverageSampling.zw, 0.0, 1.0), lineSizes);

  // Mix between border and line color based on the line coverage (conceptually the line
  // blends on top of the border background).
  //
  // Anti-alias by blending final result using the full (including optional border) coverage
  // and the color alpha
  float borderAlpha = color.a * borderColor.a * coverage.y;
  float colorAlpha = color.a * coverage.x;

  float finalAlpha = mix(borderAlpha, 1.0, colorAlpha);

#ifdef DEPTH_HUD

  if (finalAlpha < 0.01) {
    discard;
  }

#else

  // Compute the finalRgb, but keep it pre-multiplied (for unpre-multiplied you
  // need to divide by finalAlpha). We avoid the division here by setting the
  // appropriate blending function in the material.
  vec3 finalRgb = mix(borderColor.rgb * borderAlpha, color.rgb, colorAlpha);

  gl_FragColor = vec4(finalRgb, finalAlpha);

#endif

}
