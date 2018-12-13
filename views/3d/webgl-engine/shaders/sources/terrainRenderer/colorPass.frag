#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/sceneLighting.glsl>
#include <util/screenSizePerspective.glsl>
#include <util/shadow.glsl>
#include <util/slice.glsl>
#include <terrainRenderer/overlay.glsl>

uniform vec3 lightDirection;
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

#if defined(WIREFRAME_TEXTURE) || defined(TILE_BORDERS)
struct WireframeSettings {
  float width;
  float falloff;
  float subdivision;
  vec4 color;
  float wireOpacity;
  float surfaceOpacity;
};

uniform WireframeSettings wireframe;
#endif

varying vec3 vnormal;
varying vec3 vpos;
varying vec2 vtc;

#if defined(WIREFRAME_TEXTURE) || defined(TILE_BORDERS)
varying vec2 vuv;
#endif

#ifdef ATMOSPHERE
varying vec3 wpos;
varying vec3 wview;
varying vec3 wnormal;
varying vec3 wlight;
#endif

#ifdef SCREEN_SIZE_PERSPECTIVE /* debug only */
uniform vec4 screenSizePerspective;

varying float screenSizeDistanceToCamera;
varying float screenSizeCosAngle;
#endif

const vec3 ambient = vec3(0.2,0.2,0.2);
const vec3 diffuse = vec3(0.8,0.8,0.8);
const float diffuseHardness = 2.5;
const float sliceOpacity = 0.2;

#ifdef OVERLAY
uniform sampler2D overlay0Tex;
uniform sampler2D overlay1Tex;
uniform float overlayOpacity;
varying vec4 vtcOverlay;
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
  float vdn = 1.0 - dot(view, Nn);
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
  vec3 a = ambient;

  float shadow = 0.0;
#ifdef RECEIVE_SHADOWS
  shadow = evalShadow(vpos, linearDepth, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);
#endif
  float vndl = dot(normalize(vnormal), lightDirection);
  float k = smoothstep(0.0, 1.0, clamp(vndl*diffuseHardness, 0.0, 1.0));
  vec3 d = (1.0 - shadow/1.8) * diffuse * k;

  float ssao = viewportPixelSz.w < .0 ? 1.0 : texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;

  vec4 tileColor = texture2D(tex, vtc) * opacity;

#ifdef OVERLAY
  vec4 overlayColor = getOverlayColor(overlay0Tex, overlay1Tex, vtcOverlay, overlayOpacity);

  // tileColor and overlayTexCols have pre-multiplied alpha
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

#if defined(WIREFRAME_TEXTURE) || defined(TILE_BORDERS)

  vec2 vuvScaled = vuv * wireframe.subdivision;
  vec2 vuvMod = fract(vuvScaled);

  vec2 dVuv = fwidth(vuvScaled);
  dVuv = max(vec2(0.00001), dVuv); // workaround against flickering skirts, see #10245

  vec2 edgeFactors = smoothstep((wireframe.width - wireframe.falloff) * dVuv,
                                wireframe.width * dVuv, min(vuvMod, 1.0 - vuvMod));

  float edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);

#ifdef WIREFRAME_TEXTURE
  vec3 wireframeColor = mix(gl_FragColor.rgb, wireframe.color.rgb, edgeFactor * wireframe.color.a);
  float wireframeAlpha = mix(wireframe.surfaceOpacity, wireframe.wireOpacity, edgeFactor);
  gl_FragColor = vec4(wireframeColor * wireframeAlpha, wireframeAlpha * gl_FragColor.a);
#endif


#ifdef TILE_BORDERS
  dVuv = fwidth(vuv);
  edgeFactors = smoothstep((wireframe.width - wireframe.falloff) * dVuv,
                            wireframe.width * dVuv, min(vuv, 1.0 - vuv));
  edgeFactor = 1.0 - min(edgeFactors.x, edgeFactors.y);

  gl_FragColor = mix(gl_FragColor, vec4(1.0, 0.0, 0.0, 1.0), edgeFactor);
#endif

#endif // defined(WIREFRAME_TEXTURE) || defined(TILE_BORDERS)

  gl_FragColor = highlightSlice(gl_FragColor, vpos);
}
