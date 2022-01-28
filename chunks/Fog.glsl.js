/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,r,a,t,o,i){"use strict";function n(e){const n=new i.ShaderBuilder;return n.attributes.add("position","vec2"),n.include(r.TextureCoordinateAttribute,{attributeTextureCoordinates:1}),n.varyings.add("worldRay","vec3"),n.varyings.add("eyeDir","vec3"),n.vertex.uniforms.add("projectionInverse","mat4"),n.vertex.uniforms.add("viewInverse","mat4"),n.vertex.code.add(o.glsl`void main(void) {
vec3 posViewNear = (projectionInverse * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (viewInverse * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`),n.fragment.uniforms.add("lightingMainDirection","vec3").add("atmosphereC","float").add("cameraPosition","vec3").add("nearFar","vec2").add("depthTex","sampler2D").add("strength","float").add("fogAmount","float"),n.include(t.Gamma),n.fragment.include(a.ReadLinearDepth),n.fragment.code.add(o.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`),n.fragment.code.add(o.glsl`
    vec4 applyFog(float dist, vec3 rayDir){
      bool sky = false;

      if(dist == -1.0){
        vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
        dist = 0.1 * rayAtmosphereIntersect.y;
        sky = true;
      }

      float fogAmount = fogAmount * (1.0 - exp(-dist * strength));

      float sunAmount = max(0.0, dot(rayDir, lightingMainDirection));

      float lightAngle = max(0.0, dot(normalize(cameraPosition + dist * rayDir), lightingMainDirection));
      ${e.haze?o.glsl`vec3 fogColor = mix(vec3(0.0), vec3(0.24, 0.44, 0.8), lightAngle);`:o.glsl`vec3 fogColor = mix(vec3(0.1), vec3(1.5), lightAngle);`}

      float phase = sky ? pow(sunAmount, 16.0) : 0.0;
      vec3 col = (lightAngle * vec3(1.0, 0.6, 0.3) * phase + fogColor) * fogAmount;
      return vec4(col, fogAmount);
    }
    `),n.fragment.code.add(o.glsl`
    vec3 tonemapACES(vec3 x) {
      return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
    }

    void main() {
      vec3 rayDir = normalize(worldRay);
      float terrainDepth = -1.0;

      float depthSample = texture2D(depthTex, vuv0).r;
      float zNorm = 2.0 * depthSample - 1.0;
      float linDepth = 2.0 * nearFar[0] * nearFar[1] / (nearFar[1] + nearFar[0] - zNorm * (nearFar[1] - nearFar[0]));
      if(depthSample < 1.0 && depthSample > 0.0){
        vec3 cameraSpaceRay = normalize(eyeDir);
        cameraSpaceRay /= cameraSpaceRay.z;
        cameraSpaceRay *= linDepth;
        terrainDepth = max(0.0, length(cameraSpaceRay));
      }

      ${e.haze?o.glsl`
          if(terrainDepth == -1.0){
            gl_FragColor = vec4(0);
            return;
          }`:""}

      vec4 fog = applyFog(terrainDepth, rayDir);

      gl_FragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
    }
  `),n}const d=Object.freeze({__proto__:null,build:n});e.FogShader=d,e.build=n}));
