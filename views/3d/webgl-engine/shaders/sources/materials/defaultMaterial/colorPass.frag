#include <util/enableExtensions.glsl>
#include <util/fsPrecision.glsl>
#include <util/slice.glsl>
#include <util/sceneLighting.glsl>

#ifdef TEXTURING
#include <materials/defaultMaterial/texturingInputs.glsl>
#endif

#define FRAGMENT_SHADER
#include <materials/defaultMaterial/vertexTangents.glsl>
#include <materials/defaultMaterial/textureNormals.glsl>

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

#if (NORMALS == NORMALS_COMPRESSED) || (NORMALS == NORMALS_DEFAULT)
  varying vec3 vnormal;
#endif

#if defined(VERTEXCOLORS)
varying vec4 vcolor;
#endif
varying vec4 vcolorExt;

#ifdef RECEIVE_SHADOWS
varying float linearDepth;
#include <util/shadow.glsl>
#endif

#ifdef TREE_RENDERING
  uniform mat4 view;
#endif

#ifdef TEXTURING
#include <materials/defaultMaterial/texturing.glsl>
#endif

#include <materials/defaultMaterial/colorMixMode.glsl>

void main() {
  discardBySlice(vpos);

#ifdef TEXTURING
  vec4 texColor = textureLookup(tex, vtc);

  #if defined(TEXTURE_ALPHA_PREMULTIPLIED)
    texColor.rgb /= texColor.a;
  #endif

  discardOrAdjustTextureAlpha(texColor);
#else /* TEXTURING */
  vec4 texColor = vec4(1.0);
#endif /* TEXTURING */

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
  #if (NORMALS == NORMALS_SCREEN_DERIVATIVE)
    vec3 normal = normalize(cross(dFdx(vpos),dFdy(vpos)));
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
#if defined(VERTEXCOLORS)
  // Internal colors: varying vcolor + uniform ambient/diffuse, external colors: varying vcolorExt
  vec3 albedo_ = mixExternalColor(vcolor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
  float opacity_ = layerOpacity * mixExternalOpacity(vcolor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));
#else
  // Internal colors: uniform ambient/diffuse, external colors: varying vcolorExt
  vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
  float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
#endif
  albedo_+= 0.25 * specular; // don't completely ignore specular for now


  #if defined(TEXTURE_NORMALS)
    mat3 tangentSpace = computeTangentSpace(normal);
    vec3 shadingNormal = computeTextureNormal(tangentSpace);
  #else
    vec3 shadingNormal = normal;
  #endif

  #ifdef TREE_RENDERING
    // make sure we use unflipped normal
    shadingNormal = normalize(vnormal);

    // make tree 20% brighter
    albedo_ *= 1.2;

    // view forward vector in global coordinates
    vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);

    // factor indicating how aligned the lighting direction and view axis are
    float alignmentLightView = clamp(dot(-viewForward, lightingMainDirection), 0.0, 1.0);

    // we approximate the tree crown transmittance based on view direction and tree crown normal
    float transmittance = 1.0 - clamp(dot(-viewForward, shadingNormal), 0.0, 1.0);

    float treeRadialFalloff = vcolor.r;
    float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
    additionalLight += backLightFactor * lightingMainIntensity;
  #endif

  vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo_, shadow, 1.0 - ssao, additionalLight);
  gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
}
