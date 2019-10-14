struct PBRShadingWater
{
    float NdotL;   // cos angle between normal and light direction
    float NdotV;   // cos angle between normal and view direction
    float NdotH;   // cos angle between normal and half vector
    float VdotH;   // cos angle between view direction and half vector
    float LdotH;   // cos angle between light direction and half vector
    float VdotN;   // cos angle between view direction and normal vector
};

#ifdef USE_PBR
  struct PBRShadingInfo
  {
      float NdotL;                  // cos angle between normal and light direction
      float NdotV;                  // cos angle between normal and view direction
      float NdotH;                  // cos angle between normal and half vector
      float VdotH;                  // cos angle between view direction and half vector
      float LdotH;                  // cos angle between view light direction and half vector
      float NdotNG;                 // cos angle between normal and normal of the ground
      float LdotNG;                 // cos angle between normal and light direction of the ground
      float RdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
      float VdotNG;                 // cos angle between view direction reflected of the normal and normal of the ground
      float NdotAmbDir;             // cos angle between view direction and the fill light in ambient illumination
      float NdotH_Horizon;          // cos angle between normal and half vector defined with horizon illumination

      vec3 skyRadianceToSurface;         // integrated radiance of the sky based on the surface roughness (used for specular reflection)
      vec3 groundRadianceToSurface;      // integrated radiance of the ground based on the surface roughness (used for specular reflection)
      vec3 skyIrradianceToSurface;       // irradiance of the sky (used for diffuse reflection)
      vec3 groundIrradianceToSurface;    // irradiance of the ground (used for diffuse reflection)

      float averageAmbientRadiance;      // average ambient radiance used to deduce black level in gamut mapping

      #ifdef USE_PBR_CLEAR_COATING
      vec3 skyRadianceToClearCoat;        // integrated radiance of the sky based on the clear coat roughness (used for specular reflection)
      vec3 groundRadianceToClearCoat;     // integrated radiance of the ground based on the clear coat roughness (used for specular reflection)
      #endif

      float ssao;                   // ssao coefficient
      vec3 groundReflectance;       // reflectance of the ground
      vec3 albedoLinear;            // linear color of the albedo
      vec3 f0;                      // fresnel value at normal incident light
      vec3 f90;                     // fresnel value at 90o of incident light
      vec3 f0_ClearCoating;         // fresnel value of the coating at normal incident light
      vec3 f90_ClearCoating;        // fresnel value of the coating at 90o of incident light

      vec3 diffuseColor;            // diffuse color of the material used in environment illumination

      float roughnessClearCoating;  // roughness of the coating
      float coating;                // intensity of the clear coating
      float metalness;              // metalness of the material
      float roughness;              // roughness of the material
  };

  const float fillLightIntensity = 0.25;              // intensity of the directional ambient component
  const float horizonLightDiffusion = 0.4;            // diffusion value describing the area and smoothness of the horizon light
  const vec3  skyTransmittance = vec3(0.9, 0.9, 1.0);  // bluish transmittance of the sky

  const float additionalAmbientIrradianceFactor = 0.02;// Additional irradiance factor - making everything brighter and more colorful

  const vec3 clearCoatingFresnel = vec3(0.04);         // clear coating fresnel value at normal incident light

#endif

const float PI = 3.14159265359;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.318309886;
const float HALF_PI = 1.5707964;







// ****************************************************************************************************************************
// ************************************************  Water Rendering **********************************************************
// ****************************************************************************************************************************

#ifdef OVERLAY
  float dtrExponent = 2.0;
#else
  float dtrExponent = 2.2;
#endif

  // Specular Fersnel reflection depending on the angle and the fresnel value at the incident angle
  vec3 fresnelReflection(float angle, vec3 f0, float f90) {
    return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
  }

// Specular Fersnel reflection
/*
*   This function is the Schlick approximation of the Fresnel factor.
*   A higher fresnel makes media, e.g. water more reflective
*   since the refractive factor will decrease
*   @parameter: angle = the angle between 0..1. This is usually the result of max(dot(x,y), 0.0)
*   @parameter: maxOut = usually 1.0. Used for tuning in case the fresnel should return smaller 1.0.
*/

// normal distribution for the specular component (GGX)
float normalDistributionWater(float NdotH, float roughness)
{
  float r2 = roughness * roughness;
  float NdotH2 = NdotH * NdotH;
  float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
  return r2 / denom;
}

// Geometric occlusion term if there is no masking or shadowing - clear coat case
float geometricOcclusionKelemen(float LoH)
{
    return 0.25 / (LoH * LoH);
}

// Evaluate bidirectional reflectance distribution function based
// on Cook-Torrance model with a simplified occlusion.
vec3 brdfWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
  vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
  float D = normalDistributionWater(props.NdotH, roughness);
  float V = geometricOcclusionKelemen(props.LdotH);
  return (D * V) * F;
}

vec3 tonemapACES(const vec3 x) {
  return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}







#ifdef USE_PBR
  // ****************************************************************************************************************************
  // ***************************************  Directional Illumination  (Physical Based Rendering) ******************************
  // ****************************************************************************************************************************

  // Specular Fresnel reflection depending on the angle and the fresnel value at the incident angle
  vec3 fresnelReflection(float angle, vec3 f0, vec3 f90) {
    return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
  }

  // Lambert Diffuse reflectance factor with preservation of the energy term
  vec3 calculateDiffuseReflectanceFactor(PBRShadingInfo inputs)
  {
    return (1.0 - inputs.metalness) * inputs.albedoLinear * INV_PI;
  }

  // Normal distribution of the microfacets for the specular reflectance (GGX implementation)
  float normalDistribution(float NdotH, float roughness)
  {
      float a = NdotH * roughness;
      float b = roughness / (1.0 - NdotH * NdotH + a * a);
      return b * b * INV_PI;
  }

  // Optimized geometric occlusion (masking and shadowing of microfacets) (Smith-GGX implementation)
  float geometricOcclusion(float NdotV, float NdotL, float roughness)
  {
      float a2 = roughness * roughness;
      float GGXL = NdotV * sqrt((-NdotL * a2 + NdotL) * NdotL + a2);
      float GGXV = NdotL * sqrt((-NdotV * a2 + NdotV) * NdotV + a2);
      return 0.5 / (GGXV + GGXL);
  }

  // Fast approximation of optimized geometric occlusion (masking and shadowing of microfacets) (Smith-GGX implementation)
  float geometricOcclusion_Fast(float NdotV, float NdotL, float roughness)
  {
      float r_1 = (roughness + 1.0);
      float a = r_1 * r_1 / 8.0;
      float GGXV = (NdotV * (1.0 - a) + a);
      float GGXL = (NdotL * (1.0 - a) + a);
      return 0.25 / (GGXV + GGXL);
  }

  // Geometric occlusion term if there is no masking or shadowing - clear coat case
  float geometricOcclusionKelemenClearCoat(float LoH)
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
      float Vc = geometricOcclusionKelemenClearCoat(inputs.LdotH);
      float Dc = normalDistribution(inputs.NdotH, inputs.roughnessClearCoating);
      vec3 specularComponentCoating =  (Dc * Vc) * Fc;
      // Final reflection is composed of diffuse component and two specular lobes (material and coating)
      vec3 complFc = (1.0-Fc);
      return (1.0 - inputs.ssao) * (diffuseComponent * complFc + specularComponent * complFc * complFc + specularComponentCoating);
    #else
      // Final reflection is composed of diffuse component and specular lobe
      return (1.0 - inputs.ssao) * (diffuseComponent + specularComponent);
      //return specularComponent;
    #endif
  }






  // ****************************************************************************************************************************
  // **********************************  Analytical Environment Illumination (Phisical Based Rendering)**************************
  // ****************************************************************************************************************************

  // Analytical approximation of integrated DFG function used in specular term (D - distribution, F -  Fresnel, G - geometry attenuation)
  vec2 prefilteredDFG_Analytical(float roughness, float NdotV) {
      // Karis' approximation based on Lazarov's
      const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
      const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
      vec4 r = roughness * c0 + c1;
      float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
      return vec2(-1.04, 1.04) * a004 + r.zw;
  }

  // ** Evaluate Irradiance for the Diffuse illumination **

  // Analytically evaluates diffuse environment illumination (incoming irradiance)
  // the model assumes that top hemisphere illuminates the sky, and bottom hemisphere is the ground
  // Top hemisphere is defined with the up vector
  vec3 evaluateDiffuseIllumination_Hemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
  {
    float ground = 1.0 - NdotNG;
    float sky = 1.0 + NdotNG;

    // Combine the ground and sky irradiance
    return (ground * ambientGround + sky * ambientSky)  * 0.5;
  }

  // To calculate the diffuse irradiance from a given direction we have to evaluate illumination over a hemisphere defined by the normal

  // Function evaluates the half of the irradiance integral (integral is already anlitically solved)
  // - the sky is between the firstAngle and secondAngle
  // - the ground is everywhere else
  vec3 evaluateIrradianceIntegral(float firstAngle, float secondAngle, vec3 ambientGround, vec3 ambientSky)
  {
    float sin_firstAngleClamped = sin(clamp(firstAngle, 0.0, HALF_PI));
    float sin_secondAngleClamped = sin(clamp(secondAngle, 0.0, HALF_PI));

    float ground = sin_firstAngleClamped + 1.0 - sin_secondAngleClamped; // equivalent to: sin(firstAngleClamped) - sin(0.0) + sin(HALF_PI) - sin(secondAngleClamped);
    float sky = sin_secondAngleClamped - sin_firstAngleClamped;

    return ground * ambientGround + sky * ambientSky;
  }

  // Analytically evaluates diffuse environment illumination (incoming irradiance)
  // the model assumes that top cone illuminates the sky, and bottom cone is the ground
  // Top cone is defined with the up vector and skyIlluminationAngle
  vec3 evaluateDiffuseIllumination_Cone(vec3 ambientGround, vec3 ambientSky, float NdotNG, float skyIlluminationAngle)
  {
    // Angle between the up vector and the normal
    float theta = acos(clamp(NdotNG, -1.0, 1.0));

    // Based on the theta deduce the angeles that determines the visibility of the sky and the ground
    // the sky is between the firstAngle and secondAngle, the ground is everywhere else
    float firstAngle = HALF_PI + theta - skyIlluminationAngle;
    float secondAngle = HALF_PI + theta + skyIlluminationAngle;


    // Calculate the integrated irradiance of the left and right part of the hemisphere
    vec3 LeftIntegral = evaluateIrradianceIntegral(HALF_PI - secondAngle, HALF_PI - firstAngle, ambientGround, ambientSky);
    vec3 RightIntegral = evaluateIrradianceIntegral(firstAngle - HALF_PI, secondAngle - HALF_PI, ambientGround, ambientSky);

    // Combine the integrated left and right irradiance and apply ssao
    vec3 ambientDiffuseLight = (LeftIntegral + RightIntegral)  * 0.5;
    return ambientDiffuseLight;
  }

  // ** Evaluate Directional Radiance for the Specular illumination **

  // Integrated radiance depending on the roughness and the direction of the reflected ray (theta) - (integral is already analytically solved)
  float integratedRadiance(float cosTheta2, float roughness)
  {
    return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
  }

  // Analytically evaluate specular environment illumination (incoming directional radiance - based on the roughness factor)
  // the model assumes that top hemisphere illuminates the sky, and bottom hemisphere is the ground
  vec3 evaluateSpecularIllumination_Hemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
  {
    // Angle between the up vector and the reflected ray (reflected of the normal)

    // Based on the theta deduce the angels that determines the visibility of the sky and the ground
    // the sky is between the firstAngle and secondAngle, the ground is everywhere else
    float cosTheta2 = 1.0 - RdotNG * RdotNG;

    float intRadTheta = integratedRadiance(cosTheta2, roughness);

    // Calculate the integrated directional radiance of the ground and the sky
    float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
    float sky = 2.0 - ground;
    // Combine the integrated ground and sky irradiance and apply ssao
    vec3 enviromentSpecularLight = (ground * ambientGround + sky * ambientSky) * 0.5;
    return enviromentSpecularLight;
  }

  // Integrated radiance over the half of the hemisphere
  // - the sky is between the firstAngle and secondAngle
  // - the ground is everywhere else
  vec3 evaluateRadianceIntegral(float firstAngle, float secondAngle, vec3 ambientGround, vec3 ambientSky, float roughness)
  {
    float firstAngleClamped = clamp(firstAngle, 0.0, HALF_PI);
    float secondAngleClamped = clamp(secondAngle, 0.0, HALF_PI);
    float ro = roughness;

    float intRadFirstAngle = integratedRadiance(pow(cos(firstAngleClamped), 2.0), ro);
    float intRadSecondAngle = integratedRadiance(pow(cos(secondAngleClamped), 2.0), ro);

    float ground = intRadFirstAngle - integratedRadiance(1.0, ro) + integratedRadiance(0.0, ro) - intRadSecondAngle;
    float sky = intRadSecondAngle - intRadFirstAngle;

    return ground * ambientGround + sky * ambientSky;
  }

  // Analytically evaluate specular environment illumination (incoming directional radiance - based on the roughness factor)
  // the model assumes that top cone illuminates the sky, and bottom cone is the ground
  vec3 evaluateSpecularIllumination_Cone(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness, float skyIlluminationAngle)
  {
    // Angle between the up vector and the reflected ray (reflected of the normal)
    float theta = acos(clamp(RdotNG, -1.0, 1.0));

    // Based on the theta deduce the angels that determines the visibility of the sky and the ground
    // the sky is between the firstAngle and secondAngle, the ground is everywhere else
    float firstPoint = - HALF_PI + theta + skyIlluminationAngle;
    float secondPoint = - HALF_PI + theta - skyIlluminationAngle;

    // Calculate the integrated directional radiance of the left and right part of the hemisphere
    vec3 LeftIntegral = evaluateRadianceIntegral(HALF_PI - firstPoint, HALF_PI - secondPoint, ambientGround, ambientSky, roughness);
    vec3 RightIntegral = evaluateRadianceIntegral(secondPoint - HALF_PI, firstPoint - HALF_PI, ambientGround, ambientSky, roughness);

    // Combine the integrated left and right irradiance and apply ssao
    vec3 enviromentSpecularLight = (LeftIntegral + RightIntegral) * 0.5;
    return enviromentSpecularLight;
  }


    // ** Evaluate environment illumination end deduce the reflected color **

  vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
    //Diffuse indirect Illumination
    vec3 indirectDiffuse = evaluateDiffuseIllumination_Hemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
    //vec3 indirectDiffuse = evaluateDiffuseIllumination_Cone(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG, HALF_PI);

    // Specular indirect Illumination
    vec3 indirectSpecular = evaluateSpecularIllumination_Hemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
    //vec3 indirectSpecular = evaluateSpecularIllumination_Cone(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness, HALF_PI);

    // From diffuse illumination calculate reflected color
    vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;

    // From specular illumination calculate reflected color
    vec2 dfg = prefilteredDFG_Analytical(inputs.roughness, inputs.NdotV);
    vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
    vec3 specularComponent = specularColor * indirectSpecular;

    // If we use clear coating we modify the specular and diffuse component
    #ifdef USE_PBR_CLEAR_COATING
      vec3 Fc = fresnelReflection(inputs.NdotV, inputs.f0_ClearCoating) * inputs.coating;
      diffuseComponent  *= 1.0 - Fc;
      specularComponent *= (1.0 - Fc) * (1.0 - Fc);
      specularComponent += evaluateSpecularIllumination_Hemisphere(inputs.groundRadianceToClearCoat, inputs.skyRadianceToClearCoat, inputs.RdotNG, inputs.roughnessClearCoating) * Fc;
    #endif

    // Indirect contribution
    return (diffuseComponent + specularComponent);
  }




  // ****************************************************************************************************************************
  // **********************************                      Gamut Mapping                             **************************
  // ****************************************************************************************************************************


  // *** Soft compression of the black levels ***

  // Mapping the individual color channels based on a point p
  // p.x - the deduced black level
  // p.y - the value to which we map the black level
  // values between [0 - p.x] are mapped to [0 - p.y]
  // values between [p.x - 1] are mapped to [p.y - 1]
  float gamutMapChanel(float x, vec2 p){
    return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
  }


  // Because of the fresnel refletion the image might be too bright we apply black level soft compression gamut mapping
  vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
    vec3 outColor;
    // based on the average ambient radiance we approximate the black level for a specific time of a day
    // p.x - the deduced black level
    // p.y - the value to which we map the black level (around 1/3 of the black level)
    vec2 p = vec2(0.02*(inputs.averageAmbientRadiance), 0.0075*(inputs.averageAmbientRadiance));

    // gamut map individual color changels
    outColor.x = gamutMapChanel(inColor.x, p) ;
    outColor.y = gamutMapChanel(inColor.y, p) ;
    outColor.z = gamutMapChanel(inColor.z, p) ;

    return outColor;
  }

#endif
