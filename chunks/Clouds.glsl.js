/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{c as t}from"./mat3f64.js";import{RayMarchingSteps as e}from"../views/3d/environment/CloudsTechniqueConfiguration.js";import{ATLAS_SIZE as a,TILE_ROWS as o,TILE_SIZE as i,TEXTURE_SCALE as n,WEATHER_MAP_SCALE as r}from"../views/3d/environment/NoiseTextureAtlasDimensions.js";import{ScreenSpacePass as s}from"../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass.js";import{FloatUniform as l}from"../views/3d/webgl-engine/core/shaderModules/FloatUniform.js";import{NoParameters as c,glsl as d}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix3DrawUniform as u}from"../views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform.js";import{ShaderBuilder as f}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DUniform as m}from"../views/3d/webgl-engine/core/shaderModules/Texture2DUniform.js";class p extends c{constructor(){super(...arguments),this.viewMatrix=t()}}function g(t){const c=new f;return c.include(s,!1),c.fragment.uniforms.add(new l("cloudRadius")),c.fragment.uniforms.add(new l("halfCubeMapSize")),c.fragment.uniforms.add(new l("power")),c.fragment.uniforms.add(new l("sigmaE")),c.fragment.uniforms.add(new l("density")),c.fragment.uniforms.add(new l("cloudSize")),c.fragment.uniforms.add(new l("detailSize")),c.fragment.uniforms.add(new l("smoothness")),c.fragment.uniforms.add(new l("cloudHeight")),c.fragment.uniforms.add(new l("coverage")),c.fragment.uniforms.add(new u("view",(t=>t.viewMatrix))),c.fragment.uniforms.add(new m("cloudShapeTexture")),c.fragment.code.add(d`
    const int STEPS = ${t.steps===e.SIXTEEN?d`16`:t.steps===e.HUNDRED?d`100`:d`200`};
    const int STEPS_LIGHT = 6;
    const float stepL = 300.0 / float(STEPS_LIGHT);
    const float cloudStart = 1500.0;

    vec3 rayDirection(vec2 fragCoord) {
      vec2 xy = fragCoord - halfCubeMapSize;
      return normalize(vec3(-xy, -halfCubeMapSize));
    }

    float remap(float x, float low1, float high1, float low2, float high2) {
      return low2 + (x - low1) * (high2 - low2) / (high1 - low1);
    }

    float saturate(float x) {
      return clamp(x, 0.0, 1.0);
    }`),c.fragment.code.add(d`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${d.float(a)};
      const float dataWidth = ${d.float(a)};
      const float tileRows = ${d.float(o)};
      const vec3 atlasDimensions = vec3(${d.float(i)}, ${d.float(i)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${d.float(n)}) * pos.xzy;

      //Pixel coordinates of point in the 3D data
      vec3 coord = vec3(mod(p - pOffset * atlasDimensions, atlasDimensions));
      float f = fract(coord.z);
      float level = floor(coord.z);
      float tileY = floor(level / tileRows);
      float tileX = level - tileY * tileRows;

      //The data coordinates are offset by the x and y tile, the two boundary cells between each tile pair and the initial boundary cell on the first row/column
      vec2 offset = atlasDimensions.x * vec2(tileX, tileY) + 2.0 * vec2(tileX, tileY) + 1.0;
      vec2 pixel = coord.xy + offset;
      vec2 data = texture2D(cloudShapeTexture, mod(pixel, dataWidth) / textureWidth).xy;

      return 1.0 - mix(data.x, data.y, f);
    }

    float getCloudMap(vec2 p){
      // Non-power-of-two textures can't be tiled using WebGL1
      // Get fractional part of uv to tile
      // Shift the texture center to origin to avoid seam artifacts
      vec2 uv = fract((${d.float(r)} * p) / ${d.float(a)} + 0.5);

      return texture2D(cloudShapeTexture, uv).a;
    }
    `),c.fragment.code.add(d`float clouds(vec3 p) {
float cloud = saturate(0.5 * mix(0.0, 1.0, min(2.0 * coverage, 1.0)));
if (cloud <= 0.0) {
return 0.0;
}
float cloudMap = getCloudMap(cloudSize * p.xy);
cloud = mix(cloud, min(2.0 * (coverage), 1.0) * cloudMap, min(2.0 * (1.0 - coverage), 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float shape = getCloudShape(8.0 * cloudSize * p, 0.0);
cloud = saturate(remap(cloud, smoothness * shape, 1.0, 0.0, 1.0));
if (cloud <= 0.0) {
return 0.0;
}
float heightFraction = saturate((length(p) - cloudRadius - cloudStart) / cloudHeight);
cloud *= saturate(remap(heightFraction, 0.0, 0.25, 0.0, 1.0)) * smoothstep(1.0, 0.25, heightFraction);
if (cloud <= 0.0) {
return 0.0;
}
return density * saturate(remap(cloud, 0.35 * smoothness * getCloudShape(detailSize * p, 0.0), 1.0, 0.0, 1.0));
}`),c.fragment.code.add(d`vec2 sphereIntersections(vec3 start, vec3 dir, float radius) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float c = dot(start, start) - (radius * radius);
float d = (b * b) - 4.0 * a * c;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}
float HenyeyGreenstein(float g, float costh) {
return (1.0 / (4.0 * 3.1415))  * ((1.0 - g * g) / pow(1.0 + g * g - 2.0 * g * costh, 1.5));
}`),c.fragment.code.add("\n    vec3 multipleOctaves(float extinction, float mu, float stepL) {\n      float attenuation = 1.0;\n      float contribution = 1.0;\n      float phaseAttenuation = 1.0;\n      vec3 luminance = vec3(0);\n\n      for (int i = 0; i < 4; i++) {\n        float phase = mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);\n        luminance += contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);\n        attenuation *= 0.2;\n        contribution *= 0.6;\n        phaseAttenuation *= 0.5;\n      }\n\n      return luminance;\n    }"),c.fragment.code.add(d`vec3 lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
vec3 beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`),c.fragment.code.add(d`vec3 mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return vec3(0);
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
vec3 color = vec3(0.0);
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
vec3 luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
color += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return color;
}`),c.fragment.code.add(d`void main() {
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
bool hitsPlanet = rayDir.z < 0.0;
if (hitsPlanet) {
gl_FragColor = vec4(vec3(0), 1);
return;
}
vec2 rayStartIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart);
vec2 rayEndIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart + cloudHeight);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
float totalTransmittance = 1.0;
vec3 sunDirection = normalize(vec3(0, 0, 1));
vec3 col = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance).rgb;
gl_FragColor = vec4(col, totalTransmittance);
}`),c}const h=Object.freeze(Object.defineProperty({__proto__:null,CloudsDrawParameters:p,build:g},Symbol.toStringTag,{value:"Module"}));export{p as C,h as a,g as b};
