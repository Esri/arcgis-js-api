#include <util/vsPrecision.glsl>
#include <terrainRenderer/skirts.glsl>

uniform mat4 proj;
uniform mat4 view;
uniform vec3 origin;
uniform vec4 texOffsetAndScale;
uniform mat4 viewNormal;
uniform float skirtScale;

attribute vec3 position;
attribute vec2 uv0;

varying vec3 vnormal;
varying vec3 vpos;
varying vec2 vtc;

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#endif

#if defined(WIREFRAME_TEXTURE) || defined(TILE_BORDERS)
varying vec2 vuv;
#endif

#ifdef ATMOSPHERE
uniform vec3 lightDirection;
varying vec3 wpos;
varying vec3 wview;
varying vec3 wnormal;
varying vec3 wlight;
#endif

#ifdef OVERLAY
// these variables combine two possible overlays into one by using a vec4:
// components x/y are x/y of overlay 0, and components z/w are x/y of overlay 1
uniform vec4 overlayTexOffset;
uniform vec4 overlayTexScale;
varying vec4 vtcOverlay;
#endif

#ifdef SCREEN_SIZE_PERSPECTIVE /* debug only */

uniform vec4 screenSizePerspective;

varying float screenSizeDistanceToCamera;
varying float screenSizeCosAngle;

#endif

void main(void) {
  vpos = position;

#ifdef SPHERICAL
  vnormal = normalize(vpos + origin);
#else
  vnormal = vec3(0, 0, 1); // WARNING: up-axis dependent code
#endif

vec2 uv = uv0;
vpos = applySkirts(uv, vpos, vnormal, skirtScale);

#ifdef ATMOSPHERE
  wpos = (view * vec4(vpos, 1.0)).xyz;
  wnormal = (viewNormal * vec4(normalize(vpos+origin), 1.0)).xyz;
  wlight = (view  * vec4(lightDirection, 1.0)).xyz;
#endif

#if defined(WIREFRAME_TEXTURE) || defined(TILE_BORDERS)
  vuv = uv;
#endif

#ifdef SCREEN_SIZE_PERSPECTIVE /* debug only */

  vec3 viewPos = (view * vec4(vpos, 1.0)).xyz;

  screenSizeDistanceToCamera = length(viewPos);

  vec3 viewSpaceNormal = (viewNormal * vec4(normalize(vpos + origin), 1.0)).xyz;
  screenSizeCosAngle = abs(viewSpaceNormal.z);

#endif

  gl_Position = proj * view * vec4(vpos, 1.0);

#ifdef RECEIVE_SHADOWS
  // Shadowmap's cascading index used to be based on '1.0 / gl_FragCoord.w'
  // (i.e. the perspective interpolation of 'gl_Position.w'). Precision
  // issues on iPad/iPhone with the 'w' component require the depth to be
  // passed as varying to properly drive the cascading shadow map index.
  linearDepth = gl_Position.w;
#endif

  vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;

#ifdef OVERLAY
  vtcOverlay = vec4(uv, uv) * overlayTexScale + overlayTexOffset;
#endif
}
