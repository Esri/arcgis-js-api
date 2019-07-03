



// ====================================================================
//
// getSize
//
// ====================================================================

uniform float symbolLineWidth;

#ifdef VV_SIZE
  attribute float sizeFeatureAttribute;
  uniform vec3 vvSizeMinSize;
  uniform vec3 vvSizeMaxSize;
  uniform vec3 vvSizeOffset;
  uniform vec3 vvSizeFactor;

  float getSize() {
    float value = sizeFeatureAttribute;
    return symbolLineWidth * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
  }
#else
  attribute float size;
  float getSize(){
    return symbolLineWidth * size;
  }
#endif



// ====================================================================
//
// getOpacity
//
// ====================================================================
#ifdef VV_OPACITY
  attribute float opacityFeatureAttribute;
  #define VV_OPACITY_N 8
  uniform float vvOpacityValues[VV_OPACITY_N];
  uniform float vvOpacityOpacities[VV_OPACITY_N];

  float interpolateOpacity( float value ){
    if (value <= vvOpacityValues[0]) {
      return vvOpacityOpacities[0];
    }

    for (int i = 1; i < VV_OPACITY_N; ++i) {
      if (vvOpacityValues[i] >= value) {
        float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
        return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
      }
    }

    return vvOpacityOpacities[VV_OPACITY_N - 1];
  }

  vec4 applyOpacity( vec4 color ){
    return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
  }
#else
  // no visual variable
  // NB: non fastupdate driven opacity is encoded in the color.a channel already
  vec4 applyOpacity( vec4 color ){
    return color;
  }
#endif



// ====================================================================
//
// getColor
//
// ====================================================================

#ifdef VV_COLOR
  attribute float colorFeatureAttribute;
  #define VV_COLOR_N 8
  uniform float vvColorValues[VV_COLOR_N];
  uniform vec4 vvColorColors[VV_COLOR_N];

  vec4 interpolateColor( float value ) {
    if (value <= vvColorValues[0]) {
      return vvColorColors[0];
    }

    for (int i = 1; i < VV_COLOR_N; ++i) {
      if (vvColorValues[i] >= value) {
        float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
        return mix(vvColorColors[i-1], vvColorColors[i], f);
      }
    }

    return vvColorColors[VV_COLOR_N - 1];
  }

  vec4 getColor(){
    return applyOpacity(interpolateColor(colorFeatureAttribute));
  }
#else
  attribute vec4 color;
  vec4 getColor(){
    return applyOpacity(color);
  }
#endif
