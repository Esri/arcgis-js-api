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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/declareExtendsHelper","../../../webgl/BufferObject","../../../webgl/VertexArrayObject"],function(e,t,r,o,i){return function(){function e(e,t){this.rctx=e,this._vertexBuffer=o.createVertex(e,35044,new Uint16Array(t)),this._vao=new i(e,{a_position:0,a_texcoord:1},{geometry:[{name:"a_position",count:2,type:5123,offset:0,stride:4,normalized:!1}]},{geometry:this._vertexBuffer})}return e.prototype.bind=function(){this._vao.bind()},e.prototype.unbind=function(){this._vao.unbind()},e.prototype.dispose=function(){this._vao.dispose(!1),this._vertexBuffer.dispose()},e.prototype.draw=function(){this.rctx.drawArrays(5,0,4)},e}()});