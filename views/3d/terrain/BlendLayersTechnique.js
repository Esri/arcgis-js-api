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

define(["require","exports","tslib","../webgl-engine/core/shaderLibrary/util/BlendLayers.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,n,i,t,a,o,l,u,d){Object.defineProperty(r,"__esModule",{value:!0});var c=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return n.__extends(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get().build();return new u(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),l.Default3D)},a.prototype.initializePipeline=function(){var e=2===this.configuration.mode?d.simpleBlendingParams(1,771):1===this.configuration.mode?d.simpleBlendingParams(0,770):null;return d.makePipelineState({blending:e,colorWrite:d.defaultColorWriteParams})},a.shader=new t.ReloadableShaderModule(i,(function(){return new Promise((function(r,n){e(["../webgl-engine/core/shaderLibrary/util/BlendLayers.glsl"],r,n)}))})),a}(a.ShaderTechnique);r.BlendLayersTechnique=c;var s=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.mode=0,r}return n.__extends(r,e),n.__decorate([o.parameter({count:3})],r.prototype,"mode",void 0),r}(o.ShaderTechniqueConfiguration);r.BlendLayersTechniqueConfiguration=s}));