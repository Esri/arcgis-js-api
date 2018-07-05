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
// See http://js.arcgis.com/3.25/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/Deferred","dojo/when","require"],function(r,e,n,o){function t(r){var t=new e;return o(["./DataResource"],function(e){n(new e(r).getFileContent(),t.resolve,t.reject)}),t.promise}var a={};return a.getErrorFromBin=function(r){var e=/^text\/|^application\/json/;return r&&r.type&&!e.test(r.type)?null:n(r&&t(r),function(r){if(r){if(r.hasOwnProperty("contentType")&&!e.test(r.contentType))return null;try{var n=JSON.parse(decodeURIComponent(escape(r.data))),o=a.parseError(n);if(o)return o;if(n.messages&&n.messages.length){var t=n.messages[0];if("esriJobMessageTypeError"==t.type)return new Error(t.description)}}catch(r){}}return new Error("Binary data error.")})},a.parseError=function(r){var e;return r.error?e=a.makeError(r.error):"error"===r.status&&(e=a.makeError(r)),e&&e.code&&null==e.httpCode&&(e.httpCode=e.code),e},a.makeError=function(e){return null==e?e=new Error:"string"==typeof e&&(e={message:e}),e instanceof Error||"object"!=typeof e||(e=r.mixin(new Error,e)),e.log=dojoConfig.isDebug,e},a});