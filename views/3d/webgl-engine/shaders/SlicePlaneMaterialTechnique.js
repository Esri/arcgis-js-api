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

define(["require","exports","tslib","../core/shaderLibrary/util/View.glsl","../core/shaderTechnique/ReloadableShaderModule","../core/shaderTechnique/ShaderTechnique","../lib/DefaultVertexAttributeLocations","./SlicePlaneMaterial.glsl","../../../webgl/Program","../../../webgl/renderState","../../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,i,t,n,a,o,l,d,u,c){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SlicePlaneMaterialTechnique=void 0;var s=function(r){function a(){return null!==r&&r.apply(this,arguments)||this}return i.__extends(a,r),a.prototype.initializeProgram=function(e){var r=a.shader.get().build();return new d(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),o.Default3D)},a.prototype.bindPass=function(e,r,i){t.View.bindProjectionMatrix(this.program,i.camera.projectionMatrix),this.program.setUniform4fv("backgroundColor",r.backgroundColor),this.program.setUniform4fv("gridColor",r.gridColor),this.program.setUniform1f("gridWidth",r.gridWidth)},a.prototype.bindDraw=function(e){t.View.bindView(this.program,e)},a.prototype.initializePipeline=function(){return c.makePipelineState({blending:u.separateBlendingParams(1,1,771,771),depthTest:{func:513},colorWrite:c.defaultColorWriteParams})},a.shader=new n.ReloadableShaderModule(l,(function(){return new Promise((function(r,i){e(["./SlicePlaneMaterial.glsl"],r,i)}))})),a}(a.ShaderTechnique);r.SlicePlaneMaterialTechnique=s}));