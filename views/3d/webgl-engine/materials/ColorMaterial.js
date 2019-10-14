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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../lib/GLMaterial","../lib/Material","./internal/DefaultBufferWriter","./internal/MaterialUtil","./renderers/MergedRenderer","../shaders/ColorPrograms","../../../webgl/renderState"],function(t,e,r,o,a,i,n,s,p,l){var c=function(t){function e(e,r){var o=t.call(this,r)||this;return o.supportsEdges=!0,o.params=n.copyParameters(e,m),o}return r(e,t),e.prototype.setParameterValues=function(t){var e=this.params;for(var r in t)e[r]=t[r];this.notifyDirty("matChanged")},e.prototype.getParameters=function(){return this.params},e.prototype.intersect=function(t,e,r,o,a,i,s,p,l){n.intersectTriangleGeometry(t,e,o,a,i,s)},e.prototype.getGLMaterials=function(){return{color:u,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:f}},e.prototype.createBufferWriter=function(){return new i.DefaultBufferWriter(i.PositionColorLayout)},e.prototype.createRenderer=function(t,e){return new s(t,e,this)},e}(a.Material),u=function(t){function e(e){var r=t.call(this,e)||this;return r.updateParameters(),r}return r(e,t),e.prototype.updateParameters=function(){this.params=n.copyParameters(this.material.getParameters()),this.selectProgram()},e.prototype.selectProgram=function(){var t=this.params;this.program=this.programRep.getProgram(p.colorPass,{vertexColors:t.vertexColors,slice:t.slicePlaneEnabled}),this.pipelineState=l.makePipelineState({blending:t.transparent&&l.separateBlendingParams(770,1,771,771),polygonOffset:t.polygonOffset&&h,culling:g(t.cullFace),depthTest:t.testDepth&&{func:513},depthWrite:t.writeDepth&&l.defaultDepthWriteParams,colorWrite:l.defaultColorWriteParams})},e.prototype.beginSlot=function(t){var e=5;return this.params.transparent&&(e=this.params.writeDepth?7:10),t===e},e.prototype.getProgram=function(){return this.program},e.prototype.bind=function(t,e){var r=this.program,o=this.params;t.bindProgram(r),t.setPipelineState(this.pipelineState),r.setUniform4fv("eColor",o.color)},e.prototype.release=function(t){},e.prototype.bindView=function(t,e){var r=this.program,o=this.params;n.bindView(e.origin,e.view,r),o.slicePlaneEnabled&&n.bindSlicePlane(e.origin,e.slicePlane,r)},e.prototype.bindInstance=function(t,e){this.program.setUniformMatrix4fv("model",e.transformation)},e.prototype.getDrawMode=function(){return 4},e}(o),f=function(t){function e(e){var r=t.call(this,e)||this;return r.updateParameters(),r}return r(e,t),e.prototype.updateParameters=function(){this.params=n.copyParameters(this.material.getParameters()),this.selectProgram()},e.prototype.selectProgram=function(){var t=this.params;this.program=this.programRep.getProgram(p.colorPass,{vertexColors:t.vertexColors,slice:t.slicePlaneEnabled}),this.pipelineState=l.makePipelineState({polygonOffset:t.polygonOffset&&h,culling:g(t.cullFace),depthTest:t.testDepth&&{func:513},depthWrite:t.writeDepth&&l.defaultDepthWriteParams,colorWrite:l.defaultColorWriteParams})},e.prototype.beginSlot=function(t){return 5===t},e.prototype.getProgram=function(){return this.program},e.prototype.bind=function(t,e){var r=this.program,o=this.params;t.bindProgram(r),t.setPipelineState(this.pipelineState),n.bindHighlightRendering(t,e,r),r.setUniform4fv("eColor",o.color)},e.prototype.release=function(t){},e.prototype.bindView=function(t,e){var r=this.program,o=this.params;n.bindView(e.origin,e.view,r),o.slicePlaneEnabled&&n.bindSlicePlane(e.origin,e.slicePlane,r)},e.prototype.bindInstance=function(t,e){this.program.setUniformMatrix4fv("model",e.transformation)},e.prototype.getDrawMode=function(){return 4},e}(o),m={color:[1,1,1,1],transparent:!1,writeDepth:!0,testDepth:!0,vertexColors:!1,polygonOffset:!1,slicePlaneEnabled:!1,cullFace:"none"},h={factor:1,units:1},g=function(t){return"none"!==t&&{face:"front"===t?1028:1029,mode:2305}};return c});