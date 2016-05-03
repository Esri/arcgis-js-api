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

define(["require","exports"],function(){var t=function(){function t(e,i,r){this.glName=r.createBuffer(),this.num=0,this.vertexBufferLayout=i,this.gl=r,void 0!==e&&this.setData(e,e.length,r.STATIC_DRAW),this.id=t.__GLVBO_id++}return t.prototype.setData=function(t,e,i){void 0===i&&(i=35044);var r=this.gl;r.bindBuffer(r.ARRAY_BUFFER,this.glName),r.bufferData(r.ARRAY_BUFFER,t,i),r.bindBuffer(r.ARRAY_BUFFER,null),this.num=e/this.vertexBufferLayout.getStride()},t.prototype.updateSubData=function(t,e,i){var r=this.gl;r.bindBuffer(r.ARRAY_BUFFER,this.glName),r.bufferSubData(r.ARRAY_BUFFER,4*e,t.subarray(e,i)),r.bindBuffer(r.ARRAY_BUFFER,null)},t.prototype.bind=function(){var t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,this.glName)},t.prototype.setPointers=function(t,e){void 0===e&&(e=!1);var i=this.gl;this.vertexBufferLayout.setVertexAttribPointers(i,t)},t.prototype.getNum=function(){return this.num},t.prototype.getId=function(){return this.id},t.prototype.getLayout=function(){return this.vertexBufferLayout},t.prototype.dispose=function(){var t=this.gl;t.deleteBuffer(this.glName)},t.__GLVBO_id=0,t}();return t});