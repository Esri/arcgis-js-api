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

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../webgl","../../core/shaderLibrary/attributes/VertexPosition.glsl","../../core/shaderTechnique/ReloadableShaderModule","../../core/shaderTechnique/ShaderTechnique","../../core/shaderTechnique/ShaderTechniqueConfiguration","../../shaders/sources/edgeRenderer/EdgeShaderProgram.glsl","../../../../webgl/renderState"],(function(e,r,i,t,a,o,n,l,s,d,u){Object.defineProperty(r,"__esModule",{value:!0});var c=function(r){function t(){return null!==r&&r.apply(this,arguments)||this}return i(t,r),t.prototype.bindPass=function(e,r){var i=this.program,t=r.edgeRenderParameters,a=r.renderParameters;o.VertexPosition.bindViewProjTransform(i,t.viewProjectionTransform),i.setUniformMatrix3fv("uTransformNormal_ViewFromGlobal",t.transformNormal_ViewFromGlobal),i.setUniformMatrix4fv("uProj",a.proj),i.setUniform2f("uDepthBias",.5,-4e-4),i.setUniform2f("uPixelToNDC",2/a.viewport[2],2/a.viewport[3]),i.setUniform2f("uNDCToPixel",a.viewport[2]/2,a.viewport[3]/2),i.setUniform1f("uDistanceFalloffFactor",t.distanceFalloffFactor),i.setUniform2f("uViewportDimInv",1/a.viewport[2],1/a.viewport[3]),i.setUniform1f("uPixelRatio",a.pixelRatio||1)},t.prototype.initializeProgram=function(e){var r=t.shader.get(),i=this.configuration,o=r.build({slicePlaneEnabled:i.slicePlaneEnabled,sliceHighlightDisabled:i.sliceHighlightDisabled,sliceEnabledForVertexPrograms:!1,silhouette:i.silhouette,legacy:i.legacy,antialiasing:i.antialiasing,mode:i.mode,doublePrecisionRequiresObfuscation:i.doublePrecisionRequiresObfuscation});return new a.Program(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),r.attributeLocations)},t.prototype.initializePipeline=function(e){var r=e.rctx.capabilities.blendMinMax;return r?u.makePipelineState({blending:u.separateBlendingParams(1,1,0,1,32774,r.MAX),depthTest:{func:515},colorWrite:u.defaultColorWriteParams}):u.makePipelineState({depthTest:{func:515},depthWrite:u.defaultDepthWriteParams,colorWrite:u.defaultColorWriteParams})},t.shader=new n.ReloadableShaderModule(d,"../../shaders/sources/edgeRenderer/EdgeShaderProgram.glsl",e),t}(l.ShaderTechnique);r.EdgeShaderTechnique=c,function(e){var r=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.slicePlaneEnabled=!1,r.sliceHighlightDisabled=!1,r.silhouette=!1,r.legacy=!1,r.antialiasing=!1,r.mode=0,r.doublePrecisionRequiresObfuscation=!1,r}return i(r,e),t([s.parameter()],r.prototype,"slicePlaneEnabled",void 0),t([s.parameter()],r.prototype,"sliceHighlightDisabled",void 0),t([s.parameter()],r.prototype,"silhouette",void 0),t([s.parameter()],r.prototype,"legacy",void 0),t([s.parameter()],r.prototype,"antialiasing",void 0),t([s.parameter({count:3})],r.prototype,"mode",void 0),t([s.parameter()],r.prototype,"doublePrecisionRequiresObfuscation",void 0),r}(s.ShaderTechniqueConfiguration);e.Configuration=r}(c=r.EdgeShaderTechnique||(r.EdgeShaderTechnique={})),r.EdgeShaderTechnique=c}));