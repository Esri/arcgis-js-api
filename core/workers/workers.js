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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../tsSupport/generatorHelper","../tsSupport/awaiterHelper","../Error","../has","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],(function(e,r,n,t,o,i,u,a,s,c){Object.defineProperty(r,"__esModule",{value:!0}),r.Connection=a,r.RemoteClient=s;var l=i("esri-workers-debug")?1:i("host-browser")?navigator.hardwareConcurrency-1:0;l||(l=i("safari")&&i("mac")||i("trident")?7:2);var f=0,d=[];r.initialize=function(){p()},r.openWithPorts=function(e,r){return new a(e.map((function(e){return new s(e,r,{})})))},r.open=function(r,c){return void 0===c&&(c={}),t(this,void 0,void 0,(function(){var t,w,h,v,m,b,g;return n(this,(function(n){switch(n.label){case 0:if("string"!=typeof r)throw new o("workers:undefined-module","modulePath is missing");return t=c.signal,w=c.strategy||"distributed",i("host-webworker")&&!i("esri-workers")&&(w="local"),"local"!==w?[3,4]:[4,s.loadWorker(r)];case 1:return(h=n.sent())?[3,3]:[4,u.create((function(n){return e([r],n)}))];case 2:h=n.sent(),n.label=3;case 3:return u.throwIfAborted(t),v=c.client||h,b=s.connect(h),[2,new a([new s(b,v,c)])];case 4:return[4,p()];case 5:return n.sent(),u.throwIfAborted(t),"dedicated"!==w?[3,7]:(m=f++,f%=l,[4,d[m].open(r,c)]);case 6:return b=n.sent(),[2,new a([new s(b,c.client,c)])];case 7:return[4,u.all(d.map((function(e){return e.open(r,c)})))];case 8:return g=n.sent(),[2,new a(g.map((function(e){return new s(e,c.client,c)})))]}}))}))},r.terminate=function(){h&&(w.abort(),h=null);for(var e=0;e<d.length;e++)d[e]&&d[e].terminate();d.length=0};var w,h=null;function p(){return t(this,void 0,void 0,(function(){var e,r,t;return n(this,(function(n){if(h)return[2,h];for(w=u.createAbortController(),e=[],r=function(r){var n=c.create(r).then((function(e){return d[r]=e,e}));e.push(n)},t=0;t<l;t++)r(t);return[2,h=u.all(e)]}))}))}}));