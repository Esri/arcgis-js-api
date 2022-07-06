/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{clamp as o}from"../../../../../../core/mathUtils.js";import{isSome as t}from"../../../../../../core/maybe.js";import{a}from"../../../../../../chunks/vec2.js";import{Z as e,a as r}from"../../../../../../chunks/vec2f64.js";import{earth as i}from"../../../../../../geometry/support/Ellipsoid.js";import{FadeInOutStages as c}from"../../../../environment/CloudsCompositionParameters.js";import{BooleanPassUniform as n}from"../../shaderModules/BooleanPassUniform.js";import{Float2PassUniform as d}from"../../shaderModules/Float2PassUniform.js";import{Float3PassUniform as l}from"../../shaderModules/Float3PassUniform.js";import{FloatPassUniform as s}from"../../shaderModules/FloatPassUniform.js";import{glsl as u}from"../../shaderModules/interfaces.js";import{Matrix4PassUniform as m}from"../../shaderModules/Matrix4PassUniform.js";import{TextureCubePassUniform as C}from"../../shaderModules/TextureCubePassUniform.js";function v(r){const v=r.fragment;v.uniforms.add([new m("rotationMatrixClouds",((o,t)=>t.clouds.parallax.transform)),new m("rotationMatrixCloudsCrossFade",((o,t)=>t.clouds.parallaxNew.transform)),new l("anchorPosition",((o,t)=>t.clouds.parallax.anchorPointClouds)),new l("anchorPositionCrossFade",((o,t)=>t.clouds.parallaxNew.anchorPointClouds)),new d("cloudVariables",((o,r)=>t(r.clouds.data)?a(h,r.clouds.data.coverage,r.clouds.data.absorption):e)),new s("cloudsHeight",((o,t)=>t.clouds.parallax.cloudsHeight)),new s("radiusCurvatureCorrectionFactor",((o,t)=>t.clouds.parallax.radiusCurvatureCorrectionFactor)),new s("totalFadeInOut",((t,a)=>a.clouds.fadeInOut.stage===c.FINISHED?a.clouds.fadeInOutHeight.factor+Math.max(o(a.clouds.fadeIn.factor,0,1)):a.clouds.fadeInOutHeight.factor+Math.max(o(a.clouds.fadeInOut.factor,0,1)))),new s("crossFadeAnchorFactor",((t,a)=>o(a.clouds.crossFade.factor,0,1))),new C("cubeMap",((o,a)=>t(a.clouds.data)?a.clouds.data.cubeMap.colorTexture:null)),new n("crossFade",((o,t)=>t.clouds.crossFade.enabled))]),v.constants.add("planetRadius","float",i.radius),v.code.add(u`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),v.code.add(u`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),v.code.add(u`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),v.uniforms.add([new l("lightingMainDirection",((o,t)=>t.lighting.lightingMainDirection)),new l("lightingMainIntensity",((o,t)=>t.lighting.mainLight.intensity))]),v.code.add(u`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(lightingMainDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(lightingMainDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((lightingMainIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * pow(dirDotLight, RIM_SCATTERING_FACTOR) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),v.code.add(u`vec4 getCloudData(vec3 rayDir)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
return mix(vec4(vec3(clamp(1.0 - cloudVariables.y, 0.6, 1.0)), 0.0), cloudData, smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(mu)));
}`),v.code.add(u`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),v.code.add(u`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),v.code.add(u`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}const h=r();export{v as CloudsParallaxShading};
