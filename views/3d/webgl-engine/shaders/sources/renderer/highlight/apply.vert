#include <util/vsPrecision.glsl>

attribute vec2 position;
varying vec2 uv;

#ifdef GRID_OPTIMIZATION
  attribute vec2 uv0;
  uniform sampler2D coverageTex;
#endif

void main() {
  #ifdef GRID_OPTIMIZATION
    #ifdef GRID_DEBUG
      vec4 cov = texture2D(coverageTex, uv0);
      // if no highlight pixel set in this block,
      // or all pixels set, hide block
      if (cov.r == 0.0 || cov.g == 1.0 || cov.b == 1.0) {
        gl_Position = vec4(0.0);
        return;
      }
      gl_Position = vec4(position, .0, 1.0);
      uv = uv0;
      return;
    #else
      vec4 cov = texture2D(coverageTex, uv0);
      // if no highlight pixel set in this block, hide block
      if (cov.r == 0.0) {
        gl_Position = vec4(0.0);
        return;
      }
    #endif
  #endif

  gl_Position = vec4(position, .0, 1.0);
  uv = position.xy * .5 + vec2(.5);
}
