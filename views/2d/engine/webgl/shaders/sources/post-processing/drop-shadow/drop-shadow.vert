// full quad vertex shader
precision mediump float;

attribute vec2 a_position;

uniform highp mat3 u_displayViewMat3;
uniform highp vec2 u_offset;

varying vec2 v_uv;
void main() {
  vec3 offset = u_displayViewMat3 * vec3(u_offset, 0.0);
  gl_Position = vec4(a_position, 0.0, 1.0) + vec4(offset, 0.0);
  v_uv = (a_position + 1.0) / 2.0;
}
