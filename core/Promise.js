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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","./tsSupport/declareExtendsHelper","./tsSupport/decorateHelper","./Accessor","./Error","./promiseUtils","./scheduling","./accessorSupport/decorators"],function(e,s,r,t,i,o,n,l,c){function p(e){var s=e._promiseProps;if(!s.isFulfilled()){var r,t,i=s.resolvingPromises;s.allPromise&&s.allPromise.cancel();var o,c=n.create(function(e,s){o={resolve:e,reject:s}});for(r=i.length-1;r>=0;r--)t=i[r],t.isCanceled&&t.isCanceled()&&i.splice(r,1);t=null;(s.allPromise=n.all(i.concat([c]))).then(function(){s.resolver.resolve(e),e=s=o=s.allPromise=s.resolvingPromises=null},function(r){if(s.allPromise=null,!r||"cancel"!==r.dojoType){var t=Array.prototype.slice.call(arguments,0);s.resolver.reject(t[0]),e=s=o=s.allPromise=s.resolvingPromises=null}}),o&&l.schedule(function(){o&&o.resolve()})}}var u=function(e){var s=new o("AbortError");return s.target=this.instance,s.dojoType="cancel",s},a=1,h=2,f=function(){function e(e){var s=this;this.canceler=u.bind(this),this.status=void 0,this.initialized=!1,this.resolvingPromises=[],this.instance=e,this.promise=n.create(function(e,r){s.resolver={resolve:e,reject:r}}),this.promise.then(function(){s.status=a},function(){s.status=h})}return e.prototype.cancel=function(){if(!this.isFulfilled()){this.allPromise.cancel();for(var e=this.resolvingPromises.concat(),s=e.length-1;s>=0;s--)e[s].cancel();this.resolver.cancel()}},e.prototype.isResolved=function(){return this.status===a},e.prototype.isRejected=function(){return this.status===h},e.prototype.isFulfilled=function(){return!!this.status},e}();return function(e){function s(){var s=e.call(this)||this;s._promiseProps=new f(s);var r=s.postscript;return r?s.postscript=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];r.apply(s,e),s.postscript=r,p(s)}:p(s),s}return r(s,e),s.prototype.isResolved=function(){return this._promiseProps.isResolved()},s.prototype.isRejected=function(){return this._promiseProps.isRejected()},s.prototype.isFulfilled=function(){return this._promiseProps.isFulfilled()},s.prototype.when=function(e,s){var r=this;return n.create(function(e,s){r._promiseProps.promise.then(e,s)},this._promiseProps.canceler).then(e,s)},s.prototype.catch=function(e){return this.when(null,e)},s.prototype.addResolvingPromise=function(e){e&&!this._promiseProps.isFulfilled()&&("_promiseProps"in e?this._promiseProps.resolvingPromises.push(e.when()):this._promiseProps.resolvingPromises.push(e),p(this))},s=t([c.subclass()],s)}(c.declared(i))});