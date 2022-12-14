/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","./_rollupPluginBabelHelpers","./mat4","./mat4f64","./vec3f64","../views/3d/webgl-engine/core/shaderLibrary/attributes/TextureCoordinateAttribute.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/ReadLinearDepth.glsl","../views/3d/webgl-engine/core/shaderLibrary/shading/Gamma.glsl","../views/3d/webgl-engine/core/shaderModules/Float2PassUniform","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderModules/Texture2DPassUniform","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,r,a,t,o,i,n,s,d,l,c,m,g,u,f,h){"use strict";let p=function(e){function a(){var r;return(r=e.apply(this,arguments)||this).fogColor=o.create(),r.hazeColor=o.create(),r.fogStrength=4e-6,r.hazeStrength=4e-6,r.atmosphereC=1,r}return r._inheritsLoose(a,e),a}(m.NoParameters);function v(e){const r=new u.ShaderBuilder;r.attributes.add(h.VertexAttribute.POSITION,"vec2"),r.include(i.TextureCoordinateAttribute,{textureCoordinateType:i.TextureCoordinateAttributeType.Default}),r.varyings.add("worldRay","vec3"),r.varyings.add("eyeDir","vec3");const{vertex:t,fragment:o}=r;return t.uniforms.add([new g.Matrix4PassUniform("inverseProjectionMatrix",((e,r)=>r.camera.inverseProjectionMatrix)),new g.Matrix4PassUniform("inverseViewMatrix",((e,r)=>a.invert(w,r.camera.viewMatrix)))]),t.code.add(m.glsl`void main(void) {
vec3 posViewNear = (inverseProjectionMatrix * vec4(position, -1, 1)).xyz;
eyeDir = posViewNear;
worldRay = (inverseViewMatrix * vec4(posViewNear, 0)).xyz;
forwardTextureCoordinates();
gl_Position = vec4(position, 1, 1);
}`),o.uniforms.add(new c.FloatPassUniform("atmosphereC",(e=>e.atmosphereC))),o.uniforms.add(new l.Float3PassUniform("cameraPosition",((e,r)=>r.camera.eye))),o.uniforms.add(new d.Float2PassUniform("nearFar",((e,r)=>r.camera.nearFar))),o.uniforms.add(new f.Texture2DPassUniform("depthTex",(e=>e.depthTexture))),o.uniforms.add(new c.FloatPassUniform("fogStrength",(r=>e.haze?r.hazeStrength:r.fogStrength))),o.uniforms.add(new c.FloatPassUniform("fogAmount",(r=>e.haze?r.hazeAmount:r.fogAmount))),o.uniforms.add(new l.Float3PassUniform("fogColor",(r=>e.haze?r.hazeColor:r.fogColor))),r.include(s.Gamma),o.include(n.ReadLinearDepth),o.code.add(m.glsl`vec2 sphereIntersect(vec3 start, vec3 dir) {
float a = dot(dir, dir);
float b = 2.0 * dot(dir, start);
float d = (b * b) - 4.0 * a * atmosphereC;
if (d < 0.0) {
return vec2(1e5, -1e5);
}
return vec2((-b - sqrt(d)) / (2.0 * a), (-b + sqrt(d)) / (2.0 * a));
}`),o.code.add(m.glsl`vec4 applyFog(float dist, vec3 rayDir){
if(dist == -1.0){
vec2 rayAtmosphereIntersect = sphereIntersect(cameraPosition, rayDir);
dist = 0.055 * rayAtmosphereIntersect.y;
}
float fogAmount = fogAmount * (1.0 - exp(-dist * fogStrength));
return vec4(fogAmount * fogColor, fogAmount);
}`),o.code.add(m.glsl`
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

      ${e.haze?m.glsl`
          if(terrainDepth == -1.0){
            gl_FragColor = vec4(0);
            return;
          }`:""}

      vec4 fog = applyFog(terrainDepth, rayDir);

      gl_FragColor = delinearizeGamma(vec4(tonemapACES(fog.rgb), fog.a));
    }
  `),r}const w=t.create(),b=Object.freeze(Object.defineProperty({__proto__:null,FogHazePassParameters:p,build:v},Symbol.toStringTag,{value:"Module"}));e.FogHazePassParameters=p,e.Haze=b,e.build=v}));
