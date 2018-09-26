#if defined(VV_COLOR)|| defined(VV_OPACITY)
attribute vec4 a_vv;
#endif // VV_COLOR || VV_OPACITY

#ifdef VV_COLOR
uniform float u_vvColorValues[8];
uniform vec4 u_vvColors[8];
#endif // VV_COLOR

#ifdef VV_OPACITY
uniform float u_vvOpacityValues[8];
uniform float u_vvOpacities[8];
#endif // VV_OPACITY
