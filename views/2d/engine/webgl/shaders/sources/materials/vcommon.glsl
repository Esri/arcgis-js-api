
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

void loadVisualVariableData(inout vec4 target, int index) {

#ifdef OES_TEXTURE_FLOAT
  target.rgba = getAttributeData1(a_id);
#else
  vec4 data0 = getAttributeData1(a_id);
  vec4 data1 = getAttributeData2(a_id);

  target.r = u88VVToFloat(data0.rg * 255.0); 
  target.g = u88VVToFloat(data0.ba * 255.0); 
  target.b = u88VVToFloat(data1.rg * 255.0);
  target.a = u88VVToFloat(data1.ba * 255.0);
#endif
}

#ifdef VV
  #define INIT loadVisualVariableData(VV_ADATA, ATTR_DATA_VV)
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
  return getVVRotationMat3(VV_ADATA[ATTR_VV_ROTATION]);
#else
  return mat3(1.0); 
#endif
}

float getFilterFlags() {
  return getAttributeData0(a_id).x * 255.0;
}

float getMinZoom() {
  vec4 data0 = getAttributeData0(a_id) * 255.0;

  return data0.g;
}

mat3 getMatrix(float isMapAligned) {
  return isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;
}
