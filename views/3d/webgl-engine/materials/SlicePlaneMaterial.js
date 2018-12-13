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

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../support/buffer/InterleavedLayout","../lib/GLMaterial","../lib/Material","../lib/Util","./internal/bufferWriters","./internal/MaterialUtil","./internal/MaterialUtil","../shaders/SlicePlanePrograms"],function(t,r,e,o,n,i,a,s,p,u,l){var d=function(t){function r(r,e){var o=t.call(this,e)||this;return o.bufferWriter=new m,o.params=p.copyParameters(r,f),o}return e(r,t),r.prototype.dispose=function(){},r.prototype.getParameterValues=function(){var t=this.params;return{backgroundColor:t.backgroundColor,gridColor:t.gridColor,gridWidth:t.gridWidth}},r.prototype.setParameterValues=function(t){p.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},r.prototype.getParams=function(){return this.params},r.prototype.intersect=function(t,r,e,o,n,i,a,s){return u.intersectTriangleGeometry(t,r,e,o,n,i,a)},r.prototype.getGLMaterials=function(){return{color:c,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},r.prototype.getAllTextureIds=function(){return[]},r}(i),c=function(t){function r(r,e,o){var n=t.call(this,r,e)||this;return n.programRep=e,n.params=p.copyParameters(r.getParams()),n.selectProgram(),n}return e(r,t),r.prototype.selectProgram=function(){this.program=this.programRep.getProgram(l.colorPass)},r.prototype.updateParameters=function(){this.params=this.material.getParameterValues(),this.selectProgram()},r.prototype.beginSlot=function(t){return 9===t},r.prototype.getProgram=function(){return this.program},r.prototype.getDrawMode=function(){return 4},r.prototype.bind=function(t,r){var e=this.program;t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!1),t.setFaceCullingEnabled(!1),t.setBlendingEnabled(!0),t.setBlendFunction(1,771),t.bindProgram(e),e.setUniform4fv("backgroundColor",this.params.backgroundColor),e.setUniform4fv("gridColor",this.params.gridColor),e.setUniform1f("gridWidth",this.params.gridWidth)},r.prototype.bindView=function(t,r){var e=r.origin,o=this.getProgram();p.bindView(e,r.view,o)},r.prototype.bindInstance=function(t,r){this.getProgram().setUniformMatrix4fv("model",r.transformation)},r.prototype.release=function(t){t.setDepthWriteEnabled(!0),t.setBlendingEnabled(!1)},r}(n),f={backgroundColor:[1,0,0,.5],gridColor:[0,1,0,.5],gridWidth:4},g=o.newLayout().vec3f(a.VertexAttrConstants.POSITION).vec2f(a.VertexAttrConstants.UV0),m=function(){function t(){this.vertexBufferLayout=g}return t.prototype.allocate=function(t){return g.createBuffer(t)},t.prototype.elementCount=function(t){return t.indices[a.VertexAttrConstants.POSITION].length},t.prototype.write=function(t,r,e,o,n){s.writeDefaultAttributes(r,e,g,t.transformation,t.invTranspTransformation,o,n)},t}();return d});