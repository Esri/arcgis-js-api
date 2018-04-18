// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports","../tsSupport/assignHelper","dojo/_base/kernel","dojo/_base/lang","../../config","../../request","../Logger","../promiseUtils","../sniff","../urlUtils","./loaderConfig","./utils","./WorkerFallback"],function(e,r,t,a,n,s,o,i,u,l,f,c,d,p){function g(){return F||(F=u.create(function(e){var r=new MessageChannel,t=r.port1,a=r.port2,n=function(r){l.add("esri-workers-supports-transfer-arraybuffer",Number(null!=r.data)),t.removeEventListener("message",n),t.close(),a.close(),l("esri-workers-supports-transfer-arraybuffer")||y.warn("This browser doesn't support ArrayBuffer transfer."),e()};t.addEventListener("message",n),t.start(),a.start();var s=new ArrayBuffer(0);a.postMessage(s,[s])}))}function v(){if(!l("esri-workers"))return k(new p);if(!b){var e=void 0;try{e=new Worker(m)}catch(r){y.warn("Failed to create Worker. Fallback to execute module in main thread",event),e=new p}return k(e)}return h||(h=o(m,{responseType:"text"})),h.then(function(e){return new Worker(URL.createObjectURL(new Blob([e.data],{type:"text/javascript"})))}).catch(function(e){return y.warn("Failed to create Worker. Fallback to execute module in main thread",e),new p}).then(function(e){return k(e)})}function k(e){return g().then(function(){return u.create(function(r){function t(n){var s=d.receiveMessage(n);if(s)switch(s.type){case U:w(e);break;case L:e.removeEventListener("message",t),e.removeEventListener("error",a),r(e)}}function a(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",a),y.warn("Failed to create Worker. Fallback to execute module in main thread",r),e=new p,e.addEventListener("message",t),e.addEventListener("error",a)}e.addEventListener("message",t),e.addEventListener("error",a)})})}function w(e){var r,o=s.workers.loaderUrl||c.DEFAULT_LOADER_URL;if(null!=s.default){var i=n.mixin({},s);delete i.default,r=JSON.parse(JSON.stringify(i))}else r=JSON.parse(JSON.stringify(s));var u=s.workers.loaderConfig,f=c.default({baseUrl:u.baseUrl,locale:a.locale,has:t({"esri-cors":1,"dojo-test-sniff":0,"config-deferredInstrumentation":0,"host-webworker":1,"events-keypress-typed":0,"esri-workers-supports-transfer-arraybuffer":l("esri-workers-supports-transfer-arraybuffer")},u.has),map:t({},u.map),paths:t({},u.paths),packages:u.packages||[]});e.postMessage({type:E,configure:{esriConfig:r,loaderUrl:o,loaderConfig:f}})}Object.defineProperty(r,"__esModule",{value:!0});var m=f.normalize(e.toUrl("./worker.js")),b=!f.hasSameOrigin(m,location.href),y=i.getLogger("esri.core.workers"),h=null,L=d.MessageType.CONFIGURED,E=d.MessageType.CONFIGURE,U=d.MessageType.HANDSHAKE,F=null;r.createWorker=v});