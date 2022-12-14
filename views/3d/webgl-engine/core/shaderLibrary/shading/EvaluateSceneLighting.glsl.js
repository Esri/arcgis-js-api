/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/compilerUtils","./EvaluateAmbientLighting.glsl","./EvaluateAmbientOcclusion.glsl","./MainLighting.glsl","./PhysicallyBasedRendering.glsl","./PhysicallyBasedRenderingParameters.glsl","./PiUtils.glsl","../../shaderModules/BooleanPassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../../lighting/SceneLighting"],(function(i,n,e,t,o,a,l,r,d,s,c,m){"use strict";function g(i){i.constants.add("ambientBoostFactor","float",m.ambientBoost)}function h(i){i.uniforms.add(new s.FloatPassUniform("lightingGlobalFactor",((i,n)=>n.lighting.globalFactor)))}function u(i,m){const u=i.fragment;switch(i.include(t.EvaluateAmbientOcclusion,m),m.pbrMode!==l.PBRMode.Disabled&&i.include(a.PhysicallyBasedRendering,m),i.include(e.EvaluateAmbientLighting,m),i.include(r.PiUtils),u.code.add(c.glsl`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${m.pbrMode===l.PBRMode.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),g(u),h(u),o.addMainLightDirection(u),u.code.add(c.glsl`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${m.spherical?c.glsl`normalize(vPosWorld)`:c.glsl`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),o.addMainLightIntensity(u),u.code.add(c.glsl`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),m.pbrMode){case l.PBRMode.Disabled:case l.PBRMode.WaterOnIntegratedMesh:case l.PBRMode.Water:i.include(o.MainLighting,m),u.code.add(c.glsl`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case l.PBRMode.Normal:case l.PBRMode.Schematic:u.code.add(c.glsl`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = mainLightDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),u.code.add(c.glsl`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),m.useFillLights?u.uniforms.add(new d.BooleanPassUniform("hasFillLights",((i,n)=>n.enableFillLights))):u.constants.add("hasFillLights","bool",!1),u.code.add(c.glsl`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),u.uniforms.add([new s.FloatPassUniform("lightingSpecularStrength",((i,n)=>n.lighting.mainLight.specularStrength)),new s.FloatPassUniform("lightingEnvironmentStrength",((i,n)=>n.lighting.mainLight.environmentStrength))]),u.code.add(c.glsl`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),u.code.add(c.glsl`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${m.pbrMode===l.PBRMode.Schematic?c.glsl`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:c.glsl`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;default:n.neverReached(m.pbrMode);case l.PBRMode.COUNT:}}i.EvaluateSceneLighting=u,i.addAmbientBoostFactor=g,i.addLightingGlobalFactor=h,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
