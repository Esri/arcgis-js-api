// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../core/promiseUtils","../core/urlUtils"],function(e,r,t,s){return function(){function r(){var e=this;this.worker=null,this._queue=new Map,this._useProxy=!1,this._acceptMessage=function(r){var t=r.data,s=t.msgId;if(e._queue.has(s)){var n=e._queue.get(s);"error"===t.status?(n.reject(r.data),e._queue.delete(s)):(n.resolve(r.data),e._queue.delete(s))}},this._errorMessage=function(e){console.log("Worker Error: "+e.message+"\nIn "+e.filename+" on "+e.lineno)}}return r.prototype.setWorker=function(e,r){var t=this._getUrl(e);t=s.normalize(t);var n,o=!s.hasSameOrigin(t,location.href);if(this.worker&&(n=this.worker,n.removeEventListener("message",this._acceptMessage,!1),n.removeEventListener("error",this._errorMessage,!1),n.terminate(),n=null),!o)return void r(this._createWorker(t));var a=URL.createObjectURL(new Blob(['\nfunction actionHandler(evt) {\n  var msg = evt.data;\n  var error, success;\n\n  if (msg.action) {\n    switch (msg.action) {\n      case "import-script":\n        try {\n          if (!Array.isArray(msg.url)) {\n            msg.url = [msg.url];\n          }\n\n          importScripts(msg.url);\n          success = true;\n        }\n        catch (err) {\n          error = err;\n        }\n\n        break;\n    }\n\n    if (success) {\n      postMessage({\n        msgId: msg.msgId,\n        success: true\n      });\n    }\n    else if (error) {\n      postMessage({\n        status: "error",\n        msgId: msg.msgId,\n        message: error.message\n      });\n    }\n  }\n}\n\nself.addEventListener("message", actionHandler, false);\n'],{type:"text/javascript"}));r(this._createWorker(a,t))},r.prototype.postMessage=function(e,r){if(!this.worker)return t.reject({message:"No worker was set."});(Array.isArray(e)||"object"!=typeof e)&&(e={data:e});var s=t.createDeferred(),n=Math.floor(64e9*Math.random()).toString(36);return e.msgId=n,this._queue.set(n,s),r?this.worker.postMessage(e,r):this.worker.postMessage(e),s.promise},r.prototype.terminate=function(){this.worker&&this.worker.terminate(),this._queue.forEach(function(e){e.reject(t.createAbortError("terminated"))}),this._queue.clear()},r.prototype.importScripts=function(e){var r=this;Array.isArray(e)||(e=[e]);var t=e.map(function(e){var t=r._getUrl(e,!0);return r._useProxy&&!s.hasSameOrigin(t,location.href)&&(t=s.getProxyUrl(t).path+"?"+encodeURI(t)),t});return this.postMessage({action:"import-script",url:t}).then(function(e){e.target=r})},r.prototype._createWorker=function(e,r){var t=new Worker(e);return t.addEventListener("message",this._acceptMessage,!1),t.addEventListener("error",this._errorMessage,!1),this.worker=t,r&&this.importScripts(r),t},r.prototype._getUrl=function(r,t){void 0===t&&(t=!1),r.match(/\.js$/)||(r+=".js");var n=e.toUrl(r);return t?s.makeAbsolute(n):n},r}()});