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

define(["require","exports","tslib","../core/shaderLibrary/terrain/Terrain.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,a,i,n,o,d,l,c,u){Object.defineProperty(r,"__esModule",{value:!0});var s=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get(),t=this.configuration,a=r.build({overlayMode:t.overlayMode,output:t.output,viewingMode:e.viewingMode,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,textureFadingEnabled:t.textureFadingEnabled&&!t.renderOccluded,receiveShadows:t.receiveShadows&&!t.renderOccluded,receiveAmbientOcclusion:!1,useOldSceneLightInterface:!0,atmosphere:t.atmosphere,tileBorders:t.tileBorders,screenSizePerspective:t.screenSizePerspective,pbrMode:0,ssrEnabled:t.ssrEnabled,highStepCount:!1});return new c(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),d.Default3D)},n.prototype.initializePipeline=function(){var e=this.configuration,r=e.backfaceCullingEnabled&&!e.renderOccluded;return u.makePipelineState({blending:e.renderOccluded?u.simpleBlendingParams(1,771):null,culling:r&&u.backFaceCullingParams,depthTest:!e.renderOccluded&&{func:513},depthWrite:!e.renderOccluded&&u.defaultDepthWriteParams,colorWrite:u.defaultColorWriteParams,stencilTest:e.stencilEnabled?l.renderWhenBitIsNotSet(1):null})},n.shader=new i.ReloadableShaderModule(a,(function(){return new Promise((function(r,t){e(["../core/shaderLibrary/terrain/Terrain.glsl"],r,t)}))})),n}(n.ShaderTechnique);r.TerrainTechnique=s;var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.overlayMode=0,r.atmosphere=!1,r.receiveShadows=!1,r.slicePlaneEnabled=!1,r.backfaceCullingEnabled=!1,r.stencilEnabled=!1,r.textureFadingEnabled=!1,r.renderOccluded=!1,r.ssrEnabled=!1,r.tileBorders=!1,r.screenSizePerspective=!1,r}return t.__extends(r,e),t.__decorate([o.parameter({count:7})],r.prototype,"output",void 0),t.__decorate([o.parameter({count:3})],r.prototype,"overlayMode",void 0),t.__decorate([o.parameter()],r.prototype,"atmosphere",void 0),t.__decorate([o.parameter()],r.prototype,"receiveShadows",void 0),t.__decorate([o.parameter()],r.prototype,"slicePlaneEnabled",void 0),t.__decorate([o.parameter()],r.prototype,"backfaceCullingEnabled",void 0),t.__decorate([o.parameter()],r.prototype,"stencilEnabled",void 0),t.__decorate([o.parameter()],r.prototype,"textureFadingEnabled",void 0),t.__decorate([o.parameter()],r.prototype,"renderOccluded",void 0),t.__decorate([o.parameter()],r.prototype,"ssrEnabled",void 0),t.__decorate([o.parameter()],r.prototype,"tileBorders",void 0),t.__decorate([o.parameter()],r.prototype,"screenSizePerspective",void 0),r}(o.ShaderTechniqueConfiguration);r.TerrainTechniqueConfiguration=p}));