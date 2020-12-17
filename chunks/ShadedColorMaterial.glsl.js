/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../views/3d/webgl-engine/core/shaderModules/interfaces","../views/3d/webgl-engine/core/shaderLibrary/Transform.glsl","../views/3d/webgl-engine/core/shaderModules/ShaderBuilder","../views/3d/webgl-engine/core/shaderLibrary/util/ColorConversion.glsl","../views/3d/webgl-engine/core/shaderLibrary/Slice.glsl","../views/3d/webgl-engine/core/shaderLibrary/util/AlphaDiscard.glsl","../views/3d/webgl-engine/core/shaderLibrary/ScreenSizeScaling.glsl"],(function(e,o,r,l,i,a,d,n){"use strict";function s(e){const s=new l.ShaderBuilder;return s.include(r.Transform,{linearDepth:!1}),s.include(n.ScreenSizeScaling.builder,{}),s.include(a.Slice,e),s.fragment.include(i.ColorConversion),s.vertex.uniforms.add("proj","mat4").add("view","mat4"),s.fragment.uniforms.add("color","vec4"),s.attributes.add("position","vec3"),s.varyings.add("vWorldPosition","vec3"),e.screenSizeEnabled&&s.attributes.add("offset","vec3"),e.shadingEnabled&&(s.vertex.uniforms.add("viewNormal","mat4"),s.fragment.uniforms.add("shadedColor","vec4").add("shadingDirection","vec3"),s.attributes.add("normal","vec3"),s.varyings.add("vViewNormal","vec3")),s.vertex.code.add(o.glsl`
    void main(void) {
      vWorldPosition = ${e.screenSizeEnabled?"screenSizeScaling(offset, position)":"position"};
  `),e.shadingEnabled&&s.vertex.code.add(o.glsl`
      vec3 worldNormal = normal;
      vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;
    `),s.vertex.code.add(o.glsl`
    gl_Position = transformPosition(proj, view, vWorldPosition);
  }
  `),s.fragment.code.add(o.glsl`
    void main() {
      discardBySlice(vWorldPosition);
    `),e.shadingEnabled?s.fragment.code.add(o.glsl`
      vec3 viewNormalNorm = normalize(vViewNormal);
      float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
      vec4 finalColor = mix(color, shadedColor, shadingFactor);
    `):s.fragment.code.add(o.glsl`
      vec4 finalColor = color;
    `),s.fragment.code.add(o.glsl`
      if (finalColor.a < ${o.glsl.float(d.symbolAlphaCutoff)}) {
        discard;
      }
      ${7===e.output?o.glsl`gl_FragColor = vec4(finalColor.a);`:""}

      ${0===e.output?o.glsl`gl_FragColor = highlightSlice(finalColor, vWorldPosition); ${e.OITEnabled?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}`:""}
    }
    `),s}var t=Object.freeze({__proto__:null,build:s});e.ShadedColorMaterialShader=t,e.build=s}));
