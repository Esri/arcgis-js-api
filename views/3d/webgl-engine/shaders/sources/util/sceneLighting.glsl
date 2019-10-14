// Scene Lighting Definitions:
// ================================

// defines:
//   - SH_ORDER: 1|2|3
// input:
//   - normal: vec3
//   - albedo: vec3
//   - shadow: float
//   - ssao: float
// return:
//   - color: vec3

#include <util/pbrUtils.glsl>

// main light
/////////////////////////////////////////
uniform vec3 lightingMainDirection;
uniform vec3 lightingMainIntensity;

// ambient lighting
/////////////////////////////////////////

#ifndef SH_ORDER
  #define SH_ORDER 2
#endif

#if SH_ORDER == 0
  uniform vec3 lightingAmbientSH0;
#elif SH_ORDER == 1
  uniform vec4 lightingAmbientSH_R;
  uniform vec4 lightingAmbientSH_G;
  uniform vec4 lightingAmbientSH_B;
#elif SH_ORDER == 2
  uniform vec3 lightingAmbientSH0;
  uniform vec4 lightingAmbientSH_R1;
  uniform vec4 lightingAmbientSH_G1;
  uniform vec4 lightingAmbientSH_B1;
  uniform vec4 lightingAmbientSH_R2;
  uniform vec4 lightingAmbientSH_G2;
  uniform vec4 lightingAmbientSH_B2;
#endif

// special tweaking
//////////////////////////////////////////
uniform float lightingFixedFactor;
uniform float lightingGlobalFactor;

uniform float ambientBoostFactor;

// The albedo color of the ground used in the environment illumination algorithm
const float GROUND_REFLECTANCE = 0.2; //This is the set value of the diffuse reflectance of the ground surface

const float GAMMA_SRGB = 2.1;
const float INV_GAMMA_SRGB = 0.4761904;  // 1 / GAMMA_SRGB

// Material PBR parameters
#ifdef USE_PBR
  #ifdef USE_PBR_CLEAR_COATING
    uniform float clearCoating;
    uniform float clearCoatRoughness;
  #endif
#endif

// evaluation
//////////////////////////////////////////
#ifdef USE_PBR
  // calculateAmbientRadiance is used calculate specular radiance of the sky
  // - in the night calculateAmbientRadiance gives darker color compared to calculateAmbientComponent which integrates contributions of the moon
  // - calculateAmbientRadiance gives more predictable color compared to calculateAmbientIrradiance that depends on normal
  // - in future more physically accurate model should be established
  vec3 calculateAmbientRadiance(float ssao)
  {
    // evaluate the sh ambient light
    vec3 ambientLight ;
    ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2; // returning the darker value in the night

    return ambientLight *= (1.0 - ssao) * skyTransmittance; // skyTransmittance is slightly bluish giving more natural look
  }
#endif
// calculateAmbientIrradiance is used calculate diffuse radiance of the sky
// the spherical harmonics in the night integrate the contributions of the stars giving stronger radiance then using just atmosphere
vec3 calculateAmbientIrradiance(vec3 normal, float ssao)
{
    // evaluate the sh ambient light
  #if SH_ORDER == 0
    vec3 ambientLight = 0.282095 * lightingAmbientSH0;
  #elif SH_ORDER == 1
    vec4 sh0 = vec4(
      0.282095,
      0.488603 * normal.x,
      0.488603 * normal.z,
      0.488603 * normal.y
    );
    vec3 ambientLight = vec3(
      dot(lightingAmbientSH_R, sh0),
      dot(lightingAmbientSH_G, sh0),
      dot(lightingAmbientSH_B, sh0)
    );
  #elif SH_ORDER == 2
    vec3 ambientLight = 0.282095 * lightingAmbientSH0;

    vec4 sh1 = vec4(
      0.488603 * normal.x,
      0.488603 * normal.z,
      0.488603 * normal.y,
      1.092548 * normal.x * normal.y
    );
    vec4 sh2 = vec4(
      1.092548 * normal.y * normal.z,
      0.315392 * (3.0 * normal.z * normal.z - 1.0),
      1.092548 * normal.x * normal.z,
      0.546274 * (normal.x * normal.x - normal.y * normal.y)
    );
    ambientLight += vec3(
      dot(lightingAmbientSH_R1, sh1),
      dot(lightingAmbientSH_G1, sh1),
      dot(lightingAmbientSH_B1, sh1)
    );
    ambientLight += vec3(
      dot(lightingAmbientSH_R2, sh2),
      dot(lightingAmbientSH_G2, sh2),
      dot(lightingAmbientSH_B2, sh2)
    );
  #endif
  ambientLight *= (1.0 - ssao);

  return ambientLight;
}

vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
  // evaluate the main light
  #if defined(TREE_RENDERING)
    // Special case for tree rendering:
    // We shift the Lambert lobe to the back, allowing it to reach part of the hemisphere
    // facing away from the light. The idea is to get an effect where light is transmitted
    // through the tree.
    float minDot = -0.5;
    float dotRange = 1.0 - minDot;
    float dotNormalization = 0.66; // guessed & hand tweaked value, for an exact value we could precompute an integral over the sphere

    float dotVal = dotNormalization * (clamp(-dot(normal, lightingMainDirection), 1.0 - dotRange, 1.0) - minDot) * (1.0 / dotRange);
  #else
    float dotVal = clamp(-dot(normal, lightingMainDirection), 0.0, 1.0);
  #endif

  // move lighting towards (1.0, 1.0, 1.0) if requested
  dotVal = mix(dotVal, 1.0, lightingFixedFactor);

  vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;

  vec3 ambientLight = calculateAmbientIrradiance(normal, ssao);

  // inverse gamma correction on the albedo color
  vec3 albedoGammaC = pow(albedo, vec3(GAMMA_SRGB));

  // physically correct BRDF normalizes by PI
  vec3 totalLight = mainLight + ambientLight + additionalLight;
  totalLight = min(totalLight, vec3(PI, PI, PI));
  vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

  // apply gamma correction to the computed color
  outColor = pow(outColor, vec3(1.0/GAMMA_SRGB));

  return outColor;
}

vec3 sceneLightingAdditionalLightGlobal(vec3 worldPos, float ssao, out float additionalAmbientScale) {
  // heuristic lighting model originally used in the terrain shading
  // now used to generated additional ambient light

#if VIEWING_MODE == VIEWING_MODE_GLOBAL
    float vndl = -dot(normalize(worldPos), lightingMainDirection);
#else
    float vndl = -dot(vec3(0.0, 0.0, 1.0), lightingMainDirection);
#endif

  additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
  return ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
}


#ifdef USE_PBR

//****************************************************************************************
//****                                                                                ****
//****                              PBR Rendering                                     ****
//****                                                                                ****
//****************************************************************************************

  // **************************   Evaluate Scene lighting and deduce the reflected color (PBR)  ******************************

  vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, float _roughness, float _metalness, vec3 _emission, float _reflectance, float additionalAmbientIrradiance)
  {
    // Calculate half vector between view and light direction

      vec3 viewDirection = - normalize(viewDir);
      vec3 mainLightDirection = -lightingMainDirection;
      vec3 h = normalize(viewDirection + mainLightDirection);

    // PBR input parameters

      PBRShadingInfo inputs;
      inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
      inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0); // abs accounts for correclty ray refraction
      inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
      inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
      inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
      inputs.LdotNG = clamp(dot(normalGround, mainLightDirection), 0.001, 1.0);
      inputs.VdotNG = clamp(dot(-viewDirection, normalGround), -1.0, 1.0);
      vec3 reflectedView = normalize(reflect(viewDirection, normal));
      inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);

      inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
      inputs.groundReflectance = vec3(GROUND_REFLECTANCE);
      inputs.ssao = ssao;

      inputs.roughness = clamp(_roughness * _roughness, 0.001, 0.99);
      inputs.metalness = _metalness;


    // calculating fresnel reflection - color that is specularly reflected
    // non metallic - reflectance [0, 1] -> fresnel = [0, 16] - water (fresnel = 0.02%), plastic (fresnel = 0.04%), gemstones (fresnel = 0.16%)
    // metallic - fresnel is albedo

      inputs.f0 = (0.16 * _reflectance * _reflectance) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
      inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
      inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);

      #ifdef USE_PBR_CLEAR_COATING
        inputs.f0_ClearCoating = clearCoatingFresnel;
        inputs.f90_ClearCoating = vec3(clamp(dot(inputs.f0_ClearCoating, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
        float clearCoatRoughnessLinear = mix(0.089, 0.6, clearCoatRoughness);
        inputs.roughnessClearCoating = clearCoatRoughnessLinear * clearCoatRoughnessLinear;
        inputs.coating = clearCoating;
      #endif






  // ***********  Calculate Overall Sky Illumination for PBR rendering ***********

    // ***  Calculate Sky Irradiance (Diffuse Illumination) ***
    // The irradiance sky model consist of
    // - sky irradiance
    // - sun irradiance
    // - fill light irradiance
    // [NOTE] - Irradiance is integrated radiance of the Sky in the direction of the normal

    // Calculate direction of fill light irradiance component
    // adding fill lights for the diffuse illumination (defined by incoming irradiance) creates visually pleasing results. Inspired by the look in game "The Last of Us" : http://miciwan.com/SIGGRAPH2013/Lighting%20Technology%20of%20The%20Last%20Of%20Us.pdf
    // these fill lights give more definition in the shadowed areas
    // we calculate the direction of the two fill lights that are tangential to the ground and pointing in slightly tilted/altered direction of the east-west. The angle between the fill lights is 180.

    // Full formula: vec3 eastWest = normalize(cross(normalGround,vec3(0.0, 0.0, 1.0)); vec3 ambientDir = nomalize( 5.0 * eastWest + cross(normalGround, eastWest));
      vec3 ambientDir = normalize(vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2],
                                     - 5.0 * normalGround[0] - normalGround[2] * normalGround[1],
                                       normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]));

      inputs.NdotAmbDir = abs(dot(normal, ambientDir));

    // Calculate the irradiance components: sun, fill lights and the sky.
      vec3 mainLightIrradianceComponent  = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
      vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
      vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight; // calculateAmbientIrradiance for localView and additionalLight for gloabalView

    // Assemble the overall irradiance of the sky that illuminates the surface
      inputs.skyIrradianceToSurface    = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
    // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
      inputs.groundIrradianceToSurface = inputs.groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;


    // ***  Calculate Sky Radiance (Specular Illumination) ***
    // The radiance sky model consist of
    // - sky radiance
    // - sun radiance
    // - Horizon Light radiance
    // [NOTE] - This is integrated radiance of the Sky in the direction of the reflected ray based on the roughness of the surface

    // Calculate direction of Horizon Light
    // adding horizon lights for the specular illumination (defined by incoming radiance) creates visually pleasing results. Inspired by the area lights in Unreal Engine: https://cdn2.unrealengine.com/Resources/files/2013SiggraphPresentationsNotes-26915738.pdf (this is basicly Ring Illumination)
    // the horizon light gives more natural look of the reflected (for specular surfaces) sky especially at sunsets and sunrises (reddish reflection of the sky at horizon)
    // we calculate the of the horizon direction in function of the reflected ray and normal to the ground, and

      vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
      vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
      inputs.NdotH_Horizon = dot(normal, horizonRingH);

      vec3 mainLightRadianceComponent  = normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
      vec3 horizonLightRadianceComponent = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
      vec3 ambientLightRadianceComponent = calculateAmbientRadiance(ssao) + additionalLight; // calculateAmbientRadiance for localView and additionalLight for gloabalView

    // Assemble the overall radiance of the sky that illuminates the surface
      inputs.skyRadianceToSurface    =  ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
    // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radince by the groundReflectance
      inputs.groundRadianceToSurface = inputs.groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;

    // Clear coat has to be treated separately since it has different roughness value
      #ifdef USE_PBR_CLEAR_COATING

      vec3 mainLightRadianceComponentClearCoat  = normalDistribution(inputs.NdotH, inputs.roughnessClearCoating) * lightingMainIntensity * (1.0 - shadow);
      vec3 horizonLightRadianceComponentClearCoat = normalDistribution(inputs.NdotH_Horizon, min(inputs.roughnessClearCoating + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;

      inputs.skyRadianceToClearCoat    =  ambinetLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;

      inputs.groundRadianceToClearCoat = inputs.groundReflectance * (ambinetLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
      #endif

    // Calculate average ambient radiance - this is used int the gamut mapping part to deduce the black level that is soft compressed
      inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + inputs.groundReflectance[1]);





  // ***********  Evaluate the Illumination and Deduce the Reflected Color ***********
  // Calculate individual components of the reflected color

    // Calculate the reflected color based on the Sky Illumination
      vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
    // Calculate the reflected color based on the additional irradiance - can be used to brighten the model or for to simulate diffusion reflection of the water surface
      vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
    // Calculate emission of the surface
      vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));

    // Assemble the final reflected outColor in linear RGB space
      vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;

    // apply tone mapping and gamma correction to the computed color
      vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));
  return outColor;
  }
#endif
