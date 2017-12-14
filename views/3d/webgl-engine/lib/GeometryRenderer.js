// COPYRIGHT © 2017 Esri
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

define(["require","exports","../materials/internal/MaterialUtil","./Util","./DefaultVertexAttributeLocations","../../../webgl/VertexArrayObject","../../../webgl/BufferObject","../../../webgl/Util","../../../webgl/enums"],function(t,e,r,i,n,o,a,l,s){var u=function(){function t(t,e,s,u){this._drawMode=4,this._count=t.indices[i.VertexAttrConstants.POSITION].length;var d=new Float32Array(this._count*l.getStride(e)/4);s?s(t,void 0,void 0,null,e,d,0):r.fillInterleaved(t,void 0,void 0,null,e,d,0),this._rctx=u,this._vao=new o(u,n.Default3D,{geometry:e},{geometry:a.createVertex(u,35044,d)})}return t.prototype.enablePointRendering=function(t){this._drawMode=t?0:4},t.prototype.render=function(t){var e=this._rctx;e.bindVAO(this._vao),l.assertCompatibleVertexAttributeLocations(this._vao,t),e.drawArrays(this._drawMode,0,this._count)},t}();return u});