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

define(["require","exports","../tsSupport/generatorHelper","../tsSupport/awaiterHelper","../../kernel","../Error","../Logger","../promiseUtils","./utils","./workerFactory"],function(e,t,o,r,s,n,i,a,p,u){function c(e,t){e.delete(t)}var h=i.getLogger("esri.core.workers"),d=p.MessageType.ABORT,l=p.MessageType.INVOKE,b=p.MessageType.OPEN,g=p.MessageType.OPENED,f=p.MessageType.RESPONSE;return function(){function e(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",function(e){e.preventDefault(),h.error(e)})}return e.create=function(t){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return[4,u.createWorker()];case 1:return r=o.sent(),[2,new e(r,t)]}})})},e.prototype.terminate=function(){this.worker.terminate()},e.prototype.open=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,function(){var r,s,n=this;return o(this,function(o){return r=t.signal,s=p.newJobId(),[2,a.create(function(t,o){var i={resolve:t,reject:o};a.onAbortOrThrow(r,function(){c(n._outJobs,s),n._post({type:d,jobId:s})}),n._outJobs.set(s,i),n._post({type:b,jobId:s,modulePath:e})})]})})},e.prototype._onMessage=function(e){var t=p.receiveMessage(e);if(t)switch(t.type){case g:this._onOpenedMessage(t);break;case f:this._onResponseMessage(t);break;case d:this._onAbortMessage(t);break;case l:this._onInvokeMessage(t)}},e.prototype._onAbortMessage=function(e){var t=this._inJobs,o=e.jobId,r=t.get(o);r&&(r.controller&&r.controller.abort(),c(t,o))},e.prototype._onInvokeMessage=function(e){var t,o=this,r=e.methodName,n=e.jobId,i=e.data,u=e.abortable,h=u?a.createAbortController():null,d=this._inJobs,l=s.workerMessages[r];try{if("function"!=typeof l)throw new TypeError(r+" is not a function");t=l.call(null,i,{signal:h?h.signal:null})}catch(e){return void this._post({type:f,jobId:n,error:p.toInvokeError(e)})}a.isPromiseLike(t)?(d.set(n,{controller:h,promise:t}),h&&"cancel"in t&&a.onAbort(h.signal,function(){return t.cancel()}),t.then(function(e){d.has(n)&&(c(d,n),o._post({type:f,jobId:n},e))},function(e){d.has(n)&&(c(d,n),e||(e={message:"Error encountered at method"+r}),a.isAbortError(e)||o._post({type:f,jobId:n,error:p.toInvokeError(e||{message:"Error encountered at method "+r})}))})):this._post({type:f,jobId:n},t)},e.prototype._onOpenedMessage=function(e){var t=e.jobId,o=e.data,r=this._outJobs.get(t);r&&(c(this._outJobs,t),r.resolve(o))},e.prototype._onResponseMessage=function(e){var t=e.jobId,o=e.error,r=e.data,s=this._outJobs.get(t);s&&(c(this._outJobs,t),o?s.reject(n.fromJSON(JSON.parse(o))):s.resolve(r))},e.prototype._post=function(e,t,o){return p.postMessage(this.worker,e,t,o)},e}()});