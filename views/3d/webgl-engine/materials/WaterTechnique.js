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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/output/OutputHighlight.glsl","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/shading/ScreenSpaceReflections.glsl","../core/shaderLibrary/shading/WaterDistortion.glsl","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultTextureUnits","../lib/DefaultVertexAttributeLocations","../shaders/WaterSurface.glsl","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,t,r,i,o,a,n,s,u,p,d,h,c,l,g,f,m){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.WaterTechniqueConfiguration=t.WaterTechnique=void 0;var b=function(t){function d(e,r){var i=t.call(this,e,r)||this;return i.waterTextureRepository=e.waterTextureRepository,i}return r.__extends(d,t),d.prototype.initializeProgram=function(e){var t=d.shader.get(),r=this.configuration,i=t.build({output:r.output,viewingMode:e.viewingMode,slicePlaneEnabled:r.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:r.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:r.useSSR,highStepCount:!0});return new f(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),l.Default3D)},d.prototype.ensureResource=function(e){return this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(e),this.waterTextureRepository.ready?2:1},d.prototype.bindPass=function(e,t,r){u.View.bindProjectionMatrix(this.program,r.camera.projectionMatrix),0===this.configuration.output&&(r.lighting.setUniforms(this.program,!1),n.ScreenSpaceReflections.bindUniforms(this.program,e,r)),0!==this.configuration.output&&2!==this.configuration.output||(s.WaterDistortion.bindUniforms(this.program,t),this.waterTextureRepository.bindRepo(e)),this.program.setUniform4fv("waterColor",t.color),4===this.configuration.output&&o.OutputHighlight.bindOutputHighlight(e,this.program,r)},d.prototype.bindDraw=function(e){u.View.bindView(this.program,e),0===this.configuration.output&&(u.View.bindCamPosition(this.program,e.origin,e.camera.viewInverseTransposeMatrix),a.ReadShadowMap.bindUniforms(this.program,e,c.DefaultTextureUnits.SHADOW_MAP)),0!==this.configuration.output&&4!==this.configuration.output||i.Slice.bindUniformsWithOrigin(this.program,this.configuration,e)},d.prototype.initializePipeline=function(){var e=this.configuration;if(2===e.output)return m.makePipelineState({depthTest:{func:513},depthWrite:e.writeDepth&&m.defaultDepthWriteParams,colorWrite:m.defaultColorWriteParams});var t=4!==e.output&&e.transparent;return m.makePipelineState({blending:t?m.separateBlendingParams(770,1,771,771):null,depthTest:{func:513},depthWrite:e.writeDepth&&m.defaultDepthWriteParams,colorWrite:m.defaultColorWriteParams})},d.shader=new p.ReloadableShaderModule(g,(function(){return new Promise((function(t,r){e(["../shaders/WaterSurface.glsl"],t,r)}))})),d}(d.ShaderTechnique);t.WaterTechnique=b;var w=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.output=0,t.receiveShadows=!1,t.slicePlaneEnabled=!1,t.transparent=!1,t.writeDepth=!1,t.useSSR=!1,t.isDraped=!1,t}return r.__extends(t,e),r.__decorate([h.parameter({count:7})],t.prototype,"output",void 0),r.__decorate([h.parameter()],t.prototype,"receiveShadows",void 0),r.__decorate([h.parameter()],t.prototype,"slicePlaneEnabled",void 0),r.__decorate([h.parameter()],t.prototype,"transparent",void 0),r.__decorate([h.parameter()],t.prototype,"writeDepth",void 0),r.__decorate([h.parameter()],t.prototype,"useSSR",void 0),r.__decorate([h.parameter()],t.prototype,"isDraped",void 0),t}(h.ShaderTechniqueConfiguration);t.WaterTechniqueConfiguration=w}));