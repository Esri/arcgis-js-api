/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","./vec3","./vec3f64","../views/3d/environment/PrecipitationTechniqueConfiguration","../views/3d/webgl-engine/core/shaderModules/Float3PassUniform","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,o,i,a,r,n,s,d,c){"use strict";function l(e){const t=new d.ShaderBuilder;return t.attributes.add(c.VertexAttribute.POSITION,"vec3"),t.attributes.add(c.VertexAttribute.INSTANCEFEATUREATTRIBUTE,"float"),t.vertex.uniforms.add(new a.Float3PassUniform("cameraPosition",((e,t)=>t.camera.eye))),t.vertex.uniforms.add(new a.Float3PassUniform("offset",((e,t)=>v(e,t)))),t.vertex.uniforms.add(new r.FloatPassUniform("width",(e=>e.width))),t.vertex.uniforms.add(new s.Matrix4PassUniform("proj",((e,t)=>t.camera.projectionMatrix))),t.vertex.uniforms.add(new s.Matrix4PassUniform("view",((e,t)=>t.camera.viewMatrix))),t.vertex.uniforms.add(new r.FloatPassUniform("time",(e=>e.time))),t.varyings.add("vUv","vec2"),t.vertex.code.add(n.glsl`
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
      ${e.type===i.PrecipitationType.Rain?n.glsl`
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
      `:n.glsl`
            vec3 rotationAxis = direction;
            vec4 quat = vec4(rotationAxis * sin(angle), cos(angle));

            tangent = rotateVectorByQuaternion(tangent, quat);
            // Random sinusoid from friction
            animatedPos += tangent * 0.25 * sin(dot(animatedPos, direction));
            vec4 pos = mat4(mat3(view)) * vec4((mod(width * animatedPos - offset, width) - 0.5 * width), 1.0);
            gl_Position = proj * (0.5 * vec4(position.xzy, 0.0) + pos);
      `}
    }
  `),t.fragment.uniforms.add([new r.FloatPassUniform("opacity",(e=>e.opacity)),new a.Float3PassUniform("particleColor",((t,o)=>f(o,e)))]),t.fragment.code.add(n.glsl`
    void main() {

      // Cut off corners of the triangle
      if(vUv.x < 0.0 || vUv.y < 0.0){
        discard;
      }

      float d = length(vUv - vec2(0.5));

      ${e.type===i.PrecipitationType.Rain?n.glsl`d = 0.35 * smoothstep(0.5, 0.0, d);`:n.glsl`d = smoothstep(0.5, 0.1, d);`}
      gl_FragColor = opacity * vec4(particleColor * d, d);
    }
  `),t}function v(e,o){const i=o.camera.eye,a=.5*e.width,r=1/e.width,n=t.floor(m,t.set(m,(i[0]+a)*r,(i[1]+a)*r,(i[2]+a)*r));return t.sub(n,i,t.scale(n,n,e.width))}function f(e,o){const a=o.type===i.PrecipitationType.Rain?g:p,r=t.scale(m,a,h),n=e.camera.eye;t.normalize(u,n);const s=Math.max(0,t.dot(u,e.lighting.mainLight.direction));return t.lerp(r,r,a,s)}const m=o.create(),u=o.create(),p=o.fromValues(1,1,1),g=o.fromValues(.85,.85,.85),h=.7,w=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:"Module"}));e.Precipitation=w,e.build=l}));
