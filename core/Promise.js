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

define(["require","exports","tslib","./Accessor","./maybe","./promiseUtils","./accessorSupport/decorators/subclass"],(function(e,s,r,t,i,o,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.EsriPromise=s.EsriPromiseMixin=void 0;var l=function(){function e(e){var s=this;this.instance=e,this._resolver=o.createDeferred(),this._status=0,this._resolvingPromises=[],this._resolver.promise.then((function(){s._status=1,s._cleanUp()}),(function(){s._status=2,s._cleanUp()}))}return e.prototype.addResolvingPromise=function(e){this._resolvingPromises.push(e),this._tryResolve()},e.prototype.isResolved=function(){return 1===this._status},e.prototype.isRejected=function(){return 2===this._status},e.prototype.isFulfilled=function(){return 0!==this._status},e.prototype.abort=function(){this._resolver.reject(o.createAbortError())},e.prototype.when=function(e,s){return this._resolver.promise.then(e,s)},e.prototype._cleanUp=function(){this._allPromise=this._resolvingPromises=this._allPromise=null},e.prototype._tryResolve=function(){var e=this;if(!this.isFulfilled()){var s=o.createDeferred(),t=r.__spreadArrays(this._resolvingPromises,[i.assumeNonNull(s.promise)]),n=this._allPromise=o.all(t);n.then((function(){e.isFulfilled()||e._allPromise!==n||e._resolver.resolve(e.instance)}),(function(s){e.isFulfilled()||e._allPromise!==n||o.isAbortError(s)||e._resolver.reject(s)})),s.resolve()}},e}();s.EsriPromiseMixin=function(e){return function(e){function s(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];var t=e.apply(this,s)||this;return t._promiseProps=new l(t),t.addResolvingPromise(o.resolve()),t}return r.__extends(s,e),s.prototype.isResolved=function(){return this._promiseProps.isResolved()},s.prototype.isRejected=function(){return this._promiseProps.isRejected()},s.prototype.isFulfilled=function(){return this._promiseProps.isFulfilled()},s.prototype.when=function(e,s){var r=this;return o.create((function(e,s){r._promiseProps.when(e,s)})).then(e,s)},s.prototype.catch=function(e){return this.when(null,e)},s.prototype.addResolvingPromise=function(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)},s=r.__decorate([n.subclass("esri.core.Promise")],s)}(e)};var u=function(e){function s(){return null!==e&&e.apply(this,arguments)||this}return r.__extends(s,e),s=r.__decorate([n.subclass("esri.core.Promise")],s)}(s.EsriPromiseMixin(t));s.EsriPromise=u}));