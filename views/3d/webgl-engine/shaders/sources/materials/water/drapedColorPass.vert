#include <util/vsPrecision.glsl>
#include <materials/water/normalsUtils.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;
uniform vec3 localOrigin;

attribute vec3 position;

#include <materials/defaultMaterial/commonFunctions.glsl>

varying vec3 posOut;

void main(void) {
  posOut = calculateVPos();
  gl_Position = proj * view * vec4(posOut.xyz, 1.0);
}
