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

define(["require","exports","tslib","../../../../../../core/promiseUtils"],(function(t,o,e,r){Object.defineProperty(o,"__esModule",{value:!0});var n=function(){function t(){this._action=null,this._queue=[],this._abortController=r.createAbortController(),this._refs=1}return t.prototype.up=function(){this._refs++},t.prototype.down=function(){return this._refs--,0===this._refs},t.prototype.clear=function(){this._abortController.abort(),this._abortController=r.createAbortController()},t.prototype.destroy=function(){this._queue.length=0,this._action&&(this._action=null)},t.prototype.enqueue=function(t){this._action?this._queue.push(t):this._setAction(t)},t.prototype.flush=function(){return e.__awaiter(this,void 0,void 0,(function(){var t,o,n;return e.__generator(this,(function(e){return(t=this._action)?(o=this._abortController.signal,n=this._queue.reduce((function(t,e){return t.then((function(){return e(o)}))}),t).catch(r.throwIfNotAbortError),this._action=n.then(this._handleNext.bind(this)).catch(r.throwIfNotAbortError),this._queue.length=0,[2,n]):[2]}))}))},t.prototype.hasAction=function(){return!!this._action},t.prototype._setAction=function(t){var o=this._abortController.signal;this._action=t(o).then(this._handleNext.bind(this)).catch(r.throwIfNotAbortError)},t.prototype._handleNext=function(){this._queue.length?this._setAction(this._queue.shift()):this._action=null},t}();o.default=n}));