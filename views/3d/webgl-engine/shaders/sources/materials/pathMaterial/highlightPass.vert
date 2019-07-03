#include <util/vsPrecision.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

varying vec3 vpos;

#include <materials/pathMaterial/commonFunctions.glsl>

void main(void) {
  vpos = calculateVPos();

  gl_Position = proj * view * vec4(vpos, 1.0);
}
