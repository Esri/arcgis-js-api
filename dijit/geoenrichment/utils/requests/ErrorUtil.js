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

define(["dojo/_base/lang","dojo/Deferred","dojo/when","require"],function(r,e,n,t){function o(r){var o=new e;return t(["./DataResource"],function(e){n(new e(r).getFileContent(),o.resolve,o.reject)}),o.promise}var a={};return a.getErrorFromBin=function(r){var e=/^text\//;return r&&r.type&&!e.test(r.type)?null:n(r&&o(r),function(r){if(r){if(r.hasOwnProperty("contentType")&&!e.test(r.contentType))return null;try{var n=JSON.parse(decodeURIComponent(escape(r.data))),t=a.parseError(n);if(t)return t;if(n.messages&&n.messages.length){var o=n.messages[0];if("esriJobMessageTypeError"==o.type)return new Error(o.description)}}catch(r){}}return new Error("Binary data error.")})},a.parseError=function(r){var e;return r.error?e=a.makeError(r.error):"error"===r.status&&(e=a.makeError(r)),e&&e.code&&null==e.httpCode&&(e.httpCode=e.code),e},a.makeError=function(e){return e instanceof Error||("string"==typeof e&&(e={message:e}),e=r.mixin(new Error,e)),e.log=dojoConfig.isDebug,e},a});