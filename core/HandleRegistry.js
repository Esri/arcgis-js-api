// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","./Accessor","./accessorSupport/decorators"],function(r,e,t,o,n,s){var i=function(r){function e(){var e=r.call(this)||this;return e._groups=null,e._groups={},e}return t(e,r),e.prototype.destroy=function(){this.removeAll(),this._groups=null},Object.defineProperty(e.prototype,"size",{get:function(){var r=0,e=this._groups;for(var t in e)r+=e[t].length;return r},enumerable:!0,configurable:!0}),e.prototype.add=function(r,e){if(!this._isHandle(r)&&!Array.isArray(r))return this;var t=this._getOrCreateGroup(e);if(Array.isArray(r))for(var o=0;o<r.length;o++)t.push(r[o]);else t.push(r);return this.notifyChange("size"),this},e.prototype.has=function(r){var e=this._groups[r];return!!e&&e.length>0},e.prototype.remove=function(r){if(Array.isArray(r))return r.forEach(this.remove.bind(this)),this;var e=this._getGroup(r);if(!e)return this;for(var t=0;t<e.length;t++)e[t].remove();return e.length=0,this.notifyChange("size"),this},e.prototype.removeAll=function(){var r=this._groups;for(var e in r)this.remove(e),delete r[e];return this},e.prototype._isHandle=function(r){return r&&!!r.remove},e.prototype._getOrCreateGroup=function(r){return this._getGroup(r)||(this._groups[this._ensureGroupName(r)]=[])},e.prototype._getGroup=function(r){return this._groups[this._ensureGroupName(r)]},e.prototype._ensureGroupName=function(r){return r||"_default_"},e}(s.declared(n));return o([s.property({readOnly:!0})],i.prototype,"size",null),i=o([s.subclass()],i)});