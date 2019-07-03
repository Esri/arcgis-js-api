#include <util/doublePrecision.glsl>

// The following attribute contains the feature values which are
// driving the visual variables for size, color and opacity.
// more specifically we have:
// featureValue.x -> size
// featureValue.y -> color
// featureValue.z -> opacity
// featureValue.w -> path vertex type: 0=join 1=cap
attribute vec4 featureValue;

bool isCapVertex() {
  return featureValue.w == 1.0;
}

// ====================================================================
//
// getSize 
//
// ====================================================================
uniform vec3 size;
#if defined(VV_SIZE)
  uniform vec3 vvSizeMinSize;
  uniform vec3 vvSizeMaxSize;
  uniform vec3 vvSizeOffset;
  uniform vec3 vvSizeFactor;

  vec3 getSize() {
    float value = featureValue.x;
    // NB: swizzle -> the profile y axis is driven by the upvector (z-axis)
    return size*clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xzy;
  }
#else
  vec3 getSize(){
    return size;
  }
#endif

// ====================================================================
//
// getOpacity
//
// ====================================================================
#ifdef VV_OPACITY
  #define VV_OPACITY_N 8
  uniform float vvOpacityValues[VV_OPACITY_N];
  uniform float vvOpacityOpacities[VV_OPACITY_N];

  vec4 applyOpacity(vec4 color) {
    float value = featureValue.z;
    if (value <= vvOpacityValues[0]) {
      return vec4( color.xyz, vvOpacityOpacities[0]);
    }

    for (int i = 1; i < VV_OPACITY_N; ++i) {
      if (vvOpacityValues[i] >= value) {
        float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
        return vec4( color.xyz, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
      }
    }

    return vec4( color.xyz, vvOpacityOpacities[VV_OPACITY_N - 1]);
  }
#else
  vec4 applyOpacity(vec4 color){
    return color;
  }
#endif

// ====================================================================
//
// getColor 
//
// ====================================================================
#ifdef VV_COLOR
  #define VV_COLOR_N 8
  uniform float vvColorValues[VV_COLOR_N];
  uniform vec4 vvColorColors[VV_COLOR_N];

  vec4 getColor() {
    float value = featureValue.y;
    if (value <= vvColorValues[0]) {
      return applyOpacity(vvColorColors[0]);
    }

    for (int i = 1; i < VV_COLOR_N; ++i) {
      if (vvColorValues[i] >= value) {
        float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
        return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
      }
    }

    return applyOpacity(vvColorColors[VV_COLOR_N - 1]);
  }
#else
  vec4 getColor(){
    return applyOpacity(vec4(1, 1, 1, 1));
  }
#endif




// ====================================================================
//
// calculateVPos
//
// ====================================================================

vec3 calculateVPos() {
  vec3 size = getSize();
  vec3 origin = position;
  vec3 profileRightAxis = pathGeometryInfo[0].xyz;
  vec3 profileUpAxis = pathGeometryInfo[1].xyz;
  vec3 offset = profileRightAxis * size.x + profileUpAxis * size.y;


  if(!isCapVertex()) {
    // profiles are stretched according to their angle with the previous
    // path segment in order to retain the correct thickness of the
    // geometry along path segments.
    // The following code is just there to prevent the stretching from
    // going too far with very sharp angles.
    vec3 rotationRightAxis = pathGeometryInfo[2].xyz;
    float maxDistance = length(rotationRightAxis);
    rotationRightAxis = normalize(rotationRightAxis);

    // decompose vertex into rotationRight and rotationUp
    float rx = dot(offset, rotationRightAxis);
    // check if rotation right distance exceeds maxDistance value
    if( abs(rx) > maxDistance ) {
      // if it does, recompose offset from old rotationUp and length adjusted rotationRight
      vec3 rotationUpAxis = offset - rx*rotationRightAxis;
      offset = rotationRightAxis * maxDistance * sign(rx) + rotationUpAxis;
    }

  } else {
    vec3 profilePlaneOffset = pathGeometryInfo[2].xyz*size.x;
    offset += profilePlaneOffset;
  }

  vec4 localPosition = vec4(origin + offset, 1.0);
  return (model * localPosition).xyz;
}

