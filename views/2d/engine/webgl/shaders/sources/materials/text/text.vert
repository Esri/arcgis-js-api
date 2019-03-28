precision mediump float;

#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/vv.glsl>
#include <materials/effects.glsl>

attribute vec2 a_pos;          // 2 * 2 (2 x signed 16)
attribute vec4 a_id;           // 4 (4 x unsigned byte)
attribute vec4 a_color;        // 4 (4 x unsigned byte)
attribute vec2 a_vertexOffset; // 2 * 2 // (2 x signed 16) offset from the anchor point of the string
attribute vec4 a_texFontSize;  // 4 (4 x unsigned byte) texture coordinatesm and font size
attribute vec4 a_aux;          // hold onto additional information such as a bitset on the last byte (a_aux.w)
attribute float a_visible;     // a one byte controlling the visibility of the vertex (a separate visibility buffer)

#ifdef VV
attribute highp vec4 a_vv;
#endif

uniform vec2 u_mosaicSize;
uniform float u_pixelRatio;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3; // Premultiplies DisplayMat3 * ViewMat3 * ScreenMat3

varying mediump vec4 v_color;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;        // texture coordinates used to sample the glyph atlas
varying lowp float v_transparency; // the calculated transparency to be applied by the fragment shader. 

#ifdef ID
varying highp vec4 v_id;
#endif // ID

void main()
{
  float a_bitset = a_aux.w;

  float isColorLocked = getBit(a_bitset, 0);
  float isHalo = getBit(a_pos.x, 0);   // The lsb of pos denotes whether a vertex is part of the halo or not
  float fontSize = a_texFontSize.z;
  vec3 pos = vec3(floor(a_pos * 0.5), 1.0);
  vec3 offset = vec3(a_vertexOffset * OFFSET_PRECISION, 0.0);
  float scale = 1.0;

  v_transparency = 1.0;
  v_color = a_color;
  v_tex = a_texFontSize.xy / u_mosaicSize;

#ifdef ID
  v_id = a_id;
#endif

#ifdef VV_OPACITY
  v_transparency = getVVOpacity(a_vv.z);
#endif

#ifdef VV_COLOR
  // we don't want to override the halo color
  v_color = isHalo * a_color + (1.0 - isHalo) * getVVColor(a_vv.y, a_color, isColorLocked);
#endif

#ifdef VV_SIZE
  float f = getVVSize(a_texFontSize.z, a_vv.x);
  scale = f / fontSize; 
  fontSize = f;
  offset.xy *= scale; 
#endif
  
#ifdef VV_ROTATION
  offset = getVVRotationMat3(a_vv.w) * offset;
#endif

  vec3 v_pos = u_dvsMat3 * pos + u_displayMat3 * offset;
  float fontScale = fontSize / SDF_FONT_SIZE;

  // if isHalo is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.
  v_edgeDistanceOffset = isHalo * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
  v_antialiasingWidth = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;

  applyFilter(v_color, v_pos, a_visible);
  
  gl_Position = vec4(v_pos, 1.0);
}
