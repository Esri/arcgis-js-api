#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>
#include <util/color.glsl>

// Light
uniform vec3 v3LightDir;      // The direction vector to the light source
uniform vec3 v3InvWavelength; // 1 / pow(wavelength, 4) for the red, green, and blue channels
uniform vec3 v3InvWavelengthScaled; //v3InvWavelength * fKr4PI + fKm4PI

// Atmosphere
const float fKrESun = 0.075;        // Kr * ESun = 0.005 * 15.0
const float fKmESun = 0.015;        // Km * ESun = 0.005 * 15

// Radii
uniform vec4 v4Radii; // (fInnerRadius, fInnerRadius^2, fOuterRadius, fOuterRadius^2)

// The inner (planetary) radius
#define fInnerRadius v4Radii[0]
// fInnerRadius^2
#define fInnerRadius2 v4Radii[1]
// The outer (atmosphere) radius
#define fOuterRadius v4Radii[2]
// fOuterRadius^2
#define fOuterRadius2 v4Radii[3]

// Atmosphere parameters:
// fScale:                    1.0 / (fOuterRadius - fInnerRadius)
// fScaleDepth:               The scale depth (i.e. the altitude at which the atmosphere's average density is found)
// fScaleOverScaleDepth:      fScale / fScaleDepth
// fOneOverScaleDepth:        1.0 / fScaleDepth

// fScaleDepthBlue:           The scale depth (i.e. the altitude at which the atmosphere's average density is found)
// fScaleOverScaleDepthBlue:  fScale / fScaleDepthBlue
// fOneOverScaleDepthBlue;    1.0 / fScaleDepthBlue

uniform vec4 v4AtmosParams1; // (fScale, fScaleDepth, fScaleOverScaleDepth, fOneOverScaleDepth)
uniform vec4 v4AtmosParams2; // (g, fScaleDepthBlue, fScaleOverScaleDepthBlue, fOneOverScaleDepthBlue)

#define fScale v4AtmosParams1.x
// fScaleDepth, fScaleDepthBlue
#define v2ScaleDepth vec2(v4AtmosParams1.y,v4AtmosParams2.y)
// fScaleOverScaleDepth, fScaleOverScaleDepthBlue
#define v2ScaleOverScaleDepth vec2(v4AtmosParams1.z,v4AtmosParams2.z)
// fOneOverScaleDepth, fOneOverScaleDepthBlue
#define v2OneOverScaleDepth vec2(v4AtmosParams1.w,v4AtmosParams2.w)

#ifndef HAZE
uniform vec4 v4AtmosParams3; // (g2, fMiePhaseCoefficients, fLowerAlphaBlendBound, fOneOverOuterRadiusMinusAlphaBlendBound)
uniform float fInnerFadeDistance;
uniform float fAltitudeFade;

#define fg v4AtmosParams2.x
#define fg2 v4AtmosParams3.x
#define fMiePhaseCoefficients v4AtmosParams3.y
#define fLowerAlphaBlendBound v4AtmosParams3.z
#define fOneOverOuterRadiusMinusAlphaBlendBound v4AtmosParams3.w
#endif

// Camera
uniform vec3 v3CameraPos;     // The camera's current position
uniform vec2 nearFar;

uniform vec4 v4SphereComp;              // (fCameraHeight, fCameraHeight2, fC, fCSur)
// The camera's current height
#define fCameraHeight v4SphereComp[0]
// fCameraHeight^2
#define fCameraHeight2 v4SphereComp[1]
// fCameraHeight2 - fOuterRadius2; // C = ||o-c||^2 - r^2
#define fC v4SphereComp[2]
// fCameraHeight2 - (fInnerRadius2 - 63756370000.0); // C = ||o-c||^2 - r^2
#define fCSur v4SphereComp[3]

// Camera HDR
#ifdef HAZE
const float fExposure = 1.5;
#else
const float fExposure = 2.0;
#endif

#ifdef HAZE
// Depth texture
uniform sampler2D tDepth;
#endif

// Testing variables
uniform float showTest;

// Varyings
varying vec3 v3EyeDir;
varying vec3 v3WorldRay;
varying vec2 vtc;

// Loop constants for integral approximation
const float fSamples = 5.0;
const int maxSamples = 5;

#ifdef HAZE
  const float fOneOverGamma = 1.0;//Gamma = 1.0
#else
  const float fOneOverGamma = 0.454545; // Gamma = 2.2
#endif

const vec3 v3OneOverGamma = vec3(fOneOverGamma);

// ToneMapping operators
vec3 expTM(vec3 inputColor,float exposure){
    return pow(1.0 - exp(inputColor * -exposure), v3OneOverGamma);
}

#ifndef HAZE
vec3 reinhardTM(vec3 inputColor, float exposure){
  vec3 intermediate = inputColor *exposure;
  intermediate /= (1.0+intermediate);
  return pow(intermediate, v3OneOverGamma);
}
#endif

// Approximation for inner integral based on a radii ratio of 10.25:10
float scale(float fCos){
  float x = 1.0 - fCos;
  return exp(-0.00287 + x*(0.459 + x*(3.83 + x*(-6.80 + x*5.25))));
}

void main() {
  vec3 cameraPosition = v3CameraPos;

  // Debug variables
  vec3 test = vec3(0.0,0.0,0.0);

  // Obtain ray from Camera
  vec3 worldSpaceRay = normalize(v3WorldRay);

  // Compute Atmosphere intersection; i.e. ray/sphere intersection
  float B = 2.0 * dot(cameraPosition, worldSpaceRay); // B = 2(l * (o-c))
  float det = B*B - 4.0 * fC; // det = B^2 - 4.0* C

  // idealized sphere intersection to discard early some pixels
  float detSur = B*B - 4.0 * fCSur; // det = B^2 - 4.0* C

  // the minimal sample start position:
  // at the camera by default, on the earth radius surface if the camera is underground.
  float fMinRayStart = 0.0;
#ifndef HAZE
  // When the ray intersects the earth surface, fade the sky to a simple light direction
  // based color. This is used to make sure we have a white background in underground
  // mode (at noon).
  float fSurfaceBlend = 0.0;
  vec4 surfaceColor = vec4(0.0);
  if (detSur >= 0.0) {
    float nearSurfaceT = max(0.0, 0.5 *(-B - sqrt(detSur)));
    float farSurfaceT = max(0.0, 0.5 *(-B + sqrt(detSur)));

    if (nearSurfaceT == 0.0) {
      fMinRayStart = farSurfaceT;
    }

    // Compute lighting at the point where the ray enters the earth surface
    // Lighting computation is copied from the terrain shader.
    vec3 vPos = cameraPosition + worldSpaceRay * nearSurfaceT;
    float fLightAngle = dot(v3LightDir, normalize(vPos));
    float fBrightness = max(0.0, (smoothstep(-1.0, 0.8, 2.0 * fLightAngle)));

    // Make the surface transparent based on altitude
    surfaceColor = vec4(fBrightness, fBrightness, fBrightness, 1.0 - fAltitudeFade);

    // Fade based on the distance the ray travels below the earth surface
    float fRelDist = (farSurfaceT - nearSurfaceT) / fInnerFadeDistance;

    // early exit
    if (fRelDist > 1.0) {
      gl_FragColor = surfaceColor;
      return;
    }

    fSurfaceBlend = smoothstep(0.0, 1.0, fRelDist * fRelDist);
  }
#endif

  // Inside Atmosphere
  if (det >= 0.0) {
#ifdef HAZE
    // only use red channel from depth texture.
    // see 'Issues' at https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture
    float depthSample = texture2D(tDepth, vtc).r;

    float zNear = nearFar[0];
    float zFar = nearFar[1];

    // http://web.archive.org/web/20130416194336/http://olivers.posterous.com/linear-depth-in-glsl-for-real
    float zNorm = 2.0 * depthSample - 1.0;
    float linDepth = 2.0 * zNear * zFar /
      (zFar + zNear - zNorm * (zFar - zNear));

    float rayEndT;
    float altitudeAlpha = 1.0;

    // find intersections with ground, but only between the near and far
    // clipping planes.
    if (depthSample < 1.0 && depthSample > 0.0) {
      vec3 cameraSpaceRay = normalize(v3EyeDir);
      cameraSpaceRay /= cameraSpaceRay.z;
      cameraSpaceRay *= linDepth;

      float cameraSpaceRayLength = length(cameraSpaceRay);

      vec3 v3World = cameraPosition + worldSpaceRay * cameraSpaceRayLength;
      float v3WorldRadius2 = dot(v3World, v3World);

      // Handle tall structures:
      // https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/5450
      float transitionStart = fInnerRadius + 20000.0;
      float transitionHeight = 25000.0;
      float transitionEnd = transitionStart + transitionHeight;

      float edge0 = transitionStart * transitionStart;
      float edge1 = transitionEnd * transitionEnd;

      altitudeAlpha = 1.0 - clamp((v3WorldRadius2 - edge0) / (edge1 - edge0), 0.0, 1.0);
      rayEndT = cameraSpaceRayLength;

      if (altitudeAlpha > 0.0 && detSur > 0.0) {
        float nearSurfaceT = 0.5 *(-B - sqrt(detSur));
        float interp = clamp(((fCameraHeight - fInnerRadius) - 2000000.0) / 6000000.0, 0.0, 1.0);
        rayEndT = mix(cameraSpaceRayLength, nearSurfaceT, interp);
      }
    }
#endif

    float rayStartT = 0.5 *(-B - sqrt(det)); //near intersection with atmosphere
#ifdef HAZE
    float nearT = abs(rayStartT);
    float farT = abs(rayEndT);
#else
    float rayEndT = 0.5 *(-B + sqrt(det)); //far intersection with atmosphere

#endif

    float fDistance; // calculate its scattering offset
    // Calculate the ray's starting position
    if (rayStartT < fMinRayStart)
    { // ray starts from camera or inner radius sphere to far
      rayStartT = fMinRayStart;
#ifndef HAZE
      // clamp to value at inner radius altitude
      fDistance = fScale * min(0.0, fInnerRadius - fCameraHeight);
#endif
    }
#ifndef HAZE
    else
    { // outside atmosphere
      fDistance = -1.0;
    }
#endif

    // Initialize the scattering loop variables
    vec3 v3Start = cameraPosition + worldSpaceRay * rayStartT;

#ifdef HAZE
    vec3 v3End = cameraPosition + worldSpaceRay * rayEndT;

    float fEndLength = length(v3End);
    float fAltitudeEnd = fEndLength - fInnerRadius;
    float fAltitudeStart = length(v3Start) - fInnerRadius;

    // for camera positions below altitude 0, invert the altitudes, to achieve
    // a similar haze as above ground. Note that there is a small but visible change
    // when the camera passes altitude 0.
    if (fAltitudeStart < 0.0) {
      fAltitudeStart = -fAltitudeStart;
      fAltitudeEnd = -fAltitudeEnd;
    }

    // computed for the original end point to get consistent light angles after possible inversions
    float fLightAngle = dot(v3LightDir, v3End) / fEndLength;

    if (nearT > farT)
    {
      if (fAltitudeStart < fAltitudeEnd)
      {
        // Switch positive slopes for flipped rays
        v3End = cameraPosition + worldSpaceRay * rayStartT;
        v3Start = cameraPosition + worldSpaceRay * rayEndT;
        worldSpaceRay *= -1.0;
        float fTmp = fAltitudeStart;
        fAltitudeStart = fAltitudeEnd;
        fAltitudeEnd = fTmp;
      }
      else if (fAltitudeStart == fAltitudeEnd)
      { // create minuscule fake slope for integration if the slope is zero
        fAltitudeStart += 1.0; //BUGFIX, if the height of camera and ground is equal the equation breaks, add fake meter to camera height to get
        // slope for the camera function
      }
    }

    // Calculate its scattering offset
    // Assumes camera constrains of WSV 3.8
    float fCameraDepth;
    float fCameraDepthBlue;
    if (fAltitudeStart > fOuterRadius - fInnerRadius)
    { // outside atmosphere
      fDistance = fInnerRadius - fOuterRadius;
    } else
    {
      fDistance = fAltitudeEnd - fAltitudeStart;
    }

#endif
    vec2 v2OpticalStartDepth = exp(fDistance * v2OneOverScaleDepth);

    float fRayLength = rayEndT - rayStartT;
    float fSampleLength = fRayLength / fSamples;
    float fScaledLength = fSampleLength * fScale;
    vec3 v3SampleRay = worldSpaceRay * fSampleLength;
    vec3 v3SamplePoint = v3Start + v3SampleRay * 0.5;

#ifdef HAZE
    float fCameraAngle = dot(-worldSpaceRay, v3End) / length(v3End);
    float fScaleCameraAngle = scale(fCameraAngle);
    vec2 v2CameraOffset = fScaleCameraAngle*v2OpticalStartDepth;

    float scaledValues = scale(fLightAngle) + fScaleCameraAngle;
    vec2 v2ScaledValuesDepth = scaledValues * v2ScaleDepth;
#else
    float fCameraAngle = dot(worldSpaceRay, v3Start / length(v3Start));
    float angleMultiplier = fCameraAngle>0.0?fCameraAngle:0.0;

    float fScaleCameraAngle = scale(fCameraAngle);
    vec2 v2CameraOffset = fScaleCameraAngle*v2OpticalStartDepth * v2ScaleDepth;
#endif

    // Loop variables
    vec3 v3FrontColor = vec3(0.0, 0.0, 0.0);
    vec3 v3FrontColorBlue = vec3(0.0, 0.0, 0.0);
    vec3 v3Attenuate= vec3(0.0, 0.0, 0.0);
    vec3 v3AttenuateBlue = vec3(0.0, 0.0, 0.0);

    // Now loop through the sample rays
    for(int i=0; i<maxSamples; i++) {
      float fHeight = length(v3SamplePoint);
      float fAltitude = abs(fHeight - fInnerRadius);

      vec2 v2Depth = exp(-fAltitude * v2ScaleOverScaleDepth);
#ifdef HAZE
      vec2 v2Scatter = v2Depth*v2ScaledValuesDepth-v2CameraOffset;
#else
      float fLightAngle = dot(v3LightDir, v3SamplePoint) / fHeight;
      float fCameraAngle = dot(worldSpaceRay, v3SamplePoint) / fHeight;
      float fTempScaledValues = scale(fLightAngle) - scale(fCameraAngle);
      vec2 v2Scatter = v2CameraOffset + fTempScaledValues*v2Depth* v2ScaleDepth;
#endif
      v3Attenuate = exp(-v2Scatter.x * v3InvWavelengthScaled);
      v3AttenuateBlue = exp(-v2Scatter.y * v3InvWavelengthScaled);

      v3FrontColor += v3Attenuate * v2Depth.x;
      v3FrontColorBlue += v3AttenuateBlue * v2Depth.y;

      v3SamplePoint += v3SampleRay;
    }

    // Phase computation
    // clamp to avoid numerical instability at fCos == -1.0 (and close values) to display fake sun
    float fCos = clamp(dot(v3LightDir, -worldSpaceRay ),-0.9999999,1.0);
    float fOnePlusCos2 = fCos*fCos + 1.0;
#ifdef HAZE
    // Finally, scale the Rayleigh colors and set up the varying variables for the pixel shader
    vec3 colorCoefficients = (fScaledLength* 0.75 * fOnePlusCos2)*(fKrESun*v3InvWavelength+fKmESun);

    // Scaled Length is only applied afterwards to save multiplications
    vec3 v3Color = colorCoefficients *v3FrontColor;
    vec3 v3ColorBlue = colorCoefficients *v3FrontColorBlue;
#else
    vec3 v3RayleighCoefficients = (fScaledLength*0.75 * fOnePlusCos2*fKrESun)*v3InvWavelength;
    float fMieCoefficients = fScaledLength*fKmESun * fMiePhaseCoefficients * fOnePlusCos2 / pow(1.0 + fg2 - 2.0*fg*fCos, 1.5);

    // Calculate the attenuation factor for the ground
    vec3 v3Color = v3RayleighCoefficients * v3FrontColor + fMieCoefficients * v3FrontColor;
    vec3 v3ColorBlue = v3RayleighCoefficients * v3FrontColorBlue + fMieCoefficients * v3FrontColorBlue;
#endif

    // HDR to LDR conversion
    vec3 ldrBlue = expTM(v3ColorBlue,2.0*fExposure);
    vec3 ldrRed = expTM(v3Color,fExposure);

    // mix reddish and blueish atmosphere
    vec3 LDR = mix(ldrBlue,ldrRed,0.2);
#ifdef HAZE
    LDR *= (1.0-fCameraAngle);
    vec3 hsv = rgb2hsv(LDR);
    hsv.y = clamp(hsv.y*1.5,0.0,1.0); // boost haze saturation by 50%
    LDR = hsv2rgb(hsv);
    vec3 finalColor = LDR;
    // when rendering we specify the blend functions such that
    // newDestColor = oldDestColor*(1.0-finalColor) + finalColor
#else
    // reinhard tonemapper for looking upwards
    vec3 ldrReinhard = reinhardTM(v3Color,fExposure);
    LDR += angleMultiplier*ldrReinhard;

    // height dependent parameter to smooth out reddish atmosphere
    float side = (rayEndT+rayStartT)*0.5;
    float atmoHeight = sqrt(fCameraHeight2 - side*side);
    float h2 = clamp(1.0-(atmoHeight-fLowerAlphaBlendBound)/(fOuterRadius-fLowerAlphaBlendBound),0.0,1.0);

    vec3 finalColor = LDR*h2;
    vec3 hsv = rgb2hsv(finalColor);
    hsv.y = clamp(hsv.y*1.5,0.0,1.0); // boost sky saturation by 50%
    finalColor = hsv2rgb(hsv);
#endif

#ifndef HAZE
    float atmosStrength = clamp((length(ldrRed)-0.05)*1.05,0.0,1.0);
    gl_FragColor = vec4(finalColor, atmosStrength*clamp(1.0-(atmoHeight-fInnerRadius)/(fOuterRadius-fInnerRadius),0.0,1.0));
    if (fSurfaceBlend > 0.0) {
      gl_FragColor = mix(gl_FragColor, surfaceColor, fSurfaceBlend);
    }
#else
    gl_FragColor = vec4(finalColor, 1.0) * altitudeAlpha;
#endif

    // Debug variable overlay
    if(showTest>0.0){
      gl_FragColor = vec4(test,1.0);
    }
  } else { // Outside Atmosphere
    gl_FragColor = vec4(0.0);
  }
}
