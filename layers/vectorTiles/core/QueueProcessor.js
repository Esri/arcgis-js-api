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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","./Queue"],function(e,s,t,i){function r(e){return e&&"function"==typeof e.then}var o={},n=function(){function e(e){this._apiPromises=new Map,this._resolvingPromises=new Map,this._isPaused=!1,this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new i(e.peeker?{peeker:e.peeker}:void 0),this.process=e.process}return Object.defineProperty(e.prototype,"length",{get:function(){return this._resolvingPromises.size+this._queue.length},enumerable:!0,configurable:!0}),e.prototype.clear=function(){this._queue.clear();var e=[];this._resolvingPromises.forEach(function(s){return e.push(s)}),this._resolvingPromises.clear(),e.forEach(function(e){return e.cancel()}),e.length=0,this._apiPromises.forEach(function(s){return e.push(s)}),this._apiPromises.clear(),e.forEach(function(e){return e.cancel()}),this._isPaused=!1},e.prototype.find=function(e,s){var t=this,i=void 0;return this._apiPromises.forEach(function(r,o){e.call(s,o)&&(i=t._apiPromises.get(o).promise)}),i},e.prototype.has=function(e){return this._apiPromises.has(e)},e.prototype.pause=function(){this._isPaused=!0},e.prototype.push=function(e){var s=this;if(this._apiPromises.has(e))return this._apiPromises.get(e).promise;var i=new t(function(t){s._resolvingPromises.has(e)?s._resolvingPromises.get(e).cancel(t):(s._remove(e),s._scheduleNext())});return this._add(e,i),this._scheduleNext(),i.promise},e.prototype.reset=function(){var e=[];this._resolvingPromises.forEach(function(s){return e.push(s)}),this._resolvingPromises.clear(),e.forEach(function(e){return e.cancel(o)})},e.prototype.resume=function(){this._isPaused=!1,this._scheduleNext()},e.prototype._scheduleNext=function(){this._isPaused||this._next()},e.prototype._next=function(){this._resolvingPromises.size!==this.concurrency&&this._process(this._queue.pop())},e.prototype._process=function(e){var s=this;if(null!=e){var t=this._apiPromises.get(e),i=this.process(e);r(i)?(this._resolvingPromises.set(e,i),i.then(function(i){t.resolve(i),s._remove(e),s._scheduleNext()},function(i){i===o?s._process(e):(t.reject(i),s._remove(e),s._scheduleNext())})):(t.resolve(i),this._remove(e),this._scheduleNext())}},e.prototype._add=function(e,s){this._apiPromises.set(e,s),this._queue.push(e)},e.prototype._remove=function(e){this._queue.remove(e),this._apiPromises["delete"](e),this._resolvingPromises["delete"](e)},e}();return n});