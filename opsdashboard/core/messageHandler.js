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

define(["dojo/_base/declare","dojo/_base/lang","dojo/json","../../Evented","dojo/Deferred"],(function(e,s,i,t,n){var r=0;return new(e([t],{isNative:!1,_targetUrl:"",_loadingDeferred:null,_redirectIdentityManager:!1,constructor:function(){this._promises={};var e=document.referrer;if(e){var i=e.split(/[\/?#]/);this._targetUrl=i[0]+"//"+i[2]}this._loadingDeferred=new n,window.engine?(this.isNative=!0,window.engine._trigger=s.hitch(this,this._engineCallbacks),window.engine.BindingsReady(),window.document.addEventListener("contextmenu",(function(e){var s=new MouseEvent("click",{view:e.view,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,which:e.which,button:e.button,buttons:e.buttons,detail:e.detail,currentTarget:e.currentTarget,relatedTarget:e.relatedTarget,target:e.target,timeStamp:e.timeStamp,clientX:e.clientX,clientY:e.clientY,screenX:e.screenX,screenY:e.screenY});e.target.dispatchEvent(s)}))):(window.addEventListener("message",s.hitch(this,(function(e){e.origin===this._targetUrl&&this._messageReceived(e.data)})),!1),this._loadingDeferred.resolve()),window.setInterval(s.hitch(this,this.checkPromises),3e4)},_engineCallbacks:function(e,s){switch(e.toLowerCase()){case"_onready":this._loadingDeferred.resolve();break;case"receivemessages":this._messageReceived(s)}},checkPromises:function(){var e=Date.now()-3e4,s=[];for(var i in this._promises)this._promises[i].timestamp>e||(s.push(i),this._promises[i].promise.isFulfilled()||this._promises[i].promise.reject(new Error("messageTimeout")));s.forEach((function(e){delete this._promises[e]}),this)},_messageReceived:function(e){var s=i.parse(e);if(s.args)for(var t in s.args){var n=s.args[t];"string"==typeof n&&0===n.indexOf("{")&&(s.args[t]=i.parse(n))}var r=void 0!==s.clientMessageId?this._promises[s.clientMessageId]:null;if(r||!s.clientMessageId){if(r){if(delete this._promises[s.clientMessageId],r.promise.isFulfilled())return;return s.args?s.args.error?r.promise.reject({error:s.args.error}):s.args.cancelled?r.promise.reject({cancel:s.args.cancelled}):r.promise.resolve(s.args):r.promise.resolve()}s.functionName&&this.emit("message-received",s)}},__sendMessage:function(e){window.name&&(e.addinId=window.name),window.engine?window.engine.SendMessage.call(this,"sendMessage",null,i.stringify(e),window.location.hostname):window.parent.postMessage(i.stringify(e),this._targetUrl)},_sendMessageWithReply:function(e){return this._loadingDeferred.then(s.hitch(this,(function(){var s=new n;return e.clientMessageId=r++,this._promises[e.clientMessageId]={promise:s,timestamp:Date.now()},this.__sendMessage(e),s.promise})))},_sendMessage:function(e){this._loadingDeferred.then(s.hitch(this,(function(){this.__sendMessage(e)})))}}))}));