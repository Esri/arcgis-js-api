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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","./ColorMaterial.glsl","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,t,r,i,o,a,n,l,s,u,c,p,d,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ColorMaterialTechniqueConfiguration=t.ColorMaterialTechnique=void 0;var g=function(t){function l(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(l,t),l.prototype.initializeProgram=function(e){var t=l.shader.get(),r=this.configuration,i=t.build({output:r.output,attributeColor:r.vertexColors,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1});return new d(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),u.Default3D)},l.prototype.bindPass=function(e,t,r){a.View.bindProjectionMatrix(this.program,r.camera.projectionMatrix),this.program.setUniform4fv("eColor",t.color),4===this.configuration.output&&o.OutputHighlight.bindOutputHighlight(e,this.program,r)},l.prototype.bindDraw=function(e){a.View.bindView(this.program,e),i.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},l.prototype.initializePipeline=function(){var e=this.configuration,t=h.separateBlendingParams(770,1,771,771),r=0===e.output?e.transparent&&t:null,i=function(t){return h.makePipelineState({blending:r,polygonOffset:e.polygonOffset&&f,culling:(i=e.cullFace,0!==i&&{face:1===i?1028:1029,mode:2305}),depthTest:c.depthCompareLess,depthWrite:e.writeDepth&&h.defaultDepthWriteParams,colorWrite:h.defaultColorWriteParams,stencilWrite:e.sceneHasOcludees?c.stencilWriteMaskOn:null,stencilTest:e.sceneHasOcludees?t?c.stencilToolMaskBaseParams:c.stencilBaseAllZerosParams:null});var i};return this._occludeeState=i(!0),i(!1)},Object.defineProperty(l.prototype,"opaqueOccludeeState",{get:function(){return this._occludeeState},enumerable:!1,configurable:!0}),l.shader=new n.ReloadableShaderModule(p,(function(){return new Promise((function(t,r){e(["./ColorMaterial.glsl"],t,r)}))})),l}(l.ShaderTechnique);t.ColorMaterialTechnique=g;var f={factor:1,units:1},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.output=0,t.cullFace=0,t.slicePlaneEnabled=!1,t.sliceHighlightDisabled=!1,t.vertexColors=!1,t.transparent=!1,t.polygonOffset=!1,t.writeDepth=!0,t.sceneHasOcludees=!1,t}return r.__extends(t,e),r.__decorate([s.parameter({count:7})],t.prototype,"output",void 0),r.__decorate([s.parameter({count:3})],t.prototype,"cullFace",void 0),r.__decorate([s.parameter()],t.prototype,"slicePlaneEnabled",void 0),r.__decorate([s.parameter()],t.prototype,"sliceHighlightDisabled",void 0),r.__decorate([s.parameter()],t.prototype,"vertexColors",void 0),r.__decorate([s.parameter()],t.prototype,"transparent",void 0),r.__decorate([s.parameter()],t.prototype,"polygonOffset",void 0),r.__decorate([s.parameter()],t.prototype,"writeDepth",void 0),r.__decorate([s.parameter()],t.prototype,"sceneHasOcludees",void 0),t}(s.ShaderTechniqueConfiguration);t.ColorMaterialTechniqueConfiguration=m}));