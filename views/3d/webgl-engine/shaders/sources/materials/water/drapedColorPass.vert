#include <util/vsPrecision.glsl>
#include <util/transform.glsl>
#include <materials/water/normalsUtils.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform mat4 model;
uniform vec3 localOrigin;

attribute vec3 position;

#include <materials/defaultMaterial/commonFunctions.glsl>

varying vec3 vpos;

void main(void) {
  vpos = calculateVPos();
  gl_Position = transformPosition(proj, view, vpos);
}
