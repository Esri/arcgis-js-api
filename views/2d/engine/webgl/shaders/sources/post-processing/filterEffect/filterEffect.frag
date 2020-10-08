precision mediump float;

uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;

varying vec2 v_uv;

void main() {
  vec4 color = texture2D(u_colorTexture, v_uv);
  vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
  float a = color.a;

  gl_FragColor = vec4(a * rgbw.rgb, a);
}
