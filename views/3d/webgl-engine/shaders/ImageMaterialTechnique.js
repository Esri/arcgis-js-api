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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","./ImageMaterial.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,t,r,i,a,o,n,l,c,s,u,d,p,h){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ImageMaterialTechniqueConfiguration=t.ImageMaterialTechnique=void 0;var g=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(n,t),n.prototype.initializeProgram=function(e){var t=n.shader.get(),r=this.configuration,i=t.build({slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:r.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1});return new d(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),c.Default3D)},n.prototype.bindPass=function(e,t,r){a.View.bindProjectionMatrix(this.program,r.camera.projectionMatrix),this.program.setUniform1f("opacity",t.opacity)},n.prototype.bindDraw=function(e){a.View.bindView(this.program,e),i.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},n.prototype.initializePipeline=function(){var e=this.configuration,t=0===e.output&&e.transparent?p.simpleBlendingParams(1,771):null,r=function(r){return h.makePipelineState({blending:t,polygonOffset:e.polygonOffset&&f,culling:(i=e.cullFace,0!==i&&{face:1===i?1028:1029,mode:2305}),depthTest:s.depthCompareLess,depthWrite:e.writeDepth&&h.defaultDepthWriteParams,colorWrite:h.defaultColorWriteParams,stencilWrite:e.sceneHasOcludees?s.stencilWriteMaskOn:null,stencilTest:e.sceneHasOcludees?r?s.stencilToolMaskBaseParams:s.stencilBaseAllZerosParams:null});var i};return this._occludeeState=r(!0),r(!1)},Object.defineProperty(n.prototype,"opaqueOccludeeState",{get:function(){return this._occludeeState},enumerable:!1,configurable:!0}),n.shader=new o.ReloadableShaderModule(u,(function(){return new Promise((function(t,r){e(["./ImageMaterial.glsl"],t,r)}))})),n}(n.ShaderTechnique);t.ImageMaterialTechnique=g;var f={factor:1,units:1},m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.output=0,t.cullFace=0,t.slicePlaneEnabled=!1,t.sliceHighlightDisabled=!1,t.transparent=!1,t.polygonOffset=!1,t.writeDepth=!0,t.sceneHasOcludees=!1,t}return r.__extends(t,e),r.__decorate([l.parameter({count:7})],t.prototype,"output",void 0),r.__decorate([l.parameter({count:3})],t.prototype,"cullFace",void 0),r.__decorate([l.parameter()],t.prototype,"slicePlaneEnabled",void 0),r.__decorate([l.parameter()],t.prototype,"sliceHighlightDisabled",void 0),r.__decorate([l.parameter()],t.prototype,"transparent",void 0),r.__decorate([l.parameter()],t.prototype,"polygonOffset",void 0),r.__decorate([l.parameter()],t.prototype,"writeDepth",void 0),r.__decorate([l.parameter()],t.prototype,"sceneHasOcludees",void 0),t}(l.ShaderTechniqueConfiguration);t.ImageMaterialTechniqueConfiguration=m}));