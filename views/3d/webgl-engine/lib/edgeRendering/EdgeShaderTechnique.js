// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/extendsHelper","../../../../../core/tsSupport/decorateHelper","../../../../webgl","../../core/shaderLibrary/attributes/VertexPosition.glsl","../../core/shaderTechnique/ReloadableShaderModule","../../core/shaderTechnique/ShaderTechnique","../../core/shaderTechnique/ShaderTechniqueConfiguration","../../shaders/sources/edgeRenderer/EdgeShaderProgram.glsl","../../../../webgl/renderState"],function(e,r,t,i,o,a,n,l,s,d,u){Object.defineProperty(r,"__esModule",{value:!0});var p=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t(i,r),i.prototype.bindPass=function(e,r){var t=this.program,i=r.edgeRenderParameters,o=r.renderParameters;a.VertexPosition.bindViewProjTransform(t,i.viewProjectionTransform),t.setUniformMatrix3fv("uTransformNormal_ViewFromGlobal",i.transformNormal_ViewFromGlobal),t.setUniformMatrix4fv("uProj",o.proj),t.setUniform2f("uDepthBias",.5,-4e-4),t.setUniform2f("uPixelToNDC",2/o.viewport[2],2/o.viewport[3]),t.setUniform2f("uNDCToPixel",o.viewport[2]/2,o.viewport[3]/2),t.setUniform1f("uDistanceFalloffFactor",i.distanceFalloffFactor),t.setUniform2f("uViewportDimInv",1/o.viewport[2],1/o.viewport[3]),t.setUniform1f("uPixelRatio",o.pixelRatio||1)},i.prototype.initializeProgram=function(e){var r=i.shader.get(),t=r.build(this.configuration);return new o.Program(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),r.attributeLocations)},i.prototype.initializePipeline=function(e){var r=e.rctx.capabilities.blendMinMax;return r?u.makePipelineState({blending:u.separateBlendingParams(1,1,0,1,32774,r.MAX),depthTest:{func:515},colorWrite:u.defaultColorWriteParams}):u.makePipelineState({depthTest:{func:515},depthWrite:u.defaultDepthWriteParams,colorWrite:u.defaultColorWriteParams})},i.shader=new n.ReloadableShaderModule(d,"../../shaders/sources/edgeRenderer/EdgeShaderProgram.glsl",e),i}(l.ShaderTechnique);r.EdgeShaderTechnique=p,function(e){var r=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.slicePlaneEnabled=!1,r.sliceHighlightDisabled=!1,r.silhouette=!1,r.legacy=!1,r.antialiasing=!1,r.mode=0,r.doublePrecisionRequiresObfuscation=!1,r}return t(r,e),i([s.parameter()],r.prototype,"slicePlaneEnabled",void 0),i([s.parameter()],r.prototype,"sliceHighlightDisabled",void 0),i([s.parameter()],r.prototype,"silhouette",void 0),i([s.parameter()],r.prototype,"legacy",void 0),i([s.parameter()],r.prototype,"antialiasing",void 0),i([s.parameter({count:3})],r.prototype,"mode",void 0),i([s.parameter()],r.prototype,"doublePrecisionRequiresObfuscation",void 0),r}(s.ShaderTechniqueConfiguration);e.Configuration=r}(p=r.EdgeShaderTechnique||(r.EdgeShaderTechnique={})),r.EdgeShaderTechnique=p});