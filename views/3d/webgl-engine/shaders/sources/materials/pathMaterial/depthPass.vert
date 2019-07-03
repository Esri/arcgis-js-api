#include <util/vsPrecision.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

uniform vec2 nearFar;

varying float depth;
varying vec3 vpos;

#include <materials/pathMaterial/commonFunctions.glsl>

void main(void) {
  vpos = calculateVPos();

  vec4 eye = view * vec4(vpos, 1.0);

  gl_Position = proj * eye;
  depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
}
