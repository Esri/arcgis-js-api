#include <util/vsPrecision.glsl>
#include <util/transform.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

varying vec3 vpos;

#include <materials/pathMaterial/commonFunctions.glsl>

void main(void) {
  vpos = calculateVPos();

  gl_Position = transformPosition(proj, view, vpos);
}
