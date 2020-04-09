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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../lib/StencilUtils","./Terrain.glsl","../../../webgl/Program","../../../webgl/renderState"],(function(e,r,t,a,n,i,o,l,d,c,u,p,s){Object.defineProperty(r,"__esModule",{value:!0});var h=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return t(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get(),t=this.configuration,n=r.build({overlayEnabled:t.overlayEnabled,output:t.output,viewingMode:e.viewingMode,slicePlaneEnabled:t.slicePlaneEnabled,sliceHighlightDisabled:!1,sliceEnabledForVertexPrograms:!1,textureFadingEnabled:t.textureFadingEnabled&&!t.renderOccluded,receiveShadows:t.receiveShadows&&!t.renderOccluded,receiveAmbientOcclusion:!1,useOldSceneLightInterface:!0,atmosphere:t.atmosphere,tileBorders:t.tileBorders,screenSizePerspective:t.screenSizePerspective,pbrMode:0});return new p(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),d.Default3D)},a.prototype.initializePipeline=function(){var e=this.configuration,r=e.backfaceCullingEnabled&&!e.renderOccluded;return s.makePipelineState({blending:e.renderOccluded?s.simpleBlendingParams(1,771):null,culling:r&&s.backFaceCullingParams,depthTest:!e.renderOccluded&&{func:513},depthWrite:!e.renderOccluded&&s.defaultDepthWriteParams,colorWrite:s.defaultColorWriteParams,stencilTest:e.stencilEnabled?c.renderWhenBitIsNotSet(1):null})},a.shader=new i.ReloadableShaderModule(u,"./Terrain.glsl",e),a}(o.ShaderTechnique);r.TerrainTechnique=h;var b=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.overlayEnabled=!1,r.atmosphere=!1,r.receiveShadows=!1,r.slicePlaneEnabled=!1,r.backfaceCullingEnabled=!1,r.stencilEnabled=!1,r.textureFadingEnabled=!1,r.renderOccluded=!1,r.tileBorders=!1,r.screenSizePerspective=!1,r}return t(r,e),a([l.parameter({count:7})],r.prototype,"output",void 0),a([l.parameter()],r.prototype,"overlayEnabled",void 0),a([l.parameter()],r.prototype,"atmosphere",void 0),a([l.parameter()],r.prototype,"receiveShadows",void 0),a([l.parameter()],r.prototype,"slicePlaneEnabled",void 0),a([l.parameter()],r.prototype,"backfaceCullingEnabled",void 0),a([l.parameter()],r.prototype,"stencilEnabled",void 0),a([l.parameter()],r.prototype,"textureFadingEnabled",void 0),a([l.parameter()],r.prototype,"renderOccluded",void 0),a([l.parameter()],r.prototype,"tileBorders",void 0),a([l.parameter()],r.prototype,"screenSizePerspective",void 0),r}(l.ShaderTechniqueConfiguration);r.TerrainTechniqueConfiguration=b}));