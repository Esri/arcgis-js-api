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

define(["require","exports","tslib","../../../../core/mathUtils","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./Laserlines.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,o,n,i,a,l,s,d,f,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.LaserlineTechniqueConfiguration=r.LaserlineTechnique=void 0;var h=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get(),t=this.configuration,o=r.build(t);return new d(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),l.Default3D)},i.prototype.bind=function(e,r){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*r.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*r.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1);var t=null!=e.angleCutoff?e.angleCutoff:s.defaultAngleCutoff;this.program.setUniform2f("angleCutoff",Math.cos(t),Math.cos(Math.max(0,t-o.deg2rad(2)))),this.configuration.intersectsLineEnabled&&this.program.setUniform1f("perScreenPixelRatio",r.perScreenPixelRatio)},i.prototype.initializePipeline=function(){return u.makePipelineState({blending:f.simpleBlendingParams(1,771),colorWrite:u.defaultColorWriteParams})},i.shader=new n.ReloadableShaderModule(s,(function(){return new Promise((function(r,t){e(["./Laserlines.glsl"],r,t)}))})),i}(i.ShaderTechnique);r.LaserlineTechnique=h;var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.heightManifoldEnabled=!1,r.pointDistanceEnabled=!1,r.lineVerticalPlaneEnabled=!1,r.intersectsLineEnabled=!1,r.contrastControlEnabled=!1,r}return t.__extends(r,e),t.__decorate([a.parameter()],r.prototype,"heightManifoldEnabled",void 0),t.__decorate([a.parameter()],r.prototype,"pointDistanceEnabled",void 0),t.__decorate([a.parameter()],r.prototype,"lineVerticalPlaneEnabled",void 0),t.__decorate([a.parameter()],r.prototype,"intersectsLineEnabled",void 0),t.__decorate([a.parameter()],r.prototype,"contrastControlEnabled",void 0),r}(a.ShaderTechniqueConfiguration);r.LaserlineTechniqueConfiguration=c}));