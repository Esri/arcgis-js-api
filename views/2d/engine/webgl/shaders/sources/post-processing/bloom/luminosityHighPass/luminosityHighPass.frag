precision mediump float;

uniform sampler2D u_texture;
uniform vec3 u_defaultColor;
uniform float u_defaultOpacity;
uniform float u_luminosityThreshold;
uniform float u_smoothWidth;

varying vec2 v_uv;

void main() {
  vec4 texel = texture2D(u_texture, v_uv);
  vec3 luma = vec3(0.299, 0.587, 0.114);
  float v = dot(texel.xyz, luma);
  vec4 outputColor = vec4(u_defaultColor.rgb, u_defaultOpacity);
  float alpha = smoothstep(u_luminosityThreshold, u_luminosityThreshold + u_smoothWidth, v);

  gl_FragColor = mix(outputColor, texel, alpha);
}
