// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/_base/declare","esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./UniversalClient","./FileContent","./BinaryData","./ErrorUtil"],(function(e,r,t,n,i,o,s){function a(e,r){return r=r||function(e){return e},t(e,(function(e){return e instanceof Error?r(s.makeError(e)):("object"==typeof e&&e.hasOwnProperty("result")||(e={taskName:"executeTask",result:e}),r(e))}),(function(e){return r(s.makeError(e))}))}return e(null,{url:null,allowProxy:!1,data:null,constructor:function(e){"string"==typeof e?this.url=e:void 0!==e&&(this.data=e)},_fileContentPromise:null,getFileContent:function(e){var t=this._fileContentPromise;if(!t||e){var n=new r;t=n.promise,e||(this._fileContentPromise=t),this.getResource("bin",this._getFileContent.bind(this,n))}return t},_getFileContent:function(e,r){if(r instanceof Error)e.reject(r);else{if((r=r.result)instanceof o){var t=r.type;r=r.data}"string"==typeof r?e.resolve(new i(r,t)):window.Blob&&r instanceof Blob?i.fromBlob(r,t).then(e.resolve,e.reject):window.ArrayBuffer&&r instanceof ArrayBuffer?e.resolve(i.fromArrayBuffer(r,t)):r instanceof i?e.resolve(r):e.reject(s.makeError("The resource data isn't binary."))}},getResource:function(e,i){if(e||(e="json"),this.data)return a("function"==typeof this.data?this.data(e):this.data,i);if(this.url){var o=this;return a(n.request(this.url,{handleAs:e}).otherwise((function(t){return o.allowProxy?n.request(this.url,{handleAs:e,useProxy:!0}):new r.reject(t)})),i)}var u=s.makeError("Missing data and url.");return t(i?i(u):u)}})}));