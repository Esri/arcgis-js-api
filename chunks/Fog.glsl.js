/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{a as e}from"./mat4.js";import{c as r}from"./mat4f64.js";import{TextureCoordinateAttribute as a,TextureCoordinateAttributeType as o}from"../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl.js";import{ReadLinearDepth as t}from"../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl.js";import{Gamma as i}from"../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl.js";import{Float2PassUniform as n}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float3Uniform as d}from"../views/3d/webgl-engine/core/shaderModules/Float3Uniform.js";import{FloatUniform as s}from"../views/3d/webgl-engine/core/shaderModules/FloatUniform.js";import{glsl as m}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as c}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{ShaderBuilder as l}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{Texture2DUniform as f}from"../views/3d/webgl-engine/core/shaderModules/Texture2DUniform.js";import{VertexAttribute as p}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function g(r){const g=new l;g.attributes.add(p.POSITION,"vec2"),g.include(a,{textureCoordinateType:o.Default}),g.varyings.add("worldRay","vec3"),g.varyings.add("eyeDir","vec3");const{vertex:u,fragment:w}=g;return u.uniforms.add([new c("inverseProjectionMatrix",((e,r)=>r.camera.inverseProjectionMatrix)),new c("inverseViewMatrix",((r,a)=>e(v,a.camera.viewMatrix)))]),u.code.add(m`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`),w.uniforms.add(new s("atmosphereC")),w.uniforms.add(new d("cameraPosition")),w.uniforms.add(new n("nearFar",((e,r)=>r.camera.nearFar))),w.uniforms.add(new f("depthTex")),w.uniforms.add(new s("fogStrength")),w.uniforms.add(new s("fogAmount")),w.uniforms.add(new d("fogColor")),g.include(i),w.include(t),w.code.add(m`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`),w.code.add(m`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`),w.code.add(m`
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

      ${r.haze?m`
          if(terrainDepth == -1.0){
            gl_FragColor = vec4(0);
            return;
          }`:""}

      vec4 fog = applyFog(terrainDepth, rayDir);

      gl_FragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
    }
  `),g}const v=r(),u=Object.freeze(Object.defineProperty({__proto__:null,build:g},Symbol.toStringTag,{value:"Module"}));export{u as F,g as b};
