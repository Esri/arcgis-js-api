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

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/tsSupport/decorateHelper","../../../core/tsSupport/assignHelper","../environment/Stars.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState"],(function(e,r,t,i,n,o,a,l,s,p,u){Object.defineProperty(r,"__esModule",{value:!0});var c=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get().build();return new p(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),s.Default3D)},i.prototype.initializePipeline=function(){return u.makePipelineState({blending:u.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:u.defaultColorWriteParams})},i.prototype.bindPass=function(e,r){this.program.setUniformMatrix4fv("view",r.viewMatrix),this.program.setUniformMatrix4fv("proj",r.projectionMatrix),this.program.setUniform4fv("viewport",r.fullViewport),this.program.setUniform1f("pixelRatio",r.pixelRatio)},i.shader=new a.ReloadableShaderModule(o,"../shaders/Stars.glsl",e),i}(l.ShaderTechnique);r.StarsTechnique=c}));