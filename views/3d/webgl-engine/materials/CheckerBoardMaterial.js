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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","dojo/text!./CheckerBoardMaterial.xml","../lib/GLMaterial","../lib/Material","../lib/RenderSlot","../lib/ShaderVariations","../lib/Util","./internal/MaterialUtil","./internal/MaterialUtil"],function(t,e,r,o,a,n,i,s,l,p,f){var c=[{name:l.VertexAttrConstants.POSITION,count:3,type:5126,offset:0,stride:20,normalized:!1},{name:l.VertexAttrConstants.UV0,count:2,type:5126,offset:12,stride:20,normalized:!1}],u={size:[1,1],color1:[.75,.75,.75,1],color2:[.5,.5,.5,1],transparent:!1,polygonOffset:!1},d=function(t){function e(e,r){var o=t.call(this,r)||this;return o.canBeMerged=!1,o.params=p.copyParameters(e,u),o}return r(e,t),e.prototype.dispose=function(){},e.prototype.getParameterValues=function(){var t=this.params;return{size:t.size,color1:t.color1,color2:t.color2,transparent:t.transparent,polygonOffset:t.polygonOffset}},e.prototype.setParameterValues=function(t){p.updateParameters(this.params,t)&&this.notifyDirty("matChanged")},e.prototype.getParams=function(){return this.params},e.prototype.getOutputAmount=function(t){return 5*t},e.prototype.getInstanceBufferLayout=function(){},e.prototype.getVertexBufferLayout=function(){return c},e.prototype.fillInterleaved=function(t,e,r,o,a,n){f.fillInterleaved(t,e,r,o,c,a,n)},e.prototype.intersect=function(t,e,r,o,a,n,i,s){return f.intersectTriangleGeometry(t,e,r,o,a,n,i)},e.prototype.getGLMaterials=function(){return{color:m,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:void 0}},e.prototype.getAllTextureIds=function(){return[]},e.loadShaders=function(t,e,r){t._parse(o);var a=new s("checker-board",["vsCheckerBoard","fsCheckerBoard"],null,e,t,r);e.addShaderVariations("checker-board-material-shader-variations",a)},e}(n),m=function(t){function e(e,r,o){var a=t.call(this,e,r)||this;return a.programRep=r,a.params=p.copyParameters(e.getParams()),a.selectProgram(),a}return r(e,t),e.prototype.selectProgram=function(){this.program=this.programRep.getShaderVariationsProgram("checker-board-material-shader-variations",[])},e.prototype.updateParameters=function(){this.params=this.material.getParameterValues(),this.selectProgram()},e.prototype.beginSlot=function(t){return t===(this.params.transparent?i.TRANSPARENT_MATERIAL:i.OPAQUE_MATERIAL)},e.prototype.getProgram=function(){return this.program},e.prototype.getDrawMode=function(t){return t.gl.TRIANGLES},e.prototype.bind=function(t,e){var r=this.program;t.setDepthTestEnabled(!0),t.setDepthWriteEnabled(!1),t.setFaceCullingEnabled(!1),this.params.transparent&&(t.setBlendingEnabled(!0),t.setBlendFunctionSeparate(t.gl.SRC_ALPHA,t.gl.ONE_MINUS_SRC_ALPHA,t.gl.ONE,t.gl.ONE_MINUS_SRC_ALPHA)),this.params.polygonOffset&&(t.setPolygonOffsetFillEnabled(!0),t.setPolygonOffset(0,-25)),t.bindProgram(r),r.setUniform2fv("size",this.params.size),r.setUniform4fv("color1",this.params.color1),r.setUniform4fv("color2",this.params.color2)},e.prototype.bindView=function(t,e){var r=e.origin,o=this.getProgram();p.bindView(r,e.view,o)},e.prototype.bindInstance=function(t,e){this.getProgram().setUniformMatrix4fv("model",e.transformation)},e.prototype.release=function(t){t.setDepthWriteEnabled(!0),this.params.transparent&&t.setBlendingEnabled(!1),this.params.polygonOffset&&t.setPolygonOffsetFillEnabled(!1)},e}(a);return d});