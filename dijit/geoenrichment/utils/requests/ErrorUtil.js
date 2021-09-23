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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","require"],(function(e,r,t){var n={};return n.getErrorFromBin=function(o){var s=/^text\/|^application\/json/;return o&&o.type&&!s.test(o.type)?null:r(o&&function(n){var o=new e;return t(["./DataResource"],(function(e){r(new e(n).getFileContent(),o.resolve,o.reject)})),o.promise}(o),(function(e){if(e){if(e.hasOwnProperty("contentType")&&!s.test(e.contentType))return null;try{var r=JSON.parse(decodeURIComponent(escape(e.data))),t=n.parseError(r);if(t)return t;if(r.messages&&r.messages.length){var o=r.messages[0];if("esriJobMessageTypeError"==o.type)return new Error(o.description)}}catch(e){}}return new Error("Binary data error.")}))},n.parseError=function(e){var r;return e.error?r=n.makeError(e.error):"error"===e.status&&(r=n.makeError(e)),r&&r.code&&null==r.httpCode&&(r.httpCode=r.code),r},n.makeError=function(e){if(null==e?e=new Error:"string"==typeof e&&(e={message:e}),!(e instanceof Error)&&"object"==typeof e){var r=e;e=new Error,r.code&&(e.code=r.code),r.message&&(e.message=r.message),r.details&&(e.details=r.details)}return e.log=dojoConfig.isDebug,e},n}));