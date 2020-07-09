precision highp float;

#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>

attribute vec4 a_color;        // 4 (4 x unsigned byte)
attribute vec4 a_haloColor;    // 4 (4 x unsigned byte)
attribute vec4 a_texFontSize;  // 4 (4 x unsigned byte) texture coordinatesm and font size
attribute vec4 a_aux;          // additional information, such as a bitset on the last byte (a_aux.w)

// Different per glyph
attribute vec2 a_vertexOffset; // 2 * 2 // (2 x signed 16) offset from the anchor point of the string
attribute vec2 a_texCoords;    // 2 (2 x short) texture coordinatesm and font size

uniform float u_isHalo;

float getTextSize(inout vec2 offset, in float baseSize, in float referenceSize) {
#ifdef VV_SIZE
   float ratio = baseSize / referenceSize;
   baseSize = ratio * getSize(baseSize);
#endif
  return baseSize;
}

void main()
{
  INIT;

  float a_bitSet      = a_aux.w;
  float a_fontSize    = a_texFontSize.z;
  vec2  a_offset      = a_vertexOffset * OFFSET_PRECISION;
  vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
  float fontSize      = getTextSize(a_offset, a_fontSize, a_aux.z * a_aux.z / 256.0);
  float scaleFactor   = fontSize / a_fontSize;
  float fontScale     = fontSize / SDF_FONT_SIZE;
  vec3  offset        = getRotation() * vec3(scaleFactor * a_offset, 0.0);
  mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;

  v_color   = u_isHalo * a_haloColor + (1.0 - u_isHalo) * getColor(a_color, a_bitSet, 1);
  v_opacity = getOpacity();
  v_id      = norm(a_id);
  v_tex     = a_texCoords / u_mosaicSize;
  v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;

  v_edgeDistanceOffset = u_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
  v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;

  gl_Position =  vec4(applyFilter(v_color, v_pos, getFilterFlags()), 1.0);
}
