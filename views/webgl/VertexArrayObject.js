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

define(["require","exports"],function(){var e=function(){function e(t,i,r,n,o){this._context=null,this._glName=null,this._program=null,this._layout=null,this._buffers=void 0,this._indexBuffer=void 0,this._initialized=!1,this._context=t,this._program=i,this._layout=r,this._buffers=n,o&&(this._indexBuffer=o),this._id=e._nextId++}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var e=this._context.extensions.vao;e&&this._glName&&e.isVertexArrayOES(this._glName)&&(e.deleteVertexArrayOES(this._glName),this._glName=null)},e.prototype.initialize=function(){if(!this._initialized){var e=this._context.extensions.vao;if(e){var t=e.createVertexArrayOES();e.bindVertexArrayOES(t),this._layout.bind(this._program,this._buffers,this._indexBuffer),e.bindVertexArrayOES(null),this._glName=t}this._initialized=!0}},e.prototype.bindLayout=function(){this.initialize(),this._layout.bind(this._program,this._buffers,this._indexBuffer)},e._nextId=0,e}();return e});