#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>
#include <util/highlight.glsl>

varying vec3 vpos;

uniform sampler2D depthTex;
uniform vec4 highlightViewportPixelSz;

#if defined(TEXTURING)
  #include <materials/defaultMaterial/texturingInputs.glsl>
  #include <materials/defaultMaterial/texturing.glsl>
#endif

void main() {
  discardBySlice(vpos);

  #if defined(TEXTURING)
    vec4 texColor = textureLookup(tex, vtc);
    discardOrAdjustTextureAlpha(texColor);
  #endif

  gl_FragColor = highlightData(gl_FragCoord, depthTex, highlightViewportPixelSz);
}
