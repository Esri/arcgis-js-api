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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../tsSupport/generatorHelper","../tsSupport/awaiterHelper","../../kernel","../Error","../Logger","../promiseUtils","./utils","./workerFactory"],(function(e,t,o,r,s,n,i,a,p,u){var c=i.getLogger("esri.core.workers"),d=p.MessageType.ABORT,l=p.MessageType.INVOKE,h=p.MessageType.OPEN,b=p.MessageType.OPENED,g=p.MessageType.RESPONSE;return function(){function e(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(function(e){e.preventDefault(),c.error(e)}))}return e.create=function(t){return r(this,void 0,void 0,(function(){return o(this,(function(o){switch(o.label){case 0:return[4,u.createWorker()];case 1:return[2,new e(o.sent(),t)]}}))}))},e.prototype.terminate=function(){this.worker.terminate()},e.prototype.open=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,(function(){var r,s,n=this;return o(this,(function(o){return r=t.signal,s=p.newJobId(),[2,a.create((function(t,o){var i={resolve:t,reject:o};a.onAbortOrThrow(r,(function(){n._outJobs.delete(s),n._post({type:d,jobId:s})})),n._outJobs.set(s,i),n._post({type:h,jobId:s,modulePath:e})}))]}))}))},e.prototype._onMessage=function(e){var t=p.receiveMessage(e);if(t)switch(t.type){case b:this._onOpenedMessage(t);break;case g:this._onResponseMessage(t);break;case d:this._onAbortMessage(t);break;case l:this._onInvokeMessage(t)}},e.prototype._onAbortMessage=function(e){var t=this._inJobs,o=e.jobId,r=t.get(o);r&&(r.controller&&r.controller.abort(),t.delete(o))},e.prototype._onInvokeMessage=function(e){var t,o=this,r=e.methodName,n=e.jobId,i=e.data,u=e.abortable?a.createAbortController():null,c=this._inJobs,d=s.workerMessages[r];try{if("function"!=typeof d)throw new TypeError(r+" is not a function");t=d.call(null,i,{signal:u?u.signal:null})}catch(e){return void this._post({type:g,jobId:n,error:p.toInvokeError(e)})}a.isPromiseLike(t)?(c.set(n,{controller:u,promise:t}),u&&"cancel"in t&&a.onAbort(u.signal,(function(){return t.cancel()})),t.then((function(e){c.has(n)&&(c.delete(n),o._post({type:g,jobId:n},e))}),(function(e){c.has(n)&&(c.delete(n),e||(e={message:"Error encountered at method"+r}),a.isAbortError(e)||o._post({type:g,jobId:n,error:p.toInvokeError(e||{message:"Error encountered at method "+r})}))}))):this._post({type:g,jobId:n},t)},e.prototype._onOpenedMessage=function(e){var t=e.jobId,o=e.data,r=this._outJobs.get(t);r&&(this._outJobs.delete(t),r.resolve(o))},e.prototype._onResponseMessage=function(e){var t=e.jobId,o=e.error,r=e.data,s=this._outJobs.get(t);s&&(this._outJobs.delete(t),o?s.reject(n.fromJSON(JSON.parse(o))):s.resolve(r))},e.prototype._post=function(e,t,o){return p.postMessage(this.worker,e,t,o)},e}()}));