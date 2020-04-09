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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/decorateHelper","../../../../core/tsSupport/assignHelper","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../lib/DefaultVertexAttributeLocations","./SlicePlaneMaterial.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState"],(function(e,r,t,i,o,a,n,l,d,s,u,c,p){Object.defineProperty(r,"__esModule",{value:!0});var g=function(r){function i(){return null!==r&&r.apply(this,arguments)||this}return t(i,r),i.prototype.initializeProgram=function(e){var r=i.shader.get().build();return new u(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),d.Default3D)},i.prototype.bindPass=function(e,r){this.program.setUniform4fv("backgroundColor",r.backgroundColor),this.program.setUniform4fv("gridColor",r.gridColor),this.program.setUniform1f("gridWidth",r.gridWidth)},i.prototype.bindDraw=function(e){a.Transform.bindUniforms(this.program,e)},i.prototype.initializePipeline=function(){return p.makePipelineState({blending:c.separateBlendingParams(1,1,771,771),depthTest:{func:513},colorWrite:p.defaultColorWriteParams})},i.shader=new n.ReloadableShaderModule(s,"./SlicePlaneMaterial.glsl",e),i}(l.ShaderTechnique);r.SlicePlaneMaterialTechnique=g}));