#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>
#include <util/highlight.glsl>

varying vec3 vpos;

uniform sampler2D depthTex;
uniform vec4 highlightViewportPixelSz;

void main() {
  discardBySlice(vpos);

  gl_FragColor = highlightData(gl_FragCoord, depthTex, highlightViewportPixelSz);
}
