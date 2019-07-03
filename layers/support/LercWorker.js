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

define(["require","exports","../../core/tsSupport/assignHelper","../../core/tsSupport/extendsHelper","../../core/promiseUtils","../../core/requireUtils","../../core/workers","module"],function(e,t,r,n,o,i,u,c){function s(){return o.create(function(t){return e(["./rasterFormats/LercCodec"],t)})}function a(e){var t=p.get(e);return t||(t={instance:new h(e),ref:0},p.set(e,t)),++t.ref,t.instance}function d(e){if(null!=e){var t=e.scheduler,r=p.get(t);r&&--r.ref<=0&&(r.instance.destroy(),p.delete(t))}}function f(){return new l}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(){}return e.prototype._decode=function(e){return s().then(function(t){var r=t.decode,n=r(e.buffer,e.options);return{result:n,transferList:[n.pixelData.buffer]}})},e}(),h=function(t){function r(r){var n=t.call(this)||this;return n.scheduler=r,n._threadInitialized=o.create(function(t,o){u.open(i.getAbsMid("./LercWorker",e,c),{strategy:"dedicated",scheduler:r}).then(function(e){void 0===n._thread?(n._thread=e,t()):(e.close(),o())})}),n}return n(r,t),r.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},Object.defineProperty(r.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0}),r.prototype.decode=function(e,t,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e],signal:r}):s().then(function(r){return(0,r.decode)(e,t)}):o.resolve(null)},r}(l);t.LercWorkerMaster=h;var p=new Map;t.acquireInstance=a,t.releaseInstance=d,t.default=f});