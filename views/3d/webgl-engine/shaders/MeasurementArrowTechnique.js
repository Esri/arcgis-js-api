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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../core/shaderTechnique/ShaderTechniqueConfiguration","../lib/DefaultVertexAttributeLocations","./MeasurementArrow.glsl","../../../webgl/Program","../../../webgl/renderState"],(function(e,r,t,o,n,i,a,s,u,l,p,f,d){Object.defineProperty(r,"__esModule",{value:!0});var h=function(r){function o(e,t){return r.call(this,e,t)||this}return t(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get().build();return new f(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),l.Default3D)},o.prototype.bindPass=function(e,r){this.program.setUniform1f("width",r.width),this.program.setUniform1f("outlineSize",r.outlineSize),this.program.setUniform4fv("outlineColor",r.outlineColor),this.program.setUniform1f("stripeLength",r.stripeLength),this.program.setUniform4fv("stripeEvenColor",r.stripeEvenColor),this.program.setUniform4fv("stripeOddColor",r.stripeOddColor)},o.prototype.bindDraw=function(e){i.Transform.bindUniforms(this.program,e)},o.prototype.initializePipeline=function(){return d.makePipelineState({polygonOffset:this.configuration.polygonOffsetEnabled&&{factor:0,units:-4},depthTest:{func:513},depthWrite:d.defaultDepthWriteParams,colorWrite:d.defaultColorWriteParams})},Object.defineProperty(o.prototype,"primitiveType",{get:function(){return 5},enumerable:!0,configurable:!0}),o.shader=new a.ReloadableShaderModule(p,"./MeasurementArrow.glsl",e),o}(s.ShaderTechnique);r.MeasurementArrowTechnique=h;var c=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.polygonOffsetEnabled=!1,r}return t(r,e),o([u.parameter()],r.prototype,"polygonOffsetEnabled",void 0),r}(u.ShaderTechniqueConfiguration);r.MeasurementArrowTechniqueConfiguration=c}));