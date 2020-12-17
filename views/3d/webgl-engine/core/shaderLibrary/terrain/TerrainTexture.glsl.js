/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces"],(function(e,t){"use strict";e.TerrainTexture=function(e,r){e.varyings.add("vtc","vec2"),e.vertex.uniforms.add("texOffsetAndScale","vec4"),e.fragment.uniforms.add("tex","sampler2D"),r.textureFadingEnabled&&(e.vertex.uniforms.add("nextTexOffsetAndScale","vec4"),e.varyings.add("nvtc","vec2"),e.fragment.uniforms.add("texNext","sampler2D"),e.fragment.uniforms.add("textureFadeFactor","float")),e.vertex.code.add(t.glsl`
  void forwardTextureCoordinates(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${r.textureFadingEnabled?t.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:t.glsl``}
  }
  `),e.fragment.code.add(t.glsl`
  vec4 getTileColor() {
    ${r.textureFadingEnabled?t.glsl`return textureFadeFactor < 1.0 ? mix(texture2D(texNext, nvtc), texture2D(tex, vtc), textureFadeFactor) : texture2D(tex, vtc);`:t.glsl`return texture2D(tex, vtc);`}
  }
  `)},Object.defineProperty(e,"__esModule",{value:!0})}));
