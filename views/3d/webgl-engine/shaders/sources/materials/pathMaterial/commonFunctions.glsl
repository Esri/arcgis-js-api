#include <materials/pathMaterial/localPosition.glsl>
#include <util/doublePrecision.glsl>

vec3 calculateVPos() {
  return (model * localPosition()).xyz;
}