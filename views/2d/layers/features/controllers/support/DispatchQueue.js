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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../../../core/tsSupport/generatorHelper","../../../../../../core/tsSupport/awaiterHelper","../../../../../../core/promiseUtils"],function(t,e,o,n,i){Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(){this._action=null,this._queue=[],this._abortController=i.createAbortController(),this._refs=1}return t.prototype.up=function(){this._refs++},t.prototype.down=function(){return 0===--this._refs},t.prototype.clear=function(){this._abortController.abort(),this._abortController=i.createAbortController()},t.prototype.destroy=function(){this._queue.length=0,this._action&&(this._action=null)},t.prototype.enqueue=function(t){if(!this._action)return void this._setAction(t);this._queue.push(t)},t.prototype.flush=function(){return n(this,void 0,void 0,function(){var t,e,n;return o(this,function(o){return(t=this._action)?(e=this._abortController.signal,n=this._queue.reduce(function(t,o){return t.then(function(){return o(e)})},t),this._action=n.then(this._handleNext.bind(this)),this._queue.length=0,[2,n]):[2]})})},t.prototype.hasAction=function(){return!!this._action},t.prototype._setAction=function(t){var e=this._abortController.signal;this._action=t(e).then(this._handleNext.bind(this))},t.prototype._handleNext=function(){if(!this._queue.length)return void(this._action=null);this._setAction(this._queue.shift())},t}();e.default=r});