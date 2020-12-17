/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl"],(function(e,a,t,r){"use strict";function n(e){const n=new t.ShaderBuilder;return n.attributes.add("position","vec2"),n.attributes.add("uv0","vec2"),n.varyings.add("worldRay","vec3"),n.varyings.add("vtc","vec2"),e.haze&&n.varyings.add("eyeDir","vec3"),n.vertex.uniforms.add("projectionInverse","mat4"),n.vertex.uniforms.add("viewInverse","mat4"),n.vertex.code.add(a.glsl`
    void main(void) {
      vec3 posViewNear = (projectionInverse * vec4(position, -1, 1)).xyz;

      worldRay = (viewInverse * vec4(posViewNear, 0)).xyz;
      vtc = uv0;

      ${e.haze?a.glsl`eyeDir = posViewNear;`:""}

      gl_Position = vec4(position, 1, 1);
    }
  `),n.fragment.uniforms.add("lightingMainDirection","vec3").add("invWavelength","vec3").add("invWavelengthScaled","vec3").add("radii","vec2").add("atmosphereParameters1","vec4").add("atmosphereParameters2","vec4").add("cameraPosition","vec3").add("nearFar","vec2").add("heightParameters","vec4"),e.haze?n.fragment.uniforms.add("depthTex","sampler2D"):n.fragment.uniforms.add("atmosphereParameters3","vec3").add("innerFadeDistance","float").add("altitudeFade","float"),n.fragment.include(r.ColorConversion),n.fragment.code.add(a.glsl`
  // Atmosphere
  const float krESun = 0.075;        // Kr * ESun = 0.005 * 15.0
  const float kmESun = 0.015;        // Km * ESun = 0.005 * 15

  // The inner (planetary) radius
  #define innerRadius radii[0]
  // The outer (atmosphere) radius
  #define outerRadius radii[1]

  // Atmosphere parameters:

  // shellScale:               1.0 / (outerRadius - innerRadius)
  #define shellScale atmosphereParameters1.x

  // shellDepth:               The scale depth (i.e. the altitude at which the atmosphere's average density is found)
  // scaleDepthBlue:           The scale depth (i.e. the altitude at which the atmosphere's average density is found)
  #define shellDepth vec2(atmosphereParameters1.y, atmosphereParameters2.y)

  // scaleOverScaleDepth:      scale / shellDepth
  // scaleOverScaleDepthBlue:  scale / scaleDepthBlue
  #define scaleOverScaleDepth vec2(atmosphereParameters1.z, atmosphereParameters2.z)

  // oneOverScaleDepth:        1.0 / shellDepth
  // oneOverScaleDepthBlue;    1.0 / scaleDepthBlue
  #define oneOverScaleDepth vec2(atmosphereParameters1.w, atmosphereParameters2.w)
  `),e.haze||n.fragment.code.add(a.glsl`
      #define g atmosphereParameters2.x
      #define gSq atmosphereParameters3.x
      #define miePhaseCoefficients atmosphereParameters3.y
      #define lowerAlphaBlendBound atmosphereParameters3.z
    `),n.fragment.code.add(a.glsl`
  // The camera's current height
  #define cameraHeight heightParameters[0]
  // cameraHeight^2
  #define cameraHeightSq heightParameters[1]
  // cameraHeightSq - outerRadiusSq; // C = ||o-c||^2 - r^2
  #define C heightParameters[2]
  // cameraHeightSq - (innerRadiusSq - 63756370000.0); // C = ||o-c||^2 - r^2
  #define CSur heightParameters[3]

  ${e.haze?"// Camera HDR\n        const float exposure = 1.5;\n        const vec3 oneOverGamma = vec3(1.0); //Gamma = 1.0":"const float exposure = 2.0;\n        const vec3 oneOverGamma = vec3(0.454545); // Gamma = 2.2\n        vec3 reinhardTM(vec3 inputColor, float _exposure) {\n          vec3 intermediate = inputColor * _exposure;\n          intermediate /= ( 1.0 + intermediate );\n          return pow(intermediate, oneOverGamma);\n        }\n        "}
    // Loop constants for integral approximation
    const float samples = 5.0;
    const int maxSamples = 5;

    // ToneMapping operators
    vec3 expTM(vec3 inputColor,float _exposure) {
        return pow(1.0 - exp(inputColor * -_exposure), oneOverGamma);
    }

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
  `),e.haze||n.fragment.code.add(a.glsl`
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
    `),n.fragment.code.add(a.glsl`
    if (det >= 0.0) {
    ${e.haze?"\n          float depthSample = texture2D(depthTex, vtc).r;\n\n          float zNear = nearFar[0];\n          float zFar = nearFar[1];\n\n          // http://web.archive.org/web/20130416194336/http://olivers.posterous.com/linear-depth-in-glsl-for-real\n          float zNorm = 2.0 * depthSample - 1.0;\n          float linDepth = 2.0 * zNear * zFar /\n            (zFar + zNear - zNorm * (zFar - zNear));\n\n          float rayEnd;\n          float altitudeAlpha = 1.0;\n\n          // find intersections with ground, but only between the near and far\n          // clipping planes.\n          if (depthSample < 1.0 && depthSample > 0.0) {\n            vec3 cameraSpaceRay = normalize(eyeDir);\n            cameraSpaceRay /= cameraSpaceRay.z;\n            cameraSpaceRay *= linDepth;\n\n            float cameraSpaceRayLength = length(cameraSpaceRay);\n\n            vec3 world = cameraPosition + worldSpaceRay * cameraSpaceRayLength;\n            float worldRadiusSq = dot(world, world);\n\n            // Handle tall structures:\n            // https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/5450\n            float transitionStart = innerRadius + 20000.0;\n            float transitionHeight = 25000.0;\n            float transitionEnd = transitionStart + transitionHeight;\n\n            float edge0 = transitionStart * transitionStart;\n            float edge1 = transitionEnd * transitionEnd;\n\n            altitudeAlpha = 1.0 - clamp((worldRadiusSq - edge0) / (edge1 - edge0), 0.0, 1.0);\n            rayEnd = cameraSpaceRayLength;\n\n            if (altitudeAlpha > 0.0 && detSur > 0.0) {\n              float nearSurface = 0.5 * ( -B - sqrt(detSur) );\n              float interp = clamp(((cameraHeight - innerRadius) - 2000000.0) / 6000000.0, 0.0, 1.0);\n              rayEnd = mix(cameraSpaceRayLength, nearSurface, interp);\n            }\n          }":""}
    float rayStart = 0.5 *(-B - sqrt(det)); //near intersection with atmosphere
    ${e.haze?"float near = abs(rayStart);\n        float far = abs(rayEnd);":"float rayEnd = 0.5 *(-B + sqrt(det)); //far intersection with atmosphere"}

    float scatterDistance; // calculate its scattering offset
    // Calculate the ray's starting position
    if (rayStart < minRayStart)
    { // ray starts from camera or inner radius sphere to far
      rayStart = minRayStart;
      ${e.haze?"":"// clamp to value at inner radius altitude\n          scatterDistance = shellScale * min(0.0, innerRadius - cameraHeight);"}
    }
    ${e.haze?"":"else { // outside atmosphere\n          scatterDistance = -1.0;\n        }"}
    // Initialize the scattering loop variables
    vec3 start = cameraPosition + worldSpaceRay * rayStart;
  `),e.haze&&n.fragment.code.add(a.glsl`
      vec3 end = cameraPosition + worldSpaceRay * rayEnd;

      float endLength = length(end);
      //altitudeStart, altitudeEnd
      vec2 altitudeInterval = vec2(length(start) - innerRadius, endLength - innerRadius);

      // for camera positions below altitude 0, invert the altitudes, to achieve
      // a similar haze as above ground. Note that there is a small but visible change
      // when the camera passes altitude 0.
      if (altitudeInterval.x < 0.0) {
        altitudeInterval = -altitudeInterval;
      }

      // computed for the original end point to get consistent light angles after possible inversions
      float lightAngle = dot(-lightingMainDirection, end) / endLength;

      if (near > far)
      {
        if (altitudeInterval.x < altitudeInterval.y)
        {
          // Switch positive slopes for flipped rays
          end = cameraPosition + worldSpaceRay * rayStart;
          start = cameraPosition + worldSpaceRay * rayEnd;
          worldSpaceRay *= -1.0;
          float tmp = altitudeInterval.x;
          altitudeInterval.x = altitudeInterval.y;
          altitudeInterval.y = tmp;
        }
        else if (altitudeInterval.x == altitudeInterval.y)
        { // create minuscule fake slope for integration if the slope is zero
          altitudeInterval.x += 1.0; //BUGFIX, if the height of camera and ground is equal the equation breaks, add fake meter to camera height to get
          // slope for the camera function
        }
      }

      // Calculate its scattering offset
      // Assumes camera constrains of WSV 3.8
      if (altitudeInterval.x > outerRadius - innerRadius)
      { // outside atmosphere
        scatterDistance = innerRadius - outerRadius;
      } else
      {
        scatterDistance = altitudeInterval.y - altitudeInterval.x;
      }
    `),n.fragment.code.add(a.glsl`
    vec2 opticalStartDepth = exp(scatterDistance * oneOverScaleDepth);

    float rayLength = rayEnd - rayStart;
    float sampleLength = rayLength / samples;
    float scaledLength = sampleLength * shellScale;
    vec3 sampleRay = worldSpaceRay * sampleLength;
    vec3 samplePoint = start + sampleRay * 0.5;
  `),e.haze?n.fragment.code.add(a.glsl`
      float cameraAngle = dot(-worldSpaceRay, end) / length(end);
      float scaleCameraAngle = scale(cameraAngle);
      vec2 cameraOffset = scaleCameraAngle * opticalStartDepth;

      float scaledValues = scale(lightAngle) + scaleCameraAngle;
      vec2 scaledValuesDepth = scaledValues * shellDepth;
    `):n.fragment.code.add(a.glsl`
      float cameraAngle = dot(worldSpaceRay, start / length(start));
      float angleMultiplier = cameraAngle > 0.0 ? cameraAngle : 0.0;

      float scaleCameraAngle = scale(cameraAngle);
      vec2 cameraOffset = scaleCameraAngle * opticalStartDepth * shellDepth;
    `),n.fragment.code.add(a.glsl`
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
  `),e.haze?n.fragment.code.add(a.glsl`
      vec2 scatter = depth * scaledValuesDepth - cameraOffset;
    `):n.fragment.code.add(a.glsl`
      float lightAngle = dot(-lightingMainDirection, samplePoint) / height;
      float cameraAngle = dot(worldSpaceRay, samplePoint) / height;
      float tmpScaledValues = scale(lightAngle) - scale(cameraAngle);
      vec2 scatter = cameraOffset + tmpScaledValues * depth * shellDepth;
    `),n.fragment.code.add(a.glsl`
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
  `),e.haze?n.fragment.code.add(a.glsl`
      // Finally, scale the Rayleigh colors and set up the varying variables for the pixel shader
      vec3 colorCoefficients = (scaledLength * 0.75 * LdotRSq) * (krESun * invWavelength + kmESun );

      // Scaled Length is only applied afterwards to save multiplications
      vec3 color = colorCoefficients * frontColor;
      vec3 colorBlue = colorCoefficients * frontColorBlue;
    `):n.fragment.code.add(a.glsl`
      vec3 rayleighCoefficients = (scaledLength * 0.75 * LdotRSq * krESun) * invWavelength;
      float mieCoefficients = scaledLength * kmESun * miePhaseCoefficients * LdotRSq / pow(1.0 + gSq - 2.0 * g * LdotR, 1.5);

      // Calculate the attenuation factor for the ground
      vec3 color = rayleighCoefficients * frontColor + mieCoefficients * frontColor;
      vec3 colorBlue = rayleighCoefficients * frontColorBlue + mieCoefficients * frontColorBlue;
    `),n.fragment.code.add(a.glsl`
    // HDR to LDR conversion
    vec3 ldrBlue = expTM(colorBlue, 2.0 * exposure);
    vec3 ldrRed = expTM(color, exposure);

    // mix reddish and blueish atmosphere
    vec3 LDR = mix(ldrBlue, ldrRed, 0.2);
  `),e.haze?n.fragment.code.add(a.glsl`
      LDR *= (1.0 - cameraAngle);
      vec3 hsv = rgb2hsv(LDR);
      hsv.y = clamp(hsv.y * 1.5, 0.0, 1.0); // boost haze saturation by 50%
      LDR = hsv2rgb(hsv);
      vec3 finalColor = LDR;
      // when rendering we specify the blend functions such that
      // newDestColor = oldDestColor*(1.0-finalColor) + finalColor
    `):n.fragment.code.add(a.glsl`
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
    `),n.fragment.code.add(a.glsl`
    ${e.haze?"gl_FragColor = vec4(finalColor, 1.0) * altitudeAlpha;":"float atmosStrength = clamp((length(ldrRed) - 0.05) * 1.05, 0.0, 1.0);\n          gl_FragColor = vec4(finalColor, atmosStrength * clamp(1.0 - ( atmoHeight - innerRadius ) / (outerRadius - innerRadius), 0.0, 1.0));\n          if (surfaceBlend > 0.0) {\n            gl_FragColor = mix(gl_FragColor, surfaceColor, surfaceBlend);\n          }"}
      } else { // Outside Atmosphere
        gl_FragColor = vec4(0.0);
      }
    }
  `),n}var l=Object.freeze({__proto__:null,build:n});e.RealisticAtmosphereShader=l,e.build=n}));
