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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","./Accessor","./Collection","./accessorSupport/decorators"],(function(r,t,e,o,n,i){return function(r){function t(t){var e=r.call(this,t)||this;return e._groups=new Map,e}return e.__extends(t,r),t.prototype.destroy=function(){this.removeAll()},Object.defineProperty(t.prototype,"size",{get:function(){var r=0;return this._groups.forEach((function(t){r+=t.length})),r},enumerable:!0,configurable:!0}),t.prototype.add=function(r,t){var e=this;if(!this._isHandle(r)&&!Array.isArray(r)&&!n.isCollection(r))return this;var o=this._getOrCreateGroup(t);return Array.isArray(r)||n.isCollection(r)?r.forEach((function(r){return e._isHandle(r)&&o.push(r)})):o.push(r),this.notifyChange("size"),this},t.prototype.forEach=function(r,t){if("function"==typeof r)this._groups.forEach((function(t){return t.forEach(r)}));else{var e=this._getGroup(r);e&&e.forEach(t)}},t.prototype.has=function(r){return this._groups.has(this._ensureGroupKey(r))},t.prototype.remove=function(r){if(Array.isArray(r)||n.isCollection(r))return r.forEach(this.remove,this),this;if(!this.has(r))return this;for(var t=this._getGroup(r),e=0;e<t.length;e++)t[e].remove();return this._deleteGroup(r),this.notifyChange("size"),this},t.prototype.removeAll=function(){return this._groups.forEach((function(r){for(var t=0;t<r.length;t++)r[t].remove()})),this._groups.clear(),this.notifyChange("size"),this},t.prototype._isHandle=function(r){return r&&!!r.remove},t.prototype._getOrCreateGroup=function(r){if(this.has(r))return this._getGroup(r);var t=[];return this._groups.set(this._ensureGroupKey(r),t),t},t.prototype._getGroup=function(r){return this._groups.get(this._ensureGroupKey(r))},t.prototype._deleteGroup=function(r){return this._groups.delete(this._ensureGroupKey(r))},t.prototype._ensureGroupKey=function(r){return r||"_default_"},e.__decorate([i.property({readOnly:!0})],t.prototype,"size",null),t=e.__decorate([i.subclass("esri.core.Handles")],t)}(o)}));