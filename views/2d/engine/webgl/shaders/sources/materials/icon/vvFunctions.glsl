bool isNan(float val) {
  return !( val < 0.0 || 0.0 < val || val == 0.0 );
}

#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
  if (isNan(sizeValue)) {
    return fallback;
  }

  // we need to multiply by 8 in order to translate to tile coordinates
  float interpolationRatio = (sizeValue  - u_vvSizeMinMaxValue.x) / (u_vvSizeMinMaxValue.y - u_vvSizeMinMaxValue.x);
  interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
  return u_vvSizeMinMaxValue.z + interpolationRatio * (u_vvSizeMinMaxValue.w - u_vvSizeMinMaxValue.z);
}
#endif // VV_SIZE_MIN_MAX_VALUE

#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 6;
float getVVStopsSize(float sizeValue, float fallback) {
  if (isNan(sizeValue)) {
    return fallback;
  }

  if (sizeValue <= u_vvSizeFieldStopsValues[0]) {
    return u_vvSizeFieldStopsSizes[0];
  }

  for (int i = 1; i < VV_SIZE_N; ++i) {
    if (u_vvSizeFieldStopsValues[i] >= sizeValue) {
      float f = (sizeValue - u_vvSizeFieldStopsValues[i-1]) / (u_vvSizeFieldStopsValues[i] - u_vvSizeFieldStopsValues[i-1]);
      return mix(u_vvSizeFieldStopsSizes[i-1], u_vvSizeFieldStopsSizes[i], f);
    }
  }

  return u_vvSizeFieldStopsSizes[VV_SIZE_N - 1];
}
#endif // VV_SIZE_FIELD_STOPS

#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
  if (isNan(sizeValue)) {
    return fallback;
  }

  return u_vvSizeUnitValueWorldToPixelsRatio * sizeValue;
}
#endif // VV_SIZE_UNIT_VALUE

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

#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
  // YF TODO: if the symbol has rotation we need to combine the symbo's rotation with the VV one
  if (isNan(rotationValue)) {
    return mat4(1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 1);
  }

  float rotation = rotationValue;
  if (u_vvRotationType == 1.0) {
    rotation = 90.0 - rotation;
  }

  float angle = C_DEG_TO_RAD * rotation;

  float sinA = sin(angle);
  float cosA = cos(angle);

  return mat4(cosA, sinA, 0, 0,
              -sinA,  cosA, 0, 0,
              0,     0, 1, 0,
              0,     0, 0, 1);
}

mat3 getVVRotationMat3(float rotationValue) {
  // YF TODO: if the symbol has rotation we need to combine the symbo's rotation with the VV one
  if (isNan(rotationValue)) {
    return mat3(1, 0, 0,
                0, 1, 0,
                0, 0, 1);
  }

  float rotation = rotationValue;
  if (u_vvRotationType == 1.0) {
    rotation = 90.0 - rotation;
  }

  float angle = C_DEG_TO_RAD * -rotation;

  float sinA = sin(angle);
  float cosA = cos(angle);

  return mat3(cosA, -sinA, 0,
             sinA, cosA, 0,
              0,    0,    1);
}
#endif // VV_ROTATION

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
