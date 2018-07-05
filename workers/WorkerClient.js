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

define(["dojo/Evented","../core/declare","dojo/Deferred","dojo/request","../core/sniff","../core/urlUtils","require"],function(e,t,r,s,o,i,a){var n=window.Blob||window.webkitBlob||window.mozBlob,c=window.URL||window.webkitURL||window.mozURL;return t([e],{declaredClass:"esri.workers.WorkerClient",worker:null,_queue:null,constructor:function(e,t){this._isIE=o("ie"),this._queue={},this._acceptMessage=this._acceptMessage.bind(this),this._errorMessage=this._errorMessage.bind(this),e&&this.setWorker(e,function(e){this.worker=e,t(this)}.bind(this))},setWorker:function(e,t){if(e instanceof Array){var r=e;e=r.shift()}var s=this._getUrl(e);s=i.normalize(s);var o,a=!i.hasSameOrigin(s,location.href);if(!1===s)return console.log("Can not resolve worker path"),!1;if(this.worker&&(o=this.worker,o.removeEventListener("message",this._acceptMessage,!1),o.removeEventListener("error",this._errorMessage,!1),o.terminate(),o=null),a){var h=this._getUrl("./mutableWorker",!0);try{this._getRemoteText(h,function(e){var r=c.createObjectURL(new n([e],{type:"text/javascript"}));t(this._createWorker(r,s))}.bind(this))}catch(e){try{h=i.getProxyUrl(h).path+"?"+encodeURI(h),this._useProxy=!0,t(this._createWorker(h,r))}catch(e){return console.log("Can not create worker"),!1}}}else t(this._createWorker(s,r))},_createWorker:function(e,t){var r=new Worker(e);return r.addEventListener("message",this._acceptMessage,!1),r.addEventListener("error",this._errorMessage,!1),this.worker=r,t&&this.importScripts(t),r},postMessage:function(e,t){(e instanceof Array||"object"!=typeof e)&&(e={data:e});var s=Math.floor(64e9*Math.random()).toString(36);e.msgId=s;var o=this._queue[s]=new r;return this.worker?(t?this.worker.postMessage(e,t):this.worker.postMessage(e),this.emit("start-message",{target:this,message:e})):o.reject({message:"No worker was set."}),o.promise},terminate:function(){var e=Object.keys(this._queue);this.worker&&this.worker.terminate();for(var t=e.length-1;t>=0;t--)this._queue[e[t]].cancel("terminated"),delete this._queue[e[t]]},addWorkerCallback:function(e,t){var s,o=this._getUrl(e,!0);return!1===o?(s=new r,s.reject({message:"Could not load text from "+e}),s.promise):this.postMessage({action:"add-callback",url:o,cbName:t||"main"}).then(function(e){e.target=this,this.emit("callback-added",e)}.bind(this))},importScripts:function(e){Array.isArray(e)||(e=[e]);var t=e.map(function(e){var t=this._getUrl(e,!0);return this._useProxy&&!i.hasSameOrigin(t,location.href)&&(t=i.getProxyUrl(t).path+"?"+encodeURI(t)),t},this);return this.postMessage({action:"import-script",url:t}).then(function(e){e.target=this,this.emit("scripts-imported",e)}.bind(this))},_acceptMessage:function(e){var t=e.data,r=t.msgId;if(t.status&&"debug"==t.status){var s=t.showAs||"debug";console[s](t)}else if(r&&r in this._queue){var o=this._queue[r];"progress"==t.status?o.progress(e.data):"error"==t.status?(o.reject(e.data),delete this._queue[r]):(o.resolve(e.data),delete this._queue[r])}this.emit("message",{message:e.data,event:e,target:this})},_errorMessage:function(e){this.onerror||this.onError?this.onerror?this.onerror(e):this.onError(e):console.log("Worker Error: "+e.message+"\nIn "+e.filename+" on "+e.lineno)},_getUrl:function(e,t){if(!e)return console.error("can not resolve empty path"),!1;e.match(/\.js$/)||(e+=".js");var r=a.toUrl(e);return t?i.makeAbsolute(r):r},_getRemoteText:function(e,t){(e=this._getUrl(e))&&s.get(e,{sync:!1,handleAs:"text",headers:{"X-Requested-With":"","Content-Type":"text/plain"}}).then(function(e){t(e)})},_startBlobWorker:function(){var e=this._xdSource;if(!e){var t=this._getUrl("./mutableWorker"),r=new n(["if(!self._mutable){importScripts('"+t+"');}"],{type:"text/javascript"});e=this._xdSource=c.createObjectURL(r)}try{return new Worker(e)}catch(e){return console.log(e.message),!1}}})});