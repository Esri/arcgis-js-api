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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],(function(e,r){var t={};function n(e){return"string"==typeof e?{source:e,getLength:function(){return this.source.length},getByte:function(e){return 255&this.source.charCodeAt(e)}}:window.ArrayBuffer&&e instanceof ArrayBuffer?{source:new Uint8Array(e),getLength:function(){return this.source.byteLength},getByte:function(e){return this.source[e]}}:e}function o(e){for(var r=e.length,t=new Uint8Array(e.length),n=0;n<r;n++)t[n]=e.charCodeAt(n);return t}function i(e,r){var t=new Uint8Array(e);r=Math.min(r,t.byteLength);for(var n="",o=0;o<r;o++)n+=String.fromCharCode(t[o]);return n}return t.arrayBufferFromBlob=function(r){var t=new e,n=new FileReader;return n.onloadend=function(){n.error?t.reject(n.error):t.resolve(n.result)},n.readAsArrayBuffer(r),t.promise},t.arrayBuffersToBlob=function(e,r){return new Blob(e,{type:r||"application/octet-stream"})},t.binaryStringFromByteSource=function(e){if("string"==typeof e)return e;for(var r,t,o,i,a=(e=n(e)).getLength(),u=a%4,f=a-u,s="",g=0;g<f;)r=e.getByte(g++),t=e.getByte(g++),o=e.getByte(g++),i=e.getByte(g++),s+=String.fromCharCode(r,t,o,i);return 1==u?s+=String.fromCharCode(e.getByte(g)):2==u?s+=String.fromCharCode(e.getByte(g),e.getByte(g+1)):3==u&&(s+=String.fromCharCode(e.getByte(g),e.getByte(g+1),e.getByte(g+2))),s},t.base64FromByteSource=function(e){for(var r,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=(e=n(e)).getLength(),i=o%3,a=o-i,u="",f=0;f<a;f+=3)u+=t[(r=e.getByte(f)<<16|e.getByte(f+1)<<8|e.getByte(f+2))>>18&63]+t[r>>12&63]+t[r>>6&63]+t[63&r];return 1==i?u+=t[(r=e.getByte(f))>>2&63]+t[r<<4&63]+"==":2==i&&(u+=t[(r=e.getByte(f)<<8|e.getByte(f+1))>>10&63]+t[r>>4&63]+t[r<<2&63]+"="),u},t.base64FromJson=function(e){return btoa(unescape(encodeURIComponent("string"==typeof e?e:JSON.stringify(e))))},t.binaryStringToByteArray=o,t.base64ToByteArray=function(e){return o(atob(e))},t.getFirstBytes=function(t,n){var o;if("string"==typeof t)o=t.substr(0,n);else if(window.ArrayBuffer&&t instanceof ArrayBuffer)o=i(t,n);else if(window.Blob&&t instanceof Blob){o=new e;var a=new FileReader;a.onloadend=function(){a.error?o.resolve(""):o.resolve(i(a.result,n))},a.readAsArrayBuffer(t.slice(0,n))}return r(o||"")},t.isBase64=function(e){return e&&e.length%4==0&&/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+\/]+$/.test(e.replace(/={0,2}$/,""))},t.getContentType=function(e){var r=t.getFileExtension(e);if(null===r)return null;switch(r){case"png":return"image/png";case"jpg":case"jpeg":return"image/jpeg";case"gif":return"image/gif";case"json":return"application/json";case"txt":return"text/plain";case"xml":return"text/xml";default:return null}},t.getFileExtension=function(e){var r=e.lastIndexOf(".")+1;return r?e.substr(r).toLowerCase():null},t}));