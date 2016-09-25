uniform mediump sampler2D u_texture;
varying mediump vec2 v_tex;

void main(void) {
  lowp vec4 color = texture2D(u_texture, v_tex);
  gl_FragColor = vec4(color.rgb, color.a * 0.75);
}
