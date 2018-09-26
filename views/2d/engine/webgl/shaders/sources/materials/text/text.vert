precision mediump float;

const float C_DEG_TO_RAD = 3.14159265359 / 180.0;

attribute vec2 a_pos;           // 2 * 2 (2 x signed 16)
attribute vec4 a_id;            // 4 (4 x unsigned byte)
attribute vec4 a_color;         // 4 (4 x unsigned byte)
attribute vec2 a_vertexOffset; // 2 * 2 // (2 x signed 16) offset from the anchor point of the string
attribute vec4 a_texFontSize; // 4 (4 x unsigned byte) texture coordinatesm and font size

attribute lowp float  a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)

// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate
// relative to the tile's upper left corner
// the extrusion vector.
uniform highp mat4 u_transformMatrix;
// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation
uniform highp mat4 u_extrudeMatrix;
// u_normalized_origin is the tile's upper left corner given in normalized coordinates
uniform highp vec2 u_normalized_origin;
// the size of the mosaic given in pixels
uniform vec2 u_mosaicSize;
uniform float u_pixelRatio;

// the opacity of the layer
uniform mediump float u_opacity;

varying mediump vec4 v_color;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;

// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture
varying mediump vec2 v_tex;
// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_transparency;

// the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values
// by 16 and then at the shader devide by the same number
const float offsetPrecision = 1.0 / 8.0;
const float outlineScale = 1.0 / 10.0;
const float sdfFontSize = 24.0;

// maximum SDF distance of 8 pixels represent the distance values that range from -2 inside the geometry to 6 on the outside.
// 6 is actually the maximum distance outside the glyph, therefore it is the limitation of the halo which is 1/4 of the geometry size.
const float maxSdfDistance = 8.0;

#ifdef ID
varying highp vec4 v_id;
#endif // ID

// import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)
#include <materials/text/vvUniforms.glsl>
#include <materials/text/vvFunctions.glsl>

void main()
{
  // make sure to clip the vertices in case that given record is marked as invisible
  float z = 2.0 * (1.0 - a_visible);

  // we use the list significant bit of the position in order to store the indication whethe the vertex is of a halow of a glyph
  mediump float halo = mod(a_pos, 2.0).x;

#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

#ifdef VV_SIZE_MIN_MAX_VALUE
  // vv size override the original symbol's size
  vec2 size = vec2(getVVMinMaxSize(a_vv.x, a_texFontSize.z));
#endif // VV_SIZE_MIN_MAX_VALUE

#ifdef VV_SIZE_SCALE_STOPS
  vec2 size = vec2(u_vvSizeScaleStopsValue);
#endif // VV_SIZE_SCALE_STOPS

#ifdef VV_SIZE_FIELD_STOPS
  vec2 size = vec2(getVVStopsSize(a_vv.x, a_texFontSize.z));
#endif // VV_SIZE_FIELD_STOPS

#ifdef VV_SIZE_UNIT_VALUE
  vec2 size = vec2(getVVUnitValue(a_vv.x, a_texFontSize.z));
#endif // VV_SIZE_UNIT_VALUE

  float fontSize = size.x;
#else // this generic case, no VV
  float fontSize = a_texFontSize.z;
#endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

  float fontScale = fontSize / sdfFontSize;
  // we need to scale the extrude matrix by the font-scale in order to get the right text size
  mat4 extrudeMatrix = fontScale * u_extrudeMatrix;

  // If the label rotates with the map, and if the rotated label is upside down, hide it
  //gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) + extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);

#ifdef VV_ROTATION
  gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) + extrudeMatrix * getVVRotation(a_vv.w) * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);
#else
  gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) + extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);
#endif // VV_ROTATION

  v_tex = a_texFontSize.xy / u_mosaicSize;
  v_antialiasingWidth = 0.105 * sdfFontSize / fontSize / u_pixelRatio;
  // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.
  v_edgeDistanceOffset = halo * outlineScale * a_texFontSize.w / fontScale / maxSdfDistance;

#ifdef VV_OPACITY
  v_transparency = getVVOpacity(a_vv.z);
#else
  v_transparency = u_opacity;
#endif // VV_OPACITY

#ifdef VV_COLOR
  // we don't want to override the halo color
  v_color = halo * a_color + (1.0 - halo) * getVVColor(a_vv.y, a_color);
#else
  v_color = a_color;
#endif // VV_COLOR

#ifdef ID
  v_id = a_id;
#endif // ID
}
