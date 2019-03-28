precision mediump float;

#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/vv.glsl>
#include <materials/effects.glsl>

attribute vec2 a_pos;
attribute vec4 a_id;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute float  a_visible;                // a one byte controlling the visibility of the vertex (separate buffer)

#ifdef VV
attribute highp vec3 a_vv;
#endif

uniform highp mat3 u_dvsMat3;              // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_displayViewMat3;     // premultiplies DisplayMat3 * ViewMat3
uniform mediump float u_zoomFactor;
uniform mediump float u_antialiasing;

varying mediump vec2 v_normal;             // interpolated normal to the line. packed into the two LSBs of the vertex coordinate
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying lowp float v_transparency;

#ifdef ID
varying highp vec4 v_id;
#endif

#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;

varying mediump vec4 v_tlbr;               // normalized pattern coordinates [0, 1]
varying mediump vec2 v_patternSize;
#endif

#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance; // we need to accumulated distance only if it is a pattern or an SDF line
#endif

#if defined(SDF) && !defined(HIGHLIGHT) // When we render the highlight, we want to treat the line as if it was solid
const float widthFactor = 2.0;
#else
const float widthFactor = 1.0;
#endif

const float scale = 1.0 / 31.0;

void main()
{
  float a_bitset = a_segmentDirection.w;

  float isColorLocked = getBit(a_bitset, 0);
  float lineHalfWidth = a_accumulatedDistanceAndHalfWidth.y * scale;

  v_transparency = 1.0;
  v_color = a_color;
  v_normal = a_offsetAndNormal.zw * scale;

#ifdef ID
  v_id = a_id;
#endif

#ifdef VV_OPACITY
  v_transparency = getVVOpacity(a_vv.z);
#endif

#ifdef VV_COLOR
  v_color = getVVColor(a_vv.y, v_color, isColorLocked);
#endif

#ifdef VV_SIZE
  lineHalfWidth = 0.5 * getVVSize(2.0 * lineHalfWidth, a_vv.x);
#endif

#ifdef PATTERN
  v_tlbr = a_tlbr / u_mosaicSize.xyxy;
  v_patternSize = vec2(a_tlbr.z - a_tlbr.x, a_tlbr.w - a_tlbr.y);
#endif

  // make sure to clip the vertices in case that the width of the line is 0 (or negative)
  float z = 2.0 * step(lineHalfWidth, 0.0);

  // add an antialiasing distance. We use 0.2 rather than 0.5 in order to match the SVG renderer
  // also limit the total line width to 1.3 pixels. Below this value lines don't look good compared
  // to the SVG renderer
  v_lineHalfWidth = max(lineHalfWidth, 0.45) + 0.2 * u_antialiasing;


#ifdef HIGHLIGHT
  v_lineHalfWidth = max(v_lineHalfWidth, 2.0);
#endif

  // for now assume that a thin line is a line which is under 2 pixels (1 pixels on either sides
  // of the centerline) in practice, a thin line is a line who's half width vary from 0.45px to
  // the value of thinLineHalfWidth, as the value is claped in line 221 above
  mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(v_lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);

  // calculate the relative distance from the centerline to the edge of the line. Since offset is
  // given in integers (for the sake of using less attribute memory, we need to scale it back to
  // the original range of ~ [0, 1]) in a case of a thin line we move each vertex twice as far
  mediump vec2 dist = thinLineFactor * widthFactor * v_lineHalfWidth * a_offsetAndNormal.xy * scale;

#if defined(PATTERN) || defined(SDF)
  v_accumulatedDistance = a_accumulatedDistanceAndHalfWidth.x + dot(scale * a_segmentDirection.xy, dist / u_zoomFactor);
#endif

  vec3 offset = u_displayViewMat3 * vec3(dist, 0.0);
  vec3 v_pos = u_dvsMat3 * vec3(a_pos.xy, 1.0) + offset;
  vec3 pos = vec3(v_pos.xy, z);

  applyFilter(v_color, pos, a_visible);

  gl_Position = vec4(pos, 1.0);
}
