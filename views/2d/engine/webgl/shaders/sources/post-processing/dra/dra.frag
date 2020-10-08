precision mediump float;

uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;

varying vec2 v_uv;

void main() {
  vec4 minColor = texture2D(u_minColor, vec2(0.5));
  vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
  vec4 color = texture2D(u_texture, v_uv);

  vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
  vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
  vec3 colorUnpremultiply = color.rgb / color.a;
  vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
  gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);

  //gl_FragColor = vec4(vec3((color - minColor) / (maxColor - minColor)).rgb, color.a);
}
