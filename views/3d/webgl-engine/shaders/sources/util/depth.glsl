#include <util/encoding.glsl>

// read linear depth either from native depth texture or custom depth texture encoded in rgba
float linearDepth(sampler2D depthTex, vec2 uv, vec2 nearFar) {
  return -(rgba2float(texture2D(depthTex, uv)) * (nearFar[1] - nearFar[0]) + nearFar[0]);
}

float calcFragDepth(const in float depth) {
  // calc polygon offset
  const float SLOPE_SCALE = 2.0;
  const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
  float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
  float result = depth + SLOPE_SCALE * m + BIAS;
  return clamp(result, .0, .999999);
}
