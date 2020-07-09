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

define(["require","exports","tslib","../../../../core/mathUtils","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./Laserlines.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,t,r,o,n,a,i,l,s,d,f,h){Object.defineProperty(t,"__esModule",{value:!0});var u=function(t){function a(){return null!==t&&t.apply(this,arguments)||this}return r.__extends(a,t),a.prototype.initializeProgram=function(e){var t=a.shader.get(),r=this.configuration,o=t.build(r);return new d(e.rctx,o.generateSource("vertex"),o.generateSource("fragment"),l.Default3D)},a.prototype.bind=function(e,t){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*t.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*t.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1);var r=null!=e.angleCutoff?e.angleCutoff:s.defaultAngleCutoff;this.program.setUniform2f("angleCutoff",Math.cos(r),Math.cos(Math.max(0,r-o.deg2rad(2)))),this.configuration.intersectsLineEnabled&&this.program.setUniform1f("perScreenPixelRatio",t.perScreenPixelRatio)},a.prototype.initializePipeline=function(){return h.makePipelineState({blending:f.simpleBlendingParams(1,771),colorWrite:h.defaultColorWriteParams})},a.shader=new n.ReloadableShaderModule(s,(function(){return new Promise((function(t,r){e(["./Laserlines.glsl"],t,r)}))})),a}(a.ShaderTechnique);t.LaserlineTechnique=u;var c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.heightManifoldEnabled=!1,t.pointDistanceEnabled=!1,t.lineVerticalPlaneEnabled=!1,t.intersectsLineEnabled=!1,t.contrastControlEnabled=!1,t}return r.__extends(t,e),r.__decorate([i.parameter()],t.prototype,"heightManifoldEnabled",void 0),r.__decorate([i.parameter()],t.prototype,"pointDistanceEnabled",void 0),r.__decorate([i.parameter()],t.prototype,"lineVerticalPlaneEnabled",void 0),r.__decorate([i.parameter()],t.prototype,"intersectsLineEnabled",void 0),r.__decorate([i.parameter()],t.prototype,"contrastControlEnabled",void 0),t}(i.ShaderTechniqueConfiguration);t.LaserlineTechniqueConfiguration=c}));