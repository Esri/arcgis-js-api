/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{PrecipitationType as e}from"../views/3d/environment/PrecipitationTechniqueConfiguration.js";import{Float3Uniform as t}from"../views/3d/webgl-engine/core/shaderModules/Float3Uniform.js";import{FloatUniform as o}from"../views/3d/webgl-engine/core/shaderModules/FloatUniform.js";import{glsl as i}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as r}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{Matrix4Uniform as a}from"../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform.js";import{ShaderBuilder as n}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as s}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function d(d){const c=new n;return c.attributes.add(s.POSITION,"vec3"),c.attributes.add(s.INSTANCEFEATUREATTRIBUTE,"float"),c.vertex.uniforms.add(new t("cameraPosition")),c.vertex.uniforms.add(new t("offset")),c.vertex.uniforms.add(new o("width")),c.vertex.uniforms.add(new r("proj",((e,t)=>t.camera.projectionMatrix))),c.vertex.uniforms.add(new a("view")),c.vertex.uniforms.add(new o("time")),c.varyings.add("vUv","vec2"),c.vertex.code.add(i`
    vec3 hash31(float p){
      vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
      p3 += dot(p3, p3.yzx + 33.33);
      return fract((p3.xxy + p3.yzz) * p3.zyx);
    }

    float hash11(float p){
      p = fract(p * 0.1031);
      p *= p + 33.33;
      p *= p + p;
      return fract(p);
    }

    //https://www.geeks3d.com/20141201/how-to-rotate-a-vertex-by-a-quaternion-in-glsl/
    vec3 rotateVectorByQuaternion(vec3 v, vec4 q){
      return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
    }

    void main(void) {

      vUv = position.xz;

      vec3 rand = hash31(instanceFeatureAttribute);

      // Set random position for all particles
      // The hash function space is not high resolution so offset particles by an additional random value
      // This creates grids of 1000 particles which are shifted by random hundreths of the tile width
      // overlaying multiple identical but offset grids
      vec3 randomPosition = 2.0 * (rand + (0.01 + 0.01 * rand) * floor(0.001 * instanceFeatureAttribute)) - 1.0;

      // Random orientation of rain drops
      float angle = 3.1415 * hash11(instanceFeatureAttribute);

      vec3 up = vec3(0, 0, 1);

      // Gravity and wind direction
      vec3 direction = normalize(cameraPosition);

      vec3 tangent = normalize(cross(direction, up));

      // Gravity
      vec3 animatedPos = randomPosition + direction * -time;

      // Rain particles fall straight down and are randomly oriented
      // Snow particles have random sinusoid trajectories and are rotated to face the camera
      ${d.type===e.Rain?i`
            // Random rotation for particle
            vec3 rotationAxis = up;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));
            vec3 transformedPos = rotateVectorByQuaternion(vec3(0.2, 0.2, 4.0) * (position - vec3(0.5, 0.0, 0.5)), quat);

            // Rotate particle to planetary position
            rotationAxis = tangent;
            angle = 0.5 * -acos(dot(direction, up));
            quat = vec4(rotationAxis * sin(angle), cos(angle));
            transformedPos = rotateVectorByQuaternion(transformedPos, quat);

            vec4 pos = mat4(mat3(view)) * vec4(transformedPos + (mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * pos;
      `:i`
            vec3 rotationAxis = direction;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));

            tangent = rotateVectorByQuaternion(tangent, quat);
            // Random sinusoid from friction
            animatedPos += tangent * 0.25 * sin(dot(animatedPos, direction));
            vec4 pos = mat4(mat3(view)) * vec4((mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * (0.5 * vec4(position.xzy, 0.0) + pos);
      `}
    }
  `),c.fragment.uniforms.add(new o("opacity")),c.fragment.uniforms.add(new t("particleColor")),c.fragment.code.add(i`
    void main() {

      // Cut off corners of the triangle
      if(vUv.x < 0.0 || vUv.y < 0.0){
        discard;
      }

      float d = length(vUv - vec2(0.5));

      ${d.type===e.Rain?i`d = 0.35 * smoothstep(0.5, 0.0, d);`:i`d = smoothstep(0.5, 0.1, d);`}
      gl_FragColor = opacity * vec4(particleColor * d, d);
    }
  `),c}const c=Object.freeze(Object.defineProperty({__proto__:null,build:d},Symbol.toStringTag,{value:"Module"}));export{c as P,d as b};
