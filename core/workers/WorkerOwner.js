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

define(["require","exports","../tsSupport/generatorHelper","../tsSupport/awaiterHelper","../../kernel","../Error","../Logger","../promiseUtils","./utils","./workerFactory"],function(e,t,o,r,n,s,i,a,c,p){function u(e,t){e.delete(t)}var l=i.getLogger("esri.core.workers"),h=c.MessageType.ABORT,d=c.MessageType.INVOKE,b=c.MessageType.OPEN,f=c.MessageType.OPENED,g=c.MessageType.RESPONSE;return function(){function e(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",function(e){e.preventDefault(),l.error(e)})}return e.create=function(t){return r(this,void 0,void 0,function(){var r;return o(this,function(o){switch(o.label){case 0:return[4,p.createWorker()];case 1:return r=o.sent(),[2,new e(r,t)]}})})},e.prototype.terminate=function(){this.worker.terminate()},e.prototype.open=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,function(){var r,n,s=this;return o(this,function(o){return r=t.signal,n=c.newJobId(),[2,a.create(function(t,o){var i={resolve:t,reject:o};a.onAbortOrThrow(r,function(){u(s._outJobs,n),s._post({type:h,jobId:n})}),s._outJobs.set(n,i),s._post({type:b,jobId:n,modulePath:e})})]})})},e.prototype._onMessage=function(e){var t=c.receiveMessage(e);if(t)switch(t.type){case f:case g:this._onResponse(t);break;case h:this._onCancel(t);break;case d:this._onInvoke(t)}},e.prototype._onCancel=function(e){var t=this._inJobs,o=e.jobId,r=t.get(o);r&&(r.controller&&r.controller.abort(),u(t,o))},e.prototype._onInvoke=function(e){var t,o=this,r=e.methodName,s=e.jobId,i=e.data,p=e.abortable,l=p?a.createAbortController():null,h=this._inJobs,d=n.workerMessages[r];try{if("function"!=typeof d)throw new TypeError(r+" is not a function");t=d.call(null,i,{signal:l?l.signal:null})}catch(e){return void this._post({type:g,jobId:s,error:c.toInvokeError(e)})}a.isThenable(t)?(h.set(s,{controller:l,promise:t}),l&&"cancel"in t&&a.onAbort(l.signal,function(){return t.cancel()}),t.then(function(e){h.has(s)&&(u(h,s),o._post({type:g,jobId:s},e))}).catch(function(e){h.has(s)&&(u(h,s),e||(e={message:"Error encountered at method"+r}),a.isAbortError(e)||o._post({type:g,jobId:s,error:c.toInvokeError(e||{message:"Error encountered at method "+r})}))})):this._post({type:g,jobId:s},t)},e.prototype._onResponse=function(e){var t=e.jobId,o=e.error,r=e.data,n=this._outJobs.get(t);n&&(u(this._outJobs,t),o?n.reject(s.fromJSON(JSON.parse(o))):n.resolve(r))},e.prototype._post=function(e,t,o){return c.postMessage(this.worker,e,t,o)},e}()});