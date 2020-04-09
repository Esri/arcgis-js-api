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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../../../../core/mathUtils","../../../../core/libs/gl-matrix-2/factories/vec4f32","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./Laserlines.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState"],(function(e,t,r,o,n,i,a,l,s,h,p,g,f,d,u){Object.defineProperty(t,"__esModule",{value:!0});var c=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return r(o,t),o.prototype.initializeProgram=function(e){var t=o.shader.get(),r=this.configuration,n=t.build(r);return new f(e.rctx,n.generateSource("vertex"),n.generateSource("fragment"),p.Default3D)},o.prototype.bind=function(e,t){this.program.setUniform3fv("innerColor",e.innerColor),this.program.setUniform1f("innerWidth",e.innerWidth*t.pixelRatio),this.program.setUniform3fv("glowColor",e.glowColor),this.program.setUniform1f("glowWidth",e.glowWidth*t.pixelRatio),this.program.setUniform1f("glowFalloff",e.glowFalloff),this.program.setUniform1f("globalAlpha",e.globalAlpha),this.configuration.contrastControlEnabled&&this.program.setUniform1f("globalAlphaContrastBoost",null!=e.globalAlphaContrastBoost?e.globalAlphaContrastBoost:1);var r=null!=e.angleCutoff?e.angleCutoff:g.defaultAngleCutoff;this.program.setUniform2f("angleCutoff",Math.cos(r),Math.cos(Math.max(0,r-i.deg2rad(2)))),this.configuration.intersectsLineEnabled&&this.program.setUniform1f("perScreenPixelRatio",t.perScreenPixelRatio),this.configuration.heightPlaneHeightEnabled&&this.program.setUniform4fv("heightPlaneFillColor",e.heightPlaneFillColor||a.ONES)},o.prototype.initializePipeline=function(){return u.makePipelineState({blending:d.simpleBlendingParams(1,771),colorWrite:u.defaultColorWriteParams})},o.shader=new l.ReloadableShaderModule(g,"./Laserlines.glsl",e),o}(s.ShaderTechnique);t.LaserlineTechnique=c;var m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.heightPlaneEnabled=!1,t.heightPlaneHeightEnabled=!1,t.pointDistanceEnabled=!1,t.lineVerticalPlaneEnabled=!1,t.intersectsLineEnabled=!1,t.contrastControlEnabled=!1,t}return r(t,e),o([h.parameter()],t.prototype,"heightPlaneEnabled",void 0),o([h.parameter()],t.prototype,"heightPlaneHeightEnabled",void 0),o([h.parameter()],t.prototype,"pointDistanceEnabled",void 0),o([h.parameter()],t.prototype,"lineVerticalPlaneEnabled",void 0),o([h.parameter()],t.prototype,"intersectsLineEnabled",void 0),o([h.parameter()],t.prototype,"contrastControlEnabled",void 0),t}(h.ShaderTechniqueConfiguration);t.LaserlineTechniqueConfiguration=m}));