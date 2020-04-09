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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/extendsHelper","../../core/promiseUtils","../../core/workers"],(function(e,t,r,n,o,i){function u(){return o.create((function(t){return e(["./rasterFormats/LercCodec"],t)}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(){}return e.prototype._decode=function(e){return u().then((function(t){var r=(0,t.decode)(e.buffer,e.options);return{result:r,transferList:[r.pixelData.buffer]}}))},e}(),a=function(e){function t(t){var r=e.call(this)||this;return r.scheduler=t,r._threadInitialized=o.create((function(e){i.open("LercWorker",{strategy:"dedicated",scheduler:t}).then((function(t){void 0===r._thread?(r._thread=t,e()):(t.close(),e())}),(function(){return e()}))})),r}return n(t,e),t.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},Object.defineProperty(t.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0}),t.prototype.decode=function(e,t,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e],signal:r}):u().then((function(n){var i=n.decode;return o.throwIfAborted(r),i(e,t)})):o.resolve(null)},t}(c);t.LercWorkerMaster=a;var s=new Map;t.acquireInstance=function(e){var t=s.get(e);return t||(t={instance:new a(e),ref:0},s.set(e,t)),++t.ref,t.instance},t.releaseInstance=function(e){if(null!=e){var t=e.scheduler,r=s.get(t);r&&--r.ref<=0&&(r.instance.destroy(),s.delete(t))}},t.default=function(){return new c}}));