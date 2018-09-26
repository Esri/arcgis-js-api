float calcFragDepth(const in float depth) {
  //calc polygon offset
  const float SLOPE_SCALE = 2.0;
  const float BIAS = 2.0 * .000015259;    // 1 / (2^16 - 1)
  float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
  float result = depth + SLOPE_SCALE * m + BIAS;
  return clamp(result, .0, .999999);
}
