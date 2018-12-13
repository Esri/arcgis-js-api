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

define(["require","exports","../../kernel","../Error","../Logger","../promiseUtils","./utils","./workerFactory"],function(e,t,o,r,n,s,i,a){function c(e,t){e.delete(t)}var p=n.getLogger("esri.core.workers"),u=i.MessageType.ABORT,h=i.MessageType.INVOKE,d=i.MessageType.OPEN,f=i.MessageType.OPENED,y=i.MessageType.RESPONSE;return function(){function e(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",function(e){e.preventDefault(),p.error(e)})}return e.create=function(t){return a.createWorker().then(function(o){return new e(o,t)})},e.prototype.terminate=function(){this.worker.terminate()},e.prototype.open=function(e){var t=this,o=i.newJobId(),r=function(){c(t._outJobs,o),t._post({type:u,jobId:o})};return s.create(function(n,s){var i={resolve:n,reject:s,cancel:r};t._outJobs.set(o,i),t._post({type:d,jobId:o,modulePath:e})},r)},e.prototype._onMessage=function(e){var t=i.receiveMessage(e);if(t)switch(t.type){case f:case y:this._onResponse(t);break;case u:this._onCancel(t);break;case h:this._onInvoke(t)}},e.prototype._onCancel=function(e){var t=this._inJobs.get(e.jobId);t&&t.cancel()},e.prototype._onInvoke=function(e){var t,r=this,n=e.methodName,a=e.jobId,p=e.data,u=this._inJobs,h=o.workerMessages[n];try{if("function"!=typeof h)throw new TypeError(n+" is not a function");t=h.call(null,p)}catch(e){return void this._post({type:y,jobId:a,error:i.toInvokeError(e)})}s.isThenable(t)?(u.set(a,t),t.then(function(e){c(u,a),r._post({type:y,jobId:a},e)}).catch(function(e){c(u,a),e||(e={message:"Error encountered at method"+n}),e.dojoType&&"cancel"===e.dojoType||r._post({type:y,jobId:a,error:i.toInvokeError(e)})})):this._post({type:y,jobId:a},t)},e.prototype._onResponse=function(e){var t=e.jobId,o=e.error,n=e.data,s=this._outJobs.get(t);s&&(c(this._outJobs,t),o?s.reject(r.fromJSON(JSON.parse(o))):s.resolve(n))},e.prototype._post=function(e,t,o){return i.postMessage(this.worker,e,t,o)},e}()});