#include <util/vsPrecision.glsl>
#include <util/transform.glsl>
#include <terrainRenderer/skirts.glsl>

uniform vec3 origin;
uniform mat4 proj;
uniform mat4 view;
uniform vec4 overlayTexScale;
uniform vec4 overlayTexOffset;
uniform float skirtScale;

attribute vec3 position;
attribute vec2 uv0;

varying vec3 vpos;
varying vec4 vtcOverlay;

void main() {
  #if VIEWING_MODE == VIEWING_MODE_GLOBAL
    vec3 vnormal = normalize(position + origin);
  #else
    vec3 vnormal = vec3(0.0, 0.0, 1.0); // WARNING: up-axis dependent code
  #endif

  vec2 uv = uv0;
  vpos = applySkirts(uv, position, vnormal, skirtScale);

  vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;

  gl_Position = transformPosition(proj, view, vpos);
}
