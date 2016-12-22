// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/extendsHelper","../../core/tsSupport/decorateHelper","../../core/typescript","dojo/json","../../core/Evented","dojo/Deferred"],function(e,t,s,r,i,n,o,a){var c=function(e){function t(){e.apply(this,arguments),this._targetUrl="",this._loadingDeferred=null,this._redirectIdentityManager=!1,this.isNative=!1}return s(t,e),t.prototype.dojoConstructor=function(){var e=this;this._promises={},this.messageId=0;var t=document.referrer;if(t){var s=t.split(/[\/?#]/);this._targetUrl=s[0]+"//"+s[2]}this._loadingDeferred=new a,window.engine?(this.isNative=!0,window.engine._trigger=function(t,s){e._engineCallbacks(t,s)},window.engine.BindingsReady(),window.document.addEventListener("contextmenu",function(e){var t=new MouseEvent("click",{view:e.view,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,which:e.which,button:e.button,buttons:e.buttons,detail:e.detail,currentTarget:e.currentTarget,relatedTarget:e.relatedTarget,target:e.target,timeStamp:e.timeStamp,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY});e.target.dispatchEvent(t)})):(window.addEventListener("message",function(t){t.origin===e._targetUrl&&e._messageReceived(t.data)},!1),this._loadingDeferred.resolve()),window.setInterval(function(){return e.checkPromises},3e4)},t.prototype._engineCallbacks=function(e,t){switch(e.toLowerCase()){case"_onready":this._loadingDeferred.resolve();break;case"receivemessages":this._messageReceived(t)}},t.prototype.checkPromises=function(){var e=this,t=Date.now()-3e4,s=[];for(var r in this._promises)this._promises[r].timestamp>t||(s.push(r),this._promises[r].promise.isFulfilled()||this._promises[r].promise.reject(new Error("messageTimeout")));s.forEach(function(t){delete e._promises[t]})},t.prototype._messageReceived=function(e){var t=n.parse(e);if(t.args)for(var s in t.args){var r=t.args[s];"string"==typeof r&&0===r.indexOf("{")&&(t.args[s]=n.parse(r))}var i=void 0!==t.clientMessageId?this._promises[t.clientMessageId]:null;if(i||!t.clientMessageId){if(i){if(delete this._promises[t.clientMessageId],i.promise.isFulfilled())return;return t.args?t.args.error?i.promise.reject({error:t.args.error}):t.args.cancelled?i.promise.reject({cancel:t.args.cancelled}):i.promise.resolve(t.args):i.promise.resolve()}t.functionName&&this.emit("message-received",t)}},t.prototype.__sendMessage=function(e){window.name&&(e.addinId=window.name),window.engine?window.engine.SendMessage.call(this,"sendMessage",null,n.stringify(e),window.location.hostname):window.parent.postMessage(n.stringify(e),this._targetUrl)},t.prototype._sendMessageWithReply=function(e){var t=this;return this._loadingDeferred.then(function(){var s=new a;return e.clientMessageId=t.messageId++,t._promises[e.clientMessageId]={promise:s,timestamp:Date.now()},t.__sendMessage(e),s.promise})},t.prototype._sendMessage=function(e){var t=this;this._loadingDeferred.then(function(){t.__sendMessage(e)})},t=r([i.subclass()],t)}(o),d=new c;return d});