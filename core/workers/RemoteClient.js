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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","../Error","../promiseUtils","./utils"],function(e,t,o,s,n,i){function r(e,t){e.delete(t)}var h=i.MessageType.CLOSE,p=i.MessageType.CANCEL,a=i.MessageType.INVOKE,c=i.MessageType.RESPONSE,_=i.MessageType.OPEN_PORT,u=function(){function e(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e){e.type===i.MessageType.CANCEL?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))},e.prototype.clear=function(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null},e.prototype._process=function(){this._timer=null;for(var e=0,t=this._invokeMessages;e<t.length;e++){var o=t[e];this._cancelledJobIds.has(o.jobId)||this._invoke(o)}this._cancelledJobIds.clear(),this._invokeMessages.length=0},e}();return function(){function e(e,t,o){this._outJobs=new Map,this._inJobs=new Map,this._queue=new u(this._onInvoke.bind(this)),this._onMessage=this._onMessage.bind(this),this._client=t,this._port=e,this._port.addEventListener("message",this._onMessage),this._port.start(),this._channel=o}return e.connect=function(t){var o,s=new MessageChannel;return o="function"==typeof t?new t:"default"in t&&"function"==typeof t.default?new t.default:t,o.remoteClient=new e(s.port1,o,s),s.port2},e.prototype.close=function(){this._post({type:h}),this._close()},e.prototype.isBusy=function(){return this._outJobs.size>0},e.prototype.invoke=function(e,t,h){var c=this;if(!this._port)return n.reject(new s("remote-client:port-closed","Can't invoke(), port is closed"));var _=i.newJobId(),u=new o(function(){r(c._outJobs,_),c._post({type:p,jobId:_})});return this._outJobs.set(_,u),this._post({type:a,jobId:_,methodName:e},t,h),u.promise},e.prototype.openPort=function(){var e=this,t=i.newJobId(),s=new o(function(){r(e._outJobs,t),e._post({type:p,jobId:t})});return this._outJobs.set(t,s),this._post({type:_,jobId:t}),s.promise},e.prototype._close=function(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(function(e){e.cancel()}),this._inJobs.clear(),this._outJobs.clear(),this._queue.clear(),this._port=this._client=null},e.prototype._onMessage=function(e){var t=i.receiveMessage(e);if(t)switch(t.type){case c:this._onResponse(t);break;case a:this._queue.push(t);break;case p:this._onCancel(t);break;case h:this._close();break;case _:this._onOpenPort(t)}},e.prototype._onCancel=function(e){var t=this._inJobs,o=e.jobId,s=t.get(o);this._queue.push(e),s&&(r(t,o),s.cancel())},e.prototype._onInvoke=function(e){var t,o=this,s=e.methodName,h=e.jobId,p=e.data,a=this._inJobs,_=this._client,u=_[s];try{if(!u&&s&&-1!==s.indexOf("."))for(var l=s.split("."),d=0;d<l.length-1;d++)_=_[l[d]],u=_[l[d+1]];if("function"!=typeof u)throw new TypeError(s+" is not a function");t=u.call(_,p,this)}catch(e){return void this._post({type:c,jobId:h,error:i.toInvokeError(e)})}n.isThenable(t)?(a.set(h,t),t.then(function(e){a.has(h)&&(r(a,h),o._post({type:c,jobId:h},e))}).catch(function(e){a.has(h)&&(r(a,h),e&&"cancel"===e.dojoType||o._post({type:c,jobId:h,error:i.toInvokeError(e||{message:"Error encountered at method "+s})}))})):this._post({type:c,jobId:h},t)},e.prototype._onOpenPort=function(t){var o=new MessageChannel;new e(o.port1,this._client),this._post({type:c,jobId:t.jobId},o.port2,[o.port2])},e.prototype._onResponse=function(e){var t=e.jobId,o=e.error,n=e.data,i=this._outJobs;if(i.has(t)){var h=i.get(t);r(i,t),o?h.reject(s.fromJSON(JSON.parse(o))):h.resolve(n)}},e.prototype._post=function(e,t,o){return i.postMessage(this._port,e,t,o)},e}()});