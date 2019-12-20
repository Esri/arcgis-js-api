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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","../shaders/WaterSurface.glsl","../../../webgl/Program","../../../webgl/renderState"],function(e,t,r,i,a,o,n,u,p,l,s,d){Object.defineProperty(t,"__esModule",{value:!0});var c=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return r(i,t),i.prototype.initializeProgram=function(e){var t=i.shader.get(),r=this.configuration,a=t.build({output:r.output,viewingMode:e.viewingMode,slicePlaneEnabled:r.slice,sliceHighlightDisabled:!1,receiveShadows:r.receiveShadows,usePBR:!1,usePBRforWater:!0,useCustomDTRExponentForWater:!0});return new s(e.rctx,a.generateSource("vertex"),a.generateSource("fragment"),p.Default3D)},i.prototype.initializePipeline=function(){var e=this.configuration;return 2===e.output?d.makePipelineState({depthTest:{func:513},depthWrite:e.writeDepth&&d.defaultDepthWriteParams,colorWrite:d.defaultColorWriteParams}):d.makePipelineState({blending:e.transparent&&d.separateBlendingParams(770,1,771,771),depthTest:{func:513},depthWrite:e.writeDepth&&d.defaultDepthWriteParams,colorWrite:d.defaultColorWriteParams})},i.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},i.shader=new o.ReloadableShaderModule(l,"../shaders/WaterSurface.glsl",e),i}(n.ShaderTechnique);t.WaterTechnique=c;var h=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.output=0,t.receiveShadows=!1,t.slice=!1,t.transparent=!1,t.writeDepth=!1,t}return r(t,e),i([u.parameter({count:6})],t.prototype,"output",void 0),i([u.parameter()],t.prototype,"receiveShadows",void 0),i([u.parameter()],t.prototype,"slice",void 0),i([u.parameter()],t.prototype,"transparent",void 0),i([u.parameter()],t.prototype,"writeDepth",void 0),t}(u.ShaderTechniqueConfiguration);t.WaterTechniqueConfiguration=h});