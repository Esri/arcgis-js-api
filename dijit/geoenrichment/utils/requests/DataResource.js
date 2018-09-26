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

define(["dojo/_base/declare","dojo/Deferred","dojo/when","./UniversalClient","./FileContent","./BinaryData","./ErrorUtil"],function(e,r,t,n,o,i,s){function a(e,r){return r=r||function(e){return e},t(e,function(e){return e instanceof Error?r(s.makeError(e)):("object"==typeof e&&e.hasOwnProperty("result")||(e={taskName:"executeTask",result:e}),r(e))},function(e){return r(s.makeError(e))})}return e(null,{url:null,allowProxy:!1,data:null,constructor:function(e){"string"==typeof e?this.url=e:void 0!==e&&(this.data=e)},_fileContentPromise:null,getFileContent:function(e){var t=this._fileContentPromise;if(!t||e){var n=new r;t=n.promise,e||(this._fileContentPromise=t),this.getResource("bin",this._getFileContent.bind(this,n))}return t},_getFileContent:function(e,r){if(r instanceof Error)return void e.reject(r);if((r=r.result)instanceof i){var t=r.type;r=r.data}"string"==typeof r?e.resolve(new o(r,t)):window.Blob&&r instanceof Blob?o.fromBlob(r,t).then(e.resolve,e.reject):window.ArrayBuffer&&r instanceof ArrayBuffer?e.resolve(o.fromArrayBuffer(r,t)):r instanceof o?e.resolve(r):e.reject(s.makeError("The resource data isn't binary."))},getResource:function(e,o){if(e||(e="json"),this.data){return a("function"==typeof this.data?this.data(e):this.data,o)}if(this.url){var i=this;return a(n.request(this.url,{handleAs:e}).otherwise(function(t){return i.allowProxy?n.request(this.url,{handleAs:e,useProxy:!0}):new r.reject(t)}),o)}var u=s.makeError("Missing data and url.");return t(o?o(u):u)}})});