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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/RenderSlot","../lib/Util","./internal/bufferWriters","./internal/MaterialUtil","./internal/MaterialUtil","../shaders/CheckerBoardPrograms"],function(t,e,r,o,n,a,i,s,p,l,f,u){var c=function(t){function e(e,r){var o=t.call(this,r)||this;return o.canBeMerged=!1,o.bufferWriter=new h,o.params=l.copyParameters(e,g),o}return r(e,t),e.prototype.dispose=function(){},e.prototype.getParameterValues=function(){var t=this.params;return{size:t.size,color1:t.color1,color2:t.color2,transparent:t.transparent,polygonOffset:t.polygonOffset}},e.prototype.setParameterValues=function(t){l.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},e.prototype.getParams=function(){return this.params},e.prototype.intersect=function(t,e,r,o,n,a,i,s){return f.intersectTriangleGeometry(t,e,r,o,n,a,i)},e.prototype.getGLMaterials=function(){return{color:m,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},e.prototype.getAllTextureIds=function(){return[]},e}(a),m=function(t){function e(e,r,o){var n=t.call(this,e,r)||this;return n.programRep=r,n.params=l.copyParameters(e.getParams()),n.selectProgram(),n}return r(e,t),e.prototype.selectProgram=function(){this.program=this.programRep.getProgram(u.colorPass)},e.prototype.updateParameters=function(){this.params=this.material.getParameterValues(),this.selectProgram()},e.prototype.beginSlot=function(t){return t===(this.params.transparent?i.TRANSPARENT_MATERIAL:i.OPAQUE_MATERIAL)},e.prototype.getProgram=function(){return this.program},e.prototype.getDrawMode=function(t){return 4},e.prototype.bind=function(t,e){var r=this.program;t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!1),t.setFaceCullingEnabled(!1),this.params.transparent&&(t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(770,771,1,771)),this.params.polygonOffset&&(t.setPolygonOffsetFillEnabled(!0),t.setPolygonOffset(0,-25)),t.bindProgram(r),r.setUniform2fv("size",this.params.size),r.setUniform4fv("color1",this.params.color1),r.setUniform4fv("color2",this.params.color2)},e.prototype.bindView=function(t,e){var r=e.origin,o=this.getProgram();l.bindView(r,e.view,o)},e.prototype.bindInstance=function(t,e){this.getProgram().setUniformMatrix4fv("model",e.transformation)},e.prototype.release=function(t){t.setDepthWriteEnabled(!0),this.params.transparent&&t.setBlendingEnabled(!1),this.params.polygonOffset&&t.setPolygonOffsetFillEnabled(!1)},e}(n),g={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,polygonOffset:!1},d=o.newLayout().vec3f(s.VertexAttrConstants.POSITION).vec2f(s.VertexAttrConstants.UV0),h=function(){function t(){this.vertexBufferLayout=d}return t.prototype.allocate=function(t){return d.createBuffer(t)},t.prototype.elementCount=function(t){return t.indices[s.VertexAttrConstants.POSITION].length},t.prototype.write=function(t,e,r,o,n){p.writePosition(e.indices[s.VertexAttrConstants.POSITION],e.vertexAttr[s.VertexAttrConstants.POSITION].data,t.transformation,o.position,n),p.writeBufferVec2(e.indices[s.VertexAttrConstants.UV0],e.vertexAttr[s.VertexAttrConstants.UV0].data,o.uv0,n)},t}();return c});