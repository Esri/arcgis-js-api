#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>

#ifdef HIGHLIGHT_PASS
#include <util/highlight.glsl>

uniform sampler2D depthTex;
uniform vec4 highlightViewportPixelSz;
#endif

#ifdef DEPTH_PASS
varying float depth;
#elif defined(HIGHLIGHT_PASS)
#else
varying vec3 vColor;
#endif

void main(void) {
  vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
  float r2 = dot(vOffset, vOffset);

  if (r2 > 0.25) {
    discard;
  }

#ifdef DEPTH_PASS
  gl_FragColor = float2rgba(depth);
#elif defined(HIGHLIGHT_PASS)
  gl_FragColor = highlightData(gl_FragCoord, depthTex, highlightViewportPixelSz);
#else
  gl_FragColor = vec4(vColor, 1.0);
#endif
}
