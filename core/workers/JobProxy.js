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
// See http://js.arcgis.com/4.1/esri/copyright.txt for details.

define(["require","exports","dojo/_base/kernel","dojo/_base/url","dojo/Deferred","../../kernel","../../config","../../request","../urlUtils"],function(e,o,t,n,s,r,i,a,c){function d(){if(!g){var e=new s;return e.resolve(new Worker(f)),e.promise}if(!p){var o=new n(f);i.defaults?i.defaults.io.corsEnabledServers.push(o.host):i.request.corsEnabledServers.push(o.host),p=a(f,{responseType:"text"})}return p.then(function(e){return new Worker(URL.createObjectURL(new Blob([e.data],{type:"text/javascript"})))})}var f=c.makeAbsolute(e.toUrl("./worker.js")),l=c.makeAbsolute(e.toUrl("dojo/dojo.js")),u=c.makeAbsolute("../../",l)+"/",g=!c.hasSameOrigin(f,location.href),p=null,h=function(){function e(e,o,t){var n=this;this.connections=e,this.index=o,this.workerInitCallback=t,this.msgCount=0,this.outgoingJobs={},this.incomingJobs={},this.incomingStaticJobs={},d().then(function(e){n.worker=e,n.worker.addEventListener("message",n.message.bind(n),!1)})}return e.prototype.terminate=function(){this.worker.terminate()},e.prototype.openConnection=function(e,o){return this.invoke("<open-connection>",{path:e},void 0,o)},e.prototype.closeConnection=function(e){this.invoke("<close-connection>",void 0,void 0,e)},e.prototype.postConfigMessage=function(e){var o=JSON.parse(JSON.stringify(e)),n={async:!0,baseUrl:u,locale:t.locale,has:{"esri-cors":1,"dojo-test-sniff":0,"config-deferredInstrumentation":0},paths:{esri:"esri",dojo:"dojo",dojox:"dojox",dstore:"dstore",moment:"moment"}};this.worker.postMessage({type:"<configure>",configure:{esriConfig:o,dojoConfig:n,loaderUrl:l}})},e.prototype.invoke=function(e,o,t,n){var r=this,i=++this.msgCount,a=new s(function(e){r.worker.postMessage({type:"<cancel>",id:i,connection:n,data:{reason:e}}),r.outgoingJobs[i]&&delete r.outgoingJobs[i]});return this.outgoingJobs[i]=a,this.worker.postMessage({type:e,id:i,connection:n,data:o},t),a.promise},e.prototype.message=function(e){var o=this;if(e&&e.data){var t=e.data.type;if(t){var n=e.data,s=e.data.id;if("<response>"===t&&s){var a=this.outgoingJobs[s];if(!a)return;delete this.outgoingJobs[s],n.error?a.reject(n.error):a.resolve(n.data)}else if("<worker-loaded>"===t)this.postConfigMessage(i);else if("<worker-configured>"===t)this.workerInitCallback&&"function"==typeof this.workerInitCallback&&"number"==typeof this.index&&this.workerInitCallback(this.index);else if("<cancel>"===t&&s){var c=this.incomingJobs[s];if(c&&c.cancel(n.data.reason),n.staticMsg){var d=this.incomingStaticJobs[s];d&&d.cancel(n.data.reason)}}else if("<static-message>"===t){var f=n.staticMsg,l=r.workerMessages[f];if(!l||"function"!=typeof l)return void this.worker.postMessage({type:"<static-message>",staticMsg:f,id:s,error:l+" message type is not available on the kernel!"});var u=l.call(this,n.data);this.incomingStaticJobs[s]=u,u.then(function(e){o.worker.postMessage({type:"<static-message>",staticMsg:f,id:s,data:e.data},e.buffers)}).otherwise(function(e){e||(e="Error encountered at method"+f),e.dojoType&&"cancel"===e.dojoType||o.worker.postMessage({type:"<static-message>",staticMsg:f,id:s,error:e})}).always(function(){delete o.incomingStaticJobs[s]})}else{var g=n.connection,p=this.connections[g];if(!p)return;var h=p.client;if(!h)return;var k=h[t];if("function"==typeof k){var m=k.call(h,n.data);this.incomingJobs[s]=m,m.then(function(e){o.worker.postMessage({type:"<response>",id:s,connection:g,error:e.error,data:e.data},e.buffers)}).otherwise(function(e){e||(e="Error encountered at method"+t),e.dojoType&&"cancel"===e.dojoType||o.worker.postMessage({type:"<response>",id:s,connection:g,error:e})}).always(function(){delete o.incomingJobs[s]})}}}}},e}();return h});