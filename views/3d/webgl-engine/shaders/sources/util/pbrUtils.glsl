struct PBRShading
{
    float NdotL;                  // cos angle between normal and light direction
    float NdotV;                  // cos angle between normal and view direction
    float NdotH;                  // cos angle between normal and half vector
    float VdotH;                  // cos angle between view direction and half vector
    float LdotH;                  // cos angle between light direction and half vector
    float VdotN;                  // cos angle between view direction and normal vector
};

const float PI_W = 3.14159265;

#ifdef OVERLAY
  float dtrExponent = 2.0;
#else  
  uniform float dtrExponent;
#endif

// Specular Fersnel reflection
/*
*   This function is the Schlick approximation of the Fresnel factor. 
*   A higher fresnel makes media, e.g. water more reflective
*   since the refractive factor will decrease
*   @parameter: angle = the angle between 0..1. This is usually the result of max(dot(x,y), 0.0)
*   @parameter: maxOut = usually 1.0. Used for tuning in case the fresnel should return smaller 1.0.
*/
vec3 fresnelReflection(float VdotH, vec3 f0, float f0Max) {
    return f0 + (f0Max - f0) * pow(1.0 - VdotH, 5.0);
}

// normal distribution for the specular component (GGX)
float normalDistributionWater(float NdotH, float roughness)
{
  float r2 = roughness * roughness;
  float NdotH2 = NdotH * NdotH;
  float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI_W;
  return r2 / denom;
}

// Geometric occlusion term if there is no masking or shadowing - clear coat case
float geometricOcclusionKelemen(float LoH)
{
    return 0.25 / (LoH * LoH);
}

// Specular Reflectance factor for the base layer
vec3 calculateSpecularReflectanceWater(in PBRShading props, float roughness, vec3 F0, float F0Max)
{
  vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
  float D = normalDistributionWater(props.NdotH, roughness);
  float V = geometricOcclusionKelemen(props.LdotH);
  return (D * V) * F;
}

vec3 tonemapACES(const vec3 x) {
  return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}