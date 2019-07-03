#ifdef OVERLAY
  const vec3 skyZenitColor = vec3(0, 0.6, 0.9);
  const vec3 skyColor = vec3(0.72, 0.92, 1.0);

  float f0Sky = 0.02;
  float f0maxSky = 1.0;
  float expSky = 5.0;

  float roughness = 0.06;
  float f0maxSpec = 0.1;
#else  
  uniform vec3 skyColor;
  uniform vec3 skyZenitColor;

  uniform float f0Sky;
  uniform float f0maxSky;
  uniform float expSky;

  uniform float roughness;
  uniform float f0maxSpec;
#endif

uniform vec3 lightIntensity; // the incoming light color

#include <util/pbrUtils.glsl>
PBRShading shadingInfo;

/*
*   This function is an approximation for the sky gradient reflected 
*   the water surface and describes a combination of two fresnel terms. 
*   @parameter: cosTheta = is the result of max(dot(n,v), 0.0)
*   @parameter: horizon = the dominant color of the sky horizon
*   @parameter: cosTheta = the dominant color of the sky zenit
*/
vec3 getSkyColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
  float exponent = pow((1.0 - cosTheta), expSky);
  return horizon * exponent + zenit * (1.0 -  exponent);
}

/*
*   This function determines the water color per pixel. 
*   @parameter: n = normal facing away from the surface
*   @parameter: v = view direction facing away from the surface.
*   @parameter: l = light direction facing away from the surface
*   @parameter: localUp = a normal for the general direction of the surface 
*   @parameter: shadow = the amount of shadow at this pixel (0 = no shadow) 
*/
vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color,  in vec3 localUp, in float shadow) {
  
  vec3 seaWaterColor = pow(color.rgb, vec3(2.2));
  // using half vector to determine the specular light
  vec3 h = normalize(l + v);
  shadingInfo.NdotL = clamp(dot(n, l), 0.0, 1.0);
  shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
  shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
  shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
  shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
  shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);

  // angle between vertex normal and view direction
  float upDotV = max(dot(localUp,v), 0.0);
  // reflected sky color: the reflected sky color consists of two main colors, the
  // reflected color at the horizon and the reflected color of the zenit. 
  // the reflected sky color is then an approximation based on the fresnel term.
  vec3 skyHorizon =  pow(skyColor, vec3(2.2));
  vec3 skyZenit =  pow(skyZenitColor, vec3(2.2));
  vec3 reflectedSkyColor = getSkyColor(upDotV, skyHorizon, skyZenit );

  // we use the upDotL to smoothen out the 
  // reflected color of the water
  float upDotL = max(dot(localUp,l),0.0);

  // adjust reflected color to sun position
  reflectedSkyColor *= 0.1 + upDotL * 0.9;

  float shadowModifier = clamp(shadow, 0.8, 1.0);
  // adding slight shadow receiving to frensel term to keep shadows for really near views as well. 
  vec3 reflSky = fresnelReflection(shadingInfo.VdotN, vec3(f0Sky), f0maxSky) * reflectedSkyColor * shadowModifier;
  vec3 reflSea = seaWaterColor * mix(reflectedSkyColor, upDotL * lightIntensity, 2.0 / 3.0) * shadowModifier;

  vec3 specular = vec3(0.0);
  // the specular light is not rendered when:
  // - sun is behind a polygon (e.g. sundown for elevated polygons)
  // - viewer is under water
  if(upDotV > 0.0 && upDotL > 0.0) { 
    vec3 specularSun = calculateSpecularReflectanceWater(shadingInfo, roughness, vec3(0.02), f0maxSpec);
    vec3 incidentLight = lightIntensity * shadow;

    specular = shadingInfo.NdotL * incidentLight * specularSun;
  } 
  // combining reflected sky, reflected sea and specular highlight. Shadow cancels out specular light here
  return tonemapACES(reflSky + reflSea + specular);
}
