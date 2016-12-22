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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../materials/internal/MaterialUtil","./DefaultVertexAttributeLocations","../../../webgl/VertexArrayObject","../../../webgl/BufferObject","../../../webgl/Util","../../../webgl/enums"],function(t,e,r,i,n,o,a,l){var s=function(){function t(t,e,l,s){this._drawMode=4,this._layout=e;var u=t.faces;this._count=u.indices[u.positionKey].length;var d=new Float32Array(this._count*a.getStride(e)/4);l?l(t,void 0,void 0,null,e,d,0):r.fillInterleaved(t,void 0,void 0,null,e,d,0),this._rctx=s,this._vao=new n(s,i.Default3D,{geometry:e},{geometry:o.createVertex(s,35044,d)})}return t.prototype.enablePointRendering=function(t){this._drawMode=t?0:4},t.prototype.render=function(t){var e=this._rctx;e.bindVAO(this._vao),a.assertCompatibleVertexAttributeLocations(this._vao,t),e.drawArrays(this._drawMode,0,this._count)},t}();return s});