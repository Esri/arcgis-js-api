precision highp float;

#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>

attribute vec4 a_color;                       // (4 x u8)
attribute vec4 a_haloColor;                   // (4 x u8)
attribute vec4 a_texAndSize;                  // (4 x u8) tex coords and font size. w is for the halo size
attribute vec4 a_refSymbolAndPlacementOffset; // (4 x u8) reference symbol offset and the placement offset
attribute vec4 a_glyphData;                   // (3 x u8) the glyph's minZoom, maxZoom, and angle

// Different per glyph
attribute vec2 a_vertexOffset;                // 2 * 2 // (2 x signed 16) offset from the anchor point of the string
attribute vec2 a_texCoords;                   // 4 (2 x short) texture coordinates

uniform float u_isHalo;

uniform float u_zoomLevel;                    // the current zoom level X 10
uniform float u_mapRotation;
uniform float u_mapAligned;


float getZ(in float minZoom, in float maxZoom, in float angle) {
  float glyphAngle = angle * 360.0 / 254.0;
  float mapAngle = u_mapRotation * 360.0 / 254.0;
  float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
  float z = 0.0;

  // MG: Gotcha! u_mapAligned indicates a line label whose glyphs have a hardcoded minZoom value.
  // We only clip in the case of lines labels as we otherwise fade
  z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_zoomLevel))); 
  z += u_mapAligned * 2.0 * step(90.0, diffAngle);

  z += 2.0 * (1.0 - step(u_zoomLevel, maxZoom));
  return z;
}


void main()
{
  INIT;
  
  float groupMinZoom    = getMinZoom();
  float glyphMinZoom    = a_glyphData.x;
  float glyphMaxZoom    = a_glyphData.y;
  float glyphAngle      = a_glyphData.z;

  // We have both a per-label minZoom (groupMinZoom) and a per-glyph base minZoom value.
  // To get the minZoom of a vertex, we need to take the max of these two zooms (they differ
  // in the case of line labels)
  float a_minZoom          = max(groupMinZoom, glyphMinZoom);
  float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING; // .25px precision
  vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
  float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
  float fontSize           = a_texAndSize.z;
  float haloSize           = a_texAndSize.w * OUTLINE_SCALE;

  vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
  vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
  float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
  float fontScale    = fontSize / SDF_FONT_SIZE;
  float halfSize     = getSize(a_refSymbolSize) / 2.0;
  float animation    = pow(getAnimationState(), vec4(2.0)).r;

  v_color     = animation * ((1.0 - u_isHalo) * a_color + (u_isHalo * a_haloColor));
  v_opacity   = 1.0;
  v_tex       = a_texCoords / u_mosaicSize;

  // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.
  v_edgeDistanceOffset = u_isHalo * haloSize / fontScale / MAX_SDF_DISTANCE;
  v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;

  vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
  vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
  vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);

  gl_Position = vec4(applyFilterLabels(v_color, v_pos, getFilterFlags()), 1.0);

#ifdef DEBUG
  v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);  // visualize hidden glyphs
#endif
}
