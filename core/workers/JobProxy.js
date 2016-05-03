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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/Deferred","require"],function(e,t){var o=function(e,o,n){this._connections=e,this.worker=new Worker(t.toUrl("./worker.js")),this.index=o,this.workerInitCallback=n,this.msgCount=0,this.outgoingJobs={},this.incomingJobs={},this.worker.addEventListener("message",this.message.bind(this),!1)};return o.prototype.terminate=function(){this.worker.terminate()},o.prototype.openConnection=function(e,t){return this.invoke("<open-connection>",{path:e},void 0,t)},o.prototype.closeConnection=function(e){this.invoke("<close-connection>",void 0,void 0,e)},o.prototype.invoke=function(t,o,n,i){var r=++this.msgCount,s=new e(function(e){this.worker.postMessage({type:"<cancel>",id:r,connection:i,data:{reason:e}}),this.outgoingJobs[r]&&delete this.outgoingJobs[r]}.bind(this));return this.outgoingJobs[r]=s,this.worker.postMessage({type:t,id:r,connection:i,data:o},n),s.promise},o.prototype.message=function(e){if(e&&e.data){var t=e.data.type;if(t){var o=e.data,n=e.data.id;if("<response>"===t&&n){var i=this.outgoingJobs[n];if(!i)return;delete this.outgoingJobs[n],o.error?i.reject(o.error):i.resolve(o.data)}else if("<worker-init>"===t)this.workerInitCallback&&"function"==typeof this.workerInitCallback&&"number"==typeof this.index&&this.workerInitCallback(this.index);else if("<cancel>"===t&&n){var r=this.incomingJobs[n];r&&r.cancel(o.data.reason)}else{var s=o.connection,a=this._connections[s];if(!a)return;var c=a.client;if(!c)return;var h=c[t];if("function"==typeof h){var d=h.call(c,o.data);this.incomingJobs[n]=d,d.then(function(e){this.worker.postMessage({type:"<response>",id:n,connection:s,error:e.error,data:e.data},e.buffers)}.bind(this)).otherwise(function(e){e||(e="Error encountered at method"+t),e.dojoType&&"cancel"===e.dojoType||this.worker.postMessage({type:"<response>",id:n,connection:s,error:e})}.bind(this)).always(function(){delete this.incomingJobs[n]}.bind(this))}}}}},o});