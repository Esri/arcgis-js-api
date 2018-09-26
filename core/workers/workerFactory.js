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

define(["require","exports","../tsSupport/assignHelper","dojo/_base/kernel","../../config","../../request","../has","../Logger","../promiseUtils","../urlUtils","./loaderConfig","./utils","./WorkerFallback"],function(e,r,t,a,n,s,o,i,l,c,f,u,d){function g(){if(!o("esri-workers"))return p(new d);if(!w){var e=void 0;try{e=new Worker(k)}catch(r){m.warn("Failed to create Worker. Fallback to execute module in main thread",event),e=new d}return p(e)}return h||(h=s(k,{responseType:"text"})),h.then(function(e){return new Worker(URL.createObjectURL(new Blob([e.data],{type:"text/javascript"})))}).catch(function(e){return m.warn("Failed to create Worker. Fallback to execute module in main thread",e),new d}).then(function(e){return p(e)})}function p(e){return l.create(function(r){function t(n){var s=u.receiveMessage(n);if(s)switch(s.type){case L:v(e);break;case y:e.removeEventListener("message",t),e.removeEventListener("error",a),r(e)}}function a(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",a),m.warn("Failed to create Worker. Fallback to execute module in main thread",r),e=new d,e.addEventListener("message",t),e.addEventListener("error",a)}e.addEventListener("message",t),e.addEventListener("error",a)})}function v(e){var r,s=n.workers.loaderUrl||f.DEFAULT_LOADER_URL;if(null!=n.default){var i=t({},n);delete i.default,r=JSON.parse(JSON.stringify(i))}else r=JSON.parse(JSON.stringify(n));var l=n.workers.loaderConfig,c=f.default({baseUrl:l.baseUrl,locale:a.locale,has:t({"config-deferredInstrumentation":0,"dojo-test-sniff":0,"esri-secure-context":o("esri-secure-context"),"esri-workers-arraybuffer-transfer":o("esri-workers-arraybuffer-transfer"),"events-keypress-typed":0,"host-webworker":1},l.has),map:t({},l.map),paths:t({},l.paths),packages:l.packages||[]});e.postMessage({type:b,configure:{esriConfig:r,loaderUrl:s,loaderConfig:c}})}Object.defineProperty(r,"__esModule",{value:!0});var k=c.normalize(e.toUrl("./worker.js")),w=!c.hasSameOrigin(k,location.href),m=i.getLogger("esri.core.workers"),h=null;o.add("esri-workers-arraybuffer-transfer",!o("safari")||o("safari")>=12);var y=u.MessageType.CONFIGURED,b=u.MessageType.CONFIGURE,L=u.MessageType.HANDSHAKE;r.createWorker=g});