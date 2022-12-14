/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../../../chunks/vec3f32","../attributes/VertexTextureCoordinates.glsl","../util/WebGL2Utils","../../shaderModules/Float3DrawUniform","../../shaderModules/Float3PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DDrawUniform","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType","../../shaderTechnique/BindType","../../../lib/GLTextureMaterial"],(function(e,s,t,r,o,a,i,l,n,u,c,d,m){"use strict";const x=t.fromValues(0,.6,.2);var p;e.PBRMode=void 0,(p=e.PBRMode||(e.PBRMode={}))[p.Disabled=0]="Disabled",p[p.Normal=1]="Normal",p[p.Schematic=2]="Schematic",p[p.Water=3]="Water",p[p.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",p[p.COUNT=5]="COUNT";let T=function(e){function t(){return e.apply(this,arguments)||this}return s._inheritsLoose(t,e),t}(m.GLTextureMaterialBindParameters);function g(s,t){const m=s.fragment,x=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===e.PBRMode.Normal&&x&&s.include(r.VertexTextureCoordinates,t),t.pbrMode!==e.PBRMode.Schematic)if(t.pbrMode!==e.PBRMode.Disabled){if(t.pbrMode===e.PBRMode.Normal){m.code.add(l.glsl`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.supportsTextureAtlas?t.hasWebGL2Context?c.TextureSizeUniformType.None:c.TextureSizeUniformType.Size:c.TextureSizeUniformType.None,s=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(m.uniforms.add(s===d.BindType.Pass?u.createTexture2DPassSizeUniforms("texMetallicRoughness",(e=>e.textureMetallicRoughness),e):n.createTexture2DDrawSizeUniforms("texMetallicRoughness",(e=>e.textureMetallicRoughness),e)),m.code.add(l.glsl`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(m.uniforms.add(s===d.BindType.Pass?u.createTexture2DPassSizeUniforms("texEmission",(e=>e.textureEmissive),e):n.createTexture2DDrawSizeUniforms("texEmission",(e=>e.textureEmissive),e)),m.code.add(l.glsl`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),t.hasOcclusionTexture?(m.uniforms.add(s===d.BindType.Pass?u.createTexture2DPassSizeUniforms("texOcclusion",(e=>e.textureOcclusion),e):n.createTexture2DDrawSizeUniforms("texOcclusion",(e=>e.textureOcclusion),e)),m.code.add(l.glsl`void applyOcclusion(TextureLookupParameter params) {
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
      ${t.hasMetallicRoughnessTextureTransform?l.glsl`vtc.uv = metallicRoughnessUV;`:""}
      ${t.hasMetallicRoughnessTexture?t.supportsTextureAtlas?l.glsl`
                vtc.size = ${o.textureSize(t,"texMetallicRoughness")};
                applyMetallnessAndRoughness(vtc);`:l.glsl`applyMetallnessAndRoughness(vtc);`:""}
      ${t.hasEmissiveTextureTransform?l.glsl`vtc.uv = emissiveUV;`:""}
      ${t.hasEmissionTexture?t.supportsTextureAtlas?l.glsl`
                vtc.size = ${o.textureSize(t,"texEmission")};
                applyEmission(vtc);`:l.glsl`applyEmission(vtc);`:""}
      ${t.hasOcclusionTextureTransform?l.glsl`vtc.uv = occlusionUV;`:""}
      ${t.hasOcclusionTexture?t.supportsTextureAtlas?l.glsl`
                vtc.size = ${o.textureSize(t,"texOcclusion")};
                applyOcclusion(vtc);`:l.glsl`applyOcclusion(vtc);`:""}
    }
  `)}}else m.code.add(l.glsl`float getBakedOcclusion() { return 1.0; }`);else m.code.add(l.glsl`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}e.PBRBindParameters=T,e.PBRSchematicMRRValues=x,e.PhysicallyBasedRenderingParameters=g,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
