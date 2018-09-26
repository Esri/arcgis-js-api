#include <util/fsPrecision.glsl>
#include <util/highlight.glsl>
#include <terrainRenderer/overlay.glsl>

uniform sampler2D overlay0Tex;
uniform sampler2D overlay1Tex;
uniform float overlayOpacity;

uniform sampler2D depthTex;
uniform vec4 highlightViewportPixelSz;

varying vec4 vtcOverlay;

void main() {
  vec4 overlayColor = getOverlayColor(overlay0Tex, overlay1Tex, vtcOverlay, overlayOpacity);

  if (overlayColor.a == 0.0) {
    // Here we have to write black, instead of discarding the fragment in order to overwrite
    // the highlights which might have been written by skirts of other tiles.
    // As a consequence skirts are not visible, but terrain overwrites draped highlights.
    gl_FragColor = vec4(0,0,0,0);
    return;
  }

  gl_FragColor = highlightData(gl_FragCoord, depthTex, highlightViewportPixelSz);
}
