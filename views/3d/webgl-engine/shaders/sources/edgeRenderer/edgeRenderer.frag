#include <util/fsPrecision.glsl>
#include <util/slice.glsl>

varying vec4 vColor;
varying float vRadius;
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vLineLengthPixels;
varying float vSizeFalloffFactor;
varying float vLineIndex;

// At which coverage threshold we discard a fragment completely
#define COVERAGE_TEST_THRESHOLD 0.01

#include <edgeRenderer/lineOffset.glsl>

vec2 lineWithCapsDistance(float radius, vec2 position, float lineLength) {
  float lineOffset = calculateLineOffset();
  float positionX = position.x - lineOffset;

  if (radius < 1.0) {
    // Handle this specifically for subpixel sizes:
    // 1. Compute correct coverage (note coverage is computed by
    //    0.5 - dist, so we make sure that that will lead to correct
    //    subpixel coverage
    // 2. Ignore rounded caps
    float coverageX = clamp(min(radius, positionX + 0.5) - max(-radius, positionX - 0.5), 0.0, 1.0);
    float coverageY = clamp(min(lineLength, position.y + 0.5) - max(0.0, position.y - 0.5), 0.0, 1.0);

    float coverage = min(coverageX, coverageY);

    return vec2(0.5 - coverage, 0.0);
  }
  else {
    // Between -radius -> 0 for start cap, 0 for line, 0 -> radius
    float positionOnCap = position.y - clamp(position.y, 0.0, lineLength);

    vec2 lineToPosition = vec2(positionX, positionOnCap);
    return vec2(length(lineToPosition) - radius, positionOnCap / radius);
  }
}

void main() {

  float radius = vRadius * calculateLinePressure();

  vec2 distance = lineWithCapsDistance(radius, vPosition.xy, vLineLengthPixels);
  float coverage = clamp(0.5 - distance.x, 0.0, 1.0);

#ifdef ANTIALIASING

  const float coverageLimit = COVERAGE_TEST_THRESHOLD;

#else /* ANTIALIASING */

  // Use subpixel coverage computation when lines get subpixel widths
  // so we still render them appropriately. Otherwise discard anything
  // that is not fully within the line
  float coverageLimit = radius <= 0.5 ? COVERAGE_TEST_THRESHOLD : 0.75;

#endif /* ANTIALIASING */

  if (coverage < coverageLimit) {
    discard;
  }

  discardBySlice(vWorldPosition);

  float alpha = vColor.a * coverage;

  gl_FragColor = vec4(vColor.rgb, alpha);
}
