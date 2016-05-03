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

define(["require","exports","./Util"],function(t,e,i){var n=function(){function t(e,i){this.num=0,this.glName=i.createBuffer(),this.gl=i,void 0!==e&&this.setData(e),this.id=t._id++}return t.prototype.setData=function(t){var e=this.gl;t instanceof Uint16Array?this.type=e.UNSIGNED_SHORT:t instanceof Uint32Array?this.type=e.UNSIGNED_INT:i.assert(!1,"only unsigned short or int arrays are supported for indices"),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,this.glName),e.bufferData(e.ELEMENT_ARRAY_BUFFER,t,e.STATIC_DRAW),e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,null),this.num=t.length},t.prototype.bind=function(){var t=this.gl;t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.glName)},t.prototype.getNum=function(){return this.num},t.prototype.getId=function(){return this.id},t.prototype.getType=function(){return this.type},t.prototype.dispose=function(){var t=this.gl;t.deleteBuffer(this.glName)},t._id=0,t}();return n});