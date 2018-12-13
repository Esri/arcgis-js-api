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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/Util","./internal/bufferWriters","./internal/MaterialUtil","./internal/MaterialUtil","../shaders/CheckerBoardPrograms"],function(t,e,r,n,o,a,i,s,p,l,f){var u=function(t){function e(e,r){var n=t.call(this,r)||this;return n.canBeMerged=!1,n.bufferWriter=new g,n.params=p.copyParameters(e,m),n}return r(e,t),e.prototype.dispose=function(){},e.prototype.getParameterValues=function(){var t=this.params;return{size:t.size,color1:t.color1,color2:t.color2,transparent:t.transparent,writeDepth:t.writeDepth,polygonOffset:t.polygonOffset}},e.prototype.setParameterValues=function(t){p.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},e.prototype.getParams=function(){return this.params},e.prototype.intersect=function(t,e,r,n,o,a,i,s){return l.intersectTriangleGeometry(t,e,r,n,o,a,i)},e.prototype.getGLMaterials=function(){return{color:c,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},e.prototype.getAllTextureIds=function(){return[]},e}(a),c=function(t){function e(e,r,n){var o=t.call(this,e,r)||this;return o.programRep=r,o.params=p.copyParameters(e.getParams()),o.selectProgram(),o}return r(e,t),e.prototype.selectProgram=function(){this.program=this.programRep.getProgram(f.colorPass)},e.prototype.updateParameters=function(){this.params=this.material.getParameterValues(),this.selectProgram()},e.prototype.beginSlot=function(t){var e=4;return this.params.transparent&&(e=this.params.writeDepth?6:9),t===e},e.prototype.getProgram=function(){return this.program},e.prototype.getDrawMode=function(){return 4},e.prototype.bind=function(t,e){var r=this.program;t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!1),t.setFaceCullingEnabled(!1),this.params.transparent&&(t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(770,771,1,771)),this.params.polygonOffset&&(t.setPolygonOffsetFillEnabled(!0),t.setPolygonOffset(0,-25)),t.setDepthWriteEnabled(this.params.writeDepth),t.bindProgram(r),r.setUniform2fv("size",this.params.size),r.setUniform4fv("color1",this.params.color1),r.setUniform4fv("color2",this.params.color2)},e.prototype.bindView=function(t,e){var r=e.origin,n=this.getProgram();p.bindView(r,e.view,n)},e.prototype.bindInstance=function(t,e){this.getProgram().setUniformMatrix4fv("model",e.transformation)},e.prototype.release=function(t){t.setDepthWriteEnabled(!0),this.params.transparent&&t.setBlendingEnabled(!1),this.params.polygonOffset&&t.setPolygonOffsetFillEnabled(!1),t.setDepthWriteEnabled(!0)},e}(o),m={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,writeDepth:!0,polygonOffset:!1},h=n.newLayout().vec3f(i.VertexAttrConstants.POSITION).vec2f(i.VertexAttrConstants.UV0),g=function(){function t(){this.vertexBufferLayout=h}return t.prototype.allocate=function(t){return h.createBuffer(t)},t.prototype.elementCount=function(t){return t.indices[i.VertexAttrConstants.POSITION].length},t.prototype.write=function(t,e,r,n,o){s.writePosition(e.indices[i.VertexAttrConstants.POSITION],e.vertexAttr[i.VertexAttrConstants.POSITION].data,t.transformation,n.position,o),s.writeBufferVec2(e.indices[i.VertexAttrConstants.UV0],e.vertexAttr[i.VertexAttrConstants.UV0].data,n.uv0,o)},t}();return u});