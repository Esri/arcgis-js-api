#include <util/fsPrecision.glsl>

// ===============================================================================
// Gaussian blur with linear sampling. Supports different number of samples, but
// only 5 samples have proper weights. Uses linear texture interpolation to reduce
// the number of samples taken.

// Defines:
// GRID_OPTIMIZATION (set or !set)
// GAUSSIAN_SAMPLES (3,5,7)

// This technique requires linear filtering on source texture
// http://rastergrid.com/blog/2010/09/efficient-gaussian-blur-with-linear-sampling/
// ===============================================================================

uniform sampler2D tex;

#ifdef GRID_OPTIMIZATION
  uniform vec2 blurSize;
  varying vec3 blurCoordinate;
#else
  varying vec2 blurCoordinates[GAUSSIAN_SAMPLES];
#endif

void main() {
  #ifdef GRID_OPTIMIZATION
    vec2 uv = blurCoordinate.xy;
    vec4 center = texture2D(tex, uv);

    // do not blur if no pixel or all pixels in neighborhood are set
    if (blurCoordinate.z == 1.0) {
      gl_FragColor = center;
    }
    else {
      vec4 sum = vec4(0.0);

      #if GAUSSIAN_SAMPLES == 3
        // not proper gaussian weights
        sum += center * 0.204164;
        sum += texture2D(tex, uv + blurSize * 1.407333) * 0.304005;
        sum += texture2D(tex, uv - blurSize * 1.407333) * 0.304005;
      #elif GAUSSIAN_SAMPLES == 5
        sum += center * 0.204164;
        sum += texture2D(tex, uv + blurSize * 1.407333) * 0.304005;
        sum += texture2D(tex, uv - blurSize * 1.407333) * 0.304005;
        sum += texture2D(tex, uv + blurSize * 3.294215) * 0.093913;
        sum += texture2D(tex, uv - blurSize * 3.294215) * 0.093913;
      #elif GAUSSIAN_SAMPLES == 7
        // not proper gaussian weights
        sum += center * 0.204164;
        sum += texture2D(tex, uv + blurSize * 1.407333) * 0.304005;
        sum += texture2D(tex, uv - blurSize * 1.407333) * 0.304005;
        sum += texture2D(tex, uv + blurSize * 3.294215) * 0.093913;
        sum += texture2D(tex, uv - blurSize * 3.294215) * 0.093913;
        sum += texture2D(tex, uv + blurSize * 5.1) * 0.03;
        sum += texture2D(tex, uv - blurSize * 5.1) * 0.03;
      #elif GAUSSIAN_SAMPLES == 9
        // not proper gaussian weights
        sum += center * 0.154164;
        sum += texture2D(tex, uv + blurSize * 1.5) * 0.204005;
        sum += texture2D(tex, uv - blurSize * 1.5) * 0.204005;
        sum += texture2D(tex, uv + blurSize * 3.5) * 0.123913;
        sum += texture2D(tex, uv - blurSize * 3.5) * 0.123913;
        sum += texture2D(tex, uv + blurSize * 5.5) * 0.123913;
        sum += texture2D(tex, uv - blurSize * 5.5) * 0.123913;
        sum += texture2D(tex, uv + blurSize * 7.5) * 0.05;
        sum += texture2D(tex, uv - blurSize * 7.5) * 0.05;
      #endif

      gl_FragColor = sum;
    }
  #else
    vec4 sum = vec4(0.0);

    #if GAUSSIAN_SAMPLES == 3
      // not proper gaussian weights
      sum += texture2D(tex, blurCoordinates[0]) * 0.204164;
      sum += texture2D(tex, blurCoordinates[1]) * 0.304005;
      sum += texture2D(tex, blurCoordinates[2]) * 0.304005;
    #elif GAUSSIAN_SAMPLES == 5
      sum += texture2D(tex, blurCoordinates[0]) * 0.204164;
      sum += texture2D(tex, blurCoordinates[1]) * 0.304005;
      sum += texture2D(tex, blurCoordinates[2]) * 0.304005;
      sum += texture2D(tex, blurCoordinates[3]) * 0.093913;
      sum += texture2D(tex, blurCoordinates[4]) * 0.093913;
    #elif GAUSSIAN_SAMPLES == 7
      // not proper gaussian weights
      sum += texture2D(tex, blurCoordinates[0]) * 0.204164;
      sum += texture2D(tex, blurCoordinates[1]) * 0.304005;
      sum += texture2D(tex, blurCoordinates[2]) * 0.304005;
      sum += texture2D(tex, blurCoordinates[3]) * 0.093913;
      sum += texture2D(tex, blurCoordinates[4]) * 0.093913;
      sum += texture2D(tex, blurCoordinates[5]) * 0.03;
      sum += texture2D(tex, blurCoordinates[6]) * 0.03;
    #elif GAUSSIAN_SAMPLES == 9
      // not proper gaussian weights
      sum += texture2D(tex, blurCoordinates[0]) * 0.154164;
      sum += texture2D(tex, blurCoordinates[1]) * 0.204005;
      sum += texture2D(tex, blurCoordinates[2]) * 0.204005;
      sum += texture2D(tex, blurCoordinates[3]) * 0.123913;
      sum += texture2D(tex, blurCoordinates[4]) * 0.123913;
      sum += texture2D(tex, blurCoordinates[5]) * 0.09;
      sum += texture2D(tex, blurCoordinates[6]) * 0.09;
      sum += texture2D(tex, blurCoordinates[7]) * 0.05;
      sum += texture2D(tex, blurCoordinates[8]) * 0.05;
    #endif

    gl_FragColor = sum;
  #endif
}
