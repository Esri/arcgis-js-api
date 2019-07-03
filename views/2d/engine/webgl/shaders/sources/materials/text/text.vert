precision mediump float;

#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>

attribute vec4 a_color;        // 4 (4 x unsigned byte)
attribute vec2 a_vertexOffset; // 2 * 2 // (2 x signed 16) offset from the anchor point of the string
attribute vec4 a_texFontSize;  // 4 (4 x unsigned byte) texture coordinatesm and font size
attribute vec4 a_aux;          // additional information, such as a bitset on the last byte (a_aux.w)


void main()
{
  INIT;
  
  float a_bitSet    = a_aux.w;
  float a_fontSize  = a_texFontSize.z;
  vec2  a_offset    = a_vertexOffset * OFFSET_PRECISION;
  float a_isHalo    = getBit(a_pos.x, 0);          // First bit denotes halo
  vec3  in_pos      = vec3(floor(a_pos * 0.5), 1.0); 

  float fontSize    = getSize(a_fontSize);
  float scaleFactor = fontSize / a_fontSize; 
  float fontScale   = fontSize / SDF_FONT_SIZE;
  vec3  offset      = getRotation() * vec3(scaleFactor * a_offset, 0.0); 
  
  v_color   = a_isHalo * a_color + (1.0 - a_isHalo) * getColor(a_color, a_bitSet, 0);
  v_opacity = getOpacity(a_bitSet, 0);
  v_id      = norm(a_id);
  v_tex     = a_texFontSize.xy / u_mosaicSize;
  v_pos     = u_dvsMat3 * in_pos + u_displayMat3 * offset;

  v_edgeDistanceOffset = a_isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
  v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;

  gl_Position =  vec4(applyFilter(v_color, v_pos, getFilterFlags()), 1.0);
}
