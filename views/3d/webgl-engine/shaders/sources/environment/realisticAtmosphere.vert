#include <util/vsPrecision.glsl>

// Camera
uniform vec2 halfSizeNearPlane;
uniform vec3 v3CameraUp;
uniform vec3 v3CameraRight;
uniform vec3 v3CameraDir;
uniform vec2 v2CameraCenterOffset;

// Attributes
attribute vec3 position;
attribute vec2 uv0;

// Varyings
varying vec3 v3WorldRay;
varying vec2 vtc;

#ifdef HAZE
varying vec3 v3EyeDir;
#endif

void main(void) {
  vec3 v3Pos = position;
  vtc = uv0;
  vec2 rayvtc = uv0 - v2CameraCenterOffset;

#ifdef HAZE
  v3EyeDir = vec3((2.0*halfSizeNearPlane *rayvtc)-halfSizeNearPlane,-1.0);
#else
  vec3 v3EyeDir = vec3((2.0*halfSizeNearPlane *rayvtc)-halfSizeNearPlane,-1.0);
#endif
  v3WorldRay = v3EyeDir.z*v3CameraDir + v3EyeDir.y*v3CameraUp + v3EyeDir.x*v3CameraRight;
  gl_Position = vec4(v3Pos, 1.0);
}
