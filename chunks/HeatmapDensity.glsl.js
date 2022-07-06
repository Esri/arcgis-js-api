/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{addProjViewLocalOrigin as e}from"../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl.js";import{FloatPassUniform as i}from"../views/3d/webgl-engine/core/shaderModules/FloatPassUniform.js";import{glsl as r}from"../views/3d/webgl-engine/core/shaderModules/interfaces.js";import{ShaderBuilder as t}from"../views/3d/webgl-engine/core/shaderModules/ShaderBuilder.js";import{VertexAttribute as o}from"../views/3d/webgl-engine/lib/VertexAttribute.js";function a(a){const s=new t;e(s,a);const{isAttributeDriven:d}=a;return s.attributes.add(o.POSITION,"vec3"),s.attributes.add(o.UV0,"vec2"),d&&(s.attributes.add(o.FEATUREATTRIBUTE,"float"),s.varyings.add("attributeValue","float")),s.varyings.add("unitCirclePos","vec2"),s.vertex.uniforms.add(new i("radius",(({resolutionForScale:e,searchRadius:i},{camera:r,screenToWorldRatio:t})=>2*i*(0===e?1:e/t)*r.pixelRatio/r.fullViewport[2]))),s.vertex.code.add(r`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${o.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${d?r`attributeValue = ${o.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),s.fragment.code.add(r`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${d?r` * attributeValue`:""};
      gl_FragColor = vec4(density);
    }
  `),s}const s=Object.freeze(Object.defineProperty({__proto__:null,build:a},Symbol.toStringTag,{value:"Module"}));export{s as H,a as b};
