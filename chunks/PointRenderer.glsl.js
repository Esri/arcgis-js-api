/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{ShaderOutput as e}from"../views/3d/webgl-engine/core/shaderLibrary/ShaderOutputOptions.js";import{SliceDraw as i}from"../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl.js";import{OutputHighlight as o}from"../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl.js";import{RgbaFloatEncoding as r}from"../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl.js";import{Float2PassUniform as t}from"../views/3d/webgl-engine/core/shaderModules/Float2PassUniform.js";import{Float2Uniform as n}from"../views/3d/webgl-engine/core/shaderModules/Float2Uniform.js";import{Float3Uniform as a}from"../views/3d/webgl-engine/core/shaderModules/Float3Uniform.js";import{glsl as s}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{Matrix4PassUniform as d}from"../views/3d/webgl-engine/core/shaderModules/Matrix4PassUniform.js";import{Matrix4Uniform as l}from"../views/3d/webgl-engine/core/shaderModules/Matrix4Uniform.js";import{ShaderBuilder as c}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as p}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function m(m){const f=new c,g=m.output===e.Color,u=m.output===e.Depth,v=m.output===e.Highlight,{vertex:w,fragment:S}=f;return f.extensions.add("GL_OES_standard_derivatives"),f.include(i,m),f.attributes.add(p.POSITION,"vec3"),f.attributes.add(p.COLOR,"vec3"),w.uniforms.add(new l("modelView")),w.uniforms.add(new d("proj",((e,i)=>i.camera.projectionMatrix))),w.uniforms.add(new n("screenMinMaxSize")),w.uniforms.add(new n("pointScale")),w.uniforms.add(new a("clipMin")),w.uniforms.add(new a("clipMax")),u?(w.uniforms.add(new t("nearFar",((e,i)=>i.camera.nearFar))),f.varyings.add("depth","float")):m.output!==e.Highlight&&f.varyings.add("vColor","vec3"),w.code.add(s`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < clipMin.x || position.y < clipMin.y || position.z < clipMin.z ||
        position.x > clipMax.x || position.y > clipMax.y || position.z > clipMax.z) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      if (rejectBySlice(position)) {
        gl_Position = vec4(0.0,0.0,0.0,2.0);
        gl_PointSize = 0.0;
        return;
      }

      // Position in camera space
      vec4 camera = modelView * vec4(position, 1.0);

      float pointSize = pointScale.x;
      vec4 position = proj * camera;
     ${m.drawScreenSize?s`
      float clampedScreenSize = pointSize;`:s`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = proj * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = pointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, screenMinMaxSize.x, screenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = proj * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${u?s`depth = (-camera.z - nearFar[0]) / (nearFar[1] - nearFar[0]);`:""}
     ${g?s`vColor = color;`:""}
    }
  `),S.include(r,m),v&&f.include(o),S.code.add(s`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${u?s`gl_FragColor = float2rgba(depth);`:""}
      ${v?s`outputHighlight();`:""}
      ${g?s`gl_FragColor = vec4(vColor, 1.0);`:""}
    }
  `),f}const f=Object.freeze(Object.defineProperty({__proto__:null,build:m},Symbol.toStringTag,{value:"Module"}));export{f as P,m as b};
