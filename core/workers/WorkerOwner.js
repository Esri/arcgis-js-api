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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../kernel","../Error","../Logger","../promiseUtils","./utils","./workerFactory"],(function(e,t,o,r,s,n,i,a,p){var u=n.getLogger("esri.core.workers"),c=a.MessageType.ABORT,d=a.MessageType.INVOKE,h=a.MessageType.OPEN,l=a.MessageType.OPENED,b=a.MessageType.RESPONSE;return function(){function e(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(function(e){e.preventDefault(),u.error(e)}))}return e.create=function(t){return o.__awaiter(this,void 0,void 0,(function(){return o.__generator(this,(function(o){switch(o.label){case 0:return[4,p.createWorker()];case 1:return[2,new e(o.sent(),t)]}}))}))},e.prototype.terminate=function(){this.worker.terminate()},e.prototype.open=function(e,t){return void 0===t&&(t={}),o.__awaiter(this,void 0,void 0,(function(){var r,s,n=this;return o.__generator(this,(function(o){return r=t.signal,s=a.newJobId(),[2,i.create((function(t,o){var a={resolve:t,reject:o};i.onAbortOrThrow(r,(function(){n._outJobs.delete(s),n._post({type:c,jobId:s})})),n._outJobs.set(s,a),n._post({type:h,jobId:s,modulePath:e})}))]}))}))},e.prototype._onMessage=function(e){var t=a.receiveMessage(e);if(t)switch(t.type){case l:this._onOpenedMessage(t);break;case b:this._onResponseMessage(t);break;case c:this._onAbortMessage(t);break;case d:this._onInvokeMessage(t)}},e.prototype._onAbortMessage=function(e){var t=this._inJobs,o=e.jobId,r=t.get(o);r&&(r.controller&&r.controller.abort(),t.delete(o))},e.prototype._onInvokeMessage=function(e){var t,o=this,s=e.methodName,n=e.jobId,p=e.data,u=e.abortable?i.createAbortController():null,c=this._inJobs,d=r.workerMessages[s];try{if("function"!=typeof d)throw new TypeError(s+" is not a function");t=d.call(null,p,{signal:u?u.signal:null})}catch(e){return void this._post({type:b,jobId:n,error:a.toInvokeError(e)})}i.isPromiseLike(t)?(c.set(n,{controller:u,promise:t}),t.then((function(e){c.has(n)&&(c.delete(n),o._post({type:b,jobId:n},e))}),(function(e){c.has(n)&&(c.delete(n),e||(e={message:"Error encountered at method"+s}),i.isAbortError(e)||o._post({type:b,jobId:n,error:a.toInvokeError(e||{message:"Error encountered at method "+s})}))}))):this._post({type:b,jobId:n},t)},e.prototype._onOpenedMessage=function(e){var t=e.jobId,o=e.data,r=this._outJobs.get(t);r&&(this._outJobs.delete(t),r.resolve(o))},e.prototype._onResponseMessage=function(e){var t=e.jobId,o=e.error,r=e.data,n=this._outJobs.get(t);n&&(this._outJobs.delete(t),o?n.reject(s.fromJSON(JSON.parse(o))):n.resolve(r))},e.prototype._post=function(e,t,o){return a.postMessage(this.worker,e,t,o)},e}()}));