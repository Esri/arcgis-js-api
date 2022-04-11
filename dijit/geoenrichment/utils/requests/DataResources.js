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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/utils/DataUtil","./DataResource","./FileContent"],(function(e,t,n,r,a,i){function o(e,n,a){return a=a||function(e){return i.getContentConversionType(r.getContentType(e))},n.getFileContent(!0).then((function(n){var r=a(e,n);if(r){var i;switch(r){case"json":case"text":if(i=decodeURIComponent(escape(n.data)),"json"==r)try{i=JSON.parse(i)}catch(e){return t.reject(e)}break;case"base64":i=n.getBase64Data();break;default:i=n.data}return{name:e,data:i}}}))}var s=e(null,{items:null,constructor:function(){this.items=[]},addDataResource:function(e,t){this.items.push({name:e,resource:t})},addFileResource:function(e,t,n){"object"==typeof t&&(t instanceof ArrayBuffer||t.buffer instanceof ArrayBuffer)?t=t.buffer||t:(t=i.fromFileData(e,t,n).data,t=r.binaryStringToByteArray(t).buffer),this.addDataResource(e,new a(t))},getResourceFiles:function(e){return n(this.items.map((function(t){return o(t.name,t.resource,e)})))}});return s.getResourceFile=o,s}));