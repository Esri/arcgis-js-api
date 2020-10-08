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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../environment/RealisticAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,i,r,n,t,a,o,l,u,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.RealisticAtmosphereTechniqueConfiguration=i.RealisticAtmosphereTechnique=void 0;var c=function(i){function a(){return null!==i&&i.apply(this,arguments)||this}return r.__extends(a,i),a.prototype.initializeProgram=function(e){var i=a.shader.get(),r=this.configuration,n=i.build({haze:r.haze});return new u(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),l.Default3D)},a.prototype.initializePipeline=function(){return this.configuration.haze?s.makePipelineState({blending:s.separateBlendingParams(1,0,769,1),colorWrite:s.defaultColorWriteParams}):s.makePipelineState({blending:s.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:s.defaultColorWriteParams})},a.shader=new t.ReloadableShaderModule(n,(function(){return new Promise((function(i,r){e(["../environment/RealisticAtmosphere.glsl"],i,r)}))})),a}(a.ShaderTechnique);i.RealisticAtmosphereTechnique=c;var h=function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.haze=!1,i}return r.__extends(i,e),r.__decorate([o.parameter()],i.prototype,"haze",void 0),i}(o.ShaderTechniqueConfiguration);i.RealisticAtmosphereTechniqueConfiguration=h}));