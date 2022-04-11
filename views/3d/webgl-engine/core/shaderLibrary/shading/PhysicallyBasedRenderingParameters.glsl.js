/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/vec3f32","../attributes/VertexTextureCoordinates.glsl","../../shaderModules/interfaces"],(function(e,s,o,t){"use strict";const a=s.fromValues(0,.6,.2);var r;function i(s,a){const r=s.fragment,i=a.hasMetalnessAndRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture;a.pbrMode===e.PBRMode.Normal&&i&&s.include(o.VertexTextureCoordinates,a),a.pbrMode!==e.PBRMode.Schematic?(a.pbrMode===e.PBRMode.Disabled&&r.code.add(t.glsl`float getBakedOcclusion() { return 1.0; }`),a.pbrMode===e.PBRMode.Normal&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(t.glsl`vec3 mrr;
vec3 emission;
float occlusion;`),a.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),a.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(t.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),a.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),a.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(t.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),a.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),a.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(t.glsl`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(t.glsl`float getBakedOcclusion() { return 1.0; }`),r.code.add(t.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${i?"vtc.uv = vuv0;":""}
      ${a.hasMetalnessAndRoughnessTexture?a.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${a.hasEmissionTexture?a.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${a.hasOcclusionTexture?a.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(t.glsl`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}function c(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor))}e.PBRMode=void 0,(r=e.PBRMode||(e.PBRMode={}))[r.Disabled=0]="Disabled",r[r.Normal=1]="Normal",r[r.Schematic=2]="Schematic",r[r.Water=3]="Water",r[r.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",r[r.COUNT=5]="COUNT",e.PBRSchematicMRRValues=a,e.PhysicallyBasedRenderingParameters=i,e.bindPBRUniforms=c,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
