#extension GL_EXT_draw_buffers : require

precision mediump float;

#define CELL_SIZE 2 // YF TODO: we can potentially make this a param (shader variation)

uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;

varying vec2 v_uv; // YF - not used at least for now

void main() {
  // compute the first pixel the source cell
  vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);

  // one pixel in source
  vec2 onePixel = vec2(1.0) / u_srcResolution;

  // uv for first pixel in cell. +0.5 for center of pixel
  vec2 uv = (srcPixel + 0.5) / u_srcResolution;

  vec4 minColor = vec4(1.0);
  vec4 maxColor = vec4(0.0);
  for (int y = 0; y < CELL_SIZE; ++y) {
    for (int x = 0; x < CELL_SIZE; ++x) {
      vec2 offset = uv + vec2(x, y) * onePixel;
      minColor = min(minColor, texture2D(u_minTexture, offset));
      maxColor = max(maxColor, texture2D(u_maxTexture, offset));
    }
  }

  gl_FragData[0] = minColor;
  gl_FragData[1] = maxColor;
}
