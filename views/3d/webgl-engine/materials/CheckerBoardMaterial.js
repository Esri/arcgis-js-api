// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/Util","./internal/bufferWriters","./internal/MaterialUtil","./internal/MaterialUtil","./renderers/InstancedRenderer","../shaders/CheckerBoardPrograms","../../../webgl/renderState"],function(t,e,r,o,n,a,i,s,p,u,f,l,c){var m=function(t){function e(e,r){var o=t.call(this,r)||this;return o.params=p.copyParameters(e,d),o}return r(e,t),e.prototype.dispose=function(){},e.prototype.getParameterValues=function(){var t=this.params;return{size:t.size,color1:t.color1,color2:t.color2,transparent:t.transparent,writeDepth:t.writeDepth,polygonOffset:t.polygonOffset}},e.prototype.setParameterValues=function(t){p.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},e.prototype.getParams=function(){return this.params},e.prototype.intersect=function(t,e,r,o,n,a,i,s){return u.intersectTriangleGeometry(t,e,r,o,n,a,i)},e.prototype.getGLMaterials=function(){return{color:h,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},e.prototype.getAllTextureIds=function(){return[]},e.prototype.createBufferWriter=function(){return new y},e.prototype.createRenderer=function(t,e){return new f(t,e,this)},e}(a),h=function(t){function e(e,r,o){var n=t.call(this,e,r)||this;return n.programRep=r,n.updateParameters(),n}return r(e,t),e.prototype.selectProgram=function(){this.program=this.programRep.getProgram(l.colorPass),this.pipelineState=c.makePipelineState({blending:this.params.transparent&&c.separateBlendingParams(770,1,771,771),polygonOffset:this.params.polygonOffset&&{factor:0,units:-25},depthTest:{func:513},depthWrite:this.params.writeDepth&&c.defaultDepthWriteParams,colorWrite:c.defaultColorWriteParams})},e.prototype.updateParameters=function(){this.params=this.material.getParameterValues(),this.selectProgram()},e.prototype.beginSlot=function(t){var e=4;return this.params.transparent&&(e=this.params.writeDepth?6:9),t===e},e.prototype.getProgram=function(){return this.program},e.prototype.getDrawMode=function(){return 4},e.prototype.bind=function(t,e){var r=this.program;t.bindProgram(r),t.setPipelineState(this.pipelineState),r.setUniform2fv("size",this.params.size),r.setUniform4fv("color1",this.params.color1),r.setUniform4fv("color2",this.params.color2)},e.prototype.bindView=function(t,e){var r=e.origin,o=this.getProgram();p.bindView(r,e.view,o)},e.prototype.bindInstance=function(t,e){this.getProgram().setUniformMatrix4fv("model",e.transformation)},e.prototype.release=function(t){},e}(n),d={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,writeDepth:!0,polygonOffset:!1},g=o.newLayout().vec3f(i.VertexAttrConstants.POSITION).vec2f(i.VertexAttrConstants.UV0),y=function(){function t(){this.vertexBufferLayout=g}return t.prototype.allocate=function(t){return g.createBuffer(t)},t.prototype.elementCount=function(t){return t.indices[i.VertexAttrConstants.POSITION].length},t.prototype.write=function(t,e,r,o,n){s.writePosition(e.indices[i.VertexAttrConstants.POSITION],e.vertexAttr[i.VertexAttrConstants.POSITION].data,t.transformation,o.position,n),s.writeBufferVec2(e.indices[i.VertexAttrConstants.UV0],e.vertexAttr[i.VertexAttrConstants.UV0].data,o.uv0,n)},t}();return m});