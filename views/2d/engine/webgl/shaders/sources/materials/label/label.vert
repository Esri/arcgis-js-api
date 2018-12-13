precision mediump float;

attribute vec2 a_pos;                  // 2 * 2 (2 x signed 16)
attribute vec4 a_color;                // 4 (4 x unsigned byte)
attribute vec2 a_vertexOffset;         // 2 * 2 // (2 x signed 16) offset from the anchor point of the string
attribute vec4 a_texAndSize;          // 4 (4 x unsigned byte) texture coordinatesm and font size. w is for the halo size
attribute vec4 a_refSymbolAndPlacementOffset; // 4 (4 x unsigned byte) the offset of the reference symbol of the feature (x,y) and the placement offset (z, w) all given in pixels
attribute float a_vvSize;

attribute lowp float  a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)

attribute mediump vec2 a_visibilityRange; // 2 x unsigned byte;

// T: TileCoords -> DisplayCoords
// Premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;


uniform float u_mapRotation;
uniform float u_mapAligned;

uniform vec2 u_mosaicSize;
uniform float u_pixelRatio;

// the curent zoom
uniform mediump float u_zoomLevel; // the current zoom level X 10

varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;

// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture
varying mediump vec2 v_tex;

#ifdef ID
uniform mediump float u_fadeStep;
varying mediump float v_fadeStep;
#else
varying mediump vec4 v_color;
#endif // ID

// the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values
// by 16 and then at the shader devide by the same number
const float offsetPrecision = 1.0 / 8.0;
const float outlineScale = 1.0 / 5.0;
const float sdfFontSize = 24.0;

// maximum SDF distance of 8 pixels represent the distance values that range from -2 inside the geometry to 6 on the outside.
// 6 is actually the maximum distance outside the glyph, therefore it is the limitation of the halo which is 1/4 of the geometry size.
const float maxSdfDistance = 8.0;

const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float PLACEMENT_PADDING = 8.0;

#include <materials/icon/vvUniforms.glsl>
#include <materials/icon/vvFunctions.glsl>

void main()
{
  float refSymbolSize = a_refSymbolAndPlacementOffset.y;
    
#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

  #ifdef VV_SIZE_MIN_MAX_VALUE
    // vv size override the original symbol's size
    float h = getVVMinMaxSize(a_vvSize, refSymbolSize);
  #endif // VV_SIZE_MIN_MAX_VALUE

  #ifdef VV_SIZE_SCALE_STOPS
    float h = u_vvSizeScaleStopsValue;
  #endif // VV_SIZE_SCALE_STOPS

  #ifdef VV_SIZE_FIELD_STOPS
    float h = getVVStopsSize(a_vvSize, refSymbolSize);
  #endif // VV_SIZE_FIELD_STOPS

  #ifdef VV_SIZE_UNIT_VALUE
    float h = getVVUnitValue(a_vvSize, refSymbolSize);
  #endif // VV_SIZE_UNIT_VALUE
    // make sure to preserve the aspect ratio of the symbol
    float halfSize = h / 2.0;
#else
    float halfSize = refSymbolSize / 2.0;
#endif // defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)

  // make sure to clip the vertices in case that given record is marked as invisible
  float z = 2.0 * (1.0 - a_visible);
  float glyphAngle = a_refSymbolAndPlacementOffset.x * 360.0 / 254.0;
  float mapAngle = u_mapRotation * 360.0 / 254.0;
  float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
  
  // make sure range is inclusive
  z += 2.0 * (1.0 - step(a_visibilityRange.x, u_zoomLevel));
  z += 2.0 * (1.0 - step(u_zoomLevel, a_visibilityRange.y));
  z += 2.0 * u_mapAligned * step(90.0, diffAngle); 

  // encoded as dir + 1.0
  vec2 placementDir = a_refSymbolAndPlacementOffset.zw - 1.0; 
  
  // we use the list significant bit of the position in order to store the indication
  // whether the vertex is of a halow of a glyph
  mediump float halo = mod(a_pos, 2.0).x;
  vec3 pos = vec3(floor(a_pos * 0.5), 1.0);

  float fontSize = a_texAndSize.z;
  float fontScale = fontSize / sdfFontSize;

  vec2 vertexOffset = offsetPrecision * a_vertexOffset;
  vec2 placementOffset = placementDir * (halfSize + PLACEMENT_PADDING);
  vec3 glyphOffset = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
  vec3 v_pos = u_dvsMat3 * pos + glyphOffset;

  gl_Position = vec4(v_pos.xy, z, 1.0);

  v_tex = a_texAndSize.xy / u_mosaicSize;
  v_antialiasingWidth = 0.106 * sdfFontSize / fontSize / u_pixelRatio;
  // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.
  v_edgeDistanceOffset = halo * outlineScale * a_texAndSize.w / fontScale / maxSdfDistance;

#ifdef ID
  v_fadeStep = u_fadeStep;
#else
  v_color = a_color;
  // Enable this code to visualize hidden glyphs
  // float a = 1.0;
  // if (z != 0.0)  {
  //   a = 0.645;
  // }
  // v_color = vec4(a_color.rgb, a);
#endif // ID
}
