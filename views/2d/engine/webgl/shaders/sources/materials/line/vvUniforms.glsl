#if defined(VV_COLOR) || defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE) || defined(VV_OPACITY)
attribute highp vec3 a_vv;
#endif // VV_COLOR || VV_SIZE_MIN_MAX_VALUE || VV_SIZE_SCALE_STOPS || VV_SIZE_FIELD_STOPS || VV_SIZE_UNIT_VALUE || VV_OPACITY

#ifdef VV_COLOR
uniform highp float u_vvColorValues[8];
uniform vec4 u_vvColors[8];
#endif // VV_COLOR

#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 u_vvSizeMinMaxValue;
#endif // VV_SIZE_MIN_MAX_VALUE

#ifdef VV_SIZE_SCALE_STOPS
uniform highp float u_vvSizeScaleStopsValue;
#endif

#ifdef VV_SIZE_FIELD_STOPS
uniform highp float u_vvSizeFieldStopsValues[6];
uniform float u_vvSizeFieldStopsSizes[6];
#endif // VV_SIZE_FIELD_STOPS

#ifdef VV_SIZE_UNIT_VALUE
uniform float u_vvSizeUnitValueWorldToPixelsRatio;
#endif // VV_SIZE_UNIT_VALUE

#ifdef VV_OPACITY
uniform highp float u_vvOpacityValues[8];
uniform float u_vvOpacities[8];
#endif // VV_OPACITY
