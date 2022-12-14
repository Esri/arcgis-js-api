/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","../core/mathUtils","../core/maybe","./mat3f64","./vec2","./vec2f64","../views/3d/environment/CloudsPresets","../views/3d/environment/CloudsTechniqueConfiguration","../views/3d/environment/NoiseTextureAtlasDimensions","../views/3d/webgl-engine/core/shaderLibrary/ScreenSpacePass","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix3DrawUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform"],(function(e,t,a,o,i,s,n,l,r,c,d,u,f,m,g,h,p){"use strict";let v=function(e){function a(){var t;return(t=e.apply(this,arguments)||this).cloudRadius=0,t.cloudSize=0,t.detailSize=0,t.absorption=0,t.density=0,t.smoothness=0,t.cloudHeight=0,t.coverage=0,t.raymarchingSteps=l.cloudPresets.default.raymarchingSteps,t.weatherTile=n.create(),t}return t._inheritsLoose(a,e),a}(m.NoParameters),y=function(e){function a(){var t;return(t=e.apply(this,arguments)||this).viewMatrix=i.create(),t}return t._inheritsLoose(a,e),a}(m.NoParameters);function S(e){const t=new h.ShaderBuilder;t.include(d.ScreenSpacePass,!1);const i=t.fragment;return i.uniforms.add([new f.FloatPassUniform("cloudRadius",(e=>e.cloudRadius)),new f.FloatPassUniform("power",(e=>a.lerp(35,120,e.absorption))),new f.FloatPassUniform("sigmaE",(e=>1+e.absorption)),new f.FloatPassUniform("density",(e=>a.lerp(0,.3,e.density))),new f.FloatPassUniform("cloudSize",(e=>a.lerp(0,.02,Math.max(.01,1-e.cloudSize)))),new f.FloatPassUniform("detailSize",(e=>a.lerp(0,.2,Math.max(.01,1-e.detailSize)))),new f.FloatPassUniform("smoothness",(e=>a.lerp(0,.5,1-e.smoothness))),new f.FloatPassUniform("cloudHeight",(e=>a.lerp(0,1500,e.cloudHeight))),new f.FloatPassUniform("coverage",(e=>e.coverage)),new g.Matrix3DrawUniform("view",(e=>e.viewMatrix)),new p.Texture2DPassUniform("cloudShapeTexture",(e=>o.isSome(e.noiseTexture)?e.noiseTexture.textureAtlas:null)),new u.Float2PassUniform("cloudVariables",(e=>s.set(w,e.coverage,e.absorption)))]),i.constants.add("halfCubeMapSize","float",.5*e.cubeMapSize),i.code.add(m.glsl`
    const int STEPS = ${e.steps===r.RayMarchingSteps.SIXTEEN?m.glsl`16`:e.steps===r.RayMarchingSteps.HUNDRED?m.glsl`100`:m.glsl`200`};
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
    }`),i.code.add(m.glsl`
    float getCloudShape(vec3 pos, float pOffset) {
      const float textureWidth = ${m.glsl.float(c.ATLAS_SIZE)};
      const float dataWidth = ${m.glsl.float(c.ATLAS_SIZE)};
      const float tileRows = ${m.glsl.float(c.TILE_ROWS)};
      const vec3 atlasDimensions = vec3(${m.glsl.float(c.TILE_SIZE)}, ${m.glsl.float(c.TILE_SIZE)}, tileRows * tileRows);

      //Change from Y being height to Z being height
      vec3 p = float(${m.glsl.float(c.TEXTURE_SCALE)}) * pos.xzy;

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
      vec2 uv = fract((${m.glsl.float(c.WEATHER_MAP_SCALE)} * p) / ${m.glsl.float(c.ATLAS_SIZE)} + 0.5);

      return texture2D(cloudShapeTexture, uv).a;
    }
    `),i.code.add(m.glsl`float clouds(vec3 p) {
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
}`),i.code.add(m.glsl`vec2 sphereIntersections(vec3 start, vec3 dir, float radius) {
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
}`),i.code.add("\n    float multipleOctaves(float extinction, float mu, float stepL) {\n      float attenuation = 1.0;\n      float contribution = 1.0;\n      float phaseAttenuation = 1.0;\n      float luminance = 0.0;\n\n      for (int i = 0; i < 4; i++) {\n        float phase = mix(HenyeyGreenstein(0.0, mu), HenyeyGreenstein(0.3 * phaseAttenuation, mu), 0.7);\n        luminance += contribution * phase * exp(-stepL * extinction * sigmaE * attenuation);\n        attenuation *= 0.2;\n        contribution *= 0.6;\n        phaseAttenuation *= 0.5;\n      }\n\n      return luminance;\n    }"),i.code.add(m.glsl`float lightRay(vec3 org, vec3 p, float phaseFunction, float mu, vec3 sunDirection) {
float lightRayDensity = clouds(p);
lightRayDensity += clouds(p + sunDirection * 1.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 2.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 3.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 4.0 * stepL);
lightRayDensity += clouds(p + sunDirection * 5.0 * stepL);
float beersLaw = multipleOctaves(lightRayDensity, mu, stepL);
return mix(beersLaw * 2.0 * (1.0 - (exp(-stepL * lightRayDensity * 2.0 * sigmaE ))), beersLaw, 0.5 + 0.5 * mu);
}`),i.code.add(m.glsl`float mainRay(vec3 org, vec3 dir, vec3 sunDirection, float distToStart, float totalDistance, out float totalTransmittance) {
if (dir.z < 0.0) {
return 0.0;
}
totalTransmittance = 1.0;
float stepS = totalDistance / float(STEPS);
float cameraHeight = length(org);
float mu = 0.5 + 0.5 * dot(sunDirection, dir);
float phaseFunction = mix(HenyeyGreenstein(-0.3, mu), HenyeyGreenstein(0.3, mu), 0.7);
vec3 p = org + distToStart  * dir;
float dist = distToStart;
float shading = 0.0;
for (int i = 0; i < STEPS; i++) {
float sampleDensity = clouds(p);
float sampleSigmaE = sampleDensity * sigmaE;
if (sampleDensity > 0.0 ) {
float ambient = mix((1.2), (1.6), saturate((length(p) - cloudRadius - cloudStart) / cloudHeight));
float luminance = sampleDensity * (ambient + power * phaseFunction * lightRay(org, p, phaseFunction, mu, sunDirection));
float transmittance = exp(-sampleSigmaE * stepS);
shading += totalTransmittance * (luminance - luminance * transmittance) / sampleSigmaE;
totalTransmittance *= transmittance;
if (totalTransmittance <= 0.001) {
totalTransmittance = 0.0;
break;
}
}
dist += stepS;
p = org + dir * dist;
}
return shading;
}`),i.code.add(m.glsl`void main() {
if (coverage ==  0.0) {
gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
return;
}
vec3 rayDir = rayDirection(gl_FragCoord.xy);
rayDir = normalize(view * rayDir);
vec3 viewPos = vec3(0, 0, cloudRadius + 1.0);
bool hitsPlanet = rayDir.z < 0.0;
float hazeFactor = smoothstep(-0.01, mix(0.0, 0.075, cloudVariables.x), abs(dot(rayDir, vec3(0, 0, 1))));
float totalTransmittance = 1.0;
float shading = 0.0;
if (hitsPlanet) {
shading = clamp(1.0 - cloudVariables.y, 0.6, 1.0) * (1.0 - hazeFactor);
totalTransmittance = hazeFactor;
gl_FragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);
return;
}
vec2 rayStartIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart);
vec2 rayEndIntersect = sphereIntersections(viewPos, rayDir, cloudRadius + cloudStart + cloudHeight);
float distToStart = rayStartIntersect.y;
float totalDistance = rayEndIntersect.y - distToStart;
vec3 sunDirection = normalize(vec3(0, 0, 1));
shading = 0.5 * mainRay(viewPos, rayDir, sunDirection, distToStart, totalDistance, totalTransmittance);
shading = mix(clamp(1.0 - cloudVariables.y, 0.6, 1.0), shading, hazeFactor);
totalTransmittance = mix(0.0, totalTransmittance, hazeFactor);
gl_FragColor = vec4(shading, totalTransmittance, shading, totalTransmittance);
}`),t}const w=n.create(),x=Object.freeze(Object.defineProperty({__proto__:null,CloudsPassParameters:v,CloudsDrawParameters:y,build:S},Symbol.toStringTag,{value:"Module"}));e.Clouds=x,e.CloudsDrawParameters=y,e.CloudsPassParameters=v,e.build=S}));
