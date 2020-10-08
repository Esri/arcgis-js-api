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

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./LaserlinePath.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,t,r,i,o,n,a,l,s,h,u,f){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.LaserlinePathTechniqueConfiguration=t.LaserlinePathTechnique=void 0;var p=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(o,t),o.prototype.initializeProgram=function(e){var t=o.shader.get(),r=this.configuration,i=t.build(r);return new h(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),o.attributeLocations)},o.prototype.bind=function(e,t,r){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*r.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*r.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.program.setUniform1f("perScreenPixelRatio",r.perScreenPixelRatio),this.program.setUniform2f("pixelToNDC",2/r.fullWidth,2/r.fullHeight),this.program.setUniformMatrix4fv("uProjectionMatrix",r.projectionMatrix),i.mat4.translate(g,r.viewMatrix,t),this.program.setUniformMatrix4fv("uModelViewMatrix",g),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1)},o.prototype.initializePipeline=function(){return f.makePipelineState({blending:u.simpleBlendingParams(1,771),colorWrite:f.defaultColorWriteParams})},o.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},o.shader=new n.ReloadableShaderModule(s,(function(){return new Promise((function(t,r){e(["./LaserlinePath.glsl"],t,r)}))})),o.attributeLocations={start:0,end:1,up:2,extrude:3},o}(a.ShaderTechnique);t.LaserlinePathTechnique=p;var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.contrastControlEnabled=!1,t}return r.__extends(t,e),r.__decorate([l.parameter()],t.prototype,"contrastControlEnabled",void 0),t}(l.ShaderTechniqueConfiguration);t.LaserlinePathTechniqueConfiguration=c;var g=o.mat4f64.create()}));