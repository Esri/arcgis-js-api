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

define(["require","exports","tslib","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","./PointRenderer.glsl","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,n,i,a,o,l,u,c,s){Object.defineProperty(r,"__esModule",{value:!0});var d=function(r){function i(e,t){return r.call(this,e,t)||this}return t.__extends(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get(),t=this.configuration,n=r.build({output:t.output,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!0,drawScreenSize:t.drawScreenSize});return new c(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),o.Default3D)},i.prototype.initializePipeline=function(){return s.makePipelineState({depthTest:{func:513},depthWrite:s.defaultDepthWriteParams,colorWrite:s.defaultColorWriteParams,stencilWrite:this.configuration.sceneHasOcludees?l.stencilWriteMaskOn:null,stencilTest:this.configuration.sceneHasOcludees?l.stencilBaseAllZerosParams:null})},i.shader=new n.ReloadableShaderModule(u,(function(){return new Promise((function(r,t){e(["./PointRenderer.glsl"],r,t)}))})),i}(i.ShaderTechnique);r.PointRendererTechnique=d;var h=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.slicePlaneEnabled=!1,r.drawScreenSize=!1,r.sceneHasOcludees=!1,r}return t.__extends(r,e),t.__decorate([a.parameter({count:7})],r.prototype,"output",void 0),t.__decorate([a.parameter()],r.prototype,"slicePlaneEnabled",void 0),t.__decorate([a.parameter()],r.prototype,"drawScreenSize",void 0),t.__decorate([a.parameter()],r.prototype,"sceneHasOcludees",void 0),r}(a.ShaderTechniqueConfiguration);r.PointRendererTechniqueConfiguration=h}));