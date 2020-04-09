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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../environment/RealisticAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState"],(function(e,r,t,n,i,a,o,l,u,c,s,h){Object.defineProperty(r,"__esModule",{value:!0});var p=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get(),t=this.configuration,i=r.build({haze:t.haze});return new s(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),c.Default3D)},n.prototype.initializePipeline=function(){return this.configuration.haze?h.makePipelineState({blending:h.separateBlendingParams(1,0,769,1),colorWrite:h.defaultColorWriteParams}):h.makePipelineState({blending:h.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:h.defaultColorWriteParams})},n.shader=new o.ReloadableShaderModule(a,"../environment/RealisticAtmosphere.glsl",e),n}(l.ShaderTechnique);r.RealisticAtmosphereTechnique=p;var d=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.haze=!1,r}return t(r,e),n([u.parameter()],r.prototype,"haze",void 0),r}(u.ShaderTechniqueConfiguration);r.RealisticAtmosphereTechniqueConfiguration=d}));