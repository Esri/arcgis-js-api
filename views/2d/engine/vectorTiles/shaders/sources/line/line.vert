/* The implementation of the renderer is based on the article and implementation of MB described here:
* https://www.mapbox.com/blog/drawing-antialiased-lines/
*/

attribute vec2 a_pos;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistance;

uniform highp mat3 u_dvsMat3;         // premultiplies DisplayMat3 * ViewMat3 * ScreenMat3
uniform highp mat3 u_displayMat3;     // DisplayMat3
uniform highp mat3 u_displayViewMat3; // DisplayMat3 * ViewMat3

uniform mediump vec2 u_lineTranslation; // "line-translate" given by the line style layer spec

uniform mediump float u_blur;
uniform mediump float u_antialiasing; // the feather distance at which the line edge fades out

// the z of the layer. Given by the order of the layers in the style
uniform mediump float u_depth;

// the interpolated normal to the line. the information is packed into the two LSBs of the vertex coordinate
varying mediump vec2 v_normal;

// the accumulated distance along the line. We need this information in order to render the dashes.
varying highp float v_accumulatedDistance;

const float scale = 1.0 / 31.0;

#ifdef DD
attribute vec4 a_color;
attribute mediump float a_width;
#endif // DD
uniform lowp vec4 u_color;
uniform mediump float u_width;

#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif // ID

varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth; // the inset and outset of the line
varying mediump float v_blur;

#ifndef PATTERN
uniform mediump vec2 u_dasharray;
varying mediump vec2 v_dasharray;
#endif

void main()
{
  v_normal = a_offsetAndNormal.zw * scale;

#ifdef DD
  v_lineHalfWidth = a_width * u_width;
#else
  v_lineHalfWidth = u_width;
#endif // DD

  v_lineHalfWidth += u_antialiasing;
  v_lineHalfWidth *= 0.5;

#ifndef PATTERN
#ifdef DD
  v_dasharray = u_dasharray * a_width;
#else
  v_dasharray = u_dasharray * u_width;
#endif // DD
#endif

  mediump vec2 dist = v_lineHalfWidth * scale * a_offsetAndNormal.xy;
  mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) +  u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);

  // transform the vertex
  gl_Position = vec4(pos.xy, u_depth, 1.0);

  // the accumulated distance will be used to calculate the dashes (or the no-data...)
  v_accumulatedDistance = a_accumulatedDistance.x;

  v_blur = u_blur + u_antialiasing;

  #ifdef DD
    v_color = a_color * u_color;
  #else
    v_color = u_color;
  #endif // DD

  #ifdef ID
    v_id = u_id / 255.0;
  #endif // ID
}
