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

define(["require","exports","tslib","../../../core/libs/gl-matrix-2/mat4","../../../core/libs/gl-matrix-2/mat4f64","../environment/Stars.glsl","../webgl-engine/core/shaderTechnique/ReloadableShaderModule","../webgl-engine/core/shaderTechnique/ShaderTechnique","../webgl-engine/lib/DefaultVertexAttributeLocations","../../webgl/Program","../../webgl/renderState","@dojo/framework/shim/Promise"],(function(e,r,t,i,n,a,o,l,u,s,m){Object.defineProperty(r,"__esModule",{value:!0});var c=function(r){function n(){return null!==r&&r.apply(this,arguments)||this}return t.__extends(n,r),n.prototype.initializeProgram=function(e){var r=n.shader.get().build();return new s(e.rctx,r.generateSource("vertex"),r.generateSource("fragment"),u.Default3D)},n.prototype.initializePipeline=function(){return m.makePipelineState({blending:m.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:m.defaultColorWriteParams})},n.prototype.bindPass=function(e,r){var t=r.camera,n=r.modelMatrix,a=this.makeInfiniteProjectionMatrix(t.projectionMatrix,t.near,f);i.mat4.multiply(a,a,t.viewMatrix),i.mat4.multiply(a,a,n),this.program.setUniformMatrix4fv("transform",a),this.program.setUniform4fv("viewport",t.fullViewport),this.program.setUniform1f("pixelRatio",t.pixelRatio)},n.prototype.makeInfiniteProjectionMatrix=function(e,r,t){return i.mat4.copy(t,e),t[10]=24e-8-1,t[11]=-1,t[14]=(24e-8-2)*r,t},n.shader=new o.ReloadableShaderModule(a,(function(){return new Promise((function(r,t){e(["../environment/Stars.glsl"],r,t)}))})),n}(l.ShaderTechnique);r.StarsTechnique=c;var f=n.mat4f64.create()}));