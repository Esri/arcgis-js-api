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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../Error","../has","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner","@dojo/framework/shim/Promise"],(function(e,r,n,t,o,i,a,s,u){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.terminate=r.open=r.openWithPorts=r.initialize=r.RemoteClient=r.Connection=void 0,r.Connection=a,r.RemoteClient=s;var c=o("esri-workers-debug")?1:o("host-browser")?navigator.hardwareConcurrency-1:0;c||(c=o("safari")&&o("mac")||o("trident")?7:2);var l=0,f=[];function d(e,r){return n.__awaiter(this,void 0,void 0,(function(){var t;return n.__generator(this,(function(n){switch(n.label){case 0:return[4,(t=new a).open(e,r)];case 1:return n.sent(),[2,t]}}))}))}r.initialize=function(){w()},r.openWithPorts=function(e,r){return d(e,{client:r})},r.open=function(r,a){return void 0===a&&(a={}),n.__awaiter(this,void 0,void 0,(function(){var u,h,m,v,_,g,p;return n.__generator(this,(function(b){switch(b.label){case 0:if("string"!=typeof r)throw new t("workers:undefined-module","modulePath is missing");return u=a.strategy||"distributed",o("host-webworker")&&!o("esri-workers")&&(u="local"),"local"!==u?[3,4]:[4,s.loadWorker(r)];case 1:return(h=b.sent())?[3,3]:[4,new Promise((function(n,t){e([r],n,t)}))];case 2:h=b.sent(),b.label=3;case 3:return i.throwIfAborted(a.signal),m=a.client||h,[2,d([s.connect(h)],n.__assign(n.__assign({},a),{client:m}))];case 4:return[4,w()];case 5:return b.sent(),i.throwIfAborted(a.signal),"dedicated"!==u?[3,7]:(p=l++%c,[4,f[p].open(r,a)]);case 6:return[2,d([b.sent()],a)];case 7:if(a.maxNumWorkers&&a.maxNumWorkers>0&&(v=Math.min(a.maxNumWorkers,c))<c){for(_=new Array(v),g=0;g<v;++g)p=l++%c,_[g]=f[p].open(r,a);return[2,d(_,a)]}return[2,d(f.map((function(e){return e.open(r,a)})),a)]}}))}))},r.terminate=function(){m&&(h.abort(),m=null);for(var e=0;e<f.length;e++)f[e]&&f[e].terminate();f.length=0};var h,m=null;function w(){return n.__awaiter(this,void 0,void 0,(function(){var e,r,t;return n.__generator(this,(function(n){if(m)return[2,m];for(h=i.createAbortController(),e=[],r=function(r){var n=u.create(r).then((function(e){return f[r]=e,e}));e.push(n)},t=0;t<c;t++)r(t);return[2,m=i.all(e)]}))}))}}));