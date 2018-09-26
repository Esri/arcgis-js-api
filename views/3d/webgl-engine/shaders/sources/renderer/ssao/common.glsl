#include <util/encoding.glsl>

float getDepthLinear(sampler2D depthMap, vec2 nearFar, vec2 ssC) {
  return -(rgba2float(texture2D(depthMap, ssC))*(nearFar[1] - nearFar[0])+nearFar[0]);
}
