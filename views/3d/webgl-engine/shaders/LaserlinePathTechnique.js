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

define(["require","exports","tslib","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./LaserlinePath.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,o,n,a,l,s,h,u,f){Object.defineProperty(r,"__esModule",{value:!0});var p=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),t=this.configuration,i=r.build(t);return new h(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),o.attributeLocations)},o.prototype.bind=function(e,r,t){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*t.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*t.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.program.setUniform1f("perScreenPixelRatio",t.perScreenPixelRatio),this.program.setUniform2f("pixelToNDC",2/t.fullWidth,2/t.fullHeight),this.program.setUniformMatrix4fv("uProjectionMatrix",t.projectionMatrix),i.mat4.translate(g,t.viewMatrix,r),this.program.setUniformMatrix4fv("uModelViewMatrix",g),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1)},o.prototype.initializePipeline=function(){return f.makePipelineState({blending:u.simpleBlendingParams(1,771),colorWrite:f.defaultColorWriteParams})},o.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},o.shader=new n.ReloadableShaderModule(s,(function(){return new Promise((function(r,t){e(["./LaserlinePath.glsl"],r,t)}))})),o.attributeLocations={start:0,end:1,up:2,extrude:3},o}(a.ShaderTechnique);r.LaserlinePathTechnique=p;var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.contrastControlEnabled=!1,r}return t.__extends(r,e),t.__decorate([l.parameter()],r.prototype,"contrastControlEnabled",void 0),r}(l.ShaderTechniqueConfiguration);r.LaserlinePathTechniqueConfiguration=c;var g=o.mat4f64.create()}));