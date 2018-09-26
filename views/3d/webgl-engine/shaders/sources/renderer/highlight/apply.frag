#include <util/fsPrecision.glsl>

// ===============================================================================
// Merging blurred outlines with source image, advanced version

// Defines:
// GRID_OPTIMIZATION (set or !set)
// GRID_DEBUG (set or !set)
// ===============================================================================

uniform sampler2D tex;
uniform sampler2D origin;

uniform vec4 color;
uniform float outlineSize;
uniform float blurSize;
uniform vec4 opacities; // [outline, outlineOccluded, fill, fillOccluded]

varying vec2 uv;

void main() {
  #if defined(GRID_OPTIMIZATION) && defined(GRID_DEBUG)
    gl_FragColor = vec4(uv, 0, 1.0);
  #else
    // Read the highlight intensity from the blurred highlight image
    vec4 blurredHighlightValue = texture2D(tex, uv);
    float highlightIntensity = blurredHighlightValue.a;

    // Discard all pixels which are not affected by highlight
    if (highlightIntensity == 0.0) {
      discard;
    }

    vec4 origin_color = texture2D(origin, uv);

    float outlineIntensity;
    float fillIntensity;

    // if occluded
    if (blurredHighlightValue.g > blurredHighlightValue.b) {
      outlineIntensity = color.w * opacities[1];
      fillIntensity = color.w * opacities[3];
    }
    // if unoccluded
    else {
      outlineIntensity = color.w * opacities[0];
      fillIntensity = color.w * opacities[2];
    }

    float inner = 1.0 - outlineSize / 9.0;
    float outer = 1.0 - (outlineSize + blurSize) / 9.0;

    float outlineFactor = smoothstep(outer, inner, highlightIntensity);
    //float fillFactor = smoothstep(0.6, 0.72, highlightIntensity);
    float fillFactor = any(notEqual(origin_color, vec4(0.0, 0.0, 0.0, 0.0))) ? 1.0 : 0.0;
    float intensity = outlineIntensity * outlineFactor * (1.0 - fillFactor) + fillIntensity * fillFactor;

    // Blending equation: gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
    // I.e., color should not be premultiplied with alpha
    gl_FragColor = vec4(color.xyz, intensity);
  #endif
}
