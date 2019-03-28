precision mediump float;

#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/vv.glsl>
#include <materials/effects.glsl>

attribute vec2 a_pos;                         // (2 x i16)
attribute vec4 a_color;                       // (4 x u8)
attribute vec2 a_vertexOffset;                // (2 x i16) offset from the anchor point of the string
attribute vec4 a_texAndSize;                  // (4 x u8) texture coordinatesm and font size. w is for the halo size
attribute vec4 a_refSymbolAndPlacementOffset; // (4 x u8) reference symbol offset (px) and the placement offset (px)
attribute float a_vvSize;                     // size visual variable
attribute lowp float  a_visible;              // a one byte controlling the visibility of the vertex (separate buffer)
attribute mediump vec2 a_visibilityRange;     // (2 x u8);

uniform mediump float u_zoomLevel;            // the current zoom level X 10
uniform highp mat3 u_dvsMat3;                 // premultiplies displayMat3 * viewMat3 * screenMat3
uniform highp mat3 u_displayMat3;
uniform float u_mapRotation;
uniform float u_mapAligned;
uniform vec2 u_mosaicSize;
uniform float u_pixelRatio;

varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;                   // texture coordinates used to sample the glyph atlas
varying mediump vec4 v_color;

#ifdef ID                                     // somewhat of a misnomer - id is used here for the label alpha phase
uniform mediump float u_fadeStep; 
varying mediump float v_fadeStep;
#endif

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
  float isHalo = mod(a_pos, 2.0).x; // lsb of a_pos denotes whether a vertex is part of the halo or not
  vec3 pos = vec3(floor(a_pos * 0.5), 1.0);
  vec2 placementDir = a_refSymbolAndPlacementOffset.zw - 1.0;  // encoded as dir + 1.0
  vec2 vertexOffset = a_vertexOffset * OFFSET_PRECISION;
  float refSymbolSize = a_refSymbolAndPlacementOffset.y;
  float fontSize = a_texAndSize.z;
  float z = getZ(a_visibilityRange.x, a_visibilityRange.y, a_refSymbolAndPlacementOffset.x);

  float fontScale = fontSize / SDF_FONT_SIZE;
  float halfSize = refSymbolSize / 2.0;

  v_color = a_color;
  v_tex = a_texAndSize.xy / u_mosaicSize;

#ifdef ID
  v_fadeStep = u_fadeStep;
#endif
  
#ifdef VV_SIZE // unlike with text, this is the VV_SIZE of the reference symbol, not the label itself
  halfSize = getVVSize(refSymbolSize, a_vvSize) / 2.0;
#endif
  // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.
  v_edgeDistanceOffset = isHalo * OUTLINE_SCALE * a_texAndSize.w / fontScale / MAX_SDF_DISTANCE;
  v_antialiasingWidth = 0.106 * SDF_FONT_SIZE / fontSize / u_pixelRatio;

  vec2 placementOffset = placementDir * (halfSize + PLACEMENT_PADDING);
  vec3 glyphOffset = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
  vec3 v_pos = u_dvsMat3 * pos + glyphOffset;
  
  applyFilterLabels(v_color, v_pos, a_visible);

#ifdef DEBUG
  v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);  // visualize hidden glyphs
#endif
  
  gl_Position = vec4(v_pos.xy, v_pos.z + z, 1.0);
}
