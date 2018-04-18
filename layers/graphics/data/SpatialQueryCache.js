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

define(["require","exports","@dojo/shim/iterator","../../../core/LRUMap"],function(e,t,i,n){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,i){this.cache=e,this.key=t,this.result=i}return e}(),r=new n(2e6,{disposeFunction:function(e,t){t.cache.has(t.key)&&t.cache.delete(t.key)},sizeOfFunction:function(e){return e.result.size}}),s=function(){function e(){this._id=e.id_gen+++"$$",this._keys=new Set}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.size},enumerable:!0,configurable:!0}),e.prototype.clear=function(){var e=this;0!==this._keys.size&&(i.forOf(this._keys,function(t){r.delete(e._getGlobalKey(t))}),this._keys.clear())},e.prototype.delete=function(e){return this._keys.delete(e),r.delete(this._getGlobalKey(e))},e.prototype.get=function(e){var t=r.get(this._getGlobalKey(e));return t&&t.result},e.prototype.has=function(e){return r.has(this._getGlobalKey(e))},e.prototype.set=function(e,t){return this._keys.add(e),r.set(this._getGlobalKey(e),new o(this,e,t)),this},e.prototype._getGlobalKey=function(e){return this._id+e},e.id_gen=0,e}();t.default=s});