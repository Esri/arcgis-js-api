// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./accessorSupport/decorators"],function(t,e,r,n,i,o){var s=function(){function t(){this._emitter=new t.EventEmitter(this)}return t.prototype.emit=function(t,e){return this._emitter.emit(t,e)},t.prototype.on=function(t,e){return this._emitter.on(t,e)},t.prototype.once=function(t,e){return this._emitter.once(t,e)},t.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},t}();return function(t){var e=function(){function t(t){this.target=t}return t.prototype.clear=function(){this._listenersMap&&this._listenersMap.clear()},t.prototype.emit=function(t,e){var r=this,n=this._listenersMap&&this._listenersMap.get(t);return!!n&&(e=e||{},e.target||(e.target=this.target),n.slice().forEach(function(t){t.call(r.target,e)}),n.length>0)},t.prototype.on=function(t,e){var r=this;if(Array.isArray(t)){var n=t.map(function(t){return r.on(t,e)});return{remove:function(){return n.forEach(function(t){return t.remove()})}}}if(t.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);var i=this._listenersMap.get(t)||[];return i.push(e),this._listenersMap.set(t,i),{remove:function(){var n=r._listenersMap&&r._listenersMap.get(t)||[];n.indexOf(e)>=0&&n.splice(n.indexOf(e),1)}}},t.prototype.once=function(t,e){var r,n=this;return r=this.on(t,function(t){r.remove(),e.call(n.target,t)})},t.prototype.hasEventListener=function(t){var e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0},t}();t.EventEmitter=e,t.EventedMixin=function(t){return function(t){function i(){var r=null!==t&&t.apply(this,arguments)||this;return r._emitter=new e(r),r}return r(i,t),i.prototype.emit=function(t,e){return this._emitter.emit(t,e)},i.prototype.on=function(t,e){return this._emitter.on(t,e)},i.prototype.once=function(t,e){return this._emitter.once(t,e)},i.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},i=n([o.subclass("esri.core.Evented")],i)}(o.declared(t))};var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._emitter=new s.EventEmitter(e),e}return r(e,t),e.prototype.emit=function(t,e){return this._emitter.emit(t,e)},e.prototype.on=function(t,e){return this._emitter.on(t,e)},e.prototype.once=function(t,e){return this._emitter.once(t,e)},e.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},e=n([o.subclass("esri.core.Evented")],e)}(o.declared(i));t.EventedAccessor=u}(s||(s={})),s});