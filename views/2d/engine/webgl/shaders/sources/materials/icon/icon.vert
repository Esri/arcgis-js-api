precision mediump float;

#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/vv.glsl>
#include <materials/effects.glsl>

attribute vec2 a_pos;
attribute vec4 a_vertexOffsetAndTex;
attribute vec4 a_id;                   // objectId in RGBA components
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute float a_visible;             // one byte controlling the vertex visibility (separate buffer)

#ifdef VV
attribute highp vec4 a_vv;
#endif

uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform vec2 u_mosaicSize;            // mosaic size in pixels

varying lowp vec4 v_color;
varying mediump vec2 v_tex;           // texture coordinates used to sample the sprite atlas
varying lowp float v_transparency;    // the calculated transparency to be applied by the fragment shader.
varying mediump vec2 v_size;          // icon size in px
varying float v_visible;

#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying float v_overridingOutlineColor;
#endif

#ifdef HIGHLIGHT
varying float v_isThinGeometry;
#endif // HIGHLIGHT

#ifdef ID
varying highp vec4 v_id;
#endif

vec2 getMarkerSize(inout vec2 offset, in vec2 baseSize, in float vvSize) {
  float f = getVVSize(baseSize.y, vvSize);
  vec2 size = vec2(f * baseSize.x / baseSize.y, f);

  offset *= (size / baseSize);
  return size;
}

void main()
{
  vec2 offset = a_vertexOffsetAndTex.xy;
  vec2 a_tex = a_vertexOffsetAndTex.zw + SIGNED_BYTE_TO_UNSIGNED;
  vec2 a_size = a_sizeAndOutlineWidth.xy;
  float a_bitset = a_sizeAndOutlineWidth.w;

  float isMapAligned = getBit(a_bitset, 0);
  float isColorLocked = getBit(a_bitset, 1);
  float isThinGeometry = getBit(a_bitset, 2);
  mat3 offsetMat3 = isMapAligned * u_displayViewMat3 + (1.0 - isMapAligned) * u_displayMat3;

  v_transparency = 1.0;
  v_color = a_color;
  v_size = a_size;
  v_tex = a_tex / u_mosaicSize; // texture coords and transparency
  v_visible = a_visible;

#ifdef ID
  v_id = a_id;
#endif

#ifdef VV_OPACITY
  v_transparency = getVVOpacity(a_vv.z);
#endif

#ifdef VV_COLOR
  v_color = getVVColor(a_vv.y, a_color, isColorLocked);
#endif // VV_COLOR

#ifdef VV_SIZE
  v_size = getMarkerSize(offset, a_size, a_vv.x);
#endif

#ifdef VV_ROTATION
  offset = (getVVRotationMat3(a_vv.w) * vec3(offset, 0.0)).xy;
#endif

#ifdef SDF
  #ifdef VV_COLOR
    // this is true only if we have SDF and color VV
    v_overridingOutlineColor = isThinGeometry;
  #else
    v_overridingOutlineColor = 0.0;
  #endif

  offset *= 2.0;
  v_outlineColor = getEffectColor(a_outlineColor, a_visible);
  // YF: in practice v_size.x and v_size.y are identical since we're mostly dealing with sms
  v_outlineWidth = min(a_sizeAndOutlineWidth.z, max(v_size.x - 0.99, 0.0));
#endif

#ifdef HIGHLIGHT
  v_isThinGeometry = isThinGeometry;
#endif

  vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + offsetMat3 * vec3(offset, 0.0);

  applyFilter(v_color, pos, a_visible);

  gl_Position = vec4(pos, 1.0);
}
