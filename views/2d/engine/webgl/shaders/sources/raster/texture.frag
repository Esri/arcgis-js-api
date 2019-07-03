precision mediump float;

// Texture coordinates.
varying highp vec2 v_texcoord;

// Texture sampler.
uniform sampler2D u_texture;

// Opacity.
uniform float u_opacity;

void main(void) {
  vec4 color = texture2D(u_texture, v_texcoord);
  color.a *= u_opacity;
  gl_FragColor = vec4(color.rgb * color.a, color.a);
}
