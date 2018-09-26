#include <util/vsPrecision.glsl>

attribute vec2 position;
attribute vec2 uv0;

#ifdef GRID_OPTIMIZATION
  uniform sampler2D coverageTex;
  varying vec3 blurCoordinate;
#else
  uniform vec2 blurSize;
  varying vec2 blurCoordinates[GAUSSIAN_SAMPLES];
#endif

void main() {
  gl_Position = vec4(position, 0.0, 1.0);

  #ifdef GRID_OPTIMIZATION
    // sample the coverage texture at the block center
    // and if no coverage detected, create degenerate triangle
    vec4 cov = texture2D(coverageTex, uv0);
    if (cov.r == 0.0) {
      gl_Position = vec4(0,0,0,0);
    }

    // create texture coordinate for blur center
    // encode information about fully inside block in z coordinate
    blurCoordinate = vec3(gl_Position.xy * .5 + vec2(.5), max(cov.g, cov.b));
  #else
    vec2 uv = position.xy * .5 + vec2(.5);

    #if GAUSSIAN_SAMPLES == 3
      // not proper gaussian weights
      blurCoordinates[0] = uv;
      blurCoordinates[1] = uv + blurSize * 1.407333;
      blurCoordinates[2] = uv - blurSize * 1.407333;
    #elif GAUSSIAN_SAMPLES == 5
      blurCoordinates[0] = uv;
      blurCoordinates[1] = uv + blurSize * 1.407333;
      blurCoordinates[2] = uv - blurSize * 1.407333;
      blurCoordinates[3] = uv + blurSize * 3.294215;
      blurCoordinates[4] = uv - blurSize * 3.294215;
    #elif GAUSSIAN_SAMPLES == 7
      // not proper gaussian weights
      blurCoordinates[0] = uv;
      blurCoordinates[1] = uv + blurSize * 1.407333;
      blurCoordinates[2] = uv - blurSize * 1.407333;
      blurCoordinates[3] = uv + blurSize * 3.294215;
      blurCoordinates[4] = uv - blurSize * 3.294215;
      blurCoordinates[5] = uv + blurSize * 5.1;
      blurCoordinates[6] = uv - blurSize * 5.1;
    #elif GAUSSIAN_SAMPLES == 9
      // not proper gaussian weights
      blurCoordinates[0] = uv;
      blurCoordinates[1] = uv + blurSize * 1.407333;
      blurCoordinates[2] = uv - blurSize * 1.407333;
      blurCoordinates[3] = uv + blurSize * 3.294215;
      blurCoordinates[4] = uv - blurSize * 3.294215;
      blurCoordinates[5] = uv + blurSize * 5.1;
      blurCoordinates[6] = uv - blurSize * 5.1;
      blurCoordinates[7] = uv + blurSize * 7.1;
      blurCoordinates[8] = uv - blurSize * 7.1;
    #endif
  #endif
}
