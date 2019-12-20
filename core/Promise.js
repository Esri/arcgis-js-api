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

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./has","./promiseUtils","./scheduling","./accessorSupport/decorators"],function(e,r,s,t,i,o,n,l,u){Object.defineProperty(r,"__esModule",{value:!0});var p=function(){function e(e){var r=this;this.instance=e,this._resolver=n.createDeferred(),this._status=void 0,this._resolvingPromises=[],this._resolver.promise.then(function(){r._status=0,r._cleanUp()},function(){r._status=1,r._cleanUp()})}return e.prototype.addResolvingPromise=function(e){this._resolvingPromises.push(e),this._tryResolve()},e.prototype.isResolved=function(){return 0===this._status},e.prototype.isRejected=function(){return 1===this._status},e.prototype.isFulfilled=function(){return null!=this._status},e.prototype.abort=function(){this._resolver.reject(n.createAbortError())},e.prototype.when=function(e,r){return this._resolver.promise.then(e,r)},e.prototype._cleanUp=function(){this._allPromise=this._resolvingPromises=this._allPromise=null},e.prototype._tryResolve=function(){var e=this;if(!this.isFulfilled()){var r=n.createDeferred(),s=this._resolvingPromises.concat([r.promise]),t=this._allPromise=n.all(s);t.then(function(){e.isFulfilled()||e._allPromise!==t||e._resolver.resolve(e.instance)},function(r){e.isFulfilled()||e._allPromise!==t||n.isAbortError(r)||e._resolver.reject(r)}),o("esri-native-promise")?r.resolve():l.schedule(function(){return r.resolve()})}},e}();r.EsriPromiseMixin=function(e){return function(e){function r(){for(var r=[],s=0;s<arguments.length;s++)r[s]=arguments[s];var t=e.apply(this,r)||this;return t._promiseProps=new p(t),t.addResolvingPromise(o("esri-native-promise")?n.resolve():n.create(function(e){return l.schedule(e)})),t}return s(r,e),r.prototype.isResolved=function(){return this._promiseProps.isResolved()},r.prototype.isRejected=function(){return this._promiseProps.isRejected()},r.prototype.isFulfilled=function(){return this._promiseProps.isFulfilled()},r.prototype.when=function(e,r){var s=this;return n.create(function(e,r){s._promiseProps.when(e,r)}).then(e,r)},r.prototype.catch=function(e){return this.when(null,e)},r.prototype.addResolvingPromise=function(e){e&&!this._promiseProps.isFulfilled()&&this._promiseProps.addResolvingPromise("_promiseProps"in e?e.when():e)},r=t([u.subclass("esri.core.Promise")],r)}(u.declared(e))};var c=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return s(r,e),r=t([u.subclass("esri.core.Promise")],r)}(u.declared(r.EsriPromiseMixin(i)));r.EsriPromise=c});