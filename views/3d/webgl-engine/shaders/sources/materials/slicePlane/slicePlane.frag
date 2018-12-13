#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>

uniform vec4 backgroundColor;
uniform vec4 gridColor;
uniform float ratio;
uniform float gridWidth;

varying vec2 vUV;

void main() {
  const float LINE_WIDTH = 1.0;

  vec2 uvScaled = vUV * gridWidth;
  vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
  vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);

  // mask aliasing along edges
  grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
  grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);

  float gridFade = max(grid.x, grid.y);

  float gridAlpha = gridColor.a * gridFade;

  // premultiply alpha in output
  gl_FragColor =
    vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
    vec4(gridColor.rgb, 1.0) * gridAlpha;
}
