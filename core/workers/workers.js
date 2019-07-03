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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../tsSupport/generatorHelper","../tsSupport/awaiterHelper","../Error","../has","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],function(e,n,t,r,o,i,a,u,c,s){function l(){h()}function f(e,t){return new n.Connection(e.map(function(e){return new n.RemoteClient(e,t,{})}))}function d(u,c){return void 0===c&&(c={}),r(this,void 0,void 0,function(){var r,s,l,f,d,w,d,m;return t(this,function(t){switch(t.label){case 0:if("string"!=typeof u)throw new o("workers:undefined-module","modulePath is missing");return r=c.signal,s=c.strategy||"distributed",i("host-webworker")&&!i("esri-workers")&&(s="local"),"local"!==s?[3,2]:[4,a.create(function(n){return e([u],n)})];case 1:return l=t.sent(),a.throwIfAborted(r),f=c.client||l,d=n.RemoteClient.connect(l),[2,new n.Connection([new n.RemoteClient(d,f,c)])];case 2:return[4,h()];case 3:return t.sent(),(a.throwIfAborted(r),"dedicated"!==s)?[3,5]:(w=p+v++,v%=C,[4,b[w].open(u,c)]);case 4:return d=t.sent(),[2,new n.Connection([new n.RemoteClient(d,c.client,c)])];case 5:return[4,a.all(b.map(function(e){return e.open(u,c)}))];case 6:return m=t.sent(),[2,new n.Connection(m.map(function(e){return new n.RemoteClient(e,c.client,c)}))]}})})}function w(){R&&(g.abort(),R=null);for(var e=0;e<b.length;e++)b[e]&&b[e].terminate();b.length=0}function h(){return r(this,void 0,void 0,function(){var e,n,r,o;return t(this,function(t){if(R)return[2,R];for(g=a.createAbortController(),e=p+C,n=[],r=function(e){var t=s.create(e).then(function(n){return b[e]=n,n});n.push(t)},o=0;o<e;o++)r(o);return R=a.all(n),[2,R]})})}Object.defineProperty(n,"__esModule",{value:!0}),n.Connection=u,n.RemoteClient=c;var m=i("host-browser")?navigator.hardwareConcurrency:0;m||(m=i("safari")&&i("mac")||i("trident")?8:2);var p=i("esri-workers-debug")?1:Math.max(1,Math.ceil(m/2)),C=i("esri-workers-debug")?1:Math.max(1,Math.floor(m/2)),v=0,b=[];n.initialize=l,n.openWithPorts=f,n.open=d,n.terminate=w;var g,R=null});