attribute vec2 a_pos;

uniform highp mat4 u_transformMatrix;
uniform highp vec2 u_normalized_origin;
uniform mediump float u_depth;

void main()
{
  gl_Position = vec4(u_normalized_origin, u_depth, 0.0) + u_transformMatrix * vec4(a_pos, 0, 1.0);
}
