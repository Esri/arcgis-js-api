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

define(["dojo/_base/declare","dojo/request/util","esri/lang","./FileContent"],function(t,e,i,r){var a=t(null,{data:null,constructor:function(t){this.data=t}}),n=e.parseArgs;e.parseArgs=function(t,e,i){return e.data&&e.data instanceof a&&(e.data=e.data.data,i=!0),n(t,e,i)};var o=e.deepCreate;return e.deepCreate=function(t,e){return e instanceof a?new a(e.data):o(t,e)},t(null,{addVariables:function(t){for(var e in t)this.addVariable(e,t[e])},addVariable:function(t,e){i.isDefined(e)&&(e instanceof r?this._writeFileContent(t,e):this._writeVariable(t,e.toString()))},build:function(t){this._writeBoundary(!0),t.data=new a(this._prepareBinaryData());var e=t.headers||{};e["Content-Type"]="multipart/form-data; boundary="+this._dataProvider.boundary,t.headers=e,this._dataProvider=null},_prepareBinaryData:function(){var t=this._dataProvider.buffer;if(!window.Uint8Array)return t;for(var e=t.length,i=new Uint8Array(new ArrayBuffer(e)),r=0;r<e;r++)i[r]=t.charCodeAt(r);return i},_getDataProvider:function(){if(!this._dataProvider){for(var t="",e=0;e<32;e++)t+=String.fromCharCode(Math.floor(97+25*Math.random()));this._dataProvider={buffer:"",boundary:t}}return this._dataProvider},_dataProvider:null,_writeVariable:function(t,e){this._writeBoundary(),this._writeContentDisposition(t),this._writeLineBreak(),this._writeData(this._toUTF8(e)),this._writeLineBreak()},_writeFileContent:function(t,e){this._writeBoundary(),this._writeContentDisposition(t,e.filename),e.contentType&&(this._writeData("Content-Type: "+e.contentType),this._writeLineBreak()),e.contentTransferEncoding&&(this._writeData("Content-Transfer-Encoding: "+e.contentTransferEncoding),this._writeLineBreak()),this._writeLineBreak(),this._writeData(e.data),this._writeLineBreak()},_writeBoundary:function(t){this._writeDoubleDash(),this._writeData(this._getDataProvider().boundary),t?this._writeDoubleDash():this._writeLineBreak()},_writeContentDisposition:function(t,e){e=e?'"; filename="'+this._toUTF8(e.replace(/"/g,"'")):"",this._writeData('Content-Disposition: form-data; name="'+this._toUTF8(t)+e+'"'),this._writeLineBreak()},_writeDoubleDash:function(){this._writeData("--")},_writeLineBreak:function(){this._writeData("\r\n")},_writeData:function(t){this._getDataProvider().buffer+=t},_toUTF8:function(t){return unescape(encodeURIComponent(t))}})});