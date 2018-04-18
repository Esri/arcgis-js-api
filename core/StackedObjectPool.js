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

define(["require","exports"],function(t,o){return function(){function t(t,o){void 0===o&&(o=0),this._pool=new Array,this._stack=new Array,this._index=0,this._factory=t;for(var e=0;e<o;++e)this._pool.push(this._factory())}return Object.defineProperty(t.prototype,"size",{get:function(){return this._pool.length},enumerable:!0,configurable:!0}),t.prototype.push=function(){this._stack.push(this._index)},t.prototype.pop=function(){if(0===this._stack.length)throw new Error("cannot pop empty stack");this._index=this._stack.pop()},t.prototype.allocate=function(){if(0===this._stack.length)throw new Error("cannot allocate with empty stack");return this._index>=this._pool.length&&this._pool.push(this._factory()),this._pool[this._index++]},t}()});