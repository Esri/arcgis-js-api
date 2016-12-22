attribute vec2 a_pos;

uniform highp mat4 u_transformMatrix;
uniform highp vec2 u_normalized_origin;
uniform highp float u_depth;
uniform highp vec2 u_screen;
uniform mediump float u_size;
uniform mediump float u_pixelRatio;

varying mediump vec2 v_vertexPosition;

void main()
{
  gl_PointSize = u_pixelRatio * u_size;
  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0.0, 1.0);

  // calculate the vertex position in pixels (we need to add one in order to shift the origin from the center of the viewport)
  v_vertexPosition = (gl_Position.xy + 1.0) * u_screen;
}
