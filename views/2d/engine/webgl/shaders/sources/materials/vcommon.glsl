
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/effects.glsl>

attribute vec2 a_pos;
attribute highp vec4 a_id;                   // objectId in RGBA components

uniform highp mat3 u_dvsMat3;      // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform highp float u_pixelRatio;
uniform mediump float u_zoomFactor;
uniform mediump float u_antialiasing;

// Buffer for storing VisualVariable data. Making this a global
// allows us to make accessing VV data generic (loading strategy changes
// depending on whether target device supports OES_TEXTURE_FLOAT)
vec4 VV_ADATA = vec4(0.0);

void loadVisualVariableData(inout vec4 target) {

#ifdef OES_TEXTURE_FLOAT
  target.rgba = getAttributeData2(a_id);
#else
  vec4 data0 = getAttributeData2(a_id);
  vec4 data1 = getAttributeData3(a_id);

  target.r = u88VVToFloat(data0.rg * 255.0); 
  target.g = u88VVToFloat(data0.ba * 255.0); 
  target.b = u88VVToFloat(data1.rg * 255.0);
  target.a = u88VVToFloat(data1.ba * 255.0);
#endif
}

#ifdef VV
  #define INIT loadVisualVariableData(VV_ADATA)
#else
  #define INIT
#endif 


vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
  float isColorLocked   = getBit(a_bitSet, index);
  return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
  return a_color;
#endif
}

float getOpacity(in float a_bitSet, in int index) {
#ifdef VV_OPACITY
  float isOpacityLocked = getBit(a_bitSet, index); 
  return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY], isOpacityLocked);
#else
  return 1.0;
#endif
}


float getSize(in float in_size) {
#ifdef VV_SIZE
  return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE]);
#else
  return in_size;
#endif
}

mat3 getRotation() {
#ifdef VV_ROTATION
  // MG: On Intel 620/630 driver version 21.xx.xx.xx, 23.xx.xx.xx, and 24.xx.xx.xx
  // We get some very strange behavior if we don't normalize the angle before
  // computing our rotation matrix (26.xx.xx.xx works fine). Some features dissapear
  // and the rotation is very wrong. Possibly something overflows internally in these cases.
  // Would be good to test sin / cos with very large inputs and see what happens
  return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
  return mat3(1.0); 
#endif
}

float getFilterFlags() {

#ifdef IGNORES_SAMPLER_PRECISION
  // MG: Texture values on some devices (see Intel HD 3000) seem to always be
  // low precision regardless of qualifiers. This appears to be a driver bug
  // as the OpenGL ES spec requires that sampler precision drive the precision
  // of texture2D <https://www.khronos.org/files/opengles_shading_language.pdf>.
  // To prevent "hard" failures (e.g. visibility) we take the ceil of the result.
  // This is needed because we treat the filterFlags as bit flags
  return ceil(getAttributeData0(a_id).x * 255.0); 
#else
  return getAttributeData0(a_id).x * 255.0; 
#endif
}

vec4 getAnimationState() {
  return getAttributeData1(a_id);
}

float getMinZoom() {
  vec4 data0 = getAttributeData0(a_id) * 255.0;

  return data0.g;
}

mat3 getMatrix(float isMapAligned) {
  return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;
}
