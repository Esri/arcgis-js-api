attribute vec2 a_position;

varying mediump vec2 v_uv;

void main(void) {
  gl_Position = vec4(a_position , 0.0, 1.0);
  v_uv = (a_position + 1.0) / 2.0;
}
