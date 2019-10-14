#include <util/vsPrecision.glsl>
#include <util/transform.glsl>
#include <terrainRenderer/skirts.glsl>

uniform vec3 origin;
uniform mat4 proj;
uniform mat4 view;
uniform vec2 nearFar;
uniform float skirtScale;

attribute vec3 position;
attribute vec2 uv0;

varying float depth;

void main(void) {
#if VIEWING_MODE == VIEWING_MODE_GLOBAL
  vec3 normal = normalize(position + origin);
#else
  vec3 normal = vec3(0.0, 0.0, 1.0);
#endif

  vec2 uv = uv0;
  vec3 vpos = applySkirts(uv, position, normal.xyz, skirtScale);

  gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}
