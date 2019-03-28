precision mediump float;

#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/vv.glsl>
#include <materials/effects.glsl>

attribute vec2 a_pos;
attribute vec4 a_id;                // objectId in RGBA components
attribute float  a_visible;         // one byte controlling the visibility of the vertex (separate buffer),

#ifndef DOT_DENSITY
attribute vec4 a_color;
attribute vec4 a_tlbr;
attribute vec4 a_aux1;
attribute vec2 a_aux2;
attribute vec4 a_aux3;              // encodes a bitset (CIM) detailing vv locking
#endif

#if defined(VV_COLOR) || defined(VV_OPACITY)
attribute highp vec4 a_vv;
#endif

uniform highp mat3 u_dvsMat3;      // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp float u_pixelRatio;

varying lowp vec4 v_color;
varying lowp float v_opacity;

#ifdef ID
varying highp vec4 v_id;
#endif

#ifdef PATTERN
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_mosaicSize;

varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#endif

#ifdef DOT_DENSITY
attribute highp vec4 a_dd1;
attribute highp vec4 a_dd2;

uniform float u_dotValue;
uniform float u_tileDotsOverArea; 

uniform float u_dotTextureDotCount;
uniform float u_tileZoomFactor; 

varying vec4 v_dotThresholds[ 2 ]; 
varying vec2 v_dotTextureCoords;

vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
  return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif

void main()
{
// Arguably DotDensity should be extracted to its own shader. This gets a bit
// fungly because DD uses a signifcantly different stride
#ifndef DOT_DENSITY 
  float a_bitset = a_aux3.w; 
  float isColorLocked = getBit(a_bitset, 0);
  
  v_color = a_color;
#else
  v_color = vec4(0.0, 0.0, 0.0, 1.0);    // for highlight
#endif
  v_opacity = 1.0;
  
#ifdef ID
  v_id = a_id;
#endif
  
#ifdef VV_OPACITY
  v_opacity = getVVOpacity(a_vv.y);
#endif
  
#ifdef VV_COLOR
  v_color = getVVColor(a_vv.x, v_color, isColorLocked);
#endif
  
#ifdef PATTERN
  vec2 aux2 = (1.0 / SIGNED_BYTE_TO_UNSIGNED) * a_aux2;
  vec2 symbolOffset = u_zoomFactor * (a_aux1.zw - SIGNED_BYTE_TO_UNSIGNED);
  mat3 patternMatrix = mat3(1.0);

  // calculate the pattern matrix
  patternMatrix[0][0] = 1.0 / (u_zoomFactor * a_aux1.x * aux2.x);
  patternMatrix[1][1] = 1.0 / (u_zoomFactor * a_aux1.y * aux2.y);

  // calculate the texture coordinates of the current vertex. It will of course get interpolated.
  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from
  // tile coordinates to texture coordinates.
  v_tileTextureCoord = (patternMatrix * vec3(a_pos + symbolOffset, 1.0)).xy;
  v_tlbr = a_tlbr / u_mosaicSize.xyxy;

#elif defined(DOT_DENSITY)
  float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;

  v_dotThresholds[0] = dotThreshold(a_dd1, u_dotValue, u_tileDotsOverArea);
  v_dotThresholds[1] = dotThreshold(a_dd2, u_dotValue, u_tileDotsOverArea);
  v_dotTextureCoords = (a_pos + 0.5) / size;

#endif
  vec3 v_pos = u_dvsMat3 * vec3(a_pos, 1.);

  applyFilter(v_color, v_pos, a_visible);
  
  gl_Position = vec4(v_pos, 1.0);
}
