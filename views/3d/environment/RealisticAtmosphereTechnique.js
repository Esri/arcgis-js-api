// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../environment/RealisticAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,n,i,t,a,o,l,u,h){Object.defineProperty(r,"__esModule",{value:!0});var s=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return n.__extends(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get(),n=this.configuration,i=r.build({haze:n.haze});return new u(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),l.Default3D)},a.prototype.initializePipeline=function(){return this.configuration.haze?h.makePipelineState({blending:h.separateBlendingParams(1,0,769,1),colorWrite:h.defaultColorWriteParams}):h.makePipelineState({blending:h.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:h.defaultColorWriteParams})},a.shader=new t.ReloadableShaderModule(i,(function(){return new Promise((function(r,n){e(["../environment/RealisticAtmosphere.glsl"],r,n)}))})),a}(a.ShaderTechnique);r.RealisticAtmosphereTechnique=s;var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.haze=!1,r}return n.__extends(r,e),n.__decorate([o.parameter()],r.prototype,"haze",void 0),r}(o.ShaderTechniqueConfiguration);r.RealisticAtmosphereTechniqueConfiguration=c}));