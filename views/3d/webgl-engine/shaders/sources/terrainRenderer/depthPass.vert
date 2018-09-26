#include <util/vsPrecision.glsl>
#include <terrainRenderer/skirts.glsl>

uniform vec3 origin;
uniform mat4 proj;
uniform mat4 view;
uniform vec2 nearFar;
uniform float skirtScale;

attribute vec3 position;
attribute vec2 uv0;

varying float depth;
varying vec3 vpos;

void main(void) {
#ifdef SPHERICAL
  vec3 normal = normalize(position + origin);
#else
  vec3 normal = vec3(0.0, 0.0, 1.0);
#endif

  vec2 uv = uv0;
  vpos = applySkirts(uv, position, normal.xyz, skirtScale);

  vec4 eye = view * vec4(vpos, 1.0);
  gl_Position = proj * eye;
  depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
}
