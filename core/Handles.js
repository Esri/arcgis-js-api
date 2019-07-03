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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Accessor","./Collection","./accessorSupport/decorators"],function(r,e,t,o,n,i,s){return function(r){function e(e){var t=r.call(this)||this;return t._groups=new Map,t}return t(e,r),e.prototype.destroy=function(){this.removeAll()},Object.defineProperty(e.prototype,"size",{get:function(){var r=0;return this._groups.forEach(function(e){r+=e.length}),r},enumerable:!0,configurable:!0}),e.prototype.add=function(r,e){var t=this;if(!this._isHandle(r)&&!Array.isArray(r)&&!i.isCollection(r))return this;var o=this._getOrCreateGroup(e);return Array.isArray(r)||i.isCollection(r)?r.forEach(function(r){return t._isHandle(r)&&o.push(r)}):o.push(r),this.notifyChange("size"),this},e.prototype.forEach=function(r,e){if("function"==typeof r)this._groups.forEach(function(e){return e.forEach(r)});else{var t=this._getGroup(r);t&&t.forEach(e)}},e.prototype.has=function(r){return this._groups.has(this._ensureGroupKey(r))},e.prototype.remove=function(r){if(Array.isArray(r)||i.isCollection(r))return r.forEach(this.remove,this),this;if(!this.has(r))return this;for(var e=this._getGroup(r),t=0;t<e.length;t++)e[t].remove();return this._deleteGroup(r),this.notifyChange("size"),this},e.prototype.removeAll=function(){return this._groups.forEach(function(r){for(var e=0;e<r.length;e++)r[e].remove()}),this._groups.clear(),this.notifyChange("size"),this},e.prototype._isHandle=function(r){return r&&!!r.remove},e.prototype._getOrCreateGroup=function(r){if(this.has(r))return this._getGroup(r);var e=[];return this._groups.set(this._ensureGroupKey(r),e),e},e.prototype._getGroup=function(r){return this._groups.get(this._ensureGroupKey(r))},e.prototype._deleteGroup=function(r){return this._groups.delete(this._ensureGroupKey(r))},e.prototype._ensureGroupKey=function(r){return r||"_default_"},o([s.property({readOnly:!0})],e.prototype,"size",null),e=o([s.subclass("esri.core.Handles")],e)}(s.declared(n))});