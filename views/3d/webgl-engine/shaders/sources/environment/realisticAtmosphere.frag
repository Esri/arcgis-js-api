#include <util/fsPrecision.glsl>
#include <util/encoding.glsl>
#include <util/color.glsl>

// Light
uniform vec3 lightingMainDirection; // The direction vector to the light source
uniform vec3 invWavelength; // 1 / pow(wavelength, 4) for the red, green, and blue channels
uniform vec3 invWavelengthScaled; //invWavelength * fKr4PI + fKm4PI

// Atmosphere
const float krESun = 0.075;        // Kr * ESun = 0.005 * 15.0
const float kmESun = 0.015;        // Km * ESun = 0.005 * 15

// Radii
uniform vec2 radii; // (innerRadius, outerRadius)

// The inner (planetary) radius
#define innerRadius radii[0]
// The outer (atmosphere) radius
#define outerRadius radii[1]

// Atmosphere parameters:
// shellScale:               1.0 / (outerRadius - innerRadius)
// shellDepth:               The scale depth (i.e. the altitude at which the atmosphere's average density is found)
// scaleOverScaleDepth:      scale / shellDepth
// oneOverScaleDepth:        1.0 / shellDepth
// scaleDepthBlue:           The scale depth (i.e. the altitude at which the atmosphere's average density is found)
// scaleOverScaleDepthBlue:  scale / scaleDepthBlue
// oneOverScaleDepthBlue;    1.0 / scaleDepthBlue

uniform vec4 atmosParams1; // (scale, scaleDepth, scaleOverScaleDepth, oneOverScaleDepth)
uniform vec4 atmosParams2; // (g, scaleDepthBlue, scaleOverScaleDepthBlue, oneOverScaleDepthBlue)

#define shellScale atmosParams1.x
// shellDepth, scaleDepthBlue
#define shellDepth vec2(atmosParams1.y, atmosParams2.y)
// scaleOverScaleDepth, scaleOverScaleDepthBlue
#define scaleOverScaleDepth vec2(atmosParams1.z, atmosParams2.z)
// oneOverScaleDepth, oneOverScaleDepthBlue
#define oneOverScaleDepth vec2(atmosParams1.w, atmosParams2.w)

#ifndef HAZE
uniform vec3 atmosParams3; // (g2, miePhaseCoefficients, lowerAlphaBlendBound)
uniform float innerFadeDistance;
uniform float altitudeFade;

#define g atmosParams2.x
#define gSq atmosParams3.x
#define miePhaseCoefficients atmosParams3.y
#define lowerAlphaBlendBound atmosParams3.z
#endif

// Camera
uniform vec3 cameraPosition;     // The camera's current position
uniform vec2 nearFar;

uniform vec4 sphereComp;              // (cameraHeight, cameraHeightSq, fC, fCSur)
// The camera's current height
#define cameraHeight sphereComp[0]
// cameraHeight^2
#define cameraHeightSq sphereComp[1]
// cameraHeightSq - outerRadiusSq; // C = ||o-c||^2 - r^2
#define C sphereComp[2]
// cameraHeightSq - (innerRadiusSq - 63756370000.0); // C = ||o-c||^2 - r^2
#define CSur sphereComp[3]

// Camera HDR
#ifdef HAZE
const float exposure = 1.5;
#else
const float exposure = 2.0;
#endif

#ifdef HAZE
// Depth texture
uniform sampler2D depthTex;
#endif

// Varyings
varying vec3 eyeDir;
varying vec3 worldRay;
varying vec2 vtc;

// Loop constants for integral approximation
const float samples = 5.0;
const int maxSamples = 5;

#ifdef HAZE
  const vec3 oneOverGamma = vec3(1.0);//Gamma = 1.0
#else
  const vec3 oneOverGamma = vec3(0.454545); // Gamma = 2.2
#endif

// ToneMapping operators
vec3 expTM(vec3 inputColor,float _exposure) {
    return pow(1.0 - exp(inputColor * -_exposure), oneOverGamma);
}

#ifndef HAZE
vec3 reinhardTM(vec3 inputColor, float _exposure) {
  vec3 intermediate = inputColor * _exposure;
  intermediate /= ( 1.0 + intermediate );
  return pow(intermediate, oneOverGamma);
}
#endif

// Approximation for inner integral based on a radii ratio of 10.25:10
float scale(float _cos) {
  float x = 1.0 - _cos;
  return exp( -0.00287 + x * ( 0.459 + x * ( 3.83 + x * (-6.80 + x * 5.25 ))));
}

void main() {
  // Obtain ray from Camera
  vec3 worldSpaceRay = normalize(worldRay);

  // Compute Atmosphere intersection; i.e. ray/sphere intersection
  float B = 2.0 * dot(cameraPosition, worldSpaceRay); // B = 2(l * (o-c))
  float det = B * B - 4.0 * C; // det = B^2 - 4.0* C

  // idealized sphere intersection to discard early some pixels
  float detSur = B * B - 4.0 * CSur; // det = B^2 - 4.0* C

  // the minimal sample start position:
  // at the camera by default, on the earth radius surface if the camera is underground.
  float minRayStart = 0.0;
#ifndef HAZE
  // When the ray intersects the earth surface, fade the sky to a simple light direction
  // based color. This is used to make sure we have a white background in underground
  // mode (at noon).
  float surfaceBlend = 0.0;
  vec4 surfaceColor = vec4(0.0);
  if (detSur >= 0.0) {
    float nearSurface = max(0.0, 0.5 *(-B - sqrt(detSur)));
    float farSurface = max(0.0, 0.5 *(-B + sqrt(detSur)));

    if (nearSurface == 0.0) {
      minRayStart = farSurface;
    }

    // Compute lighting at the point where the ray enters the earth surface
    // Lighting computation is copied from the terrain shader.
    vec3 vPos = cameraPosition + worldSpaceRay * nearSurface;
    float lightAngle = dot(-lightingMainDirection, normalize(vPos));
    float brightness = max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)));

    // Make the surface transparent based on altitude
    surfaceColor = vec4(brightness, brightness, brightness, 1.0 - altitudeFade);

    // Fade based on the distance the ray travels below the earth surface
    float relDist = (farSurface - nearSurface) / innerFadeDistance;

    // early exit
    if (relDist > 1.0) {
      gl_FragColor = surfaceColor;
      return;
    }

    surfaceBlend = smoothstep(0.0, 1.0, relDist * relDist);
  }
#endif

  // Inside Atmosphere
  if (det >= 0.0) {
#ifdef HAZE
    // only use red channel from depth texture.
    // see 'Issues' at https://www.khronos.org/registry/webgl/extensions/WEBGL_depth_texture
    float depthSample = texture2D(depthTex, vtc).r;

    float zNear = nearFar[0];
    float zFar = nearFar[1];

    // http://web.archive.org/web/20130416194336/http://olivers.posterous.com/linear-depth-in-glsl-for-real
    float zNorm = 2.0 * depthSample - 1.0;
    float linDepth = 2.0 * zNear * zFar /
      (zFar + zNear - zNorm * (zFar - zNear));

    float rayEnd;
    float altitudeAlpha = 1.0;

    // find intersections with ground, but only between the near and far
    // clipping planes.
    if (depthSample < 1.0 && depthSample > 0.0) {
      vec3 cameraSpaceRay = normalize(eyeDir);
      cameraSpaceRay /= cameraSpaceRay.z;
      cameraSpaceRay *= linDepth;

      float cameraSpaceRayLength = length(cameraSpaceRay);

      vec3 world = cameraPosition + worldSpaceRay * cameraSpaceRayLength;
      float worldRadiusSq = dot(world, world);

      // Handle tall structures:
      // https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/5450
      float transitionStart = innerRadius + 20000.0;
      float transitionHeight = 25000.0;
      float transitionEnd = transitionStart + transitionHeight;

      float edge0 = transitionStart * transitionStart;
      float edge1 = transitionEnd * transitionEnd;

      altitudeAlpha = 1.0 - clamp((worldRadiusSq - edge0) / (edge1 - edge0), 0.0, 1.0);
      rayEnd = cameraSpaceRayLength;

      if (altitudeAlpha > 0.0 && detSur > 0.0) {
        float nearSurface = 0.5 * ( -B - sqrt(detSur) );
        float interp = clamp(((cameraHeight - innerRadius) - 2000000.0) / 6000000.0, 0.0, 1.0);
        rayEnd = mix(cameraSpaceRayLength, nearSurface, interp);
      }
    }
#endif

    float rayStart = 0.5 *(-B - sqrt(det)); //near intersection with atmosphere
#ifdef HAZE
    float near = abs(rayStart);
    float far = abs(rayEnd);
#else
    float rayEnd = 0.5 *(-B + sqrt(det)); //far intersection with atmosphere

#endif

    float scatterDistance; // calculate its scattering offset
    // Calculate the ray's starting position
    if (rayStart < minRayStart)
    { // ray starts from camera or inner radius sphere to far
      rayStart = minRayStart;
#ifndef HAZE
      // clamp to value at inner radius altitude
      scatterDistance = shellScale * min(0.0, innerRadius - cameraHeight);
#endif
    }
#ifndef HAZE
    else
    { // outside atmosphere
      scatterDistance = -1.0;
    }
#endif

    // Initialize the scattering loop variables
    vec3 start = cameraPosition + worldSpaceRay * rayStart;

#ifdef HAZE
    vec3 end = cameraPosition + worldSpaceRay * rayEnd;

    float endLength = length(end);
    float altitudeEnd = endLength - innerRadius;
    float altitudeStart = length(start) - innerRadius;

    // for camera positions below altitude 0, invert the altitudes, to achieve
    // a similar haze as above ground. Note that there is a small but visible change
    // when the camera passes altitude 0.
    if (altitudeStart < 0.0) {
      altitudeStart = -altitudeStart;
      altitudeEnd = -altitudeEnd;
    }

    // computed for the original end point to get consistent light angles after possible inversions
    float lightAngle = dot(-lightingMainDirection, end) / endLength;

    if (near > far)
    {
      if (altitudeStart < altitudeEnd)
      {
        // Switch positive slopes for flipped rays
        end = cameraPosition + worldSpaceRay * rayStart;
        start = cameraPosition + worldSpaceRay * rayEnd;
        worldSpaceRay *= -1.0;
        float tmp = altitudeStart;
        altitudeStart = altitudeEnd;
        altitudeEnd = tmp;
      }
      else if (altitudeStart == altitudeEnd)
      { // create minuscule fake slope for integration if the slope is zero
        altitudeStart += 1.0; //BUGFIX, if the height of camera and ground is equal the equation breaks, add fake meter to camera height to get
        // slope for the camera function
      }
    }

    // Calculate its scattering offset
    // Assumes camera constrains of WSV 3.8
    if (altitudeStart > outerRadius - innerRadius)
    { // outside atmosphere
      scatterDistance = innerRadius - outerRadius;
    } else
    {
      scatterDistance = altitudeEnd - altitudeStart;
    }

#endif
    vec2 opticalStartDepth = exp(scatterDistance * oneOverScaleDepth);

    float rayLength = rayEnd - rayStart;
    float sampleLength = rayLength / samples;
    float scaledLength = sampleLength * shellScale;
    vec3 sampleRay = worldSpaceRay * sampleLength;
    vec3 samplePoint = start + sampleRay * 0.5;

#ifdef HAZE
    float cameraAngle = dot(-worldSpaceRay, end) / length(end);
    float scaleCameraAngle = scale(cameraAngle);
    vec2 cameraOffset = scaleCameraAngle * opticalStartDepth;

    float scaledValues = scale(lightAngle) + scaleCameraAngle;
    vec2 scaledValuesDepth = scaledValues * shellDepth;
#else
    float cameraAngle = dot(worldSpaceRay, start / length(start));
    float angleMultiplier = cameraAngle > 0.0 ? cameraAngle : 0.0;

    float scaleCameraAngle = scale(cameraAngle);
    vec2 cameraOffset = scaleCameraAngle * opticalStartDepth * shellDepth;
#endif

    // Loop variables
    vec3 frontColor = vec3(0.0);
    vec3 frontColorBlue = vec3(0.0);
    vec3 attenuate = vec3(0.0);
    vec3 attenuateBlue = vec3(0.0);

    // Now loop through the sample rays
    for(int i=0; i<maxSamples; i++) {
      float height = length(samplePoint);
      float altitude = abs(height - innerRadius);

      vec2 depth = exp(-altitude * scaleOverScaleDepth);
#ifdef HAZE
      vec2 scatter = depth * scaledValuesDepth - cameraOffset;
#else
      float lightAngle = dot(-lightingMainDirection, samplePoint) / height;
      float cameraAngle = dot(worldSpaceRay, samplePoint) / height;
      float tmpScaledValues = scale(lightAngle) - scale(cameraAngle);
      vec2 scatter = cameraOffset + tmpScaledValues * depth * shellDepth;
#endif
      attenuate = exp(-scatter.x * invWavelengthScaled);
      attenuateBlue = exp(-scatter.y * invWavelengthScaled);

      frontColor += attenuate * depth.x;
      frontColorBlue += attenuateBlue * depth.y;

      samplePoint += sampleRay;
    }

    // Phase computation
    // clamp to avoid numerical instability at fCos == -1.0 (and close values) to display fake sun
    float LdotR = clamp(dot(-lightingMainDirection, -worldSpaceRay ),-0.9999999,1.0);
    float LdotRSq = LdotR * LdotR + 1.0;
#ifdef HAZE
    // Finally, scale the Rayleigh colors and set up the varying variables for the pixel shader
    vec3 colorCoefficients = (scaledLength * 0.75 * LdotRSq) * (krESun * invWavelength + kmESun );

    // Scaled Length is only applied afterwards to save multiplications
    vec3 color = colorCoefficients * frontColor;
    vec3 colorBlue = colorCoefficients * frontColorBlue;
#else
    vec3 rayleighCoefficients = (scaledLength * 0.75 * LdotRSq * krESun) * invWavelength;
    float mieCoefficients = scaledLength * kmESun * miePhaseCoefficients * LdotRSq / pow(1.0 + gSq - 2.0 * g * LdotR, 1.5);

    // Calculate the attenuation factor for the ground
    vec3 color = rayleighCoefficients * frontColor + mieCoefficients * frontColor;
    vec3 colorBlue = rayleighCoefficients * frontColorBlue + mieCoefficients * frontColorBlue;
#endif

    // HDR to LDR conversion
    vec3 ldrBlue = expTM(colorBlue, 2.0 * exposure);
    vec3 ldrRed = expTM(color, exposure);

    // mix reddish and blueish atmosphere
    vec3 LDR = mix(ldrBlue, ldrRed, 0.2);
#ifdef HAZE
    LDR *= (1.0 - cameraAngle);
    vec3 hsv = rgb2hsv(LDR);
    hsv.y = clamp(hsv.y * 1.5, 0.0, 1.0); // boost haze saturation by 50%
    LDR = hsv2rgb(hsv);
    vec3 finalColor = LDR;
    // when rendering we specify the blend functions such that
    // newDestColor = oldDestColor*(1.0-finalColor) + finalColor
#else
    // reinhard tonemapper for looking upwards
    vec3 ldrReinhard = reinhardTM(color, exposure);
    LDR += angleMultiplier * ldrReinhard;

    // height dependent parameter to smooth out reddish atmosphere
    float side = (rayEnd + rayStart) * 0.5;
    float atmoHeight = sqrt(cameraHeightSq - side * side);
    float h2 = clamp(1.0 - ( atmoHeight - lowerAlphaBlendBound ) / ( outerRadius - lowerAlphaBlendBound ), 0.0, 1.0);

    vec3 finalColor = LDR * h2;
    vec3 hsv = rgb2hsv(finalColor);
    hsv.y = clamp(hsv.y * 1.5, 0.0, 1.0); // boost sky saturation by 50%
    finalColor = hsv2rgb(hsv);
#endif

#ifndef HAZE
    float atmosStrength = clamp((length(ldrRed) - 0.05) * 1.05, 0.0, 1.0);
    gl_FragColor = vec4(finalColor, atmosStrength * clamp(1.0 - ( atmoHeight - innerRadius ) / (outerRadius - innerRadius), 0.0, 1.0));
    if (surfaceBlend > 0.0) {
      gl_FragColor = mix(gl_FragColor, surfaceColor, surfaceBlend);
    }
#else
    gl_FragColor = vec4(finalColor, 1.0) * altitudeAlpha;
#endif
  } else { // Outside Atmosphere
    gl_FragColor = vec4(0.0);
  }
}
