/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/lib/VertexAttribute"],(function(e,t,i,a){"use strict";var r;function d(r){const d=new i.ShaderBuilder,{mode:u,isAttributeDriven:o}=r;return d.attributes.add(a.VertexAttribute.POSITION,"vec3"),d.attributes.add(a.VertexAttribute.UV0,"vec2"),r.isAttributeDriven&&(d.attributes.add(a.VertexAttribute.FEATUREATTRIBUTE,"float"),d.varyings.add("attributeValue","float")),d.varyings.add("unitCirclePos","vec2"),d.vertex.uniforms.add("radius","float"),d.vertex.uniforms.add("proj","mat4"),d.vertex.uniforms.add("view","mat4"),d.vertex.code.add(t.glsl`
    void main() {
      unitCirclePos = uv0;

      vec4 posProj = proj * (view * vec4(${a.VertexAttribute.POSITION}, 1.0));
      vec4 quadOffset = vec4(unitCirclePos * radius, 0.0, 0.0);

      ${o?t.glsl`attributeValue = ${a.VertexAttribute.FEATUREATTRIBUTE};`:""}
      gl_Position = posProj + quadOffset;
    }
  `),u===e.HeatmapMode.KernelDensity?d.fragment.code.add(t.glsl`
      void main() {
        float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
        if (radiusRatioSquared > 1.0) {
          discard;
        }

        float oneMinusRadiusRatioSquared = 1.0 - radiusRatioSquared;
        float density = oneMinusRadiusRatioSquared * oneMinusRadiusRatioSquared ${o?t.glsl` * attributeValue`:""};
        gl_FragColor = vec4(density);
      }
    `):u===e.HeatmapMode.GaussianBlur&&(d.fragment.uniforms.add("kernel","sampler2D"),d.fragment.code.add(t.glsl`
    void main() {
      float radiusRatioSquared = dot(unitCirclePos, unitCirclePos);
      if (radiusRatioSquared > 1.0) {
        discard;
      }

      vec2 uv = abs(unitCirclePos);
      vec2 uvX = vec2(uv.x, 0.5);
      vec2 uvY = vec2(uv.y, 0.5);
      float intensity = texture2D(kernel, uvX).r * texture2D(kernel, uvY).r${o?t.glsl` * attributeValue`:""};
      gl_FragColor = vec4(intensity);
    }
  `)),d}e.HeatmapMode=void 0,(r=e.HeatmapMode||(e.HeatmapMode={}))[r.GaussianBlur=0]="GaussianBlur",r[r.KernelDensity=1]="KernelDensity";const u=Object.freeze(Object.defineProperty({__proto__:null,get HeatmapMode(){return e.HeatmapMode},build:d},Symbol.toStringTag,{value:"Module"}));e.HeatmapDensityShader=u,e.build=d}));
