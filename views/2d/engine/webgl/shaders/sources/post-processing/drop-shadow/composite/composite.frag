precision mediump float;

uniform sampler2D u_layerFBOTexture;
uniform sampler2D u_blurTexture;
uniform vec4 u_shadowColor;

varying vec2 v_uv;

void main() {
  vec4 layerColor = texture2D(u_layerFBOTexture, v_uv);
  vec4 blurColor = texture2D(u_blurTexture, v_uv);

  gl_FragColor = ((1.0 - layerColor.a) * blurColor.a * u_shadowColor + layerColor);
}
