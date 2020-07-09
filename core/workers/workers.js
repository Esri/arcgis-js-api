// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../Error","../has","../Logger","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner","@dojo/framework/shim/Promise"],(function(e,r,n,t,o,i,a,s,u,c){Object.defineProperty(r,"__esModule",{value:!0}),r.Connection=s,r.RemoteClient=u;var l=o("esri-workers-debug")?1:o("host-browser")?navigator.hardwareConcurrency-1:0;l||(l=o("safari")&&o("mac")||o("trident")?7:2);var f=0,d=[],w=i.getLogger("esri.core.workers");function h(e,r){return n.__awaiter(this,void 0,void 0,(function(){var t;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,(t=new s).open(e,r)];case 1:return n.sent(),[2,t]}}))}))}r.initialize=function(e){if(void 0===e&&(e={}),e.maxNumWorkers&&e.maxNumWorkers>0){var r=Math.min(e.maxNumWorkers,l);if(v)return void(r!==l&&w.warn("Web workers already initialized, can't set requested number of workers"));l=r}g()},r.openWithPorts=function(e,r){return h(e,{client:r})},r.open=function(r,i){return void 0===i&&(i={}),n.__awaiter(this,void 0,void 0,(function(){var s,c,w,m;return n.__generator(this,(function(v){switch(v.label){case 0:if("string"!=typeof r)throw new t("workers:undefined-module","modulePath is missing");return s=i.strategy||"distributed",o("host-webworker")&&!o("esri-workers")&&(s="local"),"local"!==s?[3,4]:[4,u.loadWorker(r)];case 1:return(c=v.sent())?[3,3]:[4,new Promise((function(n,t){e([r],n,t)}))];case 2:c=v.sent(),v.label=3;case 3:return a.throwIfAborted(i.signal),w=i.client||c,[2,h([u.connect(c)],n.__assign(n.__assign({},i),{client:w}))];case 4:return[4,g()];case 5:return v.sent(),a.throwIfAborted(i.signal),"dedicated"!==s?[3,7]:(m=f++,f%=l,[4,d[m].open(r,i)]);case 6:return[2,h([v.sent()],i)];case 7:return[2,h(d.map((function(e){return e.open(r,i)})),i)]}}))}))},r.terminate=function(){v&&(m.abort(),v=null);for(var e=0;e<d.length;e++)d[e]&&d[e].terminate();d.length=0};var m,v=null;function g(){return n.__awaiter(this,void 0,void 0,(function(){var e,r,t;return n.__generator(this,(function(n){if(v)return[2,v];for(m=a.createAbortController(),e=[],r=function(r){var n=c.create(r).then((function(e){return d[r]=e,e}));e.push(n)},t=0;t<l;t++)r(t);return[2,v=a.all(e)]}))}))}}));