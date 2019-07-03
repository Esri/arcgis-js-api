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

// main light
/////////////////////////////////////////
uniform vec3 lightingMainDirection;
uniform vec3 lightingMainIntensity;

// ambient lighting
/////////////////////////////////////////

#ifndef SH_ORDER
  #ifdef USE_PBR
    #define SH_ORDER 0
  #else
    #define SH_ORDER 2
  #endif
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
uniform vec3 groundColor;

const float GAMMA = 2.1;
const float PI = 3.14159;
const float halfPI = 1.57079;
const float invPI = 0.318309;
const float skyIlluminationAngle = 1.57079; // angle describing the area if the sky illumination - in our case it is the whole upper hemisphere

// Material PBR parameters
#ifdef USE_PBR
  #ifdef USE_PBR_CLEAR_COATING
    uniform float clearCoating;
    uniform float clearCoatRoughness;
  #endif
#endif

// default PBR values
const vec3 clearCoatingFresnel = vec3(0.04);

struct PBRShadingInfo
{
    float NdotL;                  // cos angle between normal and light direction
    float NdotV;                  // cos angle between normal and view direction
    float NdotH;                  // cos angle between normal and half vector
    float VdotH;                  // cos angle between view direction and half vector
    float LdotH;                  // cos angle between view light direction and half vector
    float NdotNG;                 // cos angle between normal and normal of the ground
    float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
    vec3 diffuseColor;            // diffuse color of the material used in environment illumination
    vec3 ambientSky;              // irradiance of the sky
    vec3 ambientGround;           // irradiance of the ground
    float ssao;                   // ssao coefficient
    vec3 groundColor;             // albedo color of the sky
    vec3 albedoLinear;            // linear color of the albedo
    vec3 f0;                      // fresnel value at normal incident light
    vec3 f90;                     // fresnel value at 90o of incident light
    vec3 f0_ClearCoating;         // fresnel value of the coating at normal incident light
    vec3 f90_ClearCoating;        // fresnel value of the coating at 90o of incident light
    float roughnessClearCoating;  // roughness of the coating
    float coating;                // intensity of the clear coating
    float metalness;              // metalness of the material
    float roughness;              // roughness of the material
    float refraction;             // refraction coeficient
};
// evaluation
//////////////////////////////////////////

vec3 calculateAmbientComponent(vec3 normal, float ssao)
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

  vec3 ambientLight = calculateAmbientComponent(normal, ssao);

  // inverse gamma correction on the albedo color
  vec3 albedoGammaC = pow(albedo, vec3(GAMMA));

  // physically correct BRDF normalizes by PI
  vec3 totalLight = mainLight + ambientLight + additionalLight;
  totalLight = min(totalLight, vec3(PI, PI, PI));
  vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

  // apply gamma correction to the computed color
  outColor = pow(outColor, vec3(1.0/GAMMA));

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


//****************************************************************************************
//****                                                                                ****
//****                              PBR Rendering                                     ****
//****                                                                                ****
//****************************************************************************************


// **************************  Directional Illumination   ******************************
#ifdef USE_PBR

  // Specular Fersnel reflection depending on the angle and the fresnel value at the incident angle
  vec3 fresnelReflection(float angle, vec3 f0, vec3 f90) {
      return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
  }

  // Lambert Diffuse reflectance factor with preservation of the energy term
  vec3 calculateDiffuseReflectanceFactor(PBRShadingInfo inputs)
  {
    return (1.0 - inputs.metalness) * inputs.albedoLinear * invPI;
  }

  // Normal distribution of the microfacets for the specular reflectance (GGX implementation)
  float normalDistribution(float NdotH, float roughness)
  {
    float r2 = roughness * roughness;
    float NdotH2 = NdotH * NdotH;
    float denom = (NdotH2 * (r2 - 1.0) + 1.0) * (NdotH2 * (r2 - 1.0) + 1.0) * PI;
    return r2 / denom;
  }

  // Optimized geometric occlusion (masking and shadowing of microfacets) (Smith-GGX implementation)
  float geometricOcclusion(float NdotV, float NdotL, float roughness)
  {
      float a2 = roughness * roughness;
      float GGXL = NdotV * sqrt((-NdotL * a2 + NdotL) * NdotL + a2);
      float GGXV = NdotL * sqrt((-NdotV * a2 + NdotV) * NdotV + a2);
      return 0.5 / (GGXV + GGXL);
  }

  // Geometric occlusion term if there is no masking or shadowing - clear coat case
  float geometricOcclusionKelemen(float LoH)
  {
      return 0.25 / (LoH * LoH);
  }

  // Specular reflectance factor based on Cook-Torrance model
  vec3 calculateSpecularReflectanceFactor(PBRShadingInfo inputs, float roughness, vec3 f0, vec3 f90)
  {
    vec3  F = fresnelReflection(inputs.VdotH, f0, f90); // Fresnel reflection
    float D = normalDistribution(inputs.NdotH, roughness); // normal distribution of the microfacets
    float V = geometricOcclusion(inputs.NdotV, inputs.NdotL, roughness); // geometric occlusion of the microfacets
    return (D * V) * F;
  }

  // Evaluate bidirectional reflectance distribution function based on Cook-Torrance model and a clear coat model
  vec3 brdfPBR(PBRShadingInfo inputs)
  {
    // Base Layer specular and diffuse component
    vec3 diffuseComponent  = calculateDiffuseReflectanceFactor(inputs);
    vec3 specularComponent   = calculateSpecularReflectanceFactor(inputs, inputs.roughness, inputs.f0, inputs.f90);

    #ifdef USE_PBR_CLEAR_COATING
      // Specular component of the coating layer on top of the base layer
      vec3  Fc = fresnelReflection(inputs.LdotH, inputs.f0_ClearCoating, , inputs.f90_ClearCoating) * inputs.coating;
      float Dc = normalDistribution(inputs.NdotH, inputs.roughnessClearCoating);
      float Vc = geometricOcclusionKelemen(inputs.LdotH);
      vec3 specularComponentCoating =  (Dc * Vc) * Fc;

      // Final reflection is composed of diffuse component and two specular lobes (material and coating)
      return (1.0 - inputs.ssao) * (diffuseComponent * (1.0-Fc) + specularComponent * (1.0-Fc) * (1.0-Fc) + specularComponentCoating);
    #else
      // Final reflection is composed of diffuse component and specular lobe
      return (1.0 - inputs.ssao) * (diffuseComponent + specularComponent);
      //return specularComponent;
    #endif
  }

  // **************************   Environment Lighting    ******************************

  // Calculate the color of the ground based on the groundColor illuminated by the ambientSky
  // changing time of a day changes the reflected color od the ground
  vec3 calculateGroundComponent(PBRShadingInfo inputs)
  {
    return inputs.groundColor * inputs.ambientSky;
  }

  // Analytical approximation of integrated DFG function used in specular term (D - distribution, F -  Fresnel, G - geometry attenuation)
  vec2 prefilteredDFG_Analytical(PBRShadingInfo inputs) {
      // Karis' approximation based on Lazarov's
      const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
      const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
      vec4 r = inputs.roughness * c0 + c1;
      float a004 = min(r.x * r.x, exp2(-9.28 * inputs.NdotV)) * r.x + r.y;
      return vec2(-1.04, 1.04) * a004 + r.zw;
  }

  // ** Evaluate Irradiance for the Diffuse illumination **

      // To calculate the diffuse irradiance from a given direction we have to evaluate illumination over a hemisphere defined by the normal

      // Function evaluates the half of the irradiance integral (integral is already anlitically solved)
      // - the sky is between the firstAngle and secondAngle
      // - the ground is everywhere else
      vec3 evaluateIrradianceIntegral(float firstAngle, float secondAngle, PBRShadingInfo inputs)
      {
        float firstAngleClamped = clamp(firstAngle, 0.0, halfPI);
        float secondAngleClamped = clamp(secondAngle, 0.0, halfPI);

        float ground = sin(firstAngleClamped) - sin(0.0) + sin(halfPI) - sin(secondAngleClamped);
        float sky = sin(secondAngleClamped) - sin(firstAngleClamped);

        return ground * inputs.ambientGround + sky * inputs.ambientSky;
      }

      // Analytically evaluates diffuse environment illumination (incoming irradiance)
      // the model assumes that top hemisphere illuminates the sky, and bottom hemisphere is the ground
      // Top hemisphere is defined with the up vector
      vec3 evaluateDiffuseIllumination_Analytical(PBRShadingInfo inputs)
      {
        // Angle between the up vector and the normal
        float theta = acos(max(min(inputs.NdotNG, 1.0), -1.0));

        // Based on the theta deduce the angeles that determines the visibility of the sky and the ground
        // the sky is between the firstAngle and secondAngle, the ground is everywhere else
        float firstAngle = halfPI + theta - skyIlluminationAngle;
        float secondAngle = halfPI + theta + skyIlluminationAngle;

        // Calculate the integrated irradiance of the left and right part of the hemisphere
        vec3 LeftIntegral = evaluateIrradianceIntegral(halfPI - secondAngle, halfPI - firstAngle, inputs);
        vec3 RightIntegral = evaluateIrradianceIntegral(firstAngle - halfPI, secondAngle - halfPI, inputs);

        // Combine the integrated left and right irradiance and apply ssao
        vec3 ambientDiffuseLight = (1.0 - inputs.ssao) * (LeftIntegral + RightIntegral) / 2.0;
        return ambientDiffuseLight;
      }


  // ** Evaluate Directional Radiance for the Specular illumination **

      // Integrated radiance depending on the roughness and the direction of the reflected ray (theta) - (integral is already analytically solved)
      float integratedRadiance(float theta, float roughness)
      {
        float r4 = pow(roughness, 4.0);
        float r2 = pow(roughness, 2.0);

        float cosT2 = cos(theta) * cos(theta);
        float denom_1 = (cosT2 * (2.0 * r4 - 4.0 * r2 + 2.0) + 2.0 * r2 - 2.0);
        float denom_2 = (2.0 * r4 - 2.0 * r2);

        float integral = 2.0 * r2 * (1.0 / denom_1 - 1.0 / denom_2);
        return integral;
      }

      // Integrated radiance over the half of the hemisphere
      // - the sky is between the firstAngle and secondAngle
      // - the ground is everywhere else
      vec3 evaluateRadianceIntegral(float firstAngle, float secondAngle, PBRShadingInfo inputs, float roughness)
      {
        float firstAngleClamped = clamp(firstAngle, 0.0, halfPI);
        float secondAngleClamped = clamp(secondAngle, 0.0, halfPI);
        float ro = roughness;

        float ground = integratedRadiance(firstAngleClamped, ro) - integratedRadiance(0.0, ro) + integratedRadiance(halfPI, ro) - integratedRadiance(secondAngleClamped, ro);
        float sky = integratedRadiance(secondAngleClamped, ro) - integratedRadiance(firstAngleClamped, ro);

        return ground * inputs.ambientGround + sky * inputs.ambientSky;
      }

      // Analytically evaluate specular environment illumination (incoming directional radiance - based on the roughness factor)
      // the model assumes that top hemisphere illuminates the sky, and bottom hemisphere is the ground
      vec3 evaluateSpecularIllumination_Analytical(PBRShadingInfo inputs, float RdotNG, float roughness)
      {
        // Angle between the up vector and the reflected ray (reflected of the normal)
        float theta = acos(max(min(RdotNG, 1.0), -1.0));

        // Based on the theta deduce the angeles that determines the visibility of the sky and the ground
        // the sky is between the firstAngle and secondAngle, the ground is everywhere else
        float firstPoint = - halfPI + theta + skyIlluminationAngle;
        float secondPoint = - halfPI + theta - skyIlluminationAngle;

        // Calculate the integrated directional radiance of the left and right part of the hemisphere
        vec3 LeftIntegral = evaluateRadianceIntegral(halfPI - firstPoint, halfPI - secondPoint, inputs, roughness);
        vec3 RightIntegral = evaluateRadianceIntegral(secondPoint - halfPI, firstPoint - halfPI, inputs, roughness);

        // Combine the integrated left and right irradiance and apply ssao
        vec3 enviromentSpecularLight = (1.0 - inputs.ssao) * (LeftIntegral + RightIntegral) / 2.0;
        return enviromentSpecularLight;
      }

  // ** Evaluate environment illumination end deduce the reflected color **

  vec3 evaluateEnviromentIllumination(PBRShadingInfo inputs) {
      //Diffuse indirect Illumination
      vec3 indirectDiffuse = evaluateDiffuseIllumination_Analytical(inputs);

      // Specular indirect Illumination
      vec3 indirectSpecular = evaluateSpecularIllumination_Analytical(inputs, inputs.RdotNG, inputs.roughness);

      // From diffuse illumination calculate reflected color
      vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * invPI;

      // From specular illumination calculate reflected color
      vec2 dfg = prefilteredDFG_Analytical(inputs);
      vec3 specularColor = inputs.f0 * dfg.x + 1.0 * dfg.y;
      vec3 specularComponent = specularColor * indirectSpecular;

      // If we use clear coating we modify the specular and diffuse component
      #ifdef USE_PBR_CLEAR_COATING
        vec3 Fc = fresnelReflection(inputs.NdotV, inputs.f0_ClearCoating) * inputs.coating;
        diffuseComponent  *= 1.0 - Fc;
        specularComponent *= (1.0 - Fc) * (1.0 - Fc);
        specularComponent += evaluateSpecularIllumination_Analytical(inputs, inputs.RdotNG, inputs.roughnessClearCoating) * Fc;
      #endif

      // Indirect contribution
      return (diffuseComponent + specularComponent);
  }


  // **************************   Evaluate Scene lighting and deduce the reflected color (PBR)  ******************************

  vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, float _roughness, float _metalness, vec3 _emission)
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
    inputs.LdotH = clamp(dot(mainLightDirection, h), 0.0, 1.0);
    inputs.NdotNG = clamp(dot(normal, normalize(normalGround)), -1.0, 1.0);
    vec3 reflectedView = normalize(reflect(viewDirection, normal));
    inputs.refraction = dot(viewDirection, normal);
    inputs.RdotNG = clamp(dot(reflectedView, normalize(normalGround)), -1.0, 1.0);
    inputs.albedoLinear = pow(albedo, vec3(GAMMA));
    inputs.groundColor = pow(vec3(0.5, 0.5, 0.5), vec3(GAMMA));
    inputs.ssao = ssao;
    inputs.roughness = clamp(_roughness * _roughness, 0.001, 0.99);
    inputs.metalness = _metalness;
    inputs.f0 = vec3(0.04) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
    inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
    inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);

    #ifdef USE_PBR_CLEAR_COATING
      inputs.f0_ClearCoating = clearCoatingFresnel;
      inputs.f90_ClearCoating = vec3(clamp(dot(inputs.f0_ClearCoating, vec3(50.0 * 0.33)), 0.0, 1.0)); // more accurate then using  f90 = 1.0
      float clearCoatRoughnessLinear = mix(0.089, 0.6, clearCoatRoughness);
      inputs.roughnessClearCoating = clearCoatRoughnessLinear * clearCoatRoughnessLinear;
      inputs.coating = clearCoating;
    #endif

    // Deduce the radiance for the sky and the ground
    inputs.ambientSky    = calculateAmbientComponent(normal, ssao) * 1.2 - 0.2;
    inputs.ambientGround = calculateGroundComponent(inputs);

    // move lighting towards (1.0, 1.0, 1.0) if requested
    inputs.NdotL = mix(inputs.NdotL, 1.0, lightingFixedFactor);

    // Calculate ambient illumination
    vec3 enviromentComponent = evaluateEnviromentIllumination(inputs);

    // deduce the contributions of the ambient and additional lights to the reflected color
    // Later here we would calculate enviroment lighting contribution
    vec3 additionalLightComponents = inputs.albedoLinear * (additionalLight) * invPI;

    // Based on the brdf function calculate reflectance factor
    vec3 reflectanceFactor = brdfPBR(inputs);

    // Deduce the contribution of the incoming light based on light intensity (irradiance), if it is in shadow and the
    // angle between the normal and the main light direction (cosine law: if the angle is larger, smaller amount of photons will hit the same surface)
    vec3 incidentLight  =  inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
    // Assemble the final reflected outColor in linear RGB space
    vec3 outColorLinear =  incidentLight * reflectanceFactor + enviromentComponent + additionalLightComponents + pow(_emission, vec3(GAMMA));

    // apply tone mapping and gamma correction to the computed color
    vec3 outColor = pow(outColorLinear, vec3(1.0/GAMMA));

    return outColor;
  }
#endif
