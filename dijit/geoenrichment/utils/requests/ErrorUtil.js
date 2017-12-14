// COPYRIGHT © 2017 Esri
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

define(["dojo/_base/lang","dojo/Deferred","require"],function(r,e,n){function t(r){var t=new e;return n(["./DataResource"],function(e){when(new e(r).getFileContent(),t.resolve,t.reject)}),t.promise}var o={};return o.getErrorFromBin=function(r){var e=/^text\//;return r&&r.type&&!e.test(r.type)?null:when(r&&t(r),function(r){if(r){if(r.hasOwnProperty("contentType")&&!e.test(r.contentType))return null;try{var n=JSON.parse(decodeURIComponent(escape(r.data))),t=o.parseError(n);if(t)return t;if(n.messages&&n.messages.length){var a=n.messages[0];if("esriJobMessageTypeError"==a.type)return new Error(a.description)}}catch(s){}}return new Error("Binary data error.")})},o.parseError=function(r){var e;return r.error?e=o.makeError(r.error):"error"===r.status&&(e=o.makeError(r)),e&&e.code&&null==e.httpCode&&(e.httpCode=e.code),e},o.makeError=function(e){return e instanceof Error||("string"==typeof e&&(e={message:e}),e=r.mixin(new Error,e)),e.log=dojoConfig.isDebug,e},o});