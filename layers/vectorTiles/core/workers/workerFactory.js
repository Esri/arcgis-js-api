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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","../tsSupport/assignHelper","dojo/_base/kernel","../../config","../../request","../Logger","../promiseUtils","../sniff","../urlUtils","./loaderConfig","./utils","./WorkerFallback"],function(e,r,t,a,n,s,o,i,l,c,u,f,d){function p(){if(!l("esri-workers"))return g(new d);if(!m){var e=void 0;try{e=new Worker(k)}catch(r){w.warn("Failed to create Worker. Fallback to execute module in main thread",event),e=new d}return g(e)}return h||(h=s(k,{responseType:"text"})),h.then(function(e){return new Worker(URL.createObjectURL(new Blob([e.data],{type:"text/javascript"})))}).catch(function(e){return w.warn("Failed to create Worker. Fallback to execute module in main thread",e),new d}).then(function(e){return g(e)})}function g(e){return i.create(function(r){function t(n){var s=f.receiveMessage(n);if(s)switch(s.type){case b:v(e);break;case y:e.removeEventListener("message",t),e.removeEventListener("error",a),r(e)}}function a(r){r.preventDefault(),e.removeEventListener("message",t),e.removeEventListener("error",a),w.warn("Failed to create Worker. Fallback to execute module in main thread",r),e=new d,e.addEventListener("message",t),e.addEventListener("error",a)}e.addEventListener("message",t),e.addEventListener("error",a)})}function v(e){var r,s=n.workers.loaderUrl||u.DEFAULT_LOADER_URL;if(null!=n.default){var o=t({},n);delete o.default,r=JSON.parse(JSON.stringify(o))}else r=JSON.parse(JSON.stringify(n));var i=n.workers.loaderConfig,c=u.default({baseUrl:i.baseUrl,locale:a.locale,has:t({"config-deferredInstrumentation":0,"dojo-test-sniff":0,"esri-cors":1,"esri-secure-context":l("esri-secure-context"),"esri-workers-supports-transfer-arraybuffer":l("esri-workers-supports-transfer-arraybuffer"),"events-keypress-typed":0,"host-webworker":1},i.has),map:t({},i.map),paths:t({},i.paths),packages:i.packages||[]});e.postMessage({type:L,configure:{esriConfig:r,loaderUrl:s,loaderConfig:c}})}Object.defineProperty(r,"__esModule",{value:!0});var k=c.normalize(e.toUrl("./worker.js")),m=!c.hasSameOrigin(k,location.href),w=o.getLogger("esri.core.workers"),h=null,y=f.MessageType.CONFIGURED,L=f.MessageType.CONFIGURE,b=f.MessageType.HANDSHAKE;r.createWorker=p});