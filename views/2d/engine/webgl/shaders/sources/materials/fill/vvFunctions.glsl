const highp float nanValue = 1e-30;

bool isNan(float val) {
  return (val == nanValue);
  //return !(val < 0.0 || -1.0 < (val - 1.0) || val == 0.0);
}

#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;

float getVVOpacity(float opacityValue) {
  if (isNan(opacityValue)) {
    return 1.0;
  }

  if (opacityValue <= u_vvOpacityValues[0]) {
    return u_vvOpacities[0];
  }

  for (int i = 1; i < VV_OPACITY_N; ++i) {
    if (u_vvOpacityValues[i] >= opacityValue) {
      float f = (opacityValue - u_vvOpacityValues[i-1]) / (u_vvOpacityValues[i] - u_vvOpacityValues[i-1]);
      return mix(u_vvOpacities[i-1], u_vvOpacities[i], f);
    }
  }

  return u_vvOpacities[VV_OPACITY_N - 1];
}
#endif // VV_OPACITY

#ifdef VV_COLOR
const int VV_COLOR_N = 8;

vec4 getVVColor(float colorValue, vec4 fallback) {
  if (isNan(colorValue)) {
    return fallback;
  }

  if (colorValue <= u_vvColorValues[0]) {
    return u_vvColors[0];
  }

  for (int i = 1; i < VV_COLOR_N; ++i) {
    if (u_vvColorValues[i] >= colorValue) {
      float f = (colorValue - u_vvColorValues[i-1]) / (u_vvColorValues[i] - u_vvColorValues[i-1]);
      return mix(u_vvColors[i-1], u_vvColors[i], f);
    }
  }

  return u_vvColors[VV_COLOR_N - 1];
}
#endif // VV_COLOR
