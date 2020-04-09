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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./HighlightComposition.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState"],(function(e,i,t,r,o,n,a,l,p,h,u,g,c){Object.defineProperty(i,"__esModule",{value:!0});var s=function(i){function r(){return null!==i&&i.apply(this,arguments)||this}return t(r,i),r.prototype.initializeProgram=function(e){var i=r.shader.get().build(this.configuration);return new u(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),p.Default3D)},r.prototype.bindApplyPass=function(e){this.program.setUniform1i("tex",0),this.program.setUniform1i("origin",1),this.configuration.gridOptimization&&this.program.setUniform1i("coverageTex",2),this.program.setUniform4fv("color",e.color),this.program.setUniform4fv("haloColor",e.haloColor),this.program.setUniform1f("outlineSize",8.6),this.program.setUniform1f("blurSize",.4),this.program.setUniform4f("opacities",e.haloOpacity,e.haloOpacityOccluded,e.fillOpacity,e.fillOpacityOccluded)},r.prototype.initializePipeline=function(){return 1===this.configuration.highlightStage?c.makePipelineState({blending:g.separateBlendingParams(770,1,771,771),colorWrite:c.defaultColorWriteParams}):c.makePipelineState({colorWrite:c.defaultColorWriteParams})},Object.defineProperty(r.prototype,"primitiveType",{get:function(){return this.configuration.gridOptimization?4:5},enumerable:!0,configurable:!0}),r.shader=new n.ReloadableShaderModule(h,"./HighlightComposition.glsl",e),r}(a.ShaderTechnique);i.HighlightCompositionTechnique=s;var f=function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.highlightStage=0,i.gridOptimization=!1,i}return t(i,e),r([l.parameter({count:3})],i.prototype,"highlightStage",void 0),r([l.parameter()],i.prototype,"gridOptimization",void 0),i}(l.ShaderTechniqueConfiguration);i.HighlightCompositionTechniqueConfiguration=f}));