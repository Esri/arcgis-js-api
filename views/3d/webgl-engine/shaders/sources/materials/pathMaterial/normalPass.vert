#include <util/vsPrecision.glsl>

#include <materials/pathMaterial/commonInputs.glsl>

uniform mat4 viewNormal;
#ifdef COMPRESSED_NORMALS
attribute vec2 normalCompressed;
#else
attribute vec3 normal;
#endif

varying vec3 vnormal;
varying vec3 vpos;

#include <materials/pathMaterial/commonFunctions.glsl>
#include <materials/pathMaterial/localNormal.glsl>

void main(void) {
  vpos = calculateVPos();

  vnormal = normalize((viewNormal * modelNormal * localNormal()).xyz);

  gl_Position = proj * view * vec4(vpos, 1.0);
}
