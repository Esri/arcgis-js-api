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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../has","../Logger","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],function(e,n,t,r,i,o,a,c){function u(){s()}function l(t,r,o){if(void 0===r&&(r={}),Array.isArray(t))return new n.Connection(t.map(function(e){return new n.RemoteClient(e,r.client)}));if("string"!=typeof t){g.warn("workers-open:signature-deprecated","DEPRECATED: workers.open() changed signature.");var a=t;t=r,r={client:a,strategy:o?"dedicated":"distributed"}}var c=r.strategy||"distributed";return"local"===c?i.create(function(r){e([t],function(e){r(n.RemoteClient.connect(e))})}).then(function(e){return new n.Connection([new n.RemoteClient(e,r.client)])}):s().then(function(){if("dedicated"===c){var e=h+m++;return m%=w,C[e].open(t).then(function(e){return new n.Connection([new n.RemoteClient(e,r.client)])})}return i.all(C.map(function(e){return e.open(t)})).then(function(e){return new n.Connection(e.map(function(e){return new n.RemoteClient(e,r.client)}))})})}function f(){p&&(p.cancel(),p=null);for(var e=0;e<C.length;e++)C[e]&&C[e].terminate();C.length=0}function s(){if(p)return p;for(var e=h+w,n=[],t=0;t<e;t++)!function(e){var t=c.create(e).then(function(n){return C[e]=n,n});n.push(t)}(t);return p=i.all(n).then(function(){})}Object.defineProperty(n,"__esModule",{value:!0}),n.Connection=o,n.RemoteClient=a;var d=t("host-browser")?navigator.hardwareConcurrency:0;d||(d=t("safari")&&t("mac")||t("trident")?8:2);var h=t("esri-workers-debug")?1:Math.max(1,Math.ceil(d/2)),w=t("esri-workers-debug")?1:Math.max(1,Math.floor(d/2)),g=r.getLogger("esri.core.workers"),m=0,C=[];n.initialize=u,n.open=l,n.terminate=f;var p=null});