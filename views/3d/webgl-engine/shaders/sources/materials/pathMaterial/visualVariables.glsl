
#if defined(VV_SIZE)
  uniform vec3 vvSizeMinSize;
  uniform vec3 vvSizeMaxSize;
  uniform vec3 vvSizeOffset;
  uniform vec3 vvSizeFactor;

  vec3 vvGetScale(vec4 featureAttribute) {
    // the 0.5 factor comes from the fact that the generated profiles have radius of 1
    // but the old implementation of the Graphics3DPathSymbolLayer actually had a profile radius of 0.5
    // for constant size values the 0.5 is applied in Graphcis3DPathSymbolLayer when setting material parms
    // we might want to change the path geometry generation so that it produces profile radius of 0.5 too
    return clamp(vvSizeOffset + featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize)*0.5;
  }
#endif

#ifdef VV_COLOR
  #define VV_COLOR_N 8
  uniform float vvColorValues[VV_COLOR_N];
  uniform vec4 vvColorColors[VV_COLOR_N];

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


#ifdef VV_OPACITY
  #define VV_OPACITY_N 8
  uniform float vvOpacityValues[VV_OPACITY_N];
  uniform float vvOpacityOpacities[VV_OPACITY_N];

  float vvGetOpacity(vec4 featureAttribute, float values[VV_OPACITY_N], float opacities[VV_OPACITY_N]) {
    float value = featureAttribute.z;
    if (value <= values[0]) {
      return opacities[0];
    }

    for (int i = 1; i < VV_OPACITY_N; ++i) {
      if (values[i] >= value) {
        float f = (value - values[i-1]) / (values[i] - values[i-1]);
        return mix(opacities[i-1], opacities[i], f);
      }
    }

    return opacities[VV_OPACITY_N - 1];
  }
#endif

