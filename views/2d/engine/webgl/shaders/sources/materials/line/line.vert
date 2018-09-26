precision mediump float;

attribute vec2 a_pos;
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;

attribute float  a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)

// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate
// relative to the tile's upper left corner
// the extrusion vector.
uniform highp mat4 u_transformMatrix;
// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation
uniform highp mat4 u_extrudeMatrix;
// u_normalized_origin is the tile's upper left corner given in normalized coordinates
uniform highp vec2 u_normalized_origin;
uniform lowp float u_opacity; // the layer's opacity
uniform mediump float u_zoomFactor;
uniform mediump float u_antialiasing;

// the interpolated normal to the line. the information is packed into the two LSBs of the vertex coordinate
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying lowp float v_transparency;

const float scale = 1.0 / 31.0;
#ifdef SDF
const float widthFactor = 2.0;
#else
const float widthFactor = 1.0;
#endif


#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;

varying mediump vec4 v_tlbr; // normalized pattern coordinates [0, 1]
varying mediump vec2 v_patternSize;
#endif // PATTERN

// we need to accumulated distance only if it is a pattern or an SDF line
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif // PATTERN SDF

#ifdef ID
varying highp vec4 v_id;
#endif // ID

// import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)
#include <materials/line/vvUniforms.glsl>
#include <materials/line/vvFunctions.glsl>

// include the thin line parameters (thinLineHalfWidth and thinLineWidthFactor)
#include <materials/line/constants.glsl>

void main()
{
// size VV block
#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

#ifdef VV_SIZE_MIN_MAX_VALUE
  mediump float lineHalfWidth = 0.5 * getVVMinMaxSize(a_vv.x, 2.0 * a_accumulatedDistanceAndHalfWidth.y * scale);
#endif // VV_SIZE_MIN_MAX_VALUE

#ifdef VV_SIZE_SCALE_STOPS
  mediump float lineHalfWidth = 0.5 * u_vvSizeScaleStopsValue;
#endif // VV_SIZE_SCALE_STOPS

#ifdef VV_SIZE_FIELD_STOPS
  mediump float lineHalfWidth = 0.5 * getVVStopsSize(a_vv.x, 2.0 * a_accumulatedDistanceAndHalfWidth.y * scale);
#endif // VV_SIZE_FIELD_STOPS

#ifdef VV_SIZE_UNIT_VALUE
  mediump float lineHalfWidth = 0.5 * getVVUnitValue(a_vv.x, 2.0 * a_accumulatedDistanceAndHalfWidth.y * scale);
#endif // VV_SIZE_UNIT_VALUE

#else // no VV
  mediump float lineHalfWidth = a_accumulatedDistanceAndHalfWidth.y * scale;
#endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

#ifdef VV_OPACITY
v_transparency = u_opacity * getVVOpacity(a_vv.z);
#else
v_transparency = u_opacity;
#endif // VV_OPACITY

#ifdef VV_COLOR
v_color = getVVColor(a_vv.y, a_color);
#else
v_color = a_color;
#endif // VV_COLOR

  // make sure to clip the vertices in case that the width of the line is 0 (or negative), or in case that the line is not visible
  float z = 2.0 * (step(lineHalfWidth, 0.0) + (1.0 - a_visible));

  // add an antialiasing distance. We use 0.2 rather than 0.5 in order to match the SVG renderer
  // also limit the total line width to 1.3 pixels. Below this value lines don't look good compared to the SVG renderer
  lineHalfWidth = max(lineHalfWidth, 0.45) + 0.2 * u_antialiasing;

  // for now assume that a thin line is a line which is under 2 pixels (1 pixels on either sides of the centerline)
  // in practice, a thin line is a line who's half width vary from 0.45px to the value of thinLineHalfWidth, as the value
  // is claped in line 221 above
  mediump float thinLineFactor = max(thinLineWidthFactor * step(lineHalfWidth, thinLineHalfWidth), 1.0);

  v_lineHalfWidth = lineHalfWidth;

  // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the
  // sake of using less attribute memory, we need to scale it back to the original range of ~ [0, 1])
  // in a case of a thin line we move each vertex twice as far
  mediump vec2 dist = thinLineFactor * widthFactor * lineHalfWidth * a_offsetAndNormal.xy * scale;

  // transform the vertex
  gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(a_pos, z, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);
  v_normal = a_offsetAndNormal.zw * scale;

#if defined(PATTERN) || defined(SDF)
  v_accumulatedDistance = a_accumulatedDistanceAndHalfWidth.x + dot(scale * a_segmentDirection.xy, dist / u_zoomFactor);
#endif // PATTERN || SDF

#ifdef PATTERN
v_tlbr = vec4(a_tlbr.x / u_mosaicSize.x, a_tlbr.y / u_mosaicSize.y, a_tlbr.z / u_mosaicSize.x, a_tlbr.w / u_mosaicSize.y);
v_patternSize = vec2(a_tlbr.z - a_tlbr.x, a_tlbr.w - a_tlbr.y);
#endif // PATTERN

#ifdef ID
v_id = a_id;
#endif // ID
}
