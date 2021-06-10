/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";function o(e,o){e.varyings.add("vtc","vec2"),e.vertex.uniforms.add("texOffsetAndScale","vec4"),e.fragment.uniforms.add("tex","sampler2D"),e.fragment.uniforms.add("compositeBackground","bool"),e.fragment.uniforms.add("textureOpacity","float"),e.fragment.uniforms.add("baseOpacity","float"),o.textureFadingEnabled&&(e.vertex.uniforms.add("nextTexOffsetAndScale","vec4"),e.varyings.add("nvtc","vec2"),e.fragment.uniforms.add("texNext","sampler2D"),e.fragment.uniforms.add("textureFadeFactor","float")),e.vertex.code.add(t.glsl`
  void forwardTextureCoordinates(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${o.textureFadingEnabled?t.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:t.glsl``}
  }
  `),o.useGrid?(e.fragment.code.add(t.glsl`
    float lineFactorAtPosition(float value) {
      float pos = value * 129.0;
      if(pos < 0.5 || pos > 128.5) {
        return 1.0;
      }

      pos = pos + 0.5;
      float modulo = mod(pos, 16.0);
      return modulo <= 2.0 ?  1.0 - abs(modulo - 1.0) : 0.0;
    }

    float lineFactorAtUV(vec2 uv) {
      return max(lineFactorAtPosition(uv.x), lineFactorAtPosition(uv.y));
    }

    float lineFactor(vec2 uv) {
      vec2 offset = fwidth(uv) * 0.25;
      return (lineFactorAtUV(vec2(uv.x + offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y + offset.y)) +
              lineFactorAtUV(vec2(uv.x + offset.x, uv.y - offset.y)) +
              lineFactorAtUV(vec2(uv.x - offset.x, uv.y - offset.y))) / 4.0;
    }
    `),e.fragment.code.add(t.glsl`
    vec4 getTileColor() {
      vec4 color = ${o.textureFadingEnabled?t.glsl`textureFadeFactor < 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);`:t.glsl`texture2D(tex, vtc);`};
      if(!compositeBackground) {
        return color;
      }

      float line = lineFactor(vtc) * 0.1 + 0.9;
      vec4 gridColor = vec4(1.0, 0.972, 0.918, 1.0) * line * baseOpacity;
      float alpha = textureOpacity * color.a;
      return mix(gridColor, color, alpha);
    }`)):o.hasBackgroundColor?(e.fragment.uniforms.add("backgroundColor","vec4"),e.fragment.code.add(t.glsl`
    vec4 getTileColor() {
      vec4 color = ${o.textureFadingEnabled?t.glsl`textureFadeFactor < 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);`:t.glsl`texture2D(tex, vtc);`};
      float alpha = textureOpacity * color.a;
      return compositeBackground ? mix(backgroundColor * baseOpacity, color, alpha) : color;
    }`)):e.fragment.code.add(t.glsl`
    vec4 getTileColor() {
      return ${o.textureFadingEnabled?t.glsl`textureFadeFactor < 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);`:t.glsl`texture2D(tex, vtc);`}
  }
  `)}e.TerrainTexture=o,Object.defineProperty(e,"__esModule",{value:!0})}));
