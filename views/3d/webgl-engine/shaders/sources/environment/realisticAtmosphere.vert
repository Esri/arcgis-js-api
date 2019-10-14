#include <util/vsPrecision.glsl>

// Camera
uniform vec2 halfSizeNearPlane;
uniform vec3 cameraUp;
uniform vec3 cameraRight;
uniform vec3 cameraDir;
uniform vec2 cameraCenterOffset;

// Attributes
attribute vec3 position;
attribute vec2 uv0;

// Varyings
varying vec3 worldRay;
varying vec2 vtc;

#ifdef HAZE
varying vec3 eyeDir;
#endif

void main(void) {
  vec3 v3Pos = position;
  vtc = uv0;
  vec2 rayvtc = uv0 - cameraCenterOffset;

#ifdef HAZE
  eyeDir = vec3((2.0 * halfSizeNearPlane * rayvtc) - halfSizeNearPlane, -1.0);
#else
  vec3 eyeDir = vec3((2.0 * halfSizeNearPlane * rayvtc) - halfSizeNearPlane, -1.0);
#endif
  worldRay = eyeDir.z * cameraDir + eyeDir.y * cameraUp + eyeDir.x * cameraRight;
  gl_Position = vec4(v3Pos, 1.0);
}
