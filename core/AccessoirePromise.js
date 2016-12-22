// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["./declare","dojo/promise/all","dojo/aspect","dojo/Deferred","dojo/errors/create","./Scheduler"],function(e,r,s,i,l,o){var n=function(e){if(!e.isFulfilled()){var s,l,n=e._promiseProps,t=n.resolvingPromises;n.allPromise&&n.allPromise.cancel();var c=new i;for(s=t.length-1;s>=0;s--)l=t[s],l.isCanceled&&l.isCanceled()?t.splice(s,1):l.then(null,null,n.resolver.progress);l=null;var a=n.allPromise=r(t.concat([c.promise]));a.then(function(){n.resolver.resolve(e),e=n=c=n.allPromise=n.resolvingPromises=null},function(r){if(n.allPromise=null,!r||"cancel"!==r.dojoType){var s=Array.prototype.slice.call(arguments,0);n.resolver.reject(s[0]),e=n=c=n.allPromise=n.resolvingPromises=null}}),c&&o.schedule(function(){c&&c.resolve()})}},t=l("CancelError",null,function(e){this.target=e}),c=function(e){return e||new t(this.instance)},a=function(e){this.instance=e,this.canceler=c.bind(this),this.resolver=new i,this.initialized=!1,this.resolvingPromises=[]};a.prototype={canceler:null,cancel:function(e){if(!this.resolver.isFulfilled()){this.allPromise.cancel();for(var r=this.resolvingPromises.concat(),s=r.length-1;s>=0;s--)r[s].cancel(e);this.resolver.cancel(e)}}};var u=e(null,{declaredClass:"esri.core.Promise",constructor:function(){Object.defineProperty(this,"_promiseProps",{value:new a(this),enumerable:!1,configurable:!1,writable:!0});var e=s.after(this,"postscript",function(r,s){e.remove(),e=null,n(this)},!0)},_promiseProps:null,always:function(e){return this.then(e,e)},then:function(e,r,s){var l=new i(this._promiseProps.canceler),o=l.then(e,r,s);return this._promiseProps.resolver.then(l.resolve,l.reject,l.progress),o},isResolved:function(){return this._promiseProps.resolver.isResolved()},isRejected:function(){return this._promiseProps.resolver.isRejected()},isFulfilled:function(){return this._promiseProps.resolver.isFulfilled()},otherwise:function(e){return this.then(null,e)},addResolvingPromise:function(e){e&&!this.isFulfilled()&&(this._promiseProps.resolvingPromises.push(e),n(this))}});return u});