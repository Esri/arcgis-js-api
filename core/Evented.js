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

define(["require","exports","./tsSupport/extendsHelper","@dojo/framework/shim/Map"],function(t,e,n,r){var i=function(){function t(t){this.target=t}return t.prototype.clear=function(){this._listenersMap&&this._listenersMap.clear()},t.prototype.emit=function(t,e){var n=this,r=this._listenersMap&&this._listenersMap.get(t);return!!r&&(e=e||{},e.target||(e.target=this.target),r.slice().forEach(function(t){t.call(n.target,e)}),r.length>0)},t.prototype.on=function(t,e){var n=this;if(Array.isArray(t)){var i=t.map(function(t){return n.on(t,e)});return{remove:function(){return i.forEach(function(t){return t.remove()})}}}if(t.indexOf(",")>-1)throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new r.default);var o=this._listenersMap.get(t)||[];return o.push(e),this._listenersMap.set(t,o),{remove:function(){var r=n._listenersMap&&n._listenersMap.get(t)||[];r.indexOf(e)>=0&&r.splice(r.indexOf(e),1)}}},t.prototype.once=function(t,e){var n,r=this;return n=this.on(t,function(t){n.remove(),e.call(r.target,t)})},t.prototype.hasEventListener=function(t){var e=this._listenersMap&&this._listenersMap.get(t);return null!=e&&e.length>0},t}(),o=function(){function t(){this._emitter=new i(this)}return t.prototype.emit=function(t,e){return this._emitter.emit(t,e)},t.prototype.on=function(t,e){return this._emitter.on(t,e)},t.prototype.once=function(t,e){return this._emitter.once(t,e)},t.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},t}();return function(t){function e(t){return function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.emit=function(t,e){return this._emitter.emit(t,e)},e.prototype.on=function(t,e){return this._emitter.on(t,e)},e.prototype.once=function(t,e){return this._emitter.once(t,e)},e.prototype.hasEventListener=function(t){return this._emitter.hasEventListener(t)},e}(t)}t.EventedMixin=e}(o||(o={})),o});