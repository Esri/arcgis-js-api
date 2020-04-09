precision highp float;

attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;

#include <materials/vcommon.glsl>
#include <materials/line/common.glsl>


const float SCALE = 1.0 / 31.0;
const float WIDTH_SCALE = 1.0 / 1024.0;


float getBaseLineHalfWidth(in float in_lineHalfWidth) {
#ifdef VV_SIZE
  // when we render cim symbols we need to be able to scale in a case of a multipart line symbol
  float referenceHalfWidth = a_aux.x * WIDTH_SCALE;
  float lineWidth = 2.0 * in_lineHalfWidth;

  return 0.5 * (in_lineHalfWidth / referenceHalfWidth) * getSize(lineWidth);
#else
  return in_lineHalfWidth;
#endif
}

float getLineHalfWidth(in float baseWidth, in float aa) {
  // add an antialiasing distance. We use 0.2 rather than 0.5 in order to match the SVG renderer
  // also limit the total line width to 1.3 pixels. Below this value lines don't look good compared
  // to the SVG renderer
  float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
  halfWidth = max(halfWidth, 2.0);
#endif
  return halfWidth;
}

vec2 getDist(in vec2 offset, in float halfWidth) {
  // for now assume that a thin line is a line which is under 2 pixels (1 pixels on either sides
  // of the centerline) in practice, a thin line is a line who's half width vary from 0.45px to
  // the value of thinLineHalfWidth, as the value is claped in line 221 above
  float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);

#if defined(SDF) && !defined(HIGHLIGHT)
  // When we render the highlight, we want to treat the line as if it was solid
  thinLineFactor *= 2.0;
#endif

  // calculate the relative distance from the centerline to the edge of the line. Since offset is
  // given in integers (for the sake of using less attribute memory, we need to scale it back to
  // the original range of ~ [0, 1]) in a case of a thin line we move each vertex twice as far
  return thinLineFactor * halfWidth * offset * SCALE;
}


void main()
{
  INIT;

  float a_bitSet          = a_segmentDirection.w;
  float a_accumulatedDist = a_accumulatedDistanceAndHalfWidth.x;
  float a_lineHalfWidth   = a_accumulatedDistanceAndHalfWidth.y * WIDTH_SCALE;
  float aa                = 0.5 * u_antialiasing;
  vec2  a_offset          = a_offsetAndNormal.xy;

  float baseWidth = getBaseLineHalfWidth(a_lineHalfWidth);
  float halfWidth = getLineHalfWidth(baseWidth, aa);
  float z         = 2.0 * step(baseWidth, 0.0); // Clip if width is zero
  vec2  dist      = getDist(a_offset, halfWidth);
  vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
  vec3  pos       = u_dvsMat3 * vec3(a_pos.xy, 1.0) + offset;

  v_color         = getColor(a_color, a_bitSet, 0);
  v_opacity       = getOpacity(a_bitSet, 0);
  v_lineHalfWidth = halfWidth;
  v_id            = norm(a_id);
  v_normal        = a_offsetAndNormal.zw * SCALE;
  v_pos           = vec3(pos.xy, z);

#ifdef PATTERN
  v_tlbr          = a_tlbr / u_mosaicSize.xyxy;
  v_patternSize   = vec2(a_tlbr.z - a_tlbr.x, a_tlbr.w - a_tlbr.y);
#endif

#if defined(PATTERN) || defined(SDF)
  v_accumulatedDistance = a_accumulatedDist + dot(SCALE * a_segmentDirection.xy, dist / u_zoomFactor);
#endif

  gl_Position = vec4(applyFilter(v_color, v_pos, getFilterFlags()), 1.0);
}
