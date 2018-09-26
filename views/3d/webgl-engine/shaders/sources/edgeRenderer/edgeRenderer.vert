#include <util/vsPrecision.glsl>

// Transformations
uniform mat4 uProj;
uniform mat4 uView;
uniform mat4 uModel;
uniform vec3 uCameraPosition;

// Line configuration

// Conversion constants
uniform vec2 uPixelToNDC;
uniform vec2 uNDCToPixel;
uniform float uPixelRatio;

// Inputs
attribute vec3 aPosition0;
attribute vec3 aPosition1;
attribute float aVariantOffset;
attribute float aVariantStroke;
attribute float aVariantExtension;

#ifdef SILHOUETTE

attribute vec3 aNormalA;
attribute vec3 aNormalB;

#else /* SILHOUETTE */

attribute vec3 aNormal;

#endif /* SILHOUETTE */

attribute vec2 aSideness;
attribute vec2 aPackedAttributes;

struct UnpackedAttributes {
vec2 sideness;
vec2 sidenessNorm;
float lineWidthPixels;
float extensionLengthPixels;

#if (MODE == MODE_UBER)

float type;

#endif
};

// Output required to compute color
varying vec4 vColor;

// Output required to compute distance to line/caps
varying vec3 vPosition;
varying vec3 vWorldPosition;
varying float vRadius;
varying float vLineLengthPixels;
varying float vSizeFalloffFactor;

#include <edgeRenderer/adjustProjectedPosition.glsl>
#include <edgeRenderer/styleOutputs.glsl>
#include <edgeRenderer/lineAmplitude.glsl>
#include <edgeRenderer/util.glsl>

vec4 calculateGeometricOutputs(vec4 viewPosV0, vec4 viewPosV1, vec4 worldPosV0, vec4 worldPosV1, vec3 worldNormal, UnpackedAttributes unpackedAttributes) {
  vec2 sideness = unpackedAttributes.sideness;
  vec2 sidenessNorm = unpackedAttributes.sidenessNorm;

  vWorldPosition = mix(worldPosV0, worldPosV1, sidenessNorm.y).xyz;

  vec4 viewPos = mix(viewPosV0, viewPosV1, sidenessNorm.y);
  vec4 projPosV0 = uProj * viewPosV0;
  vec4 projPosV1 = uProj * viewPosV1;
  vec4 projPos = uProj * viewPos;

  vec3 screenSpaceLineNDC = (projPosV1.xyz / projPosV1.w - projPosV0.xyz / projPosV0.w);
  vec2 screenSpaceLinePixels = screenSpaceLineNDC.xy * uNDCToPixel;
  float lineLengthPixels = length(screenSpaceLinePixels);

  float dzPerPixel = screenSpaceLineNDC.z / lineLengthPixels;
  vec2 screenSpaceDirection = screenSpaceLinePixels / lineLengthPixels;
  vec2 perpendicularScreenSpaceDirection = vec2(screenSpaceDirection.y, -screenSpaceDirection.x) * sideness.x;

  float falloffFactor = distanceBasedPerspectiveFactor(-viewPos.z) * uPixelRatio;
  float lineWidthPixels = unpackedAttributes.lineWidthPixels * falloffFactor;

  float extensionLengthPixels = calculateExtensionLength(unpackedAttributes.extensionLengthPixels, lineLengthPixels) * falloffFactor;
  float lineAmplitudePixels = calculateLineAmplitude(unpackedAttributes) * uPixelRatio;

  vSizeFalloffFactor = falloffFactor;

  float lineWidthAndAmplitudePixels = lineWidthPixels + lineAmplitudePixels + lineAmplitudePixels;
  float extendedLineLengthPixels = lineLengthPixels + extensionLengthPixels + extensionLengthPixels;

#ifdef ANTIALIASING

  const float aaPaddingPixels = 1.0;

  // Line size with padding
  float halfAAPaddedLineWidthAndAmplitudePixels = lineWidthAndAmplitudePixels * 0.5 + aaPaddingPixels;
  float aaPaddedRoundedCapSizePixels = lineWidthPixels * 0.5 + aaPaddingPixels;

  // Line length with padding
  float aaPaddedLineLengthPixels = extendedLineLengthPixels + aaPaddingPixels + aaPaddingPixels;
  float halfAAPaddedLineLengthPixels = aaPaddedLineLengthPixels * 0.5;

#else /* ANTIALIASING */

  // Even if there is no AA, we still want to do proper <1px rendering,
  // so we effectively clamp the pixel sizes to minimum of 1px and compute
  // coverage in the fragment shader
  float halfAAPaddedLineWidthAndAmplitudePixels = max(lineWidthAndAmplitudePixels, 1.0) * 0.5;
  float aaPaddedRoundedCapSizePixels = max(lineWidthPixels, 1.0) * 0.5;

  float halfAAPaddedLineLengthPixels = max(extendedLineLengthPixels, 1.0) * 0.5;

#endif /* ANTIALIASING */

  // Half line width in NDC including padding for anti aliasing
  vec2 halfAAPaddedLineWidthAndAmplitudeNDC = halfAAPaddedLineWidthAndAmplitudePixels * uPixelToNDC;
  vec2 aaPaddedRoundedCapSizeNDC = aaPaddedRoundedCapSizePixels * uPixelToNDC;
  vec2 extensionLengthNDC = extensionLengthPixels * uPixelToNDC;

  // Compute screen space position of vertex, offsetting for line size and end caps
  vec2 ndcOffset = (
      screenSpaceDirection * sideness.y * (aaPaddedRoundedCapSizeNDC + extensionLengthNDC)
    + perpendicularScreenSpaceDirection * halfAAPaddedLineWidthAndAmplitudeNDC
  );

  projPos.xy += ndcOffset * projPos.w;
  projPos.z += (dzPerPixel * (aaPaddedRoundedCapSizePixels + extensionLengthPixels)) * sideness.y * projPos.w;

  projPos = adjustProjectedPosition(projPos, worldNormal, 1.0 + max((lineWidthAndAmplitudePixels - 1.0) * 0.5, 0.0));

  // Line length with end caps
  float aaPaddedLineWithCapsLengthPixels = extendedLineLengthPixels + aaPaddedRoundedCapSizePixels + aaPaddedRoundedCapSizePixels;

  float pixelPositionAlongLine = aaPaddedLineWithCapsLengthPixels * sidenessNorm.y - aaPaddedRoundedCapSizePixels;

  // Position in pixels with origin at first vertex of line segment
  vPosition = vec3(
    halfAAPaddedLineWidthAndAmplitudePixels * sideness.x,
    pixelPositionAlongLine,
    pixelPositionAlongLine / extendedLineLengthPixels
  );

  // The line width radius in pixels
  vRadius = lineWidthPixels * 0.5;
  vLineLengthPixels = extendedLineLengthPixels;

#ifdef SILHOUETTE

  gl_Position = isSilhouetteEdge(viewPosV0, aNormalA, aNormalB) ? projPos : vec4(10, 10, 10, 1);

#else /* SILHOUETTE */

  gl_Position = projPos;

#endif /* SILHOUETTE */

#if (MODE == MODE_UBER)

  if (unpackedAttributes.type <= 0.0 && lineLengthPixels <= 3.0) {
    gl_Position = vec4(10, 10, 10, 1);
  }

#elif (MODE == MODE_SKETCH)

  if (lineLengthPixels <= 3.0) {
    gl_Position = vec4(10, 10, 10, 1);
  }

#endif

  return projPos;
}

#if (MODE == MODE_UBER)

UnpackedAttributes unpackAttributes(ComponentData component) {

  vec2 sidenessNorm = aSideness;
  vec2 sideness = sidenessNorm * 2.0 - 1.0;

  float fType = component.type;
  float extensionLengthPixels = component.extensionLength;
  float lineWidth = component.lineWidth;

  if (fType <= 0.0) {
    extensionLengthPixels *= aVariantExtension * 2.0 - 1.0;
  }

  return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels, fType);
}

#else /* (MODE == MODE_UBER) */

UnpackedAttributes unpackAttributes(ComponentData component) {
  vec2 sidenessNorm = aSideness;
  vec2 sideness = sidenessNorm * 2.0 - 1.0;
  float extensionLengthPixels = component.extensionLength;

#if (MODE == MODE_SKETCH)

  extensionLengthPixels *= aVariantExtension * 2.0 - 1.0;

#endif

  float lineWidth = component.lineWidth;

  return UnpackedAttributes(sideness, sidenessNorm, lineWidth, extensionLengthPixels);
}

#endif /* (MODE == MODE_UBER) */

void main() {
  ComponentData component = readComponentData();
  UnpackedAttributes unpackedAttributes = unpackAttributes(component);

  vec4 worldPosV0 = uModel * vec4(aPosition0, 1.0);
  vec4 worldPosV1 = uModel * vec4(aPosition1, 1.0);

  vec4 viewPosV0 = uView * worldPosV0;
  vec4 viewPosV1 = uView * worldPosV1;

#ifdef SILHOUETTE

  vec3 worldNormal = silhouetteWorldNormal(aNormalA, aNormalB);

#else /* SILHOUETTE */

  vec3 worldNormal = modelToWorldNormal(aNormal);

#endif /* SILHOUETTE */

  // General geometric computation for all types of edges
  vec4 projPos = calculateGeometricOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, worldNormal, unpackedAttributes);

  // Component color
  vColor = component.color;

  // Specific computation for different edge styles
  calculateStyleOutputs(viewPosV0, viewPosV1, worldPosV0, worldPosV1, projPos, worldNormal, unpackedAttributes);
}
