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

define(["require","exports","tslib","../core/shaderLibrary/Slice.glsl","../core/shaderLibrary/Transform.glsl","../core/shaderLibrary/shading/ReadShadowMap.glsl","../core/shaderLibrary/shading/ScreenSpaceReflections.glsl","../core/shaderLibrary/shading/WaterDistortion.glsl","../core/shaderLibrary/util/Camera.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultTextureUnits","../lib/DefaultVertexAttributeLocations","../shaders/WaterSurface.glsl","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,o,a,n,s,u,d,p,l,c,h,f,g,m){Object.defineProperty(r,"__esModule",{value:!0});var b=function(r){function p(e,t){var i=r.call(this,e,t)||this;return i.waterTextureRepository=e.waterTextureRepository,i}return t.__extends(p,r),p.prototype.initializeProgram=function(e){var r=p.shader.get(),t=this.configuration,i=r.build({output:t.output,viewingMode:e.viewingMode,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,receiveShadows:t.receiveShadows,pbrMode:3,useCustomDTRExponentForWater:!0,ssrEnabled:t.useSSR,highStepCount:!0});return new g(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),h.Default3D)},p.prototype.ensureResource=function(e){return this.waterTextureRepository.ready||this.waterTextureRepository.updating||this.waterTextureRepository.loadTextures(e),this.waterTextureRepository.ready?2:1},p.prototype.bindPass=function(e,r,t){0===this.configuration.output&&n.ScreenSpaceReflections.bindUniforms(this.program,e,t),0!==this.configuration.output&&2!==this.configuration.output||(s.WaterDistortion.bindUniforms(this.program,r),this.waterTextureRepository.bindRepo(e)),0!==this.configuration.output&&5!==this.configuration.output||this.program.setUniform4fv("waterColor",r.color)},p.prototype.bindDraw=function(e){o.Transform.bindUniforms(this.program,e),0===this.configuration.output&&(u.Camera.bindUniforms(this.program,e),i.Slice.bindUniformsWithOrigin(this.program,this.configuration,e),a.ReadShadowMap.bindUniforms(this.program,e,c.DefaultTextureUnits.SHADOW_MAP))},p.prototype.initializePipeline=function(){var e=this.configuration;return 2===e.output?m.makePipelineState({depthTest:{func:513},depthWrite:e.writeDepth&&m.defaultDepthWriteParams,colorWrite:m.defaultColorWriteParams}):m.makePipelineState({blending:e.transparent&&m.separateBlendingParams(770,1,771,771),depthTest:{func:513},depthWrite:e.writeDepth&&m.defaultDepthWriteParams,colorWrite:m.defaultColorWriteParams})},p.shader=new d.ReloadableShaderModule(f,(function(){return new Promise((function(r,t){e(["../shaders/WaterSurface.glsl"],r,t)}))})),p}(p.ShaderTechnique);r.WaterTechnique=b;var S=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.receiveShadows=!1,r.slicePlaneEnabled=!1,r.transparent=!1,r.writeDepth=!1,r.useSSR=!1,r.isDraped=!1,r}return t.__extends(r,e),t.__decorate([l.parameter({count:7})],r.prototype,"output",void 0),t.__decorate([l.parameter()],r.prototype,"receiveShadows",void 0),t.__decorate([l.parameter()],r.prototype,"slicePlaneEnabled",void 0),t.__decorate([l.parameter()],r.prototype,"transparent",void 0),t.__decorate([l.parameter()],r.prototype,"writeDepth",void 0),t.__decorate([l.parameter()],r.prototype,"useSSR",void 0),t.__decorate([l.parameter()],r.prototype,"isDraped",void 0),r}(l.ShaderTechniqueConfiguration);r.WaterTechniqueConfiguration=S}));