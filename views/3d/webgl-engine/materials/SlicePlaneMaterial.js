// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/SlicePlanePrograms","../../../webgl/renderState"],function(t,r,e,i,o,a,n,p,s,l,u){var d=function(t){function r(r,e){var i=t.call(this,e)||this;return i.params=n.copyParameters(r,c),i}return e(r,t),r.prototype.dispose=function(){},r.prototype.setParameterValues=function(t){n.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},r.prototype.getParameters=function(){return this.params},r.prototype.intersect=function(t,r,e,i,o,a,n){return p.intersectTriangleGeometry(t,r,i,o,a,void 0,n)},r.prototype.createBufferWriter=function(){return new a.DefaultBufferWriter(a.PositionUVLayout)},r.prototype.createRenderer=function(t,r){return new s(t,r,this)},r.prototype.getGLMaterials=function(){return{color:f,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},r}(o.Material),f=function(t){function r(r){var e=t.call(this,r)||this;return e.updateParameters(),e}return e(r,t),r.prototype.selectProgram=function(){this.program=this.programRep.getProgram(l.colorPass),this.pipelineState=u.makePipelineState({blending:u.separateBlendingParams(1,1,771,771),depthTest:{func:513},colorWrite:u.defaultColorWriteParams})},r.prototype.updateParameters=function(){this.params=n.copyParameters(this.material.getParameters()),this.selectProgram()},r.prototype.beginSlot=function(t){return 9===t},r.prototype.getProgram=function(){return this.program},r.prototype.getDrawMode=function(){return 4},r.prototype.bind=function(t){var r=this.program;t.bindProgram(r),t.setPipelineState(this.pipelineState),r.setUniform4fv("backgroundColor",this.params.backgroundColor),r.setUniform4fv("gridColor",this.params.gridColor),r.setUniform1f("gridWidth",this.params.gridWidth)},r.prototype.bindView=function(t){n.bindView(t.origin,t.view,this.program)},r.prototype.bindInstance=function(t){this.program.setUniformMatrix4fv("model",t.transformation)},r.prototype.release=function(){},r}(i.GLMaterial),c={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4};return d});