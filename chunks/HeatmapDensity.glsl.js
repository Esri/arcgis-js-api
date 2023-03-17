/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderLibrary/util/View.glsl","../views/3d/webgl-engine/core/shaderModules/FloatPassUniform","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,i,r,a,o){"use strict";function s(e){const s=new a.ShaderBuilder,{vertex:d,fragment:u}=s;t.addProjViewLocalOrigin(d,e);const{isAttributeDriven:l,usesHalfFloat:n}=e;return s.attributes.add(o.VertexAttribute.POSITION,"vec3"),s.attributes.add(o.VertexAttribute.UV0,"vec2"),l&&(s.attributes.add(o.VertexAttribute.FEATUREATTRIBUTE,"float"),s.varyings.add("attributeValue","float")),n&&s.constants.add("compressionFactor","float",.25),s.varyings.add("unitCirclePos","vec2"),d.uniforms.add(new i.FloatPassUniform("radius",(({resolutionForScale:e,searchRadius:t},{camera:i,screenToWorldRatio:r})=>2*t*(0===e?1:e/r)*i.pixelRatio/i.fullViewport[2]))),d.code.add(r.glsl`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${o.VertexAttribute.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${l?r.glsl`attributeValue = ${o.VertexAttribute.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),u.code.add(r.glsl`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
      float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${l?r.glsl` * attributeValue`:""} ${n?r.glsl` * compressionFactor`:""};
      gl_FragColor = vec4(density);
    }
  `),s}const d=Object.freeze(Object.defineProperty({__proto__:null,build:s},Symbol.toStringTag,{value:"Module"}));e.HeatmapDensity=d,e.build=s}));
