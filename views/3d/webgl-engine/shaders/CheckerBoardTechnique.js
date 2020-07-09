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

define(["require","exports","tslib","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./CheckerBoard.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,o,n,i,a,s,u,l,c,d){Object.defineProperty(r,"__esModule",{value:!0});var p=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get().build();return new l(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),s.Default3D)},i.prototype.bindPass=function(e,r){this.program.setUniform2fv("size",r.size),this.program.setUniform4fv("color1",r.color1),this.program.setUniform4fv("color2",r.color2)},i.prototype.bindDraw=function(e){o.Transform.bindUniforms(this.program,e)},i.prototype.initializePipeline=function(){var e=this.configuration;return d.makePipelineState({blending:e.transparent&&c.separateBlendingParams(770,1,771,771),polygonOffset:e.polygonOffset&&{factor:0,units:-25},depthTest:{func:513},depthWrite:e.writeDepth&&d.defaultDepthWriteParams,colorWrite:d.defaultColorWriteParams})},i.shader=new n.ReloadableShaderModule(u,(function(){return new Promise((function(r,t){e(["./CheckerBoard.glsl"],r,t)}))})),i}(i.ShaderTechnique);r.CheckerBoardTechnique=p;var f=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.transparent=!1,r.writeDepth=!0,r.polygonOffset=!1,r}return t.__extends(r,e),t.__decorate([a.parameter()],r.prototype,"transparent",void 0),t.__decorate([a.parameter()],r.prototype,"writeDepth",void 0),t.__decorate([a.parameter()],r.prototype,"polygonOffset",void 0),r}(a.ShaderTechniqueConfiguration);r.CheckerBoardTechniqueConfiguration=f}));