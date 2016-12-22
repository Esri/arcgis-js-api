// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["../core/declare","dojo/_base/xhr","../config","./WorkerClient"],function(e,r,n,t){function s(e,r){var n=new o;if(n.addWorkerCallback(e,r),i.unshift({id:r?e+"::"+r:e,client:n}),i.length>u){var t=i.pop();t.client.terminate()}return n}var o=e([t],{declaredClass:"esri.workers.RequestClient",constructor:function(){this.setWorker(["./mutableWorker","./requestWorker"],function(){})},get:function(e){return this._send("GET",e)},post:function(e){return this._send("POST",e)},_send:function(e,n){var t=r._ioSetArgs(n);t.xhr=null;var s=t.ioArgs,o=s.url;return delete s.url,delete s.args,this.postMessage({method:e,url:o,options:s}).then(this._getSuccessHandler(t),this._getErrorHandler(t),this._getProgressHandler(t)),t},_addHeaderFunctions:function(e){return e.getResponseHeader=function(r){var n,t=e.headers;return Object.keys(t).forEach(function(e){return e.toLowerCase()==r.toLowerCase()?(n=t[e],!1):void 0}),n},e.getAllResponseHeaders=function(){var r=[],n=e.headers;return Object.keys(n).forEach(function(e){r.push(e+": "+n[e])}),r=r.join("\n")},e},_getSuccessHandler:function(e){var r=this,n=e.ioArgs;return function(t){e.xhr=r._addHeaderFunctions(t);var s=e.xhr.getResponseHeader("content-type");("xml"==n.handleAs||s.indexOf("xml")>-1)&&"string"==typeof e.xhr.response&&(e.xhr.response=(new DOMParser).parseFromString(e.xhr.response,"text/xml")),e.resolve(e.xhr.response,e.xhr)}},_getErrorHandler:function(e){return function(r){e.reject(r)}},_getProgressHandler:function(e){return function(r){e.progress(r)}}}),i=[],u=n.request.maxWorkers,a=new o;return o.getClient=function(e,r){if(e){var n;return i.some(function(t){return t.id==(r?e+"::"+r:e)&&(n=t.client),!0}),n||s(e,r)}return a},o.setLimit=function(e){u=n.request.maxWorkers=e},o});