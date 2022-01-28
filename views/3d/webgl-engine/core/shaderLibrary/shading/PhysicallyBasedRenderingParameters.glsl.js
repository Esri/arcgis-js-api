/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec3f32","../attributes/VertexTextureCoordinates.glsl","../../shaderModules/interfaces"],(function(e,s,o,t){"use strict";const r=s.fromValues(0,.6,.2);function a(e,s){const r=e.fragment,a=s.hasMetalnessAndRoughnessTexture||s.hasEmissionTexture||s.hasOcclusionTexture;1===s.pbrMode&&a&&e.include(o.VertexTextureCoordinates,s),2!==s.pbrMode?(0===s.pbrMode&&r.code.add(t.glsl`float getBakedOcclusion() { return 1.0; }`),1===s.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(t.glsl`vec3 mrr;
vec3 emission;
float occlusion;`),s.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),s.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(t.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),s.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),s.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(t.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),s.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),s.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(t.glsl`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(t.glsl`float getBakedOcclusion() { return 1.0; }`),r.code.add(t.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${s.hasMetalnessAndRoughnessTexture?s.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${s.hasEmissionTexture?s.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${s.hasOcclusionTexture?s.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(t.glsl`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function i(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor))}e.PBRSchematicMRRValues=r,e.PhysicallyBasedRenderingParameters=a,e.bindPBRUniforms=i,Object.defineProperty(e,"__esModule",{value:!0})}));
