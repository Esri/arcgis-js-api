attribute vec2 a_pos;
attribute vec2 a_tex;

varying mediump vec2 v_uv;

void main(void) {
  gl_Position = vec4(a_pos, 0.0, 1.0);
  v_uv = a_tex;
}
