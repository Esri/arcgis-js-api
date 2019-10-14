#include <util/vsPrecision.glsl>
#include <util/transform.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

uniform vec2 nearFar;

varying float depth;
varying vec3 vpos;

#include <materials/pathMaterial/commonFunctions.glsl>

void main(void) {
  vpos = calculateVPos();

  gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
}
