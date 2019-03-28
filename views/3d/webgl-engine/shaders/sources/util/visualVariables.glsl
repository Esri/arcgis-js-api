#if defined(VV_SIZE)
  #define VV_CUSTOM_MODEL_MATRIX
#endif

#if defined(VV_SIZE)
  uniform vec3 vvSizeMinSize;
  uniform vec3 vvSizeMaxSize;
  uniform vec3 vvSizeOffset;
  uniform vec3 vvSizeFactor;
#elif defined(VV_CUSTOM_MODEL_MATRIX)
  uniform vec3 vvSizeValue;
#endif

#ifdef VV_CUSTOM_MODEL_MATRIX
  uniform mat3 vvSymbolRotationMatrix;
#endif

#ifdef VV_CUSTOM_MODEL_MATRIX
  uniform vec3 vvSymbolAnchor;
#endif

#ifdef VV_COLOR
  #define VV_COLOR_N 8
  uniform float vvColorValues[VV_COLOR_N];
  uniform vec4 vvColorColors[VV_COLOR_N];
#endif

// Evaluation of size
#if defined(VV_SIZE)
  vec3 vvGetScale(vec4 featureAttribute) {
    return clamp(vvSizeOffset + featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
  }
#elif defined(VV_CUSTOM_MODEL_MATRIX)
  vec3 vvGetScale(vec4 featureAttribute) {
    return vvSizeValue;
  }
#endif

// Applying the model matrix
#ifdef VV_CUSTOM_MODEL_MATRIX
  vec4 vvTransformPosition(vec3 position, vec4 featureAttribute) {
    return vec4(vvSymbolRotationMatrix * (vvGetScale(featureAttribute) * (position + vvSymbolAnchor)), 1.0);
  }

  vec4 vvTransformNormal(vec3 normal, vec4 featureAttribute) {
    // Normal transform is the inverse transpose of model transform
    return vec4(vvSymbolRotationMatrix * normal / vvGetScale(featureAttribute), 1.0);
  }
#endif

#ifdef VV_COLOR
  vec4 vvGetColor(vec4 featureAttribute, float values[VV_COLOR_N], vec4 colors[VV_COLOR_N]) {
    float value = featureAttribute.y;
    if (value <= values[0]) {
      return colors[0];
    }

    for (int i = 1; i < VV_COLOR_N; ++i) {
      if (values[i] >= value) {
        float f = (value - values[i-1]) / (values[i] - values[i-1]);
        return mix(colors[i-1], colors[i], f);
      }
    }

    return colors[VV_COLOR_N - 1];
  }
#endif
