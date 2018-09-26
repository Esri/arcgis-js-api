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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["dojo/promise/all","dojo/Deferred","dojo/aspect","dojo/errors/create","./scheduling","./Logger","./declare","./has","./lang"],function(e,r,i,s,n,o,t,l,c){function a(e,r){p.warn("DEPRECATED: "+e+"()"+(r?" -- use "+r+" instead":""))}l.add("esri-promise-compatibility",!0),l.add("esri-promise-compatibility-deprecation-warnings",!0);var p=o.getLogger("esri.core.Promise"),u=function(i){var s=i._promiseProps;if(!s.resolver.isFulfilled()){var o,t,l=s.resolvingPromises;s.allPromise&&s.allPromise.cancel();var c=new r;for(o=l.length-1;o>=0;o--)t=l[o],t.isCanceled&&t.isCanceled()?l.splice(o,1):t.then(null,null,s.resolver.progress);t=null;(s.allPromise=e(l.concat([c.promise]))).then(function(){s.resolver.resolve(i),i=s=c=s.allPromise=s.resolvingPromises=null},function(e){if(s.allPromise=null,!e||"cancel"!==e.dojoType){var r=Array.prototype.slice.call(arguments,0);s.resolver.reject(r[0]),i=s=c=s.allPromise=s.resolvingPromises=null}}),c&&n.schedule(function(){c&&c.resolve()})}},h=s("CancelError",null,function(e){this.target=e}),m=function(e){return e||new h(this.instance)},d=function(e){this.instance=e,this.canceler=m.bind(this),this.resolver=new r,this.initialized=!1,this.resolvingPromises=[]};d.prototype={canceler:null,cancel:function(e){if(!this.resolver.isFulfilled()){this.allPromise.cancel();for(var r=this.resolvingPromises.concat(),i=r.length-1;i>=0;i--)r[i].cancel(e);this.resolver.cancel(e)}}};var f={declaredClass:"esri.core.Promise",constructor:function(){Object.defineProperty(this,"_promiseProps",{value:new d(this),enumerable:!1,configurable:!1,writable:!0});var e=i.after(this,"postscript",function(r,i){e.remove(),e=null,u(this)},!0)},_promiseProps:null,always:function(e){return l("esri-promise-compatibility-deprecation-warnings")&&a("always",".when(callbackOrErrback, callbackOrErrback)"),this.when(e,e)},isResolved:function(){return this._promiseProps.resolver.isResolved()},isRejected:function(){return this._promiseProps.resolver.isRejected()},isFulfilled:function(){return this._promiseProps.resolver.isFulfilled()},otherwise:function(e){return l("esri-promise-compatibility-deprecation-warnings")&&a("otherwise",".when().catch(errback)"),this.when(null,e)},catch:function(e){return this.when(null,e)},when:function(e,i,s){var n=new r(this._promiseProps.canceler),o=n.then(e,i,s);return this._promiseProps.resolver.then(n.resolve,n.reject,n.progress),o},addResolvingPromise:function(e){e&&!this._promiseProps.resolver.isFulfilled()&&(e._promiseProps&&(e=e.when()),this._promiseProps.resolvingPromises.push(e),u(this))}};return l("esri-promise-compatibility")||(f=c.mixin(f,{then:function(e,r,i){return l("esri-promise-compatibility-deprecation-warnings")&&a("then",".when(callback, errback)"),this.when(e,r,i)},cancel:function(){l("esri-promise-compatibility-deprecation-warnings")&&a("cancel")},isCanceled:function(){return l("esri-promise-compatibility-deprecation-warnings")&&a("isCanceled"),!1},trace:function(){return l("esri-promise-compatibility-deprecation-warnings")&&a("trace"),this},traceRejected:function(){return l("esri-promise-compatibility-deprecation-warnings")&&a("traceRejected"),this}})),t(null,f)});