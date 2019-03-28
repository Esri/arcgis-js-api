#include <util/vsPrecision.glsl>
#include <terrainRenderer/skirts.glsl>

uniform vec3 origin;
uniform mat4 proj;
uniform mat4 view;
uniform mat4 viewNormal;
uniform float skirtScale;

attribute vec3 position;
attribute vec2 uv0;

varying vec3 vnormal;
varying vec3 vpos;

void main(void) {
#if VIEWING_MODE == VIEWING_MODE_GLOBAL
  vec4 normal = vec4(normalize(position + origin), 1.0);
#else
  vec4 normal = vec4(0.0, 0.0, 1.0, 1.0);
#endif

  vec2 uv = uv0;
  vpos = applySkirts(uv, position, normal.xyz, skirtScale);

  gl_Position = proj * view * vec4(vpos, 1.0);
  vnormal = normalize((viewNormal * normal).xyz);
}
