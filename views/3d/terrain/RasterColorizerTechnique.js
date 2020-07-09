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

define(["require","exports","tslib","../../../core/maybe","../webgl-engine/core/shaderLibrary/raster/RasterColorizer.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/core/shaderTechnique/ShaderTechniqueConfiguration","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/rasterUtils","../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,o,r,i,t,n,a,s,l,c,u,h){Object.defineProperty(o,"__esModule",{value:!0});var m=function(o){function a(){return null!==o&&o.apply(this,arguments)||this}return r.__extends(a,o),Object.defineProperty(a.prototype,"uniformLocationInfos",{get:function(){return this._uniformLocationInfos||(this._uniformLocationInfos=u.getUniformLocationInfos(this._context,this.program)),this._uniformLocationInfos},enumerable:!0,configurable:!0}),a.prototype.initializeProgram=function(e){var o=a.shader.get(),r=this.configuration,i=o.build({output:r.colorizerType,applyColormap:r.applyColormap});return this._context=e.rctx,new c(e.rctx,i.generateSource("vertex"),i.generateSource("fragment"),l.Default3D)},a.prototype.initializePipeline=function(){var e=2===this.configuration.mode?h.simpleBlendingParams(1,771):1===this.configuration.mode?h.simpleBlendingParams(0,770):null;return h.makePipelineState({blending:e,colorWrite:h.defaultColorWriteParams})},a.prototype.bindPass=function(e,o){u.setUniforms(this.program,this.uniformLocationInfos,o.basic),u.setUniforms(this.program,this.uniformLocationInfos,o.common),i.isSome(o.colormap)&&u.setUniforms(this.program,this.uniformLocationInfos,o.colormap),0===this.configuration.colorizerType&&i.isSome(o.stretch)?u.setUniforms(this.program,this.uniformLocationInfos,o.stretch):2===this.configuration.colorizerType&&i.isSome(o.hillshade)&&u.setUniforms(this.program,this.uniformLocationInfos,o.hillshade)},a.shader=new n.ReloadableShaderModule(t,(function(){return new Promise((function(o,r){e(["../webgl-engine/core/shaderLibrary/raster/RasterColorizer.glsl"],o,r)}))})),a}(a.ShaderTechnique);o.RasterColorizerTechnique=m;var p=function(e){function o(){var o=null!==e&&e.apply(this,arguments)||this;return o.mode=2,o.colorizerType=0,o.applyColormap=!0,o}return r.__extends(o,e),r.__decorate([s.parameter({count:3})],o.prototype,"mode",void 0),r.__decorate([s.parameter({count:3})],o.prototype,"colorizerType",void 0),r.__decorate([s.parameter()],o.prototype,"applyColormap",void 0),o}(s.ShaderTechniqueConfiguration);o.RasterColorizerTechniqueConfiguration=p}));