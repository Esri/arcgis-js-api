/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec3f32","../attributes/VertexTextureCoordinates.glsl","../util/WebGL2Utils","../../shaderModules/Float3DrawUniform","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DDrawUniform","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType","../../shaderTechnique/BindType","../../../lib/GLTextureMaterial"],(function(e,s,r,t,o,a,i,l,n,u,c,d,m){"use strict";const x=r.fromValues(0,.6,.2);var p;e.PBRMode=void 0,(p=e.PBRMode||(e.PBRMode={}))[p.Disabled=0]="Disabled",p[p.Normal=1]="Normal",p[p.Schematic=2]="Schematic",p[p.Water=3]="Water",p[p.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",p[p.Terrain=5]="Terrain",p[p.TerrainWithWater=6]="TerrainWithWater",p[p.COUNT=7]="COUNT";let T=function(e){function r(){return e.apply(this,arguments)||this}return s._inheritsLoose(r,e),r}(m.GLTextureMaterialBindParameters);function h(s,r){const m=s.fragment,x=r.hasMetallicRoughnessTexture||r.hasEmissionTexture||r.hasOcclusionTexture;if(r.pbrMode===e.PBRMode.Normal&&x&&s.include(t.VertexTextureCoordinates,r),r.pbrMode!==e.PBRMode.Schematic)if(r.pbrMode!==e.PBRMode.Disabled){if(r.pbrMode===e.PBRMode.Normal){m.code.add(l.glsl`vec3 mrr;
vec3 emission;
float occlusion;`);const e=r.supportsTextureAtlas?r.hasWebGL2Context?c.TextureSizeUniformType.None:c.TextureSizeUniformType.Size:c.TextureSizeUniformType.None,s=r.pbrTextureBindType;r.hasMetallicRoughnessTexture&&(m.uniforms.add(s===d.BindType.Pass?u.createTexture2DPassSizeUniforms("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):n.createTexture2DDrawSizeUniforms("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),m.code.add(l.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),r.hasEmissionTexture&&(m.uniforms.add(s===d.BindType.Pass?u.createTexture2DPassSizeUniforms("texEmission",(e=>e.textureEmissive),e):n.createTexture2DDrawSizeUniforms("texEmission",(e=>e.textureEmissive),e)),m.code.add(l.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),r.hasOcclusionTexture?(m.uniforms.add(s===d.BindType.Pass?u.createTexture2DPassSizeUniforms("texOcclusion",(e=>e.textureOcclusion),e):n.createTexture2DDrawSizeUniforms("texOcclusion",(e=>e.textureOcclusion),e)),m.code.add(l.glsl`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):m.code.add(l.glsl`float getBakedOcclusion() { return 1.0; }`),m.uniforms.add(s===d.BindType.Pass?[new i.Float3PassUniform("emissionFactor",(e=>e.emissiveFactor)),new i.Float3PassUniform("mrrFactors",(e=>e.mrrFactors))]:[new a.Float3DrawUniform("emissionFactor",(e=>e.emissiveFactor)),new a.Float3DrawUniform("mrrFactors",(e=>e.mrrFactors))]),m.code.add(l.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${x?l.glsl`vtc.uv = vuv0;`:""}
      ${r.hasMetallicRoughnessTextureTransform?l.glsl`vtc.uv = metallicRoughnessUV;`:""}
      ${r.hasMetallicRoughnessTexture?r.supportsTextureAtlas?l.glsl`
                vtc.size = ${o.textureSize(r,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:l.glsl`applyMetallnessAndRoughness(vtc);`:""}
      ${r.hasEmissiveTextureTransform?l.glsl`vtc.uv = emissiveUV;`:""}
      ${r.hasEmissionTexture?r.supportsTextureAtlas?l.glsl`
                vtc.size = ${o.textureSize(r,"texEmission")};
                applyEmission(vtc);`:l.glsl`applyEmission(vtc);`:""}
      ${r.hasOcclusionTextureTransform?l.glsl`vtc.uv = occlusionUV;`:""}
      ${r.hasOcclusionTexture?r.supportsTextureAtlas?l.glsl`
                vtc.size = ${o.textureSize(r,"texOcclusion")};
                applyOcclusion(vtc);`:l.glsl`applyOcclusion(vtc);`:""}
    }
  `)}}else m.code.add(l.glsl`float getBakedOcclusion() { return 1.0; }`);else m.code.add(l.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}e.PBRBindParameters=T,e.PBRSchematicMRRValues=x,e.PhysicallyBasedRenderingParameters=h,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
