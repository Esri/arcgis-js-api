/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{f as e}from"../../../../../../chunks/vec3f32.js";import{VertexTextureCoordinates as s}from"../attributes/VertexTextureCoordinates.glsl.js";import{Float3DrawUniform as o}from"../../shaderModules/Float3DrawUniform.js";import{Float3PassUniform as t}from"../../shaderModules/Float3PassUniform.js";import{glsl as r}from"../../shaderModules/interfaces.js";import{createTexture2DDrawSizeUniforms as a}from"../../shaderModules/Texture2DDrawUniform.js";import{createTexture2DPassSizeUniforms as i}from"../../shaderModules/Texture2DPassUniform.js";import{BindType as c}from"../../shaderTechnique/BindType.js";import{GLTextureMaterialBindParameters as n}from"../../../lib/GLTextureMaterial.js";const u=e(0,.6,.2);var l;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.COUNT=5]="COUNT"}(l||(l={}));class m extends n{}function d(e,n){const u=e.fragment,m=n.hasMetalnessAndRoughnessTexture||n.hasEmissionTexture||n.hasOcclusionTexture;if(n.pbrMode===l.Normal&&m&&e.include(s,n),n.pbrMode!==l.Schematic)if(n.pbrMode!==l.Disabled){if(n.pbrMode===l.Normal){u.code.add(r`vec3 mrr;
vec3 emission;
float occlusion;`);const e=n.supportsTextureAtlas,s=n.pbrTextureBindType;n.hasMetalnessAndRoughnessTexture&&(u.uniforms.add(s===c.Pass?i("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):a("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),u.code.add(r`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),n.hasEmissionTexture&&(u.uniforms.add(s===c.Pass?i("texEmission",(e=>e.textureEmissive),e):a("texEmission",(e=>e.textureEmissive),e)),u.code.add(r`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),n.hasOcclusionTexture?(u.uniforms.add(s===c.Pass?i("texOcclusion",(e=>e.textureOcclusion),e):a("texOcclusion",(e=>e.textureOcclusion),e)),u.code.add(r`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):u.code.add(r`float getBakedOcclusion() { return 1.0; }`),u.uniforms.add(s===c.Pass?[new t("emissionFactor",(e=>e.emissiveFactor)),new t("mrrFactors",(e=>e.mrrFactors))]:[new o("emissionFactor",(e=>e.emissiveFactor)),new o("mrrFactors",(e=>e.mrrFactors))]),u.code.add(r`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${m?"vtc.uv = vuv0;":""}
      ${n.hasMetalnessAndRoughnessTexture?n.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${n.hasEmissionTexture?n.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${n.hasOcclusionTexture?n.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `)}}else u.code.add(r`float getBakedOcclusion() { return 1.0; }`);else u.code.add(r`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}export{m as PBRBindParameters,l as PBRMode,u as PBRSchematicMRRValues,d as PhysicallyBasedRenderingParameters};
