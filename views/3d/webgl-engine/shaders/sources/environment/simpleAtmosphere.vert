#include <util/vsPrecision.glsl>

uniform mat4 proj;
uniform mat4 view;

#ifndef PANORAMIC
const float TWICEPI = 2.0*3.14159265;
const float ATMOSPHERE_RIM_SEGMENTS = 128.0;

uniform vec3 silCircleCenter;
uniform vec3 silCircleV1;
uniform vec3 silCircleV2;
uniform vec2 texV;

uniform float innerScale;  // scale for inner rim
varying float innerFactor; // 0: outer atmosphere, 1: inner atmosphere
#endif

uniform vec3 lightDirection;

attribute vec3 position;
varying vec2 vtc;
varying float falloff;

void main(void) {

#ifdef PANORAMIC

  vec3 pos = position;
  float ndotl = lightDirection.z;
  vtc = vec2(0.0, position.z+0.05);

#else

  innerFactor = clamp(-position.z, 0.0, 1.0);
  float scale = position.y * (1.0 + innerFactor * innerScale);
  float phi = position.x * (TWICEPI / ATMOSPHERE_RIM_SEGMENTS) + 1.0;
  vec3 pos =  (silCircleCenter + sin(phi) * silCircleV1 + cos(phi) * silCircleV2) * scale;
  float ndotl = dot(normalize(position.y > 0.0 ? pos: silCircleCenter), lightDirection);

  vtc.x = position.x / ATMOSPHERE_RIM_SEGMENTS;
  vtc.y = texV.x * (1.0 - position.z) + texV.y * position.z;

#endif

  falloff = max(0.0, smoothstep(-1.0, 0.8, 2.0 * ndotl));

  gl_Position = proj * view * vec4(pos, 1.0);
  gl_Position.z = gl_Position.w; // project atmosphere onto the far plane
}
