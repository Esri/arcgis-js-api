precision mediump float;

//const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const vec2 SIGNED_BYTE_TO_UNSIGNED = vec2(128.0);

// per quad (instance) attributes (20 bytes ==> equivalent of 5 bytes per vertex)
attribute vec2 a_pos;
attribute vec4 a_vertexOffsetAndTex;
attribute vec4 a_id; // since we need to render the Id as a color we need to break it into RGBA components. so just like a color, the Id is normalized.
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;

attribute float a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)

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

// the opacity of the layer given by the painter
uniform mediump float u_opacity;

// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture
varying mediump vec2 v_tex;
// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_transparency;
// the of the icon given in pixels
varying mediump vec2 v_size;

// icon color. If is a picture-marker it is used to tint the texture color
varying lowp vec4 v_color;

#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
#endif // SDF

#ifdef ID
varying highp vec4 v_id;
#endif // ID

#ifdef HEATMAP
attribute float a_heatmapWeight;
varying mediump float v_heatmapWeight;
#endif // HEATMAP

// import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)
#include <materials/icon/vvUniforms.glsl>
#include <materials/icon/vvFunctions.glsl>

void main()
{
  vec2 a_offset = a_vertexOffsetAndTex.xy;
  vec2 a_tex = a_vertexOffsetAndTex.zw + SIGNED_BYTE_TO_UNSIGNED; // offset to change from signed to unsigned byte
  vec2 a_size = a_sizeAndOutlineWidth.xy;

  // default values (we need them for the variations to come)
  float a_angle = 0.0;
  float delta_z = 2.0 * (1.0 - a_visible);
  float depth = 0.0;
  v_transparency = 1.0;

#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

#ifdef VV_SIZE_MIN_MAX_VALUE
  // vv size override the original symbol's size
  float h = getVVMinMaxSize(a_vv.x, a_size.y);
#endif // VV_SIZE_MIN_MAX_VALUE

#ifdef VV_SIZE_SCALE_STOPS
  float h = u_vvSizeScaleStopsValue;
#endif // VV_SIZE_SCALE_STOPS

#ifdef VV_SIZE_FIELD_STOPS
  float h = getVVStopsSize(a_vv.x, a_size.y);
#endif // VV_SIZE_FIELD_STOPS

#ifdef VV_SIZE_UNIT_VALUE
  float h = getVVUnitValue(a_vv.x, a_size.y);
#endif // VV_SIZE_UNIT_VALUE

  // make sure to preserve the aspect ratio of the symbol
  vec2 size = vec2(h * a_size.x / a_size.y, h);
  vec2 offset = a_offset * size / a_size;
  v_size = size;
#else
#ifdef HEATMAP
  // reconstruct the kernel size
  a_size = 9.0 * a_size + 1.0;
#endif // HEATMAP

  vec2 offset = a_offset;
  v_size = a_size;
#endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

#ifdef SDF
  offset *= 2.0;
#endif // SDF

#ifdef VV_ROTATION
  gl_Position = vec4(u_normalized_origin, depth, 0.0) + u_transformMatrix * vec4(a_pos, delta_z, 1.0) + u_extrudeMatrix * getVVRotation(a_vv.w) * vec4(offset, 0.0, 0.0);
#else
  gl_Position = vec4(u_normalized_origin, depth, 0.0) + u_transformMatrix * vec4(a_pos, delta_z, 1.0) + u_extrudeMatrix * vec4(offset, 0.0, 0.0);
#endif // VV_ROTATION

#ifdef VV_OPACITY
  v_transparency = getVVOpacity(a_vv.z);
#else
  v_transparency = u_opacity;
#endif // VV_OPACITY

#ifdef VV_COLOR
  v_color = getVVColor(a_vv.y, a_color);
#else
  v_color = a_color;
#endif // VV_COLOR

  // output the texture coordinates and the transparency
  v_tex = a_tex / u_mosaicSize;

#ifdef SDF
  v_outlineColor = a_outlineColor;
  v_outlineWidth = a_sizeAndOutlineWidth.z;
#endif // SDF

#ifdef ID
  v_id = a_id;
#endif // ID

#ifdef HEATMAP
  v_heatmapWeight = a_heatmapWeight;
#endif // HEATMAP
}
