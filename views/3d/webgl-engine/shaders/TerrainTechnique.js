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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./Terrain.glsl","../../../webgl/Program","../../../webgl/renderState"],function(e,r,t,a,i,o,n,l,p,s,c,u){Object.defineProperty(r,"__esModule",{value:!0});var d=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return t(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get(),t=this.configuration,i=r.build({overlayEnabled:t.hasOverlays,output:t.output,viewingMode:e.viewingMode,slicePlaneEnabled:t.slice,sliceHighlightDisabled:!1,receiveShadows:t.receiveShadows,receiveAmbientOcclusion:!1,useOldSceneLightInterface:!0,atmosphere:t.atmosphere,alphaZero:t.alphaZero,tileBorders:t.tileBorders,screenSizePerspective:t.screenSizePerspective,usePBR:!1});return new c(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),p.Default3D)},a.prototype.initializePipeline=function(){var e=this.configuration,r={function:{func:517,ref:1,mask:255},operation:{fail:7680,zFail:7680,zPass:7680}};return u.makePipelineState({culling:e.backfaceCullingEnabled&&u.backFaceCullingParams,depthTest:{func:513},depthWrite:u.defaultDepthWriteParams,colorWrite:u.defaultColorWriteParams,stencilTest:e.stencilEnabled?r:null})},a.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},a.shader=new o.ReloadableShaderModule(s,"./Terrain.glsl",e),a}(n.ShaderTechnique);r.TerrainTechnique=d;var h=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.output=0,r.hasOverlays=!1,r.atmosphere=!1,r.receiveShadows=!1,r.alphaZero=!1,r.shadowMap=!1,r.slice=!1,r.backfaceCullingEnabled=!1,r.stencilEnabled=!1,r.tileBorders=!1,r.screenSizePerspective=!1,r}return t(r,e),a([l.parameter({count:6})],r.prototype,"output",void 0),a([l.parameter()],r.prototype,"hasOverlays",void 0),a([l.parameter()],r.prototype,"atmosphere",void 0),a([l.parameter()],r.prototype,"receiveShadows",void 0),a([l.parameter()],r.prototype,"alphaZero",void 0),a([l.parameter()],r.prototype,"shadowMap",void 0),a([l.parameter()],r.prototype,"slice",void 0),a([l.parameter()],r.prototype,"backfaceCullingEnabled",void 0),a([l.parameter()],r.prototype,"stencilEnabled",void 0),a([l.parameter()],r.prototype,"tileBorders",void 0),a([l.parameter()],r.prototype,"screenSizePerspective",void 0),r}(l.ShaderTechniqueConfiguration);r.TerrainTechniqueConfiguration=h});