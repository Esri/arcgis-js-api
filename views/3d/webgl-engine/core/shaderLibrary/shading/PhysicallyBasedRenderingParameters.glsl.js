/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../../../../chunks/vec3f32","../attributes/VertexTextureCoordinates.glsl"],(function(e,s,o,t){"use strict";const r=o.fromValues(0,.6,.2);function a(e,o){const r=e.fragment,a=o.hasMetalnessAndRoughnessTexture||o.hasEmissionTexture||o.hasOcclusionTexture;1===o.pbrMode&&a&&e.include(t.VertexTextureCoordinates,o),2!==o.pbrMode?(0===o.pbrMode&&r.code.add(s.glsl`
      float getBakedOcclusion() { return 1.0; }
  `),1===o.pbrMode&&(r.uniforms.add("emissionFactor","vec3"),r.uniforms.add("mrrFactors","vec3"),r.code.add(s.glsl`
      vec3 mrr;
      vec3 emission;
      float occlusion;
    `),o.hasMetalnessAndRoughnessTexture&&(r.uniforms.add("texMetallicRoughness","sampler2D"),o.supportsTextureAtlas&&r.uniforms.add("texMetallicRoughnessSize","vec2"),r.code.add(s.glsl`
      void applyMetallnessAndRoughness(TextureLookupParameter params) {
        vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;

        mrr[0] *= metallicRoughness.b;
        mrr[1] *= metallicRoughness.g;
      }`)),o.hasEmissionTexture&&(r.uniforms.add("texEmission","sampler2D"),o.supportsTextureAtlas&&r.uniforms.add("texEmissionSize","vec2"),r.code.add(s.glsl`
      void applyEmission(TextureLookupParameter params) {
        emission *= textureLookup(texEmission, params).rgb;
      }`)),o.hasOcclusionTexture?(r.uniforms.add("texOcclusion","sampler2D"),o.supportsTextureAtlas&&r.uniforms.add("texOcclusionSize","vec2"),r.code.add(s.glsl`
      void applyOcclusion(TextureLookupParameter params) {
        occlusion *= textureLookup(texOcclusion, params).r;
      }

      float getBakedOcclusion() {
        return occlusion;
      }
      `)):r.code.add(s.glsl`
      float getBakedOcclusion() { return 1.0; }
      `),r.code.add(s.glsl`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${a?"vtc.uv = vuv0;":""}
      ${o.hasMetalnessAndRoughnessTexture?o.supportsTextureAtlas?"vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);":"applyMetallnessAndRoughness(vtc);":""}
      ${o.hasEmissionTexture?o.supportsTextureAtlas?"vtc.size = texEmissionSize; applyEmission(vtc);":"applyEmission(vtc);":""}
      ${o.hasOcclusionTexture?o.supportsTextureAtlas?"vtc.size = texOcclusionSize; applyOcclusion(vtc);":"applyOcclusion(vtc);":""}
    }
  `))):r.code.add(s.glsl`
      const vec3 mrr = vec3(0.0, 0.6, 0.2);
      const vec3 emission = vec3(0.0);
      float occlusion = 1.0;

      void applyPBRFactors() {}

      float getBakedOcclusion() { return 1.0; }
    `)}!function(e){e.bindUniforms=function(e,s,o=!1){o||(e.setUniform3fv("mrrFactors",s.mrrFactors),e.setUniform3fv("emissionFactor",s.emissiveFactor))}}(a||(a={})),e.PBRSchematicMRRValues=r,e.PhysicallyBasedRenderingParameters=a,Object.defineProperty(e,"__esModule",{value:!0})}));
