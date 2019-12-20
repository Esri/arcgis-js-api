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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./CheckerBoard.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState"],function(e,r,t,o,n,i,a,p,l,u,s,c,h){Object.defineProperty(r,"__esModule",{value:!0});var d=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),t=r.build();return new s(e.rctx,t.generateSource("vertex"),t.generateSource("fragment"),l.Default3D)},o.prototype.bindPass=function(e,r){this.program.setUniform2fv("size",r.size),this.program.setUniform4fv("color1",r.color1),this.program.setUniform4fv("color2",r.color2)},o.prototype.initializePipeline=function(){var e=this.configuration;return h.makePipelineState({blending:e.transparent&&c.separateBlendingParams(770,1,771,771),polygonOffset:e.polygonOffset&&{factor:0,units:-25},depthTest:{func:513},depthWrite:e.writeDepth&&h.defaultDepthWriteParams,colorWrite:h.defaultColorWriteParams})},o.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},o.shader=new i.ReloadableShaderModule(u,"./CheckerBoard.glsl",e),o}(a.ShaderTechnique);r.CheckerBoardTechnique=d;var f=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.transparent=!1,r.writeDepth=!0,r.polygonOffset=!1,r}return t(r,e),o([p.parameter()],r.prototype,"transparent",void 0),o([p.parameter()],r.prototype,"writeDepth",void 0),o([p.parameter()],r.prototype,"polygonOffset",void 0),r}(p.ShaderTechniqueConfiguration);r.CheckerBoardTechniqueConfiguration=f});