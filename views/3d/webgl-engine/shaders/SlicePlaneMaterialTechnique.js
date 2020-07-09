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

define(["require","exports","tslib","../core/shaderLibrary/Transform.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../lib/DefaultVertexAttributeLocations","./SlicePlaneMaterial.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,n,o,a,l,d,u,s){Object.defineProperty(r,"__esModule",{value:!0});var c=function(r){function o(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(o,r),o.prototype.initializeProgram=function(e){var r=o.shader.get().build();return new d(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),a.Default3D)},o.prototype.bindPass=function(e,r){this.program.setUniform4fv("backgroundColor",r.backgroundColor),this.program.setUniform4fv("gridColor",r.gridColor),this.program.setUniform1f("gridWidth",r.gridWidth)},o.prototype.bindDraw=function(e){i.Transform.bindUniforms(this.program,e)},o.prototype.initializePipeline=function(){return s.makePipelineState({blending:u.separateBlendingParams(1,1,771,771),depthTest:{func:513},colorWrite:s.defaultColorWriteParams})},o.shader=new n.ReloadableShaderModule(l,(function(){return new Promise((function(r,t){e(["./SlicePlaneMaterial.glsl"],r,t)}))})),o}(o.ShaderTechnique);r.SlicePlaneMaterialTechnique=c}));