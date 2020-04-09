precision highp float;

#ifdef DOT_DENSITY
attribute float a_inverseArea;              
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec4 a_aux3 = vec4(0.0);
#else 
attribute vec4 a_color;
attribute vec4 a_tlbr;
attribute vec4 a_aux1;
attribute vec2 a_aux2;
attribute vec4 a_aux3;              // encodes a bitset (CIM) detailing vv locking
#endif

#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>

#ifdef DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
  return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif

#ifdef PATTERN
mat3 getPatternMatrix() {
  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from
  // tile coordinates to texture coordinates.
  mat3 patternMatrix = mat3(1.0);
  vec2 aux2 = (1.0 / SIGNED_BYTE_TO_UNSIGNED) * a_aux2;

  patternMatrix[0][0] = 1.0 / (u_zoomFactor * a_aux1.x * aux2.x);
  patternMatrix[1][1] = 1.0 / (u_zoomFactor * a_aux1.y * aux2.y);
  return patternMatrix; 
}
#endif

void main()
{
  INIT;

  float a_bitSet = a_aux3.a;
  
  v_color     = getColor(a_color, a_bitSet, 0);
  v_opacity   = getOpacity(a_bitSet, 1); 
  v_id        = norm(a_id);
  v_pos       = u_dvsMat3 * vec3(a_pos, 1.);
  v_flags     = getFilterFlags();
   
#ifdef PATTERN
  vec2 symbolOffset = u_zoomFactor * (a_aux1.zw - SIGNED_BYTE_TO_UNSIGNED);
  
  // calculate the texture coordinates of the current vertex. It will of course get interpolated.
  v_tileTextureCoord = (getPatternMatrix() * vec3(a_pos + symbolOffset, 1.0)).xy;
  v_tlbr = a_tlbr / u_mosaicSize.xyxy;

#elif defined(DOT_DENSITY)
  vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
  vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
  float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;

  v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
  v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
  v_dotTextureCoords = (a_pos + 0.5) / size;
#endif

  gl_Position = vec4(applyFilter(v_color, v_pos, v_flags), 1.0);
}
