#include <util/vsPrecision.glsl>
#include <util/transform.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

uniform mat4 viewNormal;

varying vec3 vnormal;
varying vec3 vpos;

#include <materials/pathMaterial/commonFunctions.glsl>

void main(void) {
  vpos = calculateVPos();

  vnormal = normalize((viewNormal * modelNormal * localNormal()).xyz);

  gl_Position = transformPosition(proj, view, vpos);
}
