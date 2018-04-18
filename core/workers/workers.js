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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/sniff","dojo/promise/all","../Logger","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],function(e,n,t,r,o,i,a,c,u){function f(){d()}function l(t,r,o){if(void 0===r&&(r={}),Array.isArray(t))return new n.Connection(t.map(function(e){return new n.RemoteClient(e,r.client)}));if("string"!=typeof t){h.warn("workers-open:signature-deprecated","DEPRECATED: workers.open() changed signature.");var a=t;t=r,r={client:a,strategy:o?"dedicated":"distributed"}}var c=r.strategy||"distributed";return"local"===c?i.create(function(r){e([t],function(e){r(n.RemoteClient.connect(e))})}).then(function(e){return new n.Connection([new n.RemoteClient(e,r.client)])}):d().then(function(){if("dedicated"===c){var e=w+p++;return p%=g,C[e].open(t).then(function(e){return new n.Connection([new n.RemoteClient(e,r.client)])})}return i.all(C.map(function(e){return e.open(t)})).then(function(e){return new n.Connection(e.map(function(e){return new n.RemoteClient(e,r.client)}))})})}function s(){for(var e=0;e<C.length;e++)C[e]&&C[e].terminate();C.length=0}function d(){if(v)return v;for(var e=w+g,n=[],t=0;t<e;t++)!function(e){var t=u.create(e).then(function(n){return C[e]=n,n});n.push(t)}(t);return v=r(n).then(function(){})}Object.defineProperty(n,"__esModule",{value:!0}),n.Connection=a,n.RemoteClient=c;var m=t("host-browser")?navigator.hardwareConcurrency:0;m||(m=t("safari")&&t("mac")||t("trident")?8:2);var w=t("esri-workers-debug")?1:Math.max(1,Math.ceil(m/2)),g=t("esri-workers-debug")?1:Math.max(1,Math.floor(m/2)),h=o.getLogger("esri.core.workers"),p=0,C=[];n.initialize=f,n.open=l,n.terminate=s;var v});