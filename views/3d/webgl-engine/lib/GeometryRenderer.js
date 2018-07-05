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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","./DefaultVertexAttributeLocations","./Util","../materials/internal/MaterialUtil","../../../webgl/BufferObject","../../../webgl/Util","../../../webgl/VertexArrayObject"],function(t,e,r,i,n,o,a,l){return function(){function t(t,e,s,d){this._drawMode=4,this._count=t.indices[i.VertexAttrConstants.POSITION].length;var u=new Float32Array(this._count*a.getStride(e)/4);s?s(t,void 0,void 0,null,e,u,0):n.fillInterleaved(t,void 0,void 0,null,e,u,0),this._rctx=d,this._vao=new l(d,r.Default3D,{geometry:e},{geometry:o.createVertex(d,35044,u)})}return t.prototype.enablePointRendering=function(t){this._drawMode=t?0:4},t.prototype.render=function(t){var e=this._rctx;e.bindVAO(this._vao),a.assertCompatibleVertexAttributeLocations(this._vao,t),e.drawArrays(this._drawMode,0,this._count)},t}()});