// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["../sniff","../kernel","dojo/_base/declare","dojo/Deferred","dojo/_base/lang","dojo/_base/xhr","../config","./WorkerClient"],function(e,r,n,t,s,o,i,u){function a(e,r){var n=new c;if(n.addWorkerCallback(e,r),d.unshift({id:r?e+"::"+r:e,client:n}),d.length>l){d.pop().client.terminate()}return n}var c=n([u],{declaredClass:"esri.workers.RequestClient",constructor:function(){this.setWorker(["./mutableWorker","./requestWorker"],function(){})},get:function(e){return this._send("GET",e)},post:function(e){return this._send("POST",e)},_send:function(e,r){var n=o._ioSetArgs(r);n.xhr=null;var t=n.ioArgs,s=t.url;return delete t.url,delete t.args,this.postMessage({method:e,url:s,options:t}).then(this._getSuccessHandler(n),this._getErrorHandler(n),this._getProgressHandler(n)),n},_addHeaderFunctions:function(e){return e.getResponseHeader=function(r){var n,t=e.headers;return Object.keys(t).forEach(function(e){if(e.toLowerCase()==r.toLowerCase())return n=t[e],!1}),n},e.getAllResponseHeaders=function(){var r=[],n=e.headers;return Object.keys(n).forEach(function(e){r.push(e+": "+n[e])}),r=r.join("\n")},e},_getSuccessHandler:function(e){var r=this,n=e.ioArgs;return function(t){e.xhr=r._addHeaderFunctions(t);var s=e.xhr.getResponseHeader("content-type");("xml"==n.handleAs||s.indexOf("xml")>-1)&&"string"==typeof e.xhr.response&&(e.xhr.response=(new DOMParser).parseFromString(e.xhr.response,"text/xml")),e.resolve(e.xhr.response,e.xhr)}},_getErrorHandler:function(e){return function(r){e.reject(r)}},_getProgressHandler:function(e){return function(r){e.progress(r)}}}),d=[],l=i.defaults.io.maxRequestWorkers,f=new c;return c.getClient=function(e,r){if(e){var n;return d.some(function(t){return t.id==(r?e+"::"+r:e)&&(n=t.client),!0}),n||a(e,r)}return f},c.setLimit=function(e){l=i.defaults.io.maxRequestWorkers=e},e("extend-esri")&&(r.RequestClient=c),c});