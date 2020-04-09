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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","./LaserlinePath.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState"],(function(e,r,t,o,i,a,n,l,s,p,h,u,f,c){Object.defineProperty(r,"__esModule",{value:!0});var g=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get(),t=this.configuration,i=r.build(t);return new u(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),o.attributeLocations)},o.prototype.bind=function(e,r,t){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*t.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*t.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.program.setUniform1f("perScreenPixelRatio",t.perScreenPixelRatio),this.program.setUniform2f("pixelToNDC",2/t.fullWidth,2/t.fullHeight),this.program.setUniformMatrix4fv("uProjectionMatrix",t.projectionMatrix),a.mat4.translate(m,t.viewMatrix,r),this.program.setUniformMatrix4fv("uModelViewMatrix",m),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1)},o.prototype.initializePipeline=function(){return c.makePipelineState({blending:f.simpleBlendingParams(1,771),colorWrite:c.defaultColorWriteParams})},o.prototype.bindPipelineState=function(e){e.setPipelineState(this.pipeline)},o.shader=new l.ReloadableShaderModule(h,"./LaserlinePath.glsl",e),o.attributeLocations={start:0,end:1,up:2,extrude:3},o}(s.ShaderTechnique);r.LaserlinePathTechnique=g;var d=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.contrastControlEnabled=!1,r}return t(r,e),o([p.parameter()],r.prototype,"contrastControlEnabled",void 0),r}(p.ShaderTechniqueConfiguration);r.LaserlinePathTechniqueConfiguration=d;var m=n.mat4f64.create()}));