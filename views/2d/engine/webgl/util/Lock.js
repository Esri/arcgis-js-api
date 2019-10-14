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

define(["require","exports","../../../../../core/promiseUtils"],function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var n=function(){function e(){this._resolver=null}return e.prototype.isHeld=function(){return!!this._resolver},e.prototype.acquire=function(){var e=this;return this._resolver?this._resolver.promise.then(function(){return e.acquire()}):(this._resolver=t.createResolver(),t.resolve())},e.prototype.release=function(){var e=this._resolver;this._resolver=null,e.resolve()},e}();r.default=n,r.withLock=function(r,e,t){return r.acquire().then(function(){return e(t)}).then(function(){return r.release()}).catch(function(e){throw r.release(),e})}});