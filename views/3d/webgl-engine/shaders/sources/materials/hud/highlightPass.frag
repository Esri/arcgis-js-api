#include <materials/hud/hudHeader.glsl>
#include <util/highlight.glsl>

uniform sampler2D depthTex;
uniform vec4 highlightViewportPixelSz;

void main() {
#include <materials/hud/hudMain.glsl>
#ifdef BINARY_HIGHLIGHT_OCCLUSION
  // Instead of deciding on a per-pixel basis if the highlight is occluded,
  // do it for all highlight pixel based on the centroid occlusion. This
  // is a temporary solution for:
  // https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/9645
  if (voccluded == 1.0) {
    gl_FragColor = vec4(1.0, 1.0, 0.0, 1.0);
  } else {
    gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);
  }
#else
  gl_FragColor = highlightData(gl_FragCoord, depthTex, highlightViewportPixelSz);
#endif
}
