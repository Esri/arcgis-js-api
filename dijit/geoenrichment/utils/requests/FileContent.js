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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/DataUtil"],function(n,t){function e(n,e){return new i(t.binaryStringFromByteSource(n),e)}function r(n,e){return t.arrayBufferFromBlob(n).then(function(r){return new i(t.binaryStringFromByteSource(r),e||n.type)})}function o(n,e,r){if(r=r||t.getContentType(n),"object"==typeof e&&window.ArrayBuffer&&(e instanceof ArrayBuffer||e.buffer instanceof ArrayBuffer))e=t.binaryStringFromByteSource(e.buffer||e);else{var o=a(r);if("json"==o&&"object"==typeof e&&(e=JSON.stringify(e)),"string"!=typeof e)throw new Error("Wrong file data.");switch(o){case"base64":e=atob(e);break;case"text":case"json":e=unescape(encodeURIComponent(e))}}var f=new i(e,r);return f.filename=n,f}function a(n){return n?/^image\//.test(n)?"base64":/^text\//.test(n)?"text":/application\/json/.test(n)?"json":"bin":"bin"}var i=n(null,{data:null,filename:null,contentType:"application/octet-stream",contentTransferEncoding:"binary",constructor:function(n,t,e){this.data=n,t&&(this.contentType=t),e&&(this.contentTransferEncoding=e)},getBase64Data:function(){return this.data?"base64"==this.contentTransferEncoding?this.data:t.base64FromByteSource(this.data):null},toString:function(){return this.filename||"<unknown>"}});return i.fromArrayBuffer=e,i.fromBlob=r,i.fromFileData=o,i.getContentConversionType=a,i});