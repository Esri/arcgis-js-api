/* The implementation of the renderer is based on the article and implementation of MB described here:
* https://www.mapbox.com/blog/drawing-antialiased-lines/
*/

attribute vec2 a_pos;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistance;

// the relative transformation of a vertex given in tile coordinates to a relative normalized coordinate
// relative to the tile's upper left corner
// the extrusion vector.
uniform highp mat4 u_transformMatrix;

// the extrude matrix which is responsible for the 'anti-zoom' as well as the rotation
uniform highp mat4 u_extrudeMatrix;

// u_normalized_origin is the tile's upper left corner given in normalized coordinates
uniform highp vec2 u_normalized_origin;

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

  // calculate the relative distance from the centerline to the edge of the line. Since offset is given in integers (for the
  // sake of using less attribute memory, we need to scale it back to the original range of ~ 0: 1)
  mediump vec2 dist = v_lineHalfWidth * a_offsetAndNormal.xy * scale;

  // transform the vertex
  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0) + u_extrudeMatrix * vec4(dist, 0.0, 0.0);

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
