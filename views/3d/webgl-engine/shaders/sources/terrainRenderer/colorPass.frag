#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/sceneLighting.glsl>
#include <util/screenSizePerspective.glsl>
#include <util/shadow.glsl>
#include <util/slice.glsl>
#include <terrainRenderer/overlay.glsl>

uniform vec3 camPos;
uniform vec3 viewDirection;
uniform sampler2D depthTex;
uniform int shadowMapNum;
uniform vec4 shadowMapDistance;
uniform mat4 shadowMapMatrix[4];

uniform float depthHalfPixelSz;
uniform sampler2D ssaoTex;
uniform vec4 viewportPixelSz;
uniform sampler2D tex;
uniform float opacity;

varying vec3 vnormal;
varying vec3 vpos;
varying vec2 vtc;

#if defined(TILE_BORDERS)
varying vec2 vuv;
#endif

#ifdef ATMOSPHERE
varying vec3 wnormal;
varying vec3 wlight;
#endif

#ifdef SCREEN_SIZE_PERSPECTIVE /* debug only */
uniform vec4 screenSizePerspective;
varying float screenSizeDistanceToCamera;
varying float screenSizeCosAngle;
#endif

const vec3 ambient = vec3(0.2, 0.2, 0.2);
const vec3 diffuse = vec3(0.8, 0.8, 0.8);
const float diffuseHardness = 2.5;
const float sliceOpacity = 0.2;

#ifdef OVERLAY
uniform sampler2D ovInnerColorTex;
uniform sampler2D ovOuterColorTex;
uniform sampler2D ovInnerWaterTex;
uniform sampler2D ovOuterWaterTex;
uniform float overlayOpacity;
varying vec4 vtcOverlay;
varying vec3 tbnTangent;
varying vec3 tbnBiTangent;
#endif

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#endif

float lum(vec3 c) {
  float max = max(max(c.r, c.g), c.b);
  float min = min(min(c.r, c.g), c.b);
  return (min + max) * 0.5;
}

#ifdef ATMOSPHERE
vec3 atmosphere(vec3 lightPos, vec3 normal, vec3 view) {
  vec3 surfaceColor   = vec3(0.0);
  vec3 fuzzySpecColor = vec3(1.0);
  vec3 subColor       = vec3(0.0);
  float rollOff       = 1.0;

  vec3 Ln = normalize(lightPos);
  vec3 Nn = normalize(normal);
  vec3 Hn = normalize(view + Ln);

  float ldn = dot(Ln, Nn);
  float diffComp = max(0.0, ldn);
  // clamp necessary here because values might cause flickering: #21549
  float vdn = clamp(1.0 - dot(view, Nn), 0.0, 1.0);
  float ndv = dot(view, Ln);

  vec3 diffContrib = surfaceColor * diffComp;
  float subLamb = max(0.0, smoothstep(-rollOff, 1.0, ldn) - smoothstep(0.0, 1.0, ldn));

  vec3 subContrib = subLamb * subColor;
  vec3 vecColor = vec3(vdn);

  vec3 diffuseContrib = (subContrib + diffContrib);
  vec3 specularContrib = (vecColor * fuzzySpecColor);

  return (diffContrib + specularContrib) * rollOff;
}
#endif

void main() {
  float shadow = 0.0;
#ifdef RECEIVE_SHADOWS
  shadow = evalShadow(vpos, linearDepth, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);
#endif
  float vndl = dot(normalize(vnormal), -lightingMainDirection);
  float k = smoothstep(0.0, 1.0, clamp(vndl*diffuseHardness, 0.0, 1.0));
  vec3 d = (1.0 - shadow/1.8) * diffuse * k;

  float ssao = viewportPixelSz.w < .0 ? 1.0 : texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;

  vec4 tileColor = texture2D(tex, vtc) * opacity;

#ifdef OVERLAY
  // This is the information from the overlay. The .w channel contains
  // the overlay specification.
  vec4 overlayColor  = overlayOpacity * getOverlayColor(ovInnerColorTex, ovOuterColorTex, vtcOverlay);
  tileColor = tileColor * (1.0 - overlayColor.a) + overlayColor;
#endif

  if (rejectBySlice(vpos)) {
    tileColor *= sliceOpacity;
  }

  vec3 atm = vec3(0.0);
#ifdef ATMOSPHERE
  float ndotl = max(0.0, min(1.0, vndl));
  atm = atmosphere(wlight, wnormal, -viewDirection);
  atm *= max(0.0, min(1.0, (1.0-lum(tileColor.rgb)*1.5))); //avoid atmosphere on bright base maps
  atm *= max(0.0, min(1.0, ndotl*2.0)); // avoid atmosphere on dark side of the globe
  atm *= tileColor.a; // premultiply with tile alpha
#endif

  vec3 albedo = atm + tileColor.rgb;
  vec3 normal = normalize(vnormal);

  // heuristic shading function used in the old terrain, now used to add ambient lighting
  float additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl*2.5, 0.0, 1.0));
  vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

  gl_FragColor = vec4(evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight), tileColor.a);

#ifdef OVERLAY
  // For draped water overlays we have to mix between the scene light hitting the ground and 
  // the water color in case of draped transparent surfaces. 
  vec4 overlayWaterMask = getOverlayColor(ovInnerWaterTex, ovOuterWaterTex, vtcOverlay);
  // for water polygons we use the length to guess if this normal got interpolated by
  // the mipmap and filtering process, e.g. at the border of a polygon.
  // These pixel are creating an unintended outline bevause of normal vs. default water mask 0,0,0 values. 
  float waterNormalLength = length(overlayWaterMask);
  if (waterNormalLength > 0.95) {
    mat3 tbnMatrix = mat3(tbnTangent, tbnBiTangent, vnormal);
    vec4 waterColor = overlayOpacity * getOverlayWaterColor(tileColor, overlayWaterMask, overlayColor, vpos, shadow, vnormal, camPos, tbnMatrix);
    // un-gamma the ground color to mix in linear space
    vec4 groundColor = vec4(pow(gl_FragColor.rgb, vec3(2.2)), gl_FragColor.w);
    waterColor = mix(groundColor, waterColor, waterColor.a);
    gl_FragColor = delinearizeGamma(waterColor);
  }
#endif

#ifdef SCREEN_SIZE_PERSPECTIVE /* debug only */
  // This is only used for debug rendering the screenSize perspective
  float perspectiveScale = screenSizePerspectiveScaleFloat(1.0, screenSizeCosAngle, screenSizeDistanceToCamera, screenSizePerspective);

  if (perspectiveScale <= 0.25) {
    gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), perspectiveScale * 4.0);
  }
  else if (perspectiveScale <= 0.5) {
    gl_FragColor = mix(gl_FragColor, vec4(0.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.25) * 4.0);
  }
  else if (perspectiveScale >= 0.99) {
    gl_FragColor = mix(gl_FragColor, vec4(0.0, 1.0, 0.0, 1.0), 0.2);
  }
  else {
    gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 1.0, 1.0), (perspectiveScale - 0.5) * 2.0);
  }

#endif

#if defined(TILE_BORDERS)
  vec2 dVuv = fwidth(vuv);
  vec2 edgeFactors = smoothstep(vec2(0.0), 1.5 * dVuv, min(vuv, 1.0 - vuv));
  float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);

  gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);
#endif // defined(TILE_BORDERS)

  gl_FragColor = highlightSlice(gl_FragColor, vpos);
}
