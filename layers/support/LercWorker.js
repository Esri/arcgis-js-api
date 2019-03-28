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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/promiseUtils","../../core/requireUtils","../../core/workers","module"],function(e,t,r,n,o,i,u){function c(){return n.create(function(t){e(["./rasterFormats/LercCodec"],t)})}function s(e){var t=h.get(e);return t||(t={instance:new l(e),ref:0},h.set(e,t)),++t.ref,t.instance}function d(e){if(null!=e){var t=e.scheduler,r=h.get(t);r&&--r.ref<=0&&(r.instance.destroy(),h.delete(t))}}function a(){return new f}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(){}return e.prototype._decode=function(e){return c().then(function(t){var r=t.decode,n=r(e.buffer,e.options);return{result:n,transferList:[n.pixelData.buffer]}})},e}(),l=function(t){function s(r){var n=t.call(this)||this;return n.scheduler=r,n._thread=void 0,i.open(o.getAbsMid("./LercWorker",e,u),{strategy:"dedicated",scheduler:r}).then(function(e){void 0===n._thread?n._thread=e:e.close()}),n}return r(s,t),s.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},s.prototype.decode=function(e,t){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e]}):c().then(function(r){return(0,r.decode)(e,t)}):n.resolve(null)},s}(f),h=new Map;t.acquireInstance=s,t.releaseInstance=d,t.default=a});