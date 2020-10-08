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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./CheckerBoard.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,o,i,n,a,u,c,s,d,l){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.CheckerBoardTechniqueConfiguration=r.CheckerBoardTechnique=void 0;var h=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get().build();return new s(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),u.Default3D)},n.prototype.bindPass=function(e,r,t){o.View.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.program.setUniform2fv("size",r.size),this.program.setUniform4fv("color1",r.color1),this.program.setUniform4fv("color2",r.color2)},n.prototype.bindDraw=function(e){o.View.bindView(this.program,e)},n.prototype.initializePipeline=function(){var e=this.configuration;return l.makePipelineState({blending:e.transparent&&d.separateBlendingParams(770,1,771,771),polygonOffset:e.polygonOffset&&{factor:0,units:-25},depthTest:{func:513},depthWrite:e.writeDepth&&l.defaultDepthWriteParams,colorWrite:l.defaultColorWriteParams})},n.shader=new i.ReloadableShaderModule(c,(function(){return new Promise((function(r,t){e(["./CheckerBoard.glsl"],r,t)}))})),n}(n.ShaderTechnique);r.CheckerBoardTechnique=h;var p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.transparent=!1,r.writeDepth=!0,r.polygonOffset=!1,r}return t.__extends(r,e),t.__decorate([a.parameter()],r.prototype,"transparent",void 0),t.__decorate([a.parameter()],r.prototype,"writeDepth",void 0),t.__decorate([a.parameter()],r.prototype,"polygonOffset",void 0),r}(a.ShaderTechniqueConfiguration);r.CheckerBoardTechniqueConfiguration=p}));