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

define(["require","exports","../tsSupport/generatorHelper","../tsSupport/awaiterHelper","../Error","../has","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],function(e,n,t,r,o,i,u,a,c,s){function l(){h()}function f(e,t){return new n.Connection(e.map(function(e){return new n.RemoteClient(e,t,{})}))}function d(a,c){return void 0===c&&(c={}),r(this,void 0,void 0,function(){var r,s,l,f,d,w,d,v;return t(this,function(t){switch(t.label){case 0:if("string"!=typeof a)throw new o("workers:undefined-module","modulePath is missing");return r=c.signal,s=c.strategy||"distributed",i("host-webworker")&&!i("esri-workers")&&(s="local"),"local"!==s?[3,2]:[4,u.create(function(n){return e([a],n)})];case 1:return l=t.sent(),u.throwIfAborted(r),f=c.client||l,d=n.RemoteClient.connect(l),[2,new n.Connection([new n.RemoteClient(d,f,c)])];case 2:return[4,h()];case 3:return t.sent(),(u.throwIfAborted(r),"dedicated"!==s)?[3,5]:(w=m++,m%=p,[4,C[w].open(a,c)]);case 4:return d=t.sent(),[2,new n.Connection([new n.RemoteClient(d,c.client,c)])];case 5:return[4,u.all(C.map(function(e){return e.open(a,c)}))];case 6:return v=t.sent(),[2,new n.Connection(v.map(function(e){return new n.RemoteClient(e,c.client,c)}))]}})})}function w(){b&&(v.abort(),b=null);for(var e=0;e<C.length;e++)C[e]&&C[e].terminate();C.length=0}function h(){return r(this,void 0,void 0,function(){var e,n,r;return t(this,function(t){if(b)return[2,b];for(v=u.createAbortController(),e=[],n=function(n){var t=s.create(n).then(function(e){return C[n]=e,e});e.push(t)},r=0;r<p;r++)n(r);return b=u.all(e),[2,b]})})}Object.defineProperty(n,"__esModule",{value:!0}),n.Connection=a,n.RemoteClient=c;var p=i("esri-workers-debug")?1:i("host-browser")?navigator.hardwareConcurrency-1:0;p||(p=i("safari")&&i("mac")||i("trident")?7:2);var m=0,C=[];n.initialize=l,n.openWithPorts=f,n.open=d,n.terminate=w;var v,b=null});