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

// evaluation
//////////////////////////////////////////

vec3 evaluateSceneLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
  // evaluate the main light
  float dotVal = mix(clamp(-dot(normal, lightingMainDirection), 0.0, 1.0), 1.0, lightingFixedFactor);
  vec3 mainLight = (1.0 - shadow) * lightingMainIntensity * dotVal;

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

  // inverse gamma correction on the albedo color
  float gamma = 2.1;
  vec3 albedoGammaC = pow(albedo, vec3(gamma));

  // physically correct BRDF normalizes by PI
  const float PI = 3.14159;
  vec3 totalLight = mainLight + ambientLight + additionalLight;
  totalLight = min(totalLight, vec3(PI, PI, PI));
  vec3 outColor = vec3((albedoGammaC / PI) * (totalLight));

  // apply gamma correction to the computed color
  outColor = pow(outColor, vec3(1.0/gamma));

  return outColor;
}

vec3 sceneLightingAdditionalLightGlobal(vec3 worldPos, float ssao, out float additionalAmbientScale) {
  // heuristic lighting model originally used in the terrain shading
  // now used to generated additional ambient light

#ifdef VIEWING_MODE_GLOBAL
    float vndl = -dot(normalize(worldPos), lightingMainDirection);
#else
    float vndl = -dot(vec3(0,0,1), lightingMainDirection);
#endif

  additionalAmbientScale = smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
  return ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
}
