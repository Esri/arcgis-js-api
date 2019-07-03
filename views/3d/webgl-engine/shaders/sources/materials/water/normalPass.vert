#include <util/vsPrecision.glsl>
#include <materials/water/normalsUtils.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;
uniform vec3 localOrigin;

attribute vec3 position;
attribute vec2 uv0;

#include <materials/defaultMaterial/commonFunctions.glsl>

varying vec3 posOut;
varying vec2 uvOut;

void main(void) {
  uvOut = uv0;
  posOut = calculateVPos();
  gl_Position = proj * view * vec4(posOut.xyz, 1.0);
}
