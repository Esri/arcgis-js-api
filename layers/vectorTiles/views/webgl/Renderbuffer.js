// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define(["require","exports","dojo/has"],(function(e,t,n){return function(){function e(t,i){this._context=t,this._desc=i,this._glName=null,this._id=-1;var r=this._context.gl;n("esri-webgl-debug")&&this._context.instanceCounter.incrementCount(5),this._id=++e._nextId,this._glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}return Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),e.prototype.resize=function(e,t){var n=this._context.gl,i=this._desc;i.width===e&&i.height===t||(i.width=e,i.height=t,this._context.bindRenderbuffer(this),n.renderbufferStorage(n.RENDERBUFFER,i.internalFormat,i.width,i.height))},e.prototype.dispose=function(){this._glName&&(this._context.gl.deleteRenderbuffer(this._glName),this._glName=null);n("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(5),this._context=null},e._nextId=0,e}()}));