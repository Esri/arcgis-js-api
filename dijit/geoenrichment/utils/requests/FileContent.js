// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/utils/DataUtil"],(function(n,t){var e=n(null,{data:null,filename:null,contentType:"application/octet-stream",contentTransferEncoding:"binary",constructor:function(n,t,e){this.data=n,t&&(this.contentType=t),e&&(this.contentTransferEncoding=e)},getBase64Data:function(){return this.data?"base64"==this.contentTransferEncoding?this.data:t.base64FromByteSource(this.data):null},toString:function(){return this.filename||"<unknown>"}});function r(n){return n?/^image\//.test(n)?"base64":/^text\//.test(n)?"text":/application\/json/.test(n)?"json":"bin":"bin"}return e.fromArrayBuffer=function(n,r){return new e(t.binaryStringFromByteSource(n),r)},e.fromBlob=function(n,r){return t.arrayBufferFromBlob(n).then((function(o){return new e(t.binaryStringFromByteSource(o),r||n.type)}))},e.fromFileData=function(n,o,a){if(a=a||t.getContentType(n),"object"==typeof o&&window.ArrayBuffer&&(o instanceof ArrayBuffer||o.buffer instanceof ArrayBuffer))o=t.binaryStringFromByteSource(o.buffer||o);else{var i=r(a);if("json"==i&&"object"==typeof o&&(o=JSON.stringify(o)),"string"!=typeof o)throw new Error("Wrong file data.");switch(i){case"base64":o=atob(o);break;case"text":case"json":o=unescape(encodeURIComponent(o))}}var f=new e(o,a);return f.filename=n,f},e.getContentConversionType=r,e}));