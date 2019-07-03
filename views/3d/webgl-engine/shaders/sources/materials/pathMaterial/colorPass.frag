#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>
#include <util/sceneLighting.glsl>

uniform vec3 camPos;
uniform vec3 localOrigin;

// material parameters
//////////////////////////////////////////
uniform vec3 ambient;
uniform vec3 diffuse;
uniform vec3 specular;
uniform float opacity;
uniform float layerOpacity;

#if defined(SYMBOLVERTEXCOLORS) || defined(COMPONENTCOLORS)
varying mediump float colorMixMode; // varying int is not supported in WebGL
#else
uniform int colorMixMode;
#endif

#ifdef RECEIVE_SHADOWS
uniform sampler2D depthTex;
uniform int shadowMapNum;
uniform vec4 shadowMapDistance;
uniform mat4 shadowMapMatrix[4];
uniform float depthHalfPixelSz;
#endif

#ifdef RECEIVE_SSAO
uniform sampler2D ssaoTex;
uniform vec4 viewportPixelSz;
#endif

varying vec3 vpos;
varying vec3 vnormal;
// the vertex color variable will contain vvColor and/or vvOpacity or 1,1,1,1
varying vec4 vcolor; 
varying vec4 vcolorExt;

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#include <util/shadow.glsl>
#endif

#include <materials/pathMaterial/colorMixMode.glsl>

void main() {
  discardBySlice(vpos);

  vec4 texColor = vec4(1.0);

  vec3 viewDir = vpos - camPos;

  // compute normal
  // TODO: this is not in sync with the normal pass
#ifdef GROUND_NORMAL_SHADING
#if VIEWING_MODE == VIEWING_MODE_GLOBAL
  vec3 normal = normalize(vpos + localOrigin);
#else
  vec3 normal = vec3(0.0, 0.0, 1.0);
#endif
#else
#ifdef DOUBLESIDED
  vec3 normal = dot(vnormal, viewDir)>0.0 ? -vnormal : vnormal;
#elif defined(WINDINGORDERDOUBLESIDED)
  vec3 normal = gl_FrontFacing ? vnormal : -vnormal;
#else
  vec3 normal = vnormal;
#endif
  normal = normalize(normal);
#endif

  // compute ssao
#ifdef RECEIVE_SSAO
  float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
  ssao = viewportPixelSz.z < 0.0 ? 1.0 : ssao;
#else
  float ssao = 1.0;
#endif

  // At global scale we create some additional ambient light based on the main light to simulate global illumination
  float additionalAmbientScale;
  vec3 additionalLight = sceneLightingAdditionalLightGlobal(vpos + localOrigin, ssao, additionalAmbientScale);

  // compute shadowing
  float shadow = 0.0;
#ifdef RECEIVE_SHADOWS
  shadow = evalShadow(vpos, linearDepth, depthTex, shadowMapNum, shadowMapDistance, shadowMapMatrix, depthHalfPixelSz);
#elif VIEWING_MODE == VIEWING_MODE_GLOBAL
  // at global scale (and in global scenes) we fall back to this approximation
  // to shadow objects on the dark side of the earth
  shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);
#endif

  vec3 matColor = max(ambient, diffuse); // combine the old material parameters into a single one

  vec3 albedo_ = mixExternalColor(vcolor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
  float opacity_ = layerOpacity * mixExternalOpacity(vcolor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));
  albedo_+= 0.25 * specular; // don't completely ignore specular for now

#ifdef TRANSPARENCY_DISCARD
  if (opacity_ < 0.001) {
    discard;
  }
#endif

  vec3 shadedColor = evaluateSceneLighting(normal, albedo_, shadow, 1.0 - ssao, additionalLight);
  gl_FragColor = vec4(shadedColor, opacity_);
  gl_FragColor = highlightSlice(gl_FragColor, vpos);
}
