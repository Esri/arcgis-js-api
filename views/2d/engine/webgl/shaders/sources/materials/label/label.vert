precision mediump float;

attribute vec4 a_color;                       // (4 x u8)
attribute vec2 a_vertexOffset;                // (2 x i16) offset from the anchor point of the string
attribute vec4 a_texAndSize;                  // (4 x u8) tex coords and font size. w is for the halo size
attribute vec4 a_refSymbolAndPlacementOffset; // (4 x u8) reference symbol offset and the placement offset
attribute vec4 a_zoomRangeAndEmpty;

#include <materials/vcommon.glsl>
#include <materials/label/common.glsl>


float getZ(in float minZoom, in float maxZoom, in float angle) {
  float glyphAngle = angle * 360.0 / 254.0;
  float mapAngle = u_mapRotation * 360.0 / 254.0;
  float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
  float z = 0.0;

  // make sure range is inclusive
  z += 2.0 * (1.0 - step(minZoom, u_zoomLevel));
  z += 2.0 * (1.0 - step(u_zoomLevel, maxZoom));
  z += 2.0 * u_mapAligned * step(90.0, diffAngle);
  return z;
}


void main()
{
  INIT;

  float groupMinZoom    = getMinZoom();
  float glyphMinZoom    = a_zoomRangeAndEmpty.x;

  // We have both a per-label minZoom (groupMinZoom) and a per-glyph base minZoom value.
  // To get the minZoom of a vertex, we need to take the max of these two zooms (they differ
  // in the case of line labels)
  float a_minZoom       = max(groupMinZoom, glyphMinZoom);
  float a_maxZoom       = a_zoomRangeAndEmpty.y;
  vec2  a_placementDir  = a_refSymbolAndPlacementOffset.zw - 1.0;  // encoded as dir + 1.0
  float a_refSymbolSize = a_refSymbolAndPlacementOffset.y;
  float fontSize        = a_texAndSize.z;
  float isHalo          = mod(a_pos, 2.0).x; // lsb denote halo

  vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
  vec3  pos          = vec3(floor(a_pos * 0.5), 1.0);
  float z            = getZ(a_minZoom, a_maxZoom, a_refSymbolAndPlacementOffset.x);
  float fontScale    = fontSize / SDF_FONT_SIZE;
  float halfSize     = getSize(a_refSymbolSize) / 2.0;

  v_color = a_color;
  v_tex   = a_texAndSize.xy / u_mosaicSize;

#ifdef ID
  v_fadeStep = u_fadeStep;
#endif
  // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.
  v_edgeDistanceOffset = isHalo * OUTLINE_SCALE * a_texAndSize.w / fontScale / MAX_SDF_DISTANCE;
  v_antialiasingWidth  = 0.106 * SDF_FONT_SIZE / fontSize / u_pixelRatio;

  vec2 placementOffset = a_placementDir * (halfSize + PLACEMENT_PADDING);
  vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
  vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
  
  gl_Position = vec4(applyFilterLabels(v_color, v_pos, getFilterFlags()), 1.0);

#ifdef DEBUG
  v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);  // visualize hidden glyphs
#endif
}
