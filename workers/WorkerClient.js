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
// See http://js.arcgis.com/3.16/esri/copyright.txt for details.

define(["dojo/Evented","dojo/_base/declare","dojo/Deferred","dojo/_base/lang","dojo/request","../sniff","../kernel","../urlUtils","require"],function(e,t,r,s,o,i,a,n,h){var c=window.Blob||window.webkitBlob||window.mozBlob,u=window.URL||window.webkitURL||window.mozURL,l=t([e],{declaredClass:"esri.workers.WorkerClient",worker:null,returnDeferreds:!1,_queue:null,constructor:function(e,t){this._isIE=i("ie"),this.returnDeferreds=!!t,this._queue={},this._acceptMessage=s.hitch(this,this._acceptMessage),this._errorMessage=s.hitch(this,this._errorMessage),e&&(this.worker=this.setWorker(e))},setWorker:function(e){if(e instanceof Array){var t=e;e=t.shift()}var r,s=this._getUrl(e),o=!n.hasSameOrigin(n.getAbsoluteUrl(s),location.href);if(s===!1)return console.log("Can not resolve worker path"),!1;if(this.worker&&(r=this.worker,r.removeEventListener("message",this._acceptMessage,!1),r.removeEventListener("error",this._errorMessage,!1),r.terminate(),r=null),o){var i=this._getUrl("./mutableWorker",!0);try{var a=this._getRemoteText(i,!0);r=new Worker(u.createObjectURL(new c([a],{type:"text/javascript"})))}catch(h){try{i=n.getProxyUrl(i).path+"?"+encodeURI(i),r=new Worker(i),this._useProxy=!0}catch(l){return console.log("Can not create worker"),!1}}}else r=new Worker(s);return r.addEventListener("message",this._acceptMessage,!1),r.addEventListener("error",this._errorMessage,!1),this.worker=r,o&&this.importScripts(s),t&&this.importScripts(t),r},postMessage:function(e,t){(e instanceof Array||"object"!=typeof e)&&(e={data:e});var s=Math.floor(64e9*Math.random()).toString(36);e.msgId=s;var o=this._queue[s]=new r;return this.worker?(t?this.worker.postMessage(e,t):this.worker.postMessage(e),this.emit("start-message",{target:this,message:e})):o.reject({message:"No worker was set."}),this.returnDeferreds?o:o.promise||o},terminate:function(){var e=Object.keys(this._queue);this.worker&&this.worker.terminate();for(var t=e.length-1;t>=0;t--)this._queue[e[t]].cancel("terminated"),delete this._queue[e[t]]},addWorkerCallback:function(e,t){var o,i=this._getUrl(e,!0);return i===!1?(o=new r,o.reject({message:"Could not load text from "+e}),o):(o=this.postMessage({action:"add-callback",url:i,cbName:t||"main"}),o.then(s.hitch(this,function(e){e.target=this,this.emit("callback-added",e)})),o)},importScripts:function(e){Array.isArray(e)||(e=[e]);var t=e.map(function(e){var t=this._getUrl(e,!0);return this._useProxy&&!n.hasSameOrigin(t,location.href)&&(t=n.getProxyUrl(t).path+"?"+encodeURI(t)),t},this),r=this.postMessage({action:"import-script",url:t});return r.then(s.hitch(this,function(e){e.target=this,this.emit("scripts-imported",e)})),r},_acceptMessage:function(e){var t=e.data,r=t.msgId;if(t.status&&"debug"==t.status){var s=t.showAs||"debug";console[s](t)}else if(r&&r in this._queue){var o=this._queue[r];"progress"==t.status?o.progress(e.data):"error"==t.status?(o.reject(e.data),delete this._queue[r]):(o.resolve(e.data),delete this._queue[r])}this.emit("message",{message:e.data,event:e,target:this})},_errorMessage:function(e){this.onerror||this.onError?this.onerror?this.onerror(e):this.onError(e):console.log("Worker Error: "+e.message+"\nIn "+e.filename+" on "+e.lineno)},_getUrl:function(e,t){if(!e)return console.error("can not resolve empty path"),!1;e.match(/\.js$/)||(e+=".js");var r=h.toUrl(e);return t?n.getAbsoluteUrl(r):r},_getRemoteText:function(e,t){var r="";return e=this._getUrl(e),e&&o.get(e,{sync:t,handleAs:"text",headers:{"X-Requested-With":"","Content-Type":"text/plain"}}).then(function(e){r=e}),r},_startBlobWorker:function(){var e=this._xdSource;if(!e){var t=this._getUrl("./mutableWorker"),r=new c(["if(!self._mutable){importScripts('"+t+"');}"],{type:"text/javascript"});e=this._xdSource=u.createObjectURL(r)}try{var s=new Worker(e);return s}catch(o){return console.log(o.message),!1}}});return i("extend-esri")&&s.setObject("workers.WorkerClient",l,a),l});