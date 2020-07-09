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

define(["require","exports","tslib","../environment/SimpleAtmosphere.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,n,t,i,o,a,l,u,c){Object.defineProperty(r,"__esModule",{value:!0});var s=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return n.__extends(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),n=this.configuration,t=r.build({geometry:n.geometry});return new u(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),l.Default3D)},o.prototype.initializePipeline=function(){return 1===this.configuration.geometry?c.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),culling:c.backFaceCullingParams,depthTest:{func:515},colorWrite:c.defaultColorWriteParams}):c.makePipelineState({blending:c.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:c.defaultColorWriteParams})},o.shader=new i.ReloadableShaderModule(t,(function(){return new Promise((function(r,n){e(["../environment/SimpleAtmosphere.glsl"],r,n)}))})),o}(o.ShaderTechnique);r.SimpleAtmosphereTechnique=s;var g=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.geometry=0,r}return n.__extends(r,e),n.__decorate([a.parameter({count:3})],r.prototype,"geometry",void 0),r}(a.ShaderTechniqueConfiguration);r.SimpleAtmosphereTechniqueConfiguration=g}));