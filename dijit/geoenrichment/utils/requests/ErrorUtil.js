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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","require"],function(e,r,t){function n(n){var o=new e;return t(["./DataResource"],function(e){r(new e(n).getFileContent(),o.resolve,o.reject)}),o.promise}var o={};return o.getErrorFromBin=function(e){var t=/^text\/|^application\/json/;return e&&e.type&&!t.test(e.type)?null:r(e&&n(e),function(e){if(e){if(e.hasOwnProperty("contentType")&&!t.test(e.contentType))return null;try{var r=JSON.parse(decodeURIComponent(escape(e.data))),n=o.parseError(r);if(n)return n;if(r.messages&&r.messages.length){var s=r.messages[0];if("esriJobMessageTypeError"==s.type)return new Error(s.description)}}catch(e){}}return new Error("Binary data error.")})},o.parseError=function(e){var r;return e.error?r=o.makeError(e.error):"error"===e.status&&(r=o.makeError(e)),r&&r.code&&null==r.httpCode&&(r.httpCode=r.code),r},o.makeError=function(e){if(null==e?e=new Error:"string"==typeof e&&(e={message:e}),!(e instanceof Error)&&"object"==typeof e){var r=e;e=new Error,r.code&&(e.code=r.code),r.message&&(e.message=r.message),r.details&&(e.details=r.details)}return e.log=dojoConfig.isDebug,e},o});