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

define(["require","exports","tslib","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../shaders/SSAO.glsl","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,o,n,a,u,s,d){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SSAOTechniqueConfiguration=r.SSAOTechnique=void 0;var l=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),t=this.configuration,i=r.build({output:t.output,samples:t.samples,radius:t.radius});return new s(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),a.Default3D)},o.prototype.initializePipeline=function(){return d.makePipelineState({colorWrite:d.defaultColorWriteParams})},o.shader=new i.ReloadableShaderModule(u,(function(){return new Promise((function(r,t){e(["../shaders/SSAO.glsl"],r,t)}))})),o}(o.ShaderTechnique);r.SSAOTechnique=l;var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.samples=64,r.radius=4,r}return t.__extends(r,e),t.__decorate([n.parameter({count:2})],r.prototype,"output",void 0),t.__decorate([n.parameter()],r.prototype,"samples",void 0),t.__decorate([n.parameter()],r.prototype,"radius",void 0),r}(n.ShaderTechniqueConfiguration);r.SSAOTechniqueConfiguration=c}));