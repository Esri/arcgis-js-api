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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../webgl-engine/core/shaderLibrary/util/BlendLayers.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState"],(function(e,r,n,t,i,a,o,l,u,d,c,s){Object.defineProperty(r,"__esModule",{value:!0});var g=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return n(t,r),t.prototype.initializeProgram=function(e){var r=t.shader.get().build();return new c(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),d.Default3D)},t.prototype.initializePipeline=function(){switch(this.configuration.mode){case 2:return s.makePipelineState({blending:s.simpleBlendingParams(1,771),colorWrite:s.defaultColorWriteParams});case 1:return s.makePipelineState({blending:s.simpleBlendingParams(0,770),colorWrite:s.defaultColorWriteParams});case 0:default:return s.makePipelineState({colorWrite:s.defaultColorWriteParams})}},t.shader=new o.ReloadableShaderModule(a,"../webgl-engine/core/shaderLibrary/util/BlendLayers.glsl",e),t}(l.ShaderTechnique);r.BlendLayersTechnique=g;var h=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.mode=0,r}return n(r,e),t([u.parameter({count:3})],r.prototype,"mode",void 0),r}(u.ShaderTechniqueConfiguration);r.BlendLayersTechniqueConfiguration=h}));