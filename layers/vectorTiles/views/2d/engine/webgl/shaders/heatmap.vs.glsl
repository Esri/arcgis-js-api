attribute vec2 a_pos;
attribute vec2 a_tex;

uniform mediump vec2 u_minmax;

varying mediump vec2 v_uv;
varying mediump float v_slope;

void main(void) {
  gl_Position = vec4(a_pos, 0.0, 1.0);
  v_uv = a_tex;
  v_slope = 1.0 / (u_minmax.y - u_minmax.x);
}
