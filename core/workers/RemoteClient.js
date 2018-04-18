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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../Error","../promiseUtils","./utils"],function(e,t,s,o,n,i){function r(e,t){e.delete(t)}var h=i.MessageType.CLOSE,p=i.MessageType.CANCEL,a=i.MessageType.INVOKE,c=i.MessageType.RESPONSE,_=i.MessageType.OPEN_PORT,u=function(){function e(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e){e.type===i.MessageType.CANCEL?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))},e.prototype.clear=function(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null},e.prototype._process=function(){this._timer=null;for(var e=0,t=this._invokeMessages;e<t.length;e++){var s=t[e];this._cancelledJobIds.has(s.jobId)||this._invoke(s)}this._cancelledJobIds.clear(),this._invokeMessages.length=0},e}();return function(){function e(e,t,s){this._outJobs=new Map,this._inJobs=new Map,this._queue=new u(this._onInvoke.bind(this)),this._onMessage=this._onMessage.bind(this),this._client=t,this._port=e,this._port.addEventListener("message",this._onMessage),this._port.start(),this._channel=s}return e.connect=function(t){var s,o=new MessageChannel;return s="function"==typeof t?new t:"default"in t&&"function"==typeof t.default?new t.default:t,s.remoteClient=new e(o.port1,s,o),o.port2},e.prototype.close=function(){this._post({type:h}),this._close()},e.prototype.isBusy=function(){return this._outJobs.size>0},e.prototype.invoke=function(e,t,o){var n=this,h=i.newJobId(),c=new s(function(){r(n._outJobs,h),n._post({type:p,jobId:h})});return this._outJobs.set(h,c),this._post({type:a,jobId:h,methodName:e},t,o),c.promise},e.prototype.openPort=function(){var e=this,t=i.newJobId(),o=new s(function(){r(e._outJobs,t),e._post({type:p,jobId:t})});return this._outJobs.set(t,o),this._post({type:_,jobId:t}),o.promise},e.prototype._close=function(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(function(e){e.cancel()}),this._inJobs.clear(),this._outJobs.clear(),this._queue.clear(),this._port=this._client=null},e.prototype._onMessage=function(e){var t=i.receiveMessage(e);if(t)switch(t.type){case c:this._onResponse(t);break;case a:this._queue.push(t);break;case p:this._onCancel(t);break;case h:this._close();break;case _:this._onOpenPort(t)}},e.prototype._onCancel=function(e){var t=this._inJobs,s=e.jobId,o=t.get(s);this._queue.push(e),o&&(r(t,s),o.cancel())},e.prototype._onInvoke=function(e){var t,s=this,o=e.methodName,h=e.jobId,p=e.data,a=this._inJobs,_=this._client,u=_[o];try{if(!u&&o&&-1!==o.indexOf("."))for(var l=o.split("."),d=0;d<l.length-1;d++)_=_[l[d]],u=_[l[d+1]];if("function"!=typeof u)throw new TypeError(o+" is not a function");t=u.call(_,p,this)}catch(e){return void this._post({type:c,jobId:h,error:i.toInvokeError(e)})}n.isThenable(t)?(a.set(h,t),t.then(function(e){a.has(h)&&(r(a,h),s._post({type:c,jobId:h},e))}).catch(function(e){a.has(h)&&(r(a,h),e&&"cancel"===e.dojoType||s._post({type:c,jobId:h,error:i.toInvokeError(e||{message:"Error encountered at method "+o})}))})):this._post({type:c,jobId:h},t)},e.prototype._onOpenPort=function(t){var s=new MessageChannel;new e(s.port1,this._client),this._post({type:c,jobId:t.jobId},s.port2,[s.port2])},e.prototype._onResponse=function(e){var t=e.jobId,s=e.error,n=e.data,i=this._outJobs;if(i.has(t)){var h=i.get(t);r(i,t),s?h.reject(o.fromJSON(JSON.parse(s))):h.resolve(n)}},e.prototype._post=function(e,t,s){return i.postMessage(this._port,e,t,s)},e}()});