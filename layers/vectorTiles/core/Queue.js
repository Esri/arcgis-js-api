// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["require","exports"],(function(t,e){return function(){function t(t){this._items=[],this._itemSet=new Set,this._peeker=function(t){return t[0]},this._length=0,t&&t.peeker&&(this._peeker=t.peeker)}return Object.defineProperty(t.prototype,"length",{get:function(){return this._length},enumerable:!0,configurable:!0}),t.prototype.clear=function(){this._itemSet.clear(),this._items.length=0,this._length=0},t.prototype.peek=function(){if(0!==this._length)return this._peeker(this._items)},t.prototype.push=function(t){this.contains(t)||this._add(t)},t.prototype.contains=function(t){return this._length>0&&this._itemSet.has(t)},t.prototype.pop=function(){if(0!==this._length){var t=this.peek();return this._remove(t),t}},t.prototype.remove=function(t){this.contains(t)&&this._remove(t)},t.prototype._add=function(t){this._items.push(t),this._itemSet.add(t),this._length++},t.prototype._remove=function(t){this._itemSet.delete(t),this._items.splice(this._items.indexOf(t),1),this._length--},t}()}));