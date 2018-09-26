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

define(["require","exports","../Error","../promiseUtils","./utils"],function(e,t,o,s,n){function i(e,t){e.delete(t)}var r=n.MessageType.CLOSE,c=n.MessageType.CANCEL,a=n.MessageType.INVOKE,h=n.MessageType.RESPONSE,p=n.MessageType.OPEN_PORT,_=function(){function e(e){this._timer=null,this._cancelledJobIds=new Set,this._invokeMessages=[],this._invoke=e,this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e){e.type===n.MessageType.CANCEL?this._cancelledJobIds.add(e.jobId):(this._invokeMessages.push(e),null===this._timer&&(this._timer=setTimeout(this._process,0)))},e.prototype.clear=function(){this._invokeMessages.length=0,this._cancelledJobIds.clear(),this._timer=null},e.prototype._process=function(){this._timer=null;for(var e=0,t=this._invokeMessages;e<t.length;e++){var o=t[e];this._cancelledJobIds.has(o.jobId)||this._invoke(o)}this._cancelledJobIds.clear(),this._invokeMessages.length=0},e}();return function(){function e(e,t,o){this._outJobs=new Map,this._inJobs=new Map,this._queue=new _(this._onInvoke.bind(this)),this._onMessage=this._onMessage.bind(this),this._client=t,this._port=e,this._port.addEventListener("message",this._onMessage),this._port.start(),this._channel=o}return e.connect=function(t){var o,s=new MessageChannel;return o="function"==typeof t?new t:"default"in t&&"function"==typeof t.default?new t.default:t,o.remoteClient=new e(s.port1,o,s),s.port2},e.prototype.close=function(){this._post({type:r}),this._close()},e.prototype.isBusy=function(){return this._outJobs.size>0},e.prototype.invoke=function(e,t,r){var h=this;if(!this._port)return s.reject(new o("remote-client:port-closed","Can't invoke(), port is closed"));var p=n.newJobId(),_=function(){i(h._outJobs,p),h._post({type:c,jobId:p})};return s.create(function(o,s){var n={resolve:o,reject:s,cancel:_};h._outJobs.set(p,n),h._post({type:a,jobId:p,methodName:e},t,r)},_)},e.prototype.openPort=function(){var e=this,t=n.newJobId(),o=function(){i(e._outJobs,t),e._post({type:c,jobId:t})};return s.create(function(s,n){var i={resolve:s,reject:n,cancel:o};e._outJobs.set(t,i),e._post({type:p,jobId:t})},o)},e.prototype._close=function(){this._channel&&(this._channel=null),this._port.removeEventListener("message",this._onMessage),this._port.close(),this._outJobs.forEach(function(e){e.cancel()}),this._inJobs.clear(),this._outJobs.clear(),this._queue.clear(),this._port=this._client=null},e.prototype._onMessage=function(e){var t=n.receiveMessage(e);if(t)switch(t.type){case h:this._onResponse(t);break;case a:this._queue.push(t);break;case c:this._onCancel(t);break;case r:this._close();break;case p:this._onOpenPort(t)}},e.prototype._onCancel=function(e){var t=this._inJobs,o=e.jobId,s=t.get(o);this._queue.push(e),s&&(i(t,o),s.cancel())},e.prototype._onInvoke=function(e){var t,o=this,r=e.methodName,c=e.jobId,a=e.data,p=this._inJobs,_=this._client,u=_[r];try{if(!u&&r&&-1!==r.indexOf("."))for(var l=r.split("."),d=0;d<l.length-1;d++)_=_[l[d]],u=_[l[d+1]];if("function"!=typeof u)throw new TypeError(r+" is not a function");t=u.call(_,a,this)}catch(e){return void this._post({type:h,jobId:c,error:n.toInvokeError(e)})}s.isThenable(t)?(p.set(c,t),t.then(function(e){p.has(c)&&(i(p,c),o._post({type:h,jobId:c},e))}).catch(function(e){p.has(c)&&(i(p,c),e&&"cancel"===e.dojoType||o._post({type:h,jobId:c,error:n.toInvokeError(e||{message:"Error encountered at method "+r})}))})):this._post({type:h,jobId:c},t)},e.prototype._onOpenPort=function(t){var o=new MessageChannel;new e(o.port1,this._client),this._post({type:h,jobId:t.jobId},o.port2,[o.port2])},e.prototype._onResponse=function(e){var t=e.jobId,s=e.error,n=e.data,r=this._outJobs;if(r.has(t)){var c=r.get(t);i(r,t),s?c.reject(o.fromJSON(JSON.parse(s))):c.resolve(n)}},e.prototype._post=function(e,t,o){return n.postMessage(this._port,e,t,o)},e}()});