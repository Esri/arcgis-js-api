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

define(["require","exports","dojo/sniff","dojo/promise/all","../Logger","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],(function(e,n,t,r,o,i,a,c,u){Object.defineProperty(n,"__esModule",{value:!0}),n.Connection=a,n.RemoteClient=c;var f=t("host-browser")?navigator.hardwareConcurrency:0;f||(f=t("safari")&&t("mac")||t("trident")?8:2);var l,s=t("esri-workers-debug")?1:Math.max(1,Math.ceil(f/2)),d=t("esri-workers-debug")?1:Math.max(1,Math.floor(f/2)),m=o.getLogger("esri.core.workers"),w=0,g=[];function h(){if(l)return l;for(var e=s+d,n=[],t=function(e){var t=u.create(e).then((function(n){return g[e]=n,n}));n.push(t)},o=0;o<e;o++)t(o);return l=r(n).then((function(){}))}n.initialize=function(){h()},n.open=function(t,r,o){if(void 0===r&&(r={}),Array.isArray(t))return new n.Connection(t.map((function(e){return new n.RemoteClient(e,r.client)})));if("string"!=typeof t){m.warn("workers-open:signature-deprecated","DEPRECATED: workers.open() changed signature.");var a=t;t=r,r={client:a,strategy:o?"dedicated":"distributed"}}var c=r.strategy||"distributed";return"local"===c?i.create((function(r){e([t],(function(e){r(n.RemoteClient.connect(e))}))})).then((function(e){return new n.Connection([new n.RemoteClient(e,r.client)])})):h().then((function(){if("dedicated"===c){var e=s+w++;return w%=d,g[e].open(t).then((function(e){return new n.Connection([new n.RemoteClient(e,r.client)])}))}return i.all(g.map((function(e){return e.open(t)}))).then((function(e){return new n.Connection(e.map((function(e){return new n.RemoteClient(e,r.client)})))}))}))},n.terminate=function(){for(var e=0;e<g.length;e++)g[e]&&g[e].terminate();g.length=0}}));