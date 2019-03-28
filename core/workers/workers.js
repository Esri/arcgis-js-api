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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../Error","../has","../promiseUtils","./Connection","./RemoteClient","./WorkerOwner"],function(n,e,t,r,i,o,u,c){function a(){m()}function l(n,t){return new e.Connection(n.map(function(n){return new e.RemoteClient(n,t,{})}))}function f(r,o){if(void 0===o&&(o={}),"string"!=typeof r)return i.reject(new t("workers:undefined-module","modulePath is missing"));var u=o.strategy||"distributed";if("local"===u){var c=o.client;return i.create(function(t){return n([r],function(n){c=c||n,t(e.RemoteClient.connect(n))})}).then(function(n){return new e.Connection([new e.RemoteClient(n,c,o)])})}return m().then(function(){if("dedicated"===u){var n=d+C++;return C%=w,p[n].open(r).then(function(n){return new e.Connection([new e.RemoteClient(n,o.client,o)])})}return i.all(p.map(function(n){return n.open(r)})).then(function(n){return new e.Connection(n.map(function(n){return new e.RemoteClient(n,o.client,o)}))})})}function s(){v&&(v.cancel(),v=null);for(var n=0;n<p.length;n++)p[n]&&p[n].terminate();p.length=0}function m(){if(v)return v;for(var n=d+w,e=[],t=0;t<n;t++)!function(n){var t=c.create(n).then(function(e){return p[n]=e,e});e.push(t)}(t);return v=i.all(e).then(function(){})}Object.defineProperty(e,"__esModule",{value:!0}),e.Connection=o,e.RemoteClient=u;var h=r("host-browser")?navigator.hardwareConcurrency:0;h||(h=r("safari")&&r("mac")||r("trident")?8:2);var d=r("esri-workers-debug")?1:Math.max(1,Math.ceil(h/2)),w=r("esri-workers-debug")?1:Math.max(1,Math.floor(h/2)),C=0,p=[];e.initialize=a,e.openWithPorts=l,e.open=f,e.terminate=s;var v=null});