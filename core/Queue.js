// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./SetUtils"],(function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){void 0===e&&(e=function(e){return i.firstOfSet(e)}),this._peeker=e,this._items=new Set}return Object.defineProperty(e.prototype,"length",{get:function(){return this._items.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._items.clear()},e.prototype.peek=function(){if(0!==this._items.size)return this._peeker(this._items)},e.prototype.push=function(e){this.contains(e)||this._items.add(e)},e.prototype.contains=function(e){return this._items.has(e)},e.prototype.pop=function(){if(0!==this.length){var e=this.peek();return this._items.delete(e),e}},e.prototype.remove=function(e){this._items.delete(e)},e}();t.default=n}));