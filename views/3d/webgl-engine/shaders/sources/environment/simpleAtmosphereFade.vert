#include <util/vsPrecision.glsl>

attribute vec2 position;

uniform vec3 lightDirection;
uniform vec3 cameraPosition;

uniform float undergroundFadeAlpha;

varying vec4 color;

void main(void) {
  float ndotl = dot(normalize(cameraPosition), lightDirection);
  float lighting = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

  color = vec4(vec3(lighting), undergroundFadeAlpha);

  gl_Position = vec4(position.xy, 1.0, 1.0); // on the far plane
}
