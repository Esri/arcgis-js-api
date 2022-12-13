// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../Error","../promiseUtils","./utils"],(function(e,t,o,s,n,i){var r=i.MessageType.CLOSE,h=i.MessageType.CANCEL,p=i.MessageType.INVOKE,a=i.MessageType.RESPONSE,c=i.MessageType.OPEN_PORT;function _(e,t){e.delete(t)}var u=function(){function e(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e){e.type===i.MessageType.CANCEL?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))},e.prototype.clear=function(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null},e.prototype._process=function(){this._timer=null;for(var e=0,t=this._invokeMessages;e<t.length;e++){var o=t[e];this._cancelledJobIds.has(o.jobId)||this._invoke(o)}this._cancelledJobIds.clear(),this._invokeMessages.length=0},e}();return function(){function e(e,t,o){this._outJobs=new Map,this._inJobs=new Map,this._queue=new u(this._onInvoke.bind(this)),this._onMessage=this._onMessage.bind(this),this._client=t,this._port=e,this._port.addEventListener("message",this._onMessage),this._port.start(),this._channel=o}return e.connect=function(t){var o,s=new MessageChannel;return(o="function"==typeof t?new t:"default"in t&&"function"==typeof t.default?new t.default:t).remoteClient=new e(s.port1,o,s),s.port2},e.prototype.close=function(){this._post({type:r}),this._close()},e.prototype.isBusy=function(){return this._outJobs.size>0},e.prototype.invoke=function(e,t,r){var a=this;if(!this._port)return n.reject(new s("remote-client:port-closed","Can't invoke(), port is closed"));var c=i.newJobId(),u=new o((function(){_(a._outJobs,c),a._post({type:h,jobId:c})}));return this._outJobs.set(c,u),this._post({type:p,jobId:c,methodName:e},t,r),u.promise},e.prototype.openPort=function(){var e=this,t=i.newJobId(),s=new o((function(){_(e._outJobs,t),e._post({type:h,jobId:t})}));return this._outJobs.set(t,s),this._post({type:c,jobId:t}),s.promise},e.prototype._close=function(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach((function(e){e.cancel()})),this._inJobs.clear(),this._outJobs.clear(),this._queue.clear(),this._port=this._client=null},e.prototype._onMessage=function(e){var t=i.receiveMessage(e);if(t)switch(t.type){case a:this._onResponse(t);break;case p:this._queue.push(t);break;case h:this._onCancel(t);break;case r:this._close();break;case c:this._onOpenPort(t)}},e.prototype._onCancel=function(e){var t=this._inJobs,o=e.jobId,s=t.get(o);this._queue.push(e),s&&(_(t,o),s.cancel())},e.prototype._onInvoke=function(e){var t,o=this,s=e.methodName,r=e.jobId,h=e.data,p=this._inJobs,c=this._client,u=c[s];try{if(!u&&s&&-1!==s.indexOf("."))for(var l=s.split("."),d=0;d<l.length-1;d++)u=(c=c[l[d]])[l[d+1]];if("function"!=typeof u)throw new TypeError(s+" is not a function");t=u.call(c,h,this)}catch(e){return void this._post({type:a,jobId:r,error:i.toInvokeError(e)})}n.isThenable(t)?(p.set(r,t),t.then((function(e){p.has(r)&&(_(p,r),o._post({type:a,jobId:r},e))})).catch((function(e){p.has(r)&&(_(p,r),e&&"cancel"===e.dojoType||o._post({type:a,jobId:r,error:i.toInvokeError(e||{message:"Error encountered at method "+s})}))}))):this._post({type:a,jobId:r},t)},e.prototype._onOpenPort=function(t){var o=new MessageChannel;new e(o.port1,this._client),this._post({type:a,jobId:t.jobId},o.port2,[o.port2])},e.prototype._onResponse=function(e){var t=e.jobId,o=e.error,n=e.data,i=this._outJobs;if(i.has(t)){var r=i.get(t);_(i,t),o?r.reject(s.fromJSON(JSON.parse(o))):r.resolve(n)}},e.prototype._post=function(e,t,o){return i.postMessage(this._port,e,t,o)},e}()}));