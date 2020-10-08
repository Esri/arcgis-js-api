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

define(["require","exports","tslib","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./MeasurementArrow.glsl","../../../webgl/Program","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,o,n,a,u,s,l,f){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.MeasurementArrowTechniqueConfiguration=r.MeasurementArrowTechnique=void 0;var d=function(r){function n(e,t){return r.call(this,e,t)||this}return t.__extends(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get().build();return new l(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),u.Default3D)},n.prototype.bindPass=function(e,r,t){i.View.bindProjectionMatrix(this.program,t.camera.projectionMatrix),this.program.setUniform1f("width",r.width),this.program.setUniform1f("outlineSize",r.outlineSize),this.program.setUniform4fv("outlineColor",r.outlineColor),this.program.setUniform1f("stripeLength",r.stripeLength),this.program.setUniform4fv("stripeEvenColor",r.stripeEvenColor),this.program.setUniform4fv("stripeOddColor",r.stripeOddColor)},n.prototype.bindDraw=function(e){i.View.bindView(this.program,e)},n.prototype.initializePipeline=function(){return f.makePipelineState({polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},depthWrite:f.defaultDepthWriteParams,colorWrite:f.defaultColorWriteParams})},Object.defineProperty(n.prototype,"primitiveType",{get:function(){return 5},enumerable:!1,configurable:!0}),n.shader=new o.ReloadableShaderModule(s,(function(){return new Promise((function(r,t){e(["./MeasurementArrow.glsl"],r,t)}))})),n}(n.ShaderTechnique);r.MeasurementArrowTechnique=d;var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.polygonOffsetEnabled=!1,r}return t.__extends(r,e),t.__decorate([a.parameter()],r.prototype,"polygonOffsetEnabled",void 0),r}(a.ShaderTechniqueConfiguration);r.MeasurementArrowTechniqueConfiguration=c}));