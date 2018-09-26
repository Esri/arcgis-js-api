precision mediump float;

attribute vec2 a_pos;
attribute vec4 a_id; // since we need to render the Id as a color we need to break it into RGBA components. so just like a color, the Id is normalized.
attribute vec4 a_color;
attribute vec4 a_tlbr;
attribute vec4 a_aux;

attribute float  a_visible; // a one byte controlling the visibility of the vertex (a separate visibility buffer), values are 0 or 1 (visible)

uniform highp mat4 u_transformMatrix;
uniform highp vec2 u_normalized_origin;

varying lowp vec4 v_color;
varying lowp float v_opacity;

// import the VV inputs and functions (they are #ifdefed, so if the proper #define is not set it will end-up being a no-op)
#include <materials/fill/vvUniforms.glsl>
#include <materials/fill/vvFunctions.glsl>

#ifdef PATTERN
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_mosaicSize;

varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#endif // PATTERN

#ifdef ID
varying highp vec4 v_id;
#endif // ID

void main()
{
#ifdef VV_OPACITY
  v_opacity = getVVOpacity(a_vv.y);
#else
  v_opacity = 1.0;
#endif

#ifdef VV_COLOR
  v_color = getVVColor(a_vv.x, a_color);
#else
  v_color = a_color;
#endif // VV_COLOR

#ifdef ID
  v_id = a_id;
#endif // ID

#ifdef PATTERN
  // calculate the pattern matrix
  mat3 patternMatrix = mat3(1.0, 0.0, 0.0,
                            0.0, 1.0, 0.0,
                            0.0, 0.0, 1.0);
  patternMatrix[0][0] = 1.0 / (u_zoomFactor * a_aux.x);
  patternMatrix[1][1] = 1.0 / (u_zoomFactor * a_aux.y);

  // calculate the texture coordinates of the current vertex. It will of course get interpolated.
  // The pattern matrix is a 3x3 scale matrix which 'tiles' the texture inside the tile, translating from
  // tile coordinates to texture coordinates.
  v_tileTextureCoord = (patternMatrix * vec3(a_pos, 1.0)).xy;
  v_tlbr = vec4(a_tlbr.x / u_mosaicSize.x, a_tlbr.y / u_mosaicSize.y, a_tlbr.z / u_mosaicSize.x, a_tlbr.w / u_mosaicSize.y);
#endif // PATTERN

  float z = 2.0 * (1.0 - a_visible); // clip the vertex if the geometry isn't visible
  gl_Position = vec4(u_normalized_origin, 0.0, 0.0) + u_transformMatrix * vec4(a_pos, z, 1.0);
}
