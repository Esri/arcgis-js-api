/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../attributes/VertexColor.glsl","../util/MixExternalColor.glsl"],(function(e,o,r,a){"use strict";e.ComputeMaterialColor=function(e,t){e.include(r.VertexColor,t),e.fragment.include(a.MixExternalColor);const l=e.fragment;l.uniforms.add("uBaseColor","vec4"),l.uniforms.add("uObjectOpacity","float"),t.attributeColor?l.code.add(o.glsl`
      vec3 _baseColor() {
        // combine the old material parameters into a single one
        return uBaseColor.rgb * vColor.rgb;
      }

      float _baseOpacity() {
        return uBaseColor.a * vColor.a;
      }
    `):l.code.add(o.glsl`
      vec3 _baseColor() {
        // combine the old material parameters into a single one
        return uBaseColor.rgb;
      }

      float _baseOpacity() {
        return uBaseColor.a;
      }
    `),l.code.add(o.glsl`
    vec4 computeMaterialColor(vec4 textureColor, vec4 externalColor, int externalColorMixMode) {
      vec3 baseColor = _baseColor();
      float baseOpacity = _baseOpacity();

      vec3 color = mixExternalColor(
        baseColor,
        textureColor.rgb,
        externalColor.rgb,
        externalColorMixMode
      );
      float opacity = uObjectOpacity * mixExternalOpacity(
        baseOpacity,
        textureColor.a,
        externalColor.a,
        externalColorMixMode
      );

      return vec4(color, opacity);
    }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
