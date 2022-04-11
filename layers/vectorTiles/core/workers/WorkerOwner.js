// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../../kernel","../Error","../Logger","../promiseUtils","./utils","./workerFactory"],(function(e,t,o,r,n,s,i,a,p){var c=s.getLogger("esri.core.workers");function u(e,t){e.delete(t)}var h=a.MessageType.CANCEL,d=a.MessageType.INVOKE,f=a.MessageType.OPEN,y=a.MessageType.OPENED,_=a.MessageType.RESPONSE;return function(){function e(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",(function(e){e.preventDefault(),c.error(e)}))}return e.create=function(t){return p.createWorker().then((function(o){return new e(o,t)}))},e.prototype.terminate=function(){this.worker.terminate()},e.prototype.open=function(e){var t=this,r=a.newJobId(),n=new o((function(e){u(t._outJobs,r),t._post({type:h,jobId:r})}));return this._outJobs.set(r,n),this._post({type:f,jobId:r,modulePath:e}),n.promise},e.prototype._onMessage=function(e){var t=a.receiveMessage(e);if(t)switch(t.type){case y:case _:this._onResponse(t);break;case h:this._onCancel(t);break;case d:this._onInvoke(t)}},e.prototype._onCancel=function(e){var t=this._inJobs.get(e.jobId);t&&t.cancel()},e.prototype._onInvoke=function(e){var t,o=this,n=e.methodName,s=e.jobId,p=e.data,c=this._inJobs,h=r.workerMessages[n];try{if("function"!=typeof h)throw new TypeError(n+" is not a function");t=h.call(null,p)}catch(e){return void this._post({type:_,jobId:s,error:a.toInvokeError(e)})}i.isThenable(t)?(c.set(s,t),t.then((function(e){u(c,s),o._post({type:_,jobId:s},e)})).catch((function(e){u(c,s),e||(e={message:"Error encountered at method"+n}),e.dojoType&&"cancel"===e.dojoType||o._post({type:_,jobId:s,error:a.toInvokeError(e)})}))):this._post({type:_,jobId:s},t)},e.prototype._onResponse=function(e){var t=e.jobId,o=e.error,r=e.data,s=this._outJobs.get(t);s&&(u(this._outJobs,t),o?s.reject(n.fromJSON(JSON.parse(o))):s.resolve(r))},e.prototype._post=function(e,t,o){return a.postMessage(this.worker,e,t,o)},e}()}));