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

define(["require","exports","tslib","./Accessor","./handleUtils","./accessorSupport/decorators/subclass"],(function(t,e,n,r,i,s){"use strict";var o=function(){function t(){this._emitter=new t.EventEmitter(this)}return t.prototype.emit=function(t,e){return this._emitter.emit(t,e)},t.prototype.on=function(t,e){return this._emitter.on(t,e)},t.prototype.once=function(t,e){return this._emitter.once(t,e)},t.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},t}();return function(t){var e=function(){function t(t){void 0===t&&(t=null),this.target=t,this._listenersMap=null}return t.prototype.clear=function(){this._listenersMap&&this._listenersMap.clear()},t.prototype.emit=function(t,e){var r=this._listenersMap&&this._listenersMap.get(t);if(!r)return!1;var i=this.target||this;return n.__spreadArrays(r).forEach((function(t){t.call(i,e)})),r.length>0},t.prototype.on=function(t,e){var n=this;if(Array.isArray(t)){var r=t.map((function(t){return n.on(t,e)}));return i.handlesGroup(r)}if(t.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new Map);var s=this._listenersMap.get(t)||[];return s.push(e),this._listenersMap.set(t,s),{remove:function(){var r=n._listenersMap&&n._listenersMap.get(t)||[],i=r.indexOf(e);i>=0&&r.splice(i,1)}}},t.prototype.once=function(t,e){var n;return n=this.on(t,(function(t){n.remove(),e.call(null,t)}))},t.prototype.hasEventListener=function(t){var e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0},t}();t.EventEmitter=e,t.EventedMixin=function(t){return function(t){function r(){var n=null!==t&&t.apply(this,arguments)||this;return n._emitter=new e,n}return n.__extends(r,t),r.prototype.emit=function(t,e){return this._emitter.emit(t,e)},r.prototype.on=function(t,e){return this._emitter.on(t,e)},r.prototype.once=function(t,e){return this._emitter.once(t,e)},r.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},r=n.__decorate([s.subclass("esri.core.Evented")],r)}(t)};var u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e._emitter=new o.EventEmitter(e),e}return n.__extends(e,t),e.prototype.emit=function(t,e){return this._emitter.emit(t,e)},e.prototype.on=function(t,e){return this._emitter.on(t,e)},e.prototype.once=function(t,e){return this._emitter.once(t,e)},e.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},e=n.__decorate([s.subclass("esri.core.Evented")],e)}(r);t.EventedAccessor=u}(o||(o={})),o}));