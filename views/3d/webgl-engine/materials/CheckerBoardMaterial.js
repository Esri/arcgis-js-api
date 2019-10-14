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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/InstancedRenderer","../shaders/CheckerBoardPrograms","../../../webgl/renderState"],function(t,r,e,a,o,i,n,s,p,l,f){var u=function(t){function r(r,e){var a=t.call(this,e)||this;return a.params=n.copyParameters(r,m),a}return e(r,t),r.prototype.dispose=function(){},r.prototype.getParameterValues=function(){var t=this.params;return{size:t.size,color1:t.color1,color2:t.color2,transparent:t.transparent,writeDepth:t.writeDepth,polygonOffset:t.polygonOffset}},r.prototype.setParameterValues=function(t){n.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},r.prototype.getParams=function(){return this.params},r.prototype.intersect=function(t,r,e,a,o,i,n,p){return s.intersectTriangleGeometry(t,r,a,o,i,n)},r.prototype.getGLMaterials=function(){return{color:c,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},r.prototype.createBufferWriter=function(){return new i.DefaultBufferWriter(i.PositionUVLayout)},r.prototype.createRenderer=function(t,r){return new p(t,r,this)},r}(o.Material),c=function(t){function r(r){var e=t.call(this,r)||this;return e.updateParameters(),e}return e(r,t),r.prototype.selectProgram=function(){this.program=this.programRep.getProgram(l.colorPass),this.pipelineState=f.makePipelineState({blending:this.params.transparent&&f.separateBlendingParams(770,1,771,771),polygonOffset:this.params.polygonOffset&&{factor:0,units:-25},depthTest:{func:513},depthWrite:this.params.writeDepth&&f.defaultDepthWriteParams,colorWrite:f.defaultColorWriteParams})},r.prototype.updateParameters=function(){this.params=this.material.getParameterValues(),this.selectProgram()},r.prototype.beginSlot=function(t){var r=5;return this.params.transparent&&(r=this.params.writeDepth?7:10),t===r},r.prototype.getProgram=function(){return this.program},r.prototype.getDrawMode=function(){return 4},r.prototype.bind=function(t,r){var e=this.program;t.bindProgram(e),t.setPipelineState(this.pipelineState),e.setUniform2fv("size",this.params.size),e.setUniform4fv("color1",this.params.color1),e.setUniform4fv("color2",this.params.color2)},r.prototype.bindView=function(t,r){var e=r.origin,a=this.getProgram();n.bindView(e,r.view,a)},r.prototype.bindInstance=function(t,r){this.getProgram().setUniformMatrix4fv("model",r.transformation)},r.prototype.release=function(t){},r}(a),m={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,writeDepth:!0,polygonOffset:!1};return u});