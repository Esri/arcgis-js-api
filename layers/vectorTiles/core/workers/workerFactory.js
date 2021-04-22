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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["require","exports","../tsSupport/assignHelper","dojo/_base/kernel","../../config","../../request","../Logger","../promiseUtils","../sniff","../urlUtils","./loaderConfig","./utils","./WorkerFallback"],(function(e,r,t,a,n,s,o,i,l,c,u,f,d){Object.defineProperty(r,"__esModule",{value:!0});var p=c.normalize(e.toUrl("./worker.js")),g=!c.hasSameOrigin(p,location.href),v=o.getLogger("esri.core.workers"),k=null,m=f.MessageType.CONFIGURED,w=f.MessageType.CONFIGURE,h=f.MessageType.HANDSHAKE;function y(e){return i.create((function(r){function s(i){var c=f.receiveMessage(i);if(c)switch(c.type){case h:!function(e){var r,s=n.workers.loaderUrl||u.DEFAULT_LOADER_URL;if(null!=n.default){var o=t({},n);delete o.default,r=JSON.parse(JSON.stringify(o))}else r=JSON.parse(JSON.stringify(n));var i=n.workers.loaderConfig,c=u.default({baseUrl:i.baseUrl,locale:a.locale,has:t({"config-deferredInstrumentation":0,"dojo-test-sniff":0,"esri-cors":1,"esri-secure-context":l("esri-secure-context"),"esri-workers-supports-transfer-arraybuffer":l("esri-workers-supports-transfer-arraybuffer"),"events-keypress-typed":0,"host-webworker":1},i.has),map:t({},i.map),paths:t({},i.paths),packages:i.packages||[]});e.postMessage({type:w,configure:{esriConfig:r,loaderUrl:s,loaderConfig:c}})}(e);break;case m:e.removeEventListener("message",s),e.removeEventListener("error",o),r(e)}}function o(r){r.preventDefault(),e.removeEventListener("message",s),e.removeEventListener("error",o),v.warn("Failed to create Worker. Fallback to execute module in main thread",r),(e=new d).addEventListener("message",s),e.addEventListener("error",o)}e.addEventListener("message",s),e.addEventListener("error",o)}))}r.createWorker=function(){if(!l("esri-workers"))return y(new d);if(!g){var e=void 0;try{e=new Worker(p)}catch(r){v.warn("Failed to create Worker. Fallback to execute module in main thread",event),e=new d}return y(e)}return k||(k=s(p,{responseType:"text"})),k.then((function(e){return new Worker(URL.createObjectURL(new Blob([e.data],{type:"text/javascript"})))})).catch((function(e){return v.warn("Failed to create Worker. Fallback to execute module in main thread",e),new d})).then((function(e){return y(e)}))}}));