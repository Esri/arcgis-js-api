#include <util/vsPrecision.glsl>
#include <util/alignPixel.glsl>
#include <util/hud.glsl>
#include <util/visualVariables.glsl>

uniform vec2 screenOffset;
uniform vec2 anchorPos;

#ifdef SCREEN_SIZE_PERSPECTIVE
uniform vec4 screenSizePerspective;
#endif

#ifdef DEBUG_DRAW_BORDER
varying vec3 debugBorderCoords;
#endif

attribute vec2 uv0;
attribute vec4 color;
attribute vec2 size;
attribute vec4 auxpos2;

varying vec4 vcolor;

varying vec2 vtc;
varying vec2 vsize;

#ifdef BINARY_HIGHLIGHT_OCCLUSION
varying float voccluded;
#endif

void main(void) {
  ProjectHUDAux projectAux;
  vec4 posProj = projectPositionHUD(projectAux);

  vec2 inputSize;

#ifdef SCREEN_SIZE_PERSPECTIVE

  inputSize = screenSizePerspectiveScaleVec2(size, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspective);

  vec2 screenOffsetScaled = screenSizePerspectiveScaleVec2(screenOffset, projectAux.absCosAngle, projectAux.distanceToCamera, screenSizePerspectiveAlignment);

#else

  inputSize = size;

  vec2 screenOffsetScaled = screenOffset;
#endif

#ifdef VV_SIZE
  // only use width (.xx) for proportional scaling
  // (if no width was defined in vv, width
  //  will be a copy of height vv)
  inputSize *= vvGetScale(auxpos2).xx;
#endif

  vec2 combinedSize = inputSize * pixelRatio;
  vec4 quadOffset = vec4(0);

#if defined(OCCL_TEST) || defined(BINARY_HIGHLIGHT_OCCLUSION)
  bool visible = testVisibilityHUD(posProj);
#endif

#ifdef BINARY_HIGHLIGHT_OCCLUSION
voccluded = visible ? 0.0 : 1.0;
#endif

#ifdef OCCL_TEST
  if (visible) {
#endif
    // UV goes from 0 to 1.99999, where the integer part is used
    // for the normalized vertex coordinates, and the fractional
    // part is used for texture sampling
    vec2 uv01 = floor(uv0);
    vec2 uv = uv0 - uv01;

    // Displace icon based on anchor position (normalized for size) and
    // absolute screen offset. anchorPos is [-0.5, 0.5]
    quadOffset.xy = ((uv01 - anchorPos) * 2.0 * combinedSize + screenOffsetScaled) / viewport.zw * posProj.w;

#ifdef SIGNED_DISTANCE_FIELD

    // SDF primitives might be scaled so that the SDF texture resolution does
    // not match the resolution of the canvas, but we still want to render
    // outline-only ('cross' and 'x') primitives cleanly. Aligning to a screen
    // pixel border at the geometry center achieves this, since SDF textures
    // always have power of 2 dimensions.
    posProj = alignToPixelOrigin(posProj, viewport.zw) + quadOffset;
#else
    posProj += quadOffset;

    // Aligning vertex positions to the nearest (using 'floor') screen pixel
    // border renders textures with pixel-perfect results. If the texture
    // resolution does not match the canvas resolution then aligning is
    // redundant.
    if (inputSize.x == size.x) {
      posProj = alignToPixelOrigin(posProj, viewport.zw);
    }
#endif

    gl_Position = posProj;

    vtc = uv;

#ifdef DEBUG_DRAW_BORDER
    debugBorderCoords = vec3(uv01, 1.0 / combinedSize);
#endif

    vsize = inputSize;
#ifdef OCCL_TEST
  } else {
    vtc = vec2(.0);

#ifdef DEBUG_DRAW_BORDER
    debugBorderCoords = vec3(0);
#endif

  }
#endif

  gl_Position = posProj;

#ifdef VV_COLOR
  vcolor = vvGetColor(auxpos2, vvColorValues, vvColorColors);
#else
  vcolor = color / 255.0;
#endif
}
