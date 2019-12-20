precision mediump float;

attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec4 a_bitSetAndDistRatio;

#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>

vec2 getMarkerSize(inout vec2 offset, inout vec2 baseSize, inout float outlineSize, in float referenceSize, in float bitSet) {
#ifdef VV_SIZE
  //float f = getSize(baseSize.y) / baseSize.y; // ratio by which vv resizes the marker
  //float sizeFactor = baseSize.y / referenceSize; // ratio for multilayer symbols
  float r = getSize(baseSize.y) / referenceSize;
  baseSize.xy *= r;
  offset.xy *= r;
  float scaleSymbolProportionally = getBit(bitSet, 3);
  outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
  return baseSize;
}

vec3 getOffset(in vec2 in_offset, float a_bitSet) {
  float isMapAligned = getBit(a_bitSet, 0);
  vec3  offset       = getRotation() * vec3(in_offset, 0.0);
  return getMatrix(isMapAligned) * offset;
}

void main()
{
  INIT;

  vec2  a_size   = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 256.0;
  vec2  a_offset = a_vertexOffset / 16.0;
  float a_outlineSize = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 256.0;
  float a_bitSet = a_bitSetAndDistRatio.z;

  vec2 v_size = getMarkerSize(a_offset, a_size, a_outlineSize, a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 256.0, a_bitSet);
  vec2 v_tex      = a_texCoords / u_mosaicSize; // texture coords and transparency

  // MG: We should try and unify the bitset, here isColorLocked is the second bit.
  // Somewhat ugly to have to pass the index to getColor
  v_color    = getColor(a_color, a_bitSet, 1);
  v_opacity  = getOpacity(a_bitSet, 1);
  v_id       = norm(a_id);
  v_filters  = getFilterFlags();
  v_pos      = u_dvsMat3 * vec3(a_pos, 1.0) + getOffset(a_offset, a_bitSet);
  v_sizeTex  = vec4(v_size.xy, v_tex.xy); // Pack for iPhone

#ifdef SDF
  v_isThin   = getBit(a_bitSet, 2);
  #ifdef VV_COLOR
    // this is true only if we have SDF and color VV
    v_overridingOutlineColor = v_isThin;
  #else
    v_overridingOutlineColor = 0.0;
  #endif

  v_outlineWidth = min(a_outlineSize, max(max(v_size.x, v_size.y) - 0.99, 0.0));
  v_outlineColor = getEffectColor(a_outlineColor, v_filters);
  v_distRatio = a_bitSetAndDistRatio.w / 126.0; // 126 = 64.0 (encoding) * internal sdf ratio 126/64 (texture size = 126 / geom size = 64)
#endif

  gl_Position = vec4(applyFilter(v_color, v_pos, v_filters), 1.0);
}
