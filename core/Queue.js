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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","./maybe","./SetUtils"],(function(t,e,i,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t){void 0===t&&(t=function(t){return n.firstOfSet(t)}),this._peeker=t,this._items=new Set}return Object.defineProperty(t.prototype,"length",{get:function(){return this._items.size},enumerable:!1,configurable:!0}),t.prototype.clear=function(){this._items.clear()},t.prototype.peek=function(){if(0!==this._items.size)return this._peeker(this._items)},t.prototype.push=function(t){this.contains(t)||this._items.add(t)},t.prototype.contains=function(t){return this._items.has(t)},t.prototype.pop=function(){if(0!==this.length){var t=this.peek();return this._items.delete(i.assumeNonNull(t)),t}},t.prototype.remove=function(t){this._items.delete(t)},t.prototype.filter=function(t){var e=this;return this._items.forEach((function(i){t(i)||e._items.delete(i)})),this},t}();e.default=r}));