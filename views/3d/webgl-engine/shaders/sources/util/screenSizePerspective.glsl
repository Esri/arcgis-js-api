// Note that the implementation here should be kept in sync with the corresponding
// CPU implementation (used for hitTest etc) in screenSizePerspectiveUtils.ts

/**
 * Compute the screen size perspective lower bound from pre-computed screen
 * size perspective factors (or parameters, since both store the pixel lower
 * bound information in the same place). When computing the minimum size,
 * the padding (e.g. text halo) is scaled with the same factor as the
 * original size scales to reach the minimum size.
 *
 * {
 *    x: N/A
 *    y: N/A
 *    z: minPixelSize (abs),
 *    w: sizePaddingInPixels (abs)
 * }
 */
float screenSizePerspectiveMinSize(float size, vec4 factor) {

  // Original calculation:
  //   padding = 2 * factor.w
  //   minSize = factor.z
  //
  //   minSize + minSize / size * padding
  //
  // Incorporates padding (factor.w, e.g. text halo size) into the
  // minimum bounds calculation, taking into account that padding
  // would scale down proportionally to the size.
  //
  // Calculation below is the same, but avoids division by zero when
  // size would be zero, without branching using step.
  // https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10683

  // nonZeroSize is 1 if size > 0, and 0 otherwise
  float nonZeroSize = 1.0 - step(size, 0.0);

  return (
    factor.z * (
      1.0 +
      nonZeroSize *                // Multiply by nzs ensures if size is 0, then we ignore
                                   // proportionally scaled padding
      2.0 * factor.w / (
        size + (1.0 - nonZeroSize) // Adding 1 - nzs ensures we divide either by size, or by 1
      )
    )
  );
}

/**
 * Computes the view angle dependent screen size perspective factor. The goal
 * of this factor is that:
 *
 *   1. There is no perspective when looking top-down
 *   2. There is a smooth and quick transition to full perspective when
 *      tilting.
 */
float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
  return absCosAngle * absCosAngle * absCosAngle;
}

/**
 * Precomputes a set of factors that can be used to apply screen size perspective
 * The factors are based on the viewing angle, distance to camera and the screen size
 * perspective parameters:
 * {
 *    x: distanceDivisor,
 *    y: distanceOffset,
 *    z: minPixelSize (abs),
 *    w: sizePaddingInPixels (abs)
 * }
 *
 * The result is a set of factors that can be used to apply the perspective:
 *
 * {
 *    x: distance based relative scale factor (0 -> 1)
 *    y: view dependent scale factor
 *    z: minPixelSize (abs)
 *    w: sizePaddingInPixels (abs)
 * }
 */
vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
  return vec4(min(params.x / (distanceToCamera - params.y), 1.0), screenSizePerspectiveViewAngleDependentFactor(absCosAngle), params.z, params.w);
}

/**
 * Applies screen size perspective factors to a single dimension size, given the viewing angle,
 * distance to camera and perspective parameters. The factors can be calculated from the screen size
 * perspective parameters using screenSizePerspectiveScaleFactorFloat.
 *
 * Note that for single scale application, the screenSizePerspectiveScaleFloat can be used, which
 * will call this method, providing it the factors calculated from screenSizePerspectiveScaleFactorFloat.
 */

float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
  return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}

/**
 * Applies screen size perspective parameters to a single dimension size, given the viewing angle,
 * distance to camera and perspective parameters
 * {
 *    x: distanceDivisor,
 *    y: distanceOffset,
 *    z: minPixelSize (abs),
 *    w: sizePaddingInPixels (abs)
 * }
 */
float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
  return applyScreenSizePerspectiveScaleFactorFloat(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}

/**
 * Applies screen size perspective factors to a vec2 size (width/height), given the viewing angle,
 * distance to camera and perspective parameters. The factors can be calculated from the screen size
 * perspective parameters using screenSizePerspectiveScaleFactorVec2.
 *
 * Note that for single scale application, the screenSizePerspectiveScaleVec2 can be used, which
 * will call this method, providing it the factors calculated from screenSizePerspectiveScaleFactorVec2.
 */
vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
  return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / size.y, 1.0), size, factor.y);
}

/**
 * Applies screen size perspective parameters to a vec2 size (width/height), given the viewing angle,
 * distance to camera and perspective parameters
 * {
 *    x: distanceDivisor,
 *    y: distanceOffset,
 *    z: minPixelSize (abs),
 *    w: sizePaddingInPixels (abs)
 * }
 */
vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
  return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}
