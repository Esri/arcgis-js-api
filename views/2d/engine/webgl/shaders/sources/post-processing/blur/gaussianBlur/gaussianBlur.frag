precision mediump float;

uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
uniform vec2 u_direction;
uniform float u_sigma;

varying vec2 v_uv;

#define KERNEL_RADIUS RADIUS

float gaussianPdf(in float x, in float sigma) {
    return 0.39894 * exp(-0.5 * x * x / ( sigma * sigma)) / sigma;
}

void main() {
  vec2 invSize = 1.0 / u_texSize;
  float fSigma = u_sigma;
  float weightSum = gaussianPdf(0.0, fSigma);
  vec4 pixelColorSum = texture2D(u_colorTexture, v_uv) * weightSum;

  for (int i = 1; i < KERNEL_RADIUS; i ++) {
    float x = float(i);
    float w = gaussianPdf(x, fSigma);
    vec2 uvOffset = u_direction * invSize * x;
    vec4 sample1 = texture2D(u_colorTexture, v_uv + uvOffset);
    vec4 sample2 = texture2D(u_colorTexture, v_uv - uvOffset);
    pixelColorSum += (sample1 + sample2) * w;
    weightSum += 2.0 * w;
  }

  gl_FragColor = pixelColorSum /weightSum;
}
