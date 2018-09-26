#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>

uniform vec2 size;
uniform vec4 color1;
uniform vec4 color2;

varying vec2 vUV;

void main() {
  vec2 uvScaled = vUV / (2.0 * size);

  vec2 uv = fract(uvScaled - 0.25);
  vec2 ab = clamp((abs(uv - 0.5) - 0.25) / fwidth(uvScaled), -0.5, 0.5);
  float fade = smoothstep(0.25, 0.5, max(fwidth(uvScaled.x), fwidth(uvScaled.y)));
  float t = mix(abs(ab.x + ab.y), 0.5, fade);

  gl_FragColor = mix(color2, color1, t);
}
