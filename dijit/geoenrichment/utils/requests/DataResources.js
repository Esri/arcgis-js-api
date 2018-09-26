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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/Deferred","dojo/promise/all","esri/dijit/geoenrichment/utils/DataUtil","./DataResource","./FileContent"],function(e,t,n,r,a,o){function i(e,n,a){return a=a||function(e){return o.getContentConversionType(r.getContentType(e))},n.getFileContent(!0).then(function(n){var r=a(e,n);if(r){var o;switch(r){case"json":case"text":if(o=decodeURIComponent(escape(n.data)),"json"==r)try{o=JSON.parse(o)}catch(e){return t.reject(e)}break;case"base64":o=n.getBase64Data();break;default:o=n.data}return{name:e,data:o}}})}var s=e(null,{items:null,constructor:function(){this.items=[]},addDataResource:function(e,t){this.items.push({name:e,resource:t})},addFileResource:function(e,t,n){"object"==typeof t&&(t instanceof ArrayBuffer||t.buffer instanceof ArrayBuffer)?t=t.buffer||t:(t=o.fromFileData(e,t,n).data,t=r.binaryStringToByteArray(t).buffer),this.addDataResource(e,new a(t))},getResourceFiles:function(e){return n(this.items.map(function(t){return i(t.name,t.resource,e)}))}});return s.getResourceFile=i,s});