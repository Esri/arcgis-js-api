/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/output/OutputHighlight.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/RgbaFloatEncoding.glsl","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder"],(function(e,i,o,t,a,n){"use strict";function r(e){const r=new n.ShaderBuilder,l=0===e.output,d=1===e.output,c=4===e.output;return r.extensions.add("GL_OES_standard_derivatives"),r.include(i.Slice,e),r.attributes.add("position","vec3"),r.attributes.add("color","vec3"),r.vertex.uniforms.add("uModelViewMatrix","mat4").add("uProjectionMatrix","mat4").add("uScreenMinMaxSize","vec2").add("uPointScale","vec2").add("uClipMin","vec3").add("uClipMax","vec3"),d?(r.vertex.uniforms.add("nearFar","vec2"),r.varyings.add("depth","float")):4!==e.output&&r.varyings.add("vColor","vec3"),r.vertex.code.add(a.glsl`
    void main(void) {
      // Move clipped points outside of clipspace
      if (position.x < uClipMin.x || position.y < uClipMin.y || position.z < uClipMin.z ||
        position.x > uClipMax.x || position.y > uClipMax.y || position.z > uClipMax.z) {
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
      vec4 camera = uModelViewMatrix * vec4(position, 1.0);

      float pointSize = uPointScale.x;
      vec4 position = uProjectionMatrix * camera;
     ${e.drawScreenSize?a.glsl`
      float clampedScreenSize = pointSize;`:a.glsl`
      float pointRadius = 0.5 * pointSize;
      vec4 cameraOffset = camera + vec4(0.0, pointRadius, 0.0, 0.0);
      vec4 positionOffset = uProjectionMatrix * cameraOffset;
      float radius = abs(positionOffset.y - position.y);
      float viewHeight = uPointScale.y;
      // screen diameter = (2 * r / w) * (h / 2)
      float screenPointSize = (radius / position.w) * viewHeight;
      float clampedScreenSize = clamp(screenPointSize, uScreenMinMaxSize.x, uScreenMinMaxSize.y);
      // Shift towards camera, to move rendered point out of terrain i.e. to
      // the camera-facing end of the virtual point when considering it as a
      // 3D sphere.
      camera.xyz -= normalize(camera.xyz) * pointRadius * clampedScreenSize / screenPointSize;
      position = uProjectionMatrix * camera;`}

     gl_PointSize = clampedScreenSize;
     gl_Position = position;

     ${d?a.glsl`depth = (-camera.z - nearFar[0]) / (nearFar[1] - nearFar[0]);`:""}
     ${l?a.glsl`vColor = color;`:""}
    }
  `),r.fragment.include(t.RgbaFloatEncoding,e),c&&r.include(o.OutputHighlight),r.fragment.code.add(a.glsl`
    void main(void) {
      vec2 vOffset = gl_PointCoord - vec2(0.5, 0.5);
      float r2 = dot(vOffset, vOffset);

      if (r2 > 0.25) {
        discard;
      }
      ${d?a.glsl`gl_FragColor = float2rgba(depth);`:""}
      ${c?a.glsl`outputHighlight();`:""}
      ${l?a.glsl`gl_FragColor = vec4(vColor, 1.0);`:""}
    }
  `),r}const l=Object.freeze({__proto__:null,build:r});e.PointRendererShader=l,e.build=r}));
