precision mediump float;

attribute vec2 a_pos;                  // 2 * 2 (2 x signed 16)
attribute vec4 a_color;                // 4 (4 x unsigned byte)
attribute vec2 a_vertexOffset;         // 2 * 2 // (2 x signed 16) offset from the anchor point of the string
attribute vec4 a_texAndSize;          // 4 (4 x unsigned byte) texture coordinatesm and font size. w is for the halo size
attribute vec4 a_refSymbolAndPlacementOffset; // 4 (4 x unsigned byte) the offset of the reference symbol of the feature (x,y) and the placement offset (z, w) all given in pixels

attribute lowp float  a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)

attribute mediump vec2 a_visibilityRange; // 2 x unsigned byte;

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

// the curent zoom
uniform mediump float u_zoomLevel; // the current zoom level X 10
uniform lowp float u_mapRotation;
uniform lowp float u_mapAligned;

varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;

// the interpolated texture coordinate value to be used by the fragment shader in order to sample the sprite texture
varying mediump vec2 v_tex;
// the calculated transparency to be applied by the fragment shader. It is incorporating both the fade as well as the
// opacity of the layer given by the painter
varying lowp float v_transparency;

#ifdef ID
uniform mediump float u_fadeStep;
varying mediump float v_fadeStep;
#else
varying mediump vec4 v_color;
#endif // ID

// the vertex offsets are given in integers, therefore in order to maintain a reasonable precission we multiply the values
// by 16 and then at the shader devide by the same number
const float offsetPrecision = 1.0 / 8.0;
const float outlineScale = 1.0 / 10.0;
const float sdfFontSize = 24.0;

// maximum SDF distance of 8 pixels represent the distance values that range from -2 inside the geometry to 6 on the outside.
// 6 is actually the maximum distance outside the glyph, therefore it is the limitation of the halo which is 1/4 of the geometry size.
const float maxSdfDistance = 8.0;

const float C_DEG_TO_RAD = 3.14159265359 / 180.0;

void main()
{
  // make sure to clip the vertices in case that given record is marked as invisible
  float z = 2.0 * (1.0 - a_visible);

  // clip the vertex if we are beyond the visibility range of the vertex
  // please note: min value of 0 is regarded infinity. max value of 255 is regarded infinity
  z += 1.0 + sign(a_visibilityRange.x - u_zoomLevel);
  z += 1.0 + sign(u_zoomLevel - a_visibilityRange.y);

  // we use the list significant bit of the position in order to store the indication whethe the vertex is of a halow of a glyph
  mediump float halo = mod(a_pos, 2.0).x;

  float fontSize = a_texAndSize.z;

  float fontScale = fontSize / sdfFontSize;
  // we need to scale the extrude matrix by the font-scale in order to get the right text size
  mat4 extrudeMatrix = fontScale * u_extrudeMatrix;

  float mapRotation = u_mapAligned * C_DEG_TO_RAD * -u_mapRotation;
  float sinA = sin(mapRotation);
  float cosA = cos(mapRotation);

  mat4 mapRotationMat = mat4(cosA, sinA, 0.0, 0.0,
                            -sinA, cosA, 0.0, 0.0,
                              0.0,  0.0, 1.0, 0.0,
                              0.0,  0.0, 0.0, 1.0);

  vec4 refSymbolOffset = mapRotationMat *  vec4(a_refSymbolAndPlacementOffset.xy, 0.0, 0.0);

  gl_Position = vec4(u_normalized_origin, 0.0, 0.0) +
                u_transformMatrix * vec4(floor(a_pos * 0.5), z, 1.0) +
                u_extrudeMatrix * vec4(refSymbolOffset.xy + a_refSymbolAndPlacementOffset.zw, 0.0, 0.0) +
                extrudeMatrix * vec4(offsetPrecision * a_vertexOffset, 0.0, 0.0);

  v_tex = a_texAndSize.xy / u_mosaicSize;
  v_antialiasingWidth = 0.106 * sdfFontSize / fontSize / u_pixelRatio;
  // if halo.x is zero (not a halo) v_edgeDistanceOffset will end up being zero as well.
  v_edgeDistanceOffset = halo * outlineScale * a_texAndSize.w / fontScale / maxSdfDistance;

  v_transparency = u_opacity;

#ifdef ID
  v_fadeStep = u_fadeStep;
#else
  v_color = a_color;
#endif // ID
}
