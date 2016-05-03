// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/text!./ColorMaterial.xml","./internal/MaterialUtil","../lib/GLSLProgram","../lib/GLSLShader","../lib/RenderSlot","../lib/Util"],function(t,e,r,n,i,o,a){var l=!1,s=function(t,e){r.basicMaterialConstructor(this,e),t=t||{},t.color=t.color||[1,1,1,1],t.polygonOffset=t.polygonOffset||!1,t.vertexColors=t.vertexColors||!1;var n=r.Layouts.PosColor;this.getParams=function(){return t},this.setColor=function(e){t.color=e,this.notifyDirty("matChanged")},this.getColor=function(){return t.color},this.setTransparent=function(e){t.transparent=e,this.notifyDirty("matChanged")},this.getTransparent=function(){return t.transparent},this.dispose=function(){},this.getOutputAmount=function(t){return l?2*t*n.getStride():t*n.getStride()},this.getVertexBufferLayout=function(){return n},this.fillInterleaved=function(t,e,i,o,s,u,f){if(r.fillInterleaved(t,e,i,o,n,s,u,f),l){var c=t.faces.indices[a.VertexAttrConstants.POSITION].length;r.triangleVertexArrayToWireframeLines(s,u,c,n.getStride())}},this.intersect=r.intersectTriangleGeometry,this.getGLMaterials=function(){return{color:u,depthShadowMap:void 0,normal:void 0,depth:void 0,highlight:f}},this.getAllTextureIds=function(){return[]}},u=function(e,n){r.basicGLMaterialConstructor(this,e);var i=t.clone(e.getParams()),a=n.get("colorMaterial"),s=e.getColor();this.beginSlot=function(t){return t===(s[3]<1?o.TRANSPARENT_MATERIAL:o.OPAQUE_MATERIAL)},this.getProgram=function(){return a},this.updateParameters=function(){i.color=e.getColor(),i.transparent=e.getTransparent()},this.bind=function(t){a.use(),a.uniform4fv("eColor",i.color),e.getVertexBufferLayout().enableVertexAttribArrays(t,a),i.polygonOffset&&(t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1,1)),i.transparent&&t.enable(t.BLEND),t.web3DDefaultState.cullEnabled&&t.disable(t.CULL_FACE)},this.release=function(t){e.getVertexBufferLayout().disableVertexAttribArrays(t,a),i.transparent&&t.disable(t.BLEND),t.web3DDefaultState.cullEnabled&&t.enable(t.CULL_FACE)},this.bindView=function(t,e){r.bindView(e.origin,e.view,a)},this.bindInstance=function(t,e){a.uniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){return l?t.LINES:t.TRIANGLES}},f=function(e,n){r.basicGLMaterialConstructor(this,e);var i=t.clone(e.getParams()),a=n.get("colorMaterial"),s=[1,1,1,1];this.beginSlot=function(t){return t===(s[3]<1?o.TRANSPARENT_MATERIAL:o.OPAQUE_MATERIAL)},this.getProgram=function(){return a},this.updateParameters=function(){i.color=e.getColor(),i.transparent=e.getTransparent()},this.bind=function(t){a.use(),a.uniform4fv("eColor",i.color),e.getVertexBufferLayout().enableVertexAttribArrays(t,a),i.polygonOffset&&(t.enable(t.POLYGON_OFFSET_FILL),t.polygonOffset(1,1)),t.web3DDefaultState.cullEnabled&&t.disable(t.CULL_FACE)},this.release=function(t){e.getVertexBufferLayout().disableVertexAttribArrays(t,a),t.web3DDefaultState.cullEnabled&&t.enable(t.CULL_FACE)},this.bindView=function(t,e){r.bindView(e.origin,e.view,a)},this.bindInstance=function(t,e){a.uniformMatrix4fv("model",e.transformation)},this.getDrawMode=function(t){return l?t.LINES:t.TRIANGLES}};return s.programs=null,s.loadShaders=function(t,r,o,a){t._parse(e);var l=new i(a.VERTEX_SHADER,t.vertexShaderColorMaterial,a),s=new i(a.FRAGMENT_SHADER,t.fragmentShaderColorMaterial,a),u=new n([l,s],a);o.add("colorMaterial",u)},s});