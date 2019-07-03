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

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./promiseUtils","./scheduling","./accessorSupport/decorators"],function(e,t,r,s,o,i,n,l){var u=function(){function e(e){var t=this;this.instance=e,this._resolver=i.createDeferred(),this._status=void 0,this._resolvingPromises=[],this._resolver.promise.then(function(){t._status=0,t._cleanUp()},function(){t._status=1,t._cleanUp()})}return e.prototype.addResolvingPromise=function(e){this._resolvingPromises.push(e),this._tryResolve()},e.prototype.isResolved=function(){return 0===this._status},e.prototype.isRejected=function(){return 1===this._status},e.prototype.isFulfilled=function(){return null!=this._status},e.prototype.abort=function(){this._resolver.reject(i.createAbortError())},e.prototype.when=function(e,t){return this._resolver.promise.then(e,t)},e.prototype._cleanUp=function(){this._allPromise=this._resolvingPromises=this._allPromise=null},e.prototype._tryResolve=function(){var e=this;if(!this.isFulfilled()){var t=i.createDeferred(),r=this._resolvingPromises.concat([t.promise]),s=this._allPromise=i.all(r);s.then(function(){e.isFulfilled()||e._allPromise!==s||e._resolver.resolve(e.instance)},function(t){e.isFulfilled()||e._allPromise!==s||i.isAbortError(t)||e._resolver.reject(t)}),n.schedule(function(){t.resolve()})}},e}();return function(e){function t(){var t=e.call(this)||this;return t._promiseProps=new u(t),t.addResolvingPromise(i.create(function(e){n.schedule(e)})),t}return r(t,e),t.prototype.isResolved=function(){return this._promiseProps.isResolved()},t.prototype.isRejected=function(){return this._promiseProps.isRejected()},t.prototype.isFulfilled=function(){return this._promiseProps.isFulfilled()},t.prototype.when=function(e,t){var r=this;return i.create(function(e,t){r._promiseProps.when(e,t)}).then(e,t)},t.prototype.catch=function(e){return this.when(null,e)},t.prototype.addResolvingPromise=function(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)},t=s([l.subclass("esri.core.Promise")],t)}(l.declared(o))});