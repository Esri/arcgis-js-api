/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{BackgroundGrid as e}from"./BackgroundGrid.glsl.js";import{TileBlendInput as t}from"./TileBlendInput.js";import{Float3Uniform as o}from"../../shaderModules/Float3Uniform.js";import{Float4Uniform as r}from"../../shaderModules/Float4Uniform.js";import{FloatUniform as a}from"../../shaderModules/FloatUniform.js";import{glsl as c}from"../../shaderModules/interfaces.js";import{Texture2DUniform as n}from"../../shaderModules/Texture2DUniform.js";function i(i,d){i.varyings.add("vtc","vec2"),i.vertex.uniforms.add(new r("texOffsetAndScale")),i.fragment.uniforms.add(new n("tex")),i.fragment.uniforms.add(new o("textureOpacities"));const s=d.textureFadingEnabled&&!d.renderOccluded;s&&(i.vertex.uniforms.add(new r("nextTexOffsetAndScale")),i.varyings.add("nvtc","vec2"),i.fragment.uniforms.add(new n("texNext")),i.fragment.uniforms.add(new o("nextTexOpacities")),i.fragment.uniforms.add(new a("fadeFactor")));const l=d.tileBlendInput===t.ColorComposite,f=d.tileBlendInput===t.GridComposite;f&&i.fragment.include(e),l&&i.fragment.uniforms.add(new o("backgroundColor")),i.vertex.code.add(c`
  void forwardTextureCoordinates(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${s?c`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:c``}
  }`),i.fragment.code.add(c`
    vec4 applyBaseOpacity(vec4 _color, vec3 _opacities) {
      return _opacities.z <= 0.0 ? _color : _color * _opacities.x;
    }

    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${f||l?c`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = ${l?c`vec4(backgroundColor, 1.0)`:c`gridColor(uv)`} * opacities.y;
              float alpha = opacities.z * color.a;
              return mix(bg, color, alpha) * opacities.x;`:c`return color;`}
    }`),s?i.fragment.code.add(c`vec4 getTileColor() {
vec4 color = getColor(texture2D(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture2D(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):i.fragment.code.add(c`vec4 getTileColor() {
return getColor(texture2D(tex, vtc), vtc, textureOpacities);
}`)}export{i as TerrainTexture};
