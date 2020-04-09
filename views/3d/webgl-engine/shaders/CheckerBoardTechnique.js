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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./CheckerBoard.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState"],(function(e,r,t,o,n,a,i,p,s,l,u,c,f,d){Object.defineProperty(r,"__esModule",{value:!0});var h=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get().build();return new c(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),l.Default3D)},o.prototype.bindPass=function(e,r){this.program.setUniform2fv("size",r.size),this.program.setUniform4fv("color1",r.color1),this.program.setUniform4fv("color2",r.color2)},o.prototype.bindDraw=function(e){a.Transform.bindUniforms(this.program,e)},o.prototype.bindInstance=function(e){this.program.setUniformMatrix4fv("model",e.transformation)},o.prototype.initializePipeline=function(){var e=this.configuration;return d.makePipelineState({blending:e.transparent&&f.separateBlendingParams(770,1,771,771),polygonOffset:e.polygonOffset&&{factor:0,units:-25},depthTest:{func:513},depthWrite:e.writeDepth&&d.defaultDepthWriteParams,colorWrite:d.defaultColorWriteParams})},o.shader=new i.ReloadableShaderModule(u,"./CheckerBoard.glsl",e),o}(p.ShaderTechnique);r.CheckerBoardTechnique=h;var g=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.transparent=!1,r.writeDepth=!0,r.polygonOffset=!1,r}return t(r,e),o([s.parameter()],r.prototype,"transparent",void 0),o([s.parameter()],r.prototype,"writeDepth",void 0),o([s.parameter()],r.prototype,"polygonOffset",void 0),r}(s.ShaderTechniqueConfiguration);r.CheckerBoardTechniqueConfiguration=g}));