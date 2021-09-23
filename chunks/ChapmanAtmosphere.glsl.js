/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,t,a,i,r,l){"use strict";function o(e){const o=new l.ShaderBuilder;return o.attributes.add("position","vec2"),o.include(t.TextureCoordinateAttribute,{attributeTextureCoordinates:1}),o.varyings.add("worldRay","vec3"),o.varyings.add("eyeDir","vec3"),o.vertex.uniforms.add("projectionInverse","mat4"),o.vertex.uniforms.add("viewInverse","mat4"),o.vertex.code.add(r.glsl`void main(void) {
vec3 posViewNear = (projectionInverse * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (viewInverse * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`),o.fragment.uniforms.add("lightingMainDirection","vec3").add("radii","vec2").add("scaleHeight","float").add("cameraPosition","vec3").add("nearFar","vec2").add("heightParameters","vec4").add("innerFadeDistance","float").add("altitudeFade","float").add("strength","float").add("depthTex","sampler2D").add("betaRayleigh","vec3").add("betaCombined","vec3").add("skyStrength","float").add("skyHazeMultiplier","float").add("hazeStrength","float").add("mieStrength","float").add("skyHazePow","float").add("sunSize","float").add("sunSpread","float"),e.simplified||o.fragment.uniforms.add("betaMie","float"),o.include(i.Gamma),e.haze&&o.fragment.include(a.ReadLinearDepth),o.fragment.code.add(r.glsl`vec2 sphereIntersect(vec3 start, vec3 dir, float radius, bool planet) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = planet ? heightParameters[1] - radius * radius : heightParameters[2];
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`),o.fragment.code.add(r.glsl`float chapmanApproximation(float X, float h, float cosZenith) {
float c = sqrt(X + h);
float cExpH = c * exp(-h);
if (cosZenith >= 0.0) {
return cExpH / (c * cosZenith + 1.0);
} else {
float x0 = sqrt(1.0 - cosZenith * cosZenith) * (X + h);
float c0 = sqrt(x0);
return 2.0 * c0 * exp(X - x0) - cExpH / (1.0 - c * cosZenith);
}
}`),o.fragment.code.add(r.glsl`float getOpticalDepth(vec3 position, vec3 dir) {
float h = length(position) - radii[0];
return scaleHeight * chapmanApproximation(radii[0] / scaleHeight, h / scaleHeight, dot(normalize(position), dir));
}`),o.fragment.code.add(r.glsl`
    ${e.simplified?"":r.glsl`const int STEPS = 6;`}

    float getGlow(float dist, float radius, float intensity) {
      return pow(radius / max(dist, 1e-6), intensity);
    }

    vec3 getSkyColour(vec3 cameraPos, vec3 rayDir, vec3 lightDir, float terrainDepth) {
      float reducedPlanetRadius = radii[0] * 0.998;
      vec2 rayPlanetIntersect = sphereIntersect(cameraPos, rayDir, reducedPlanetRadius, true);
      vec2 rayAtmosphereIntersect = sphereIntersect(cameraPos, rayDir, radii[1], false);
      bool hitsAtmosphere = (rayAtmosphereIntersect.x <= rayAtmosphereIntersect.y) && rayAtmosphereIntersect.x > 0.0;
      bool insideAtmosphere = heightParameters[0] < radii[1];

      if (!(hitsAtmosphere || insideAtmosphere)) {
        return vec3(0);
      }

      bool hitsPlanet = (rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.x > 0.0;

      ${e.simplified?"":r.glsl`float start = insideAtmosphere ? 0.0 : rayAtmosphereIntersect.x;`}

      if (heightParameters[0] < reducedPlanetRadius) {
        // Long light rays from the night side of the planet lead to numerical instability
        // Do not render the atmosphere in such cases
        if (dot(rayDir, normalize(cameraPos)) < -0.025) {
          return vec3(0);
        }
        ${e.simplified?"":r.glsl`start = rayPlanetIntersect.y;`}
      }

      float end = hitsPlanet ? rayPlanetIntersect.x : rayAtmosphereIntersect.y;
      float maxEnd = end;

      ${e.haze?r.glsl`if (terrainDepth != -1.0) { end = terrainDepth; }`:""}

      vec3 samplePoint = cameraPos + rayDir * end;
      float multiplier = hitsPlanet ? -1.0 : 1.0;
      ${e.simplified?r.glsl`
          float sampleOpticalDepth = getOpticalDepth(samplePoint, multiplier * rayDir);
          float cameraOpticalDepth = getOpticalDepth(cameraPos, multiplier * rayDir);
          float lightOpticalDepth = getOpticalDepth(normalize(samplePoint) * radii[0], lightDir);
          float cameraLightOpticalDepth = min(1e6, getOpticalDepth(normalize(cameraPos) * radii[0], lightDir));
          lightOpticalDepth = mix(cameraLightOpticalDepth, lightOpticalDepth, heightParameters[3]);

          if (heightParameters[0] < radii[0]) {
            lightOpticalDepth = cameraLightOpticalDepth;
          }

          float opticalDepth = abs(cameraOpticalDepth - sampleOpticalDepth);
          ${e.haze?r.glsl`if (terrainDepth != -1.0) { opticalDepth = min(0.25 * end, opticalDepth); }`:""}

          vec3 scattering =
          ${e.haze?r.glsl`betaRayleigh`:r.glsl`mix(0.5 * betaRayleigh, betaCombined,(pow(1.0 - clamp(dot(normalize(samplePoint), rayDir), 0.0, 1.0), 10.0)))`}
          * opticalDepth;
          vec3 lightDepth = betaCombined * lightOpticalDepth;
          vec3 absorption = (exp(-scattering) - exp(-lightDepth)) / (lightDepth - scattering);`:r.glsl`
          vec3 scattering = vec3(0);
          float lastOpticalDepth = getOpticalDepth(samplePoint, rayDir);
          float stepSize = (end - start) / float(STEPS);
          for (int i = 0; i < STEPS; i++) {
            samplePoint -= stepSize * rayDir;
            float opticalDepth = multiplier * getOpticalDepth(samplePoint, rayDir * multiplier);
            if (i > 0) {
              scattering *= exp(-(betaRayleigh + betaMie) * max(0.0, (opticalDepth - lastOpticalDepth)));
            }

            if (dot(normalize(samplePoint), lightDir) > -0.3) {
              scattering += exp(-(length(samplePoint) - radii[0]) / scaleHeight) * exp(-(betaCombined + betaMie) * getOpticalDepth(samplePoint, lightDir));
            }

            lastOpticalDepth = opticalDepth;
          }`}

      float mu = dot(rayDir, lightDir);
      float mumu = mu * mu;

      ${e.simplified?r.glsl``:r.glsl`
          float phaseRayleigh = 0.05968310365 * (1.0 + mumu);`}
        ${e.haze?r.glsl`
            ${e.simplified?r.glsl`
                return absorption * scattering;`:r.glsl`
                return scattering * stepSize * phaseRayleigh * betaRayleigh;`}`:r.glsl`
            const float g = 0.8;
            const float gg = g * g;
            float phaseMie = end == maxEnd ? 0.11936620731 * ((1.0 - gg) * (mumu + 1.0)) / (pow(1.0 + gg - 2.0 * mu * g, 1.5) * (2.0 + gg)) : 0.0;
            phaseMie += getGlow(1.0-mu, sunSize * 5e-5, sunSpread * 3.0) * smoothstep(0.01, 0.1, length(scattering));
            phaseMie = clamp(phaseMie, 0.0, 128.0);
            ${e.simplified?r.glsl`
                return absorption * scattering * (1.0 + mieStrength * 0.15 * phaseMie);`:r.glsl`
                return scattering * stepSize * (phaseRayleigh * betaRayleigh + mieStrength * 0.05 * phaseMie * betaMie);`}`}
    }

    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    vec4 applyUndergroundAtmosphere(vec3 rayDir, vec3 lightDirection, vec4 fragColor) {
      vec2 rayPlanetIntersect = sphereIntersect(cameraPosition, rayDir, radii[0], true);
      if (!((rayPlanetIntersect.x <= rayPlanetIntersect.y) && rayPlanetIntersect.y > 0.0)) {
        return fragColor;
      }

      float lightAngle = dot(lightDirection, normalize(cameraPosition + rayDir * max(0.0, rayPlanetIntersect.x)));
      vec4 surfaceColor = vec4(vec3(max(0.0, (smoothstep(-1.0, 0.8, 2.0 * lightAngle)))), 1.0 - altitudeFade);
      float relDist = (rayPlanetIntersect.y - max(0.0, rayPlanetIntersect.x)) / innerFadeDistance;
      if (relDist > 1.0) {
        return surfaceColor;
      }

      return mix(gl_FragColor, surfaceColor, smoothstep(0.0, 1.0, relDist * relDist));
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;
      ${e.haze?r.glsl`
          vec4 depthSample = texture2D(depthTex, vuv0).rgba;
          if (depthSample != vec4(0)) {
            vec3 cameraSpaceRay = normalize(eyeDir);
            cameraSpaceRay /= cameraSpaceRay.z;
            cameraSpaceRay *= -linearDepthFromTexture(depthTex, vuv0, nearFar);
            terrainDepth = max(0.0, length(cameraSpaceRay));
          }`:r.glsl`
          float depthSample = texture2D(depthTex, vuv0).r;
          if (depthSample != 1.0) {
            gl_FragColor = vec4(0);
            return;
          }`}
      vec3 skyCol = getSkyColour(cameraPosition, rayDir, lightingMainDirection, terrainDepth);
      ${e.haze?r.glsl`
          float x = sqrt(max(heightParameters[1] - radii[0] * radii[0], 0.0));
          vec3 up = normalize(cameraPosition);
          vec3 upCorrected = normalize((heightParameters[0] - (x * x) / heightParameters[0]) * up + x * (radii[0] / heightParameters[0]) * rayDir);
          float skyHaze = pow( (1.0 - dot(rayDir, upCorrected)) * radii[0] / heightParameters[0], skyHazePow) * skyHazeMultiplier;
          ${e.simplified?r.glsl`
              vec3 col = ((depthSample != vec4(0)) ? 0.075 : skyHaze * 0.01) * hazeStrength * skyCol;`:r.glsl`
              vec3 col = ((depthSample != vec4(0)) ? 1.0 : skyHaze) * hazeStrength * skyCol;`}
          float alpha = 1.0;`:r.glsl`
          vec3 up = normalize(cameraPosition);
          ${e.simplified?r.glsl`
              vec3 col = mix(1.0, 3.0, max(0.0, dot(rayDir, up))) * skyStrength * skyCol;`:r.glsl`
              vec3 col = mix(4.0, 8.0, max(0.0, dot(rayDir, up))) * skyStrength * skyCol;`}
          float alpha = smoothstep(0.0, mix(0.15, 0.01, heightParameters[3]), length(col));`}
      col = tonemapACES(col);
      gl_FragColor = delinearizeGamma(vec4(col, alpha));
      ${e.haze?"":r.glsl`
          if (depthSample == 1.0) {
            gl_FragColor = applyUndergroundAtmosphere(rayDir, lightingMainDirection, gl_FragColor);
          }`}
    }
  `),o}var s=Object.freeze({__proto__:null,build:o});e.ChapmanAtmosphereShader=s,e.build=o}));
