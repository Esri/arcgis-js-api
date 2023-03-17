/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/mathUtils","../../../../../../core/maybe","../../../../../../geometry/support/Ellipsoid","../../../../environment/CloudsCompositionParameters","../../../../environment/CloudsData","../shading/MainLighting.glsl","../../shaderModules/BooleanPassUniform","../../shaderModules/Float3PassUniform","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Matrix4PassUniform","../../shaderModules/TextureCubePassUniform"],(function(o,a,e,t,r,n,d,i,l,c,s,u,C){"use strict";function m(o){const m=o.fragment;m.uniforms.add([new u.Matrix4PassUniform("rotationMatrixClouds",((o,a)=>a.cloudsFade.parallax.transform)),new u.Matrix4PassUniform("rotationMatrixCloudsCrossFade",((o,a)=>a.cloudsFade.parallaxNew.transform)),new l.Float3PassUniform("anchorPosition",((o,a)=>a.cloudsFade.parallax.anchorPointClouds)),new l.Float3PassUniform("anchorPositionCrossFade",((o,a)=>a.cloudsFade.parallaxNew.anchorPointClouds)),new c.FloatPassUniform("cloudsHeight",((o,a)=>a.cloudsFade.parallax.cloudsHeight)),new c.FloatPassUniform("radiusCurvatureCorrectionFactor",((o,a)=>a.cloudsFade.parallax.radiusCurvatureCorrectionFactor)),new c.FloatPassUniform("totalFadeInOut",((o,a)=>a.cloudsFade.fadeInOut.stage===r.FadeInOutStages.FINISHED?a.cloudsFade.fadeInOutHeight.factor+1-a.cloudsFade.fadeIn.factor:a.cloudsFade.fadeInOutHeight.factor+1-a.cloudsFade.fadeInOut.factor)),new c.FloatPassUniform("crossFadeAnchorFactor",((o,e)=>a.clamp(e.cloudsFade.crossFade.factor,0,1))),new C.TextureCubePassUniform("cubeMap",((o,a)=>e.isSome(a.cloudsFade.data)&&e.isSome(a.cloudsFade.data.cubeMap)?a.cloudsFade.data.cubeMap.colorTexture:null)),new i.BooleanPassUniform("crossFade",((o,a)=>a.cloudsFade.crossFade.enabled)),new i.BooleanPassUniform("readChannelsRG",((o,a)=>a.cloudsFade.readChannels===n.CloudsTextureChannels.RG)),new i.BooleanPassUniform("fadeTextureChannels",((o,a)=>a.cloudsFade.renderingStage===n.CloudsRenderingStages.FADING_TEXTURE_CHANNELS))]),m.constants.add("planetRadius","float",t.earth.radius),m.code.add(s.glsl`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos)
{
float radiusClouds = planetRadius + cloudsHeight;
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusClouds * radiusClouds;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
vec3 intersectionPont = cameraPosition + dir * pointIntDist;
intersectionPont =  intersectionPont - spherePos;
return intersectionPont;
}`),m.code.add(s.glsl`vec3 correctForPlanetCurvature(vec3 dir)
{
dir.z = dir.z*(1.-radiusCurvatureCorrectionFactor) + radiusCurvatureCorrectionFactor;
return dir;
}`),m.code.add(s.glsl`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec)
{
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),d.addMainLightDirection(m),d.addMainLightIntensity(m),m.code.add(s.glsl`const float SUNSET_TRANSITION_FACTOR = 0.3;
const vec3 RIM_COLOR = vec3(0.28, 0.175, 0.035);
const float RIM_SCATTERING_FACTOR = 140.0;
const float BACKLIGHT_FACTOR = 0.2;
const float BACKLIGHT_SCATTERING_FACTOR = 10.0;
const float BACKLIGHT_TRANSITION_FACTOR = 0.3;
vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds)
{
float upDotLight = dot(normalize(cameraPosition), normalize(mainLightDirection));
float dirDotLight = max(dot(normalize(-worldSpaceRay), normalize(mainLightDirection)), 0.0);
float sunsetTransition = clamp(pow(max(upDotLight, 0.0), SUNSET_TRANSITION_FACTOR), 0.0, 1.0);
vec3 ambientLight = calculateAmbientIrradiance(normalize(cameraPosition),  0.0);
vec3 mainLight = evaluateMainLighting(normalize(cameraPosition),  0.0);
vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));
float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
float rimLightIntensity = 0.5 + 0.5 *pow(max(upDotLight, 0.0), 0.35);
vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, RIM_SCATTERING_FACTOR)) * scatteringMod;
float additionalLight = BACKLIGHT_FACTOR * pow(dirDotLight, BACKLIGHT_SCATTERING_FACTOR) * (1. - pow(sunsetTransition, BACKLIGHT_TRANSITION_FACTOR)) ;
return vec3(baseCloudColor * (1. + additionalLight) + directSunScattering);
}`),m.code.add(s.glsl`vec4 getCloudData(vec3 rayDir, bool readOtherChannel)
{
vec4 cloudData = textureCube(cubeMap, rayDir);
float mu = dot(rayDir, vec3(0, 0, 1));
bool readChannels = readChannelsRG ^^ readOtherChannel;
if (readChannels) {
cloudData = vec4(vec3(cloudData.r), cloudData.g);
} else {
cloudData = vec4(vec3(cloudData.b), cloudData.a);
}
if (length(cloudData) == 0.0) {
return vec4(cloudData.rgb, 1.0);
}
return cloudData;
}`),m.code.add(s.glsl`vec4 renderCloudsNoFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
float totalTransmittance = clamp(cloudData.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudData.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), totalTransmittance);
}`),m.code.add(s.glsl`vec4 renderCloudsCrossFade(vec3 worldRay, vec3 cameraPosition)
{
vec3 intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPosition);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = getCloudData(worldRayRotatedCorrected, false);
vec4 cloudColor = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
intersectionPoint = intersectWithCloudLayer(normalize(worldRay), cameraPosition, anchorPositionCrossFade);
worldRayRotated = rotateDirectionToAnchorPoint(rotationMatrixCloudsCrossFade, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = getCloudData(worldRayRotatedCorrected, fadeTextureChannels);
vec4 cloudColorCrossFade = vec4(calculateCloudColor(cameraPosition, normalize(-worldRay), cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorCrossFade, crossFadeAnchorFactor);
float totalTransmittance = clamp(cloudColor.a * (1.0 - totalFadeInOut) + totalFadeInOut, 0.0 , 1.0);
if (length(cloudColor.rgb) == 0.0) {
totalTransmittance = 1.0;
}
return vec4(cloudColor.rgb, totalTransmittance);
}`),m.code.add(s.glsl`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition)
{
return crossFade ? renderCloudsCrossFade(worldRay, cameraPosition) : renderCloudsNoFade(worldRay, cameraPosition);
}`)}o.CloudsParallaxShading=m,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})}));
