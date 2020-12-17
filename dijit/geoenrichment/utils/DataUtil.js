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

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when"],(function(e,t){var r={};function n(e){return"string"==typeof e?{source:e,getLength:function(){return this.source.length},getByte:function(e){return 255&this.source.charCodeAt(e)}}:window.ArrayBuffer&&e instanceof ArrayBuffer?{source:new Uint8Array(e),getLength:function(){return this.source.byteLength},getByte:function(e){return this.source[e]}}:e}function o(e){for(var t=e.length,r=new Uint8Array(e.length),n=0;n<t;n++)r[n]=e.charCodeAt(n);return r}function i(e,t){var r=new Uint8Array(e);t=Math.min(t,r.byteLength);for(var n="",o=0;o<t;o++)n+=String.fromCharCode(r[o]);return n}return r.arrayBufferFromBlob=function(t){var r=new e,n=new FileReader;return n.onloadend=function(){n.error?r.reject(n.error):r.resolve(n.result)},n.readAsArrayBuffer(t),r.promise},r.arrayBuffersToBlob=function(e,t){return new Blob(e,{type:t||"application/octet-stream"})},r.binaryStringFromByteSource=function(e){if("string"==typeof e)return e;for(var t,r,o,i,a=(e=n(e)).getLength(),u=a%4,f=a-u,s="",g=0;g<f;)t=e.getByte(g++),r=e.getByte(g++),o=e.getByte(g++),i=e.getByte(g++),s+=String.fromCharCode(t,r,o,i);return 1==u?s+=String.fromCharCode(e.getByte(g)):2==u?s+=String.fromCharCode(e.getByte(g),e.getByte(g+1)):3==u&&(s+=String.fromCharCode(e.getByte(g),e.getByte(g+1),e.getByte(g+2))),s},r.base64FromByteSource=function(e){for(var t,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=(e=n(e)).getLength(),i=o%3,a=o-i,u="",f=0;f<a;f+=3)u+=r[(t=e.getByte(f)<<16|e.getByte(f+1)<<8|e.getByte(f+2))>>18&63]+r[t>>12&63]+r[t>>6&63]+r[63&t];return 1==i?u+=r[(t=e.getByte(f))>>2&63]+r[t<<4&63]+"==":2==i&&(u+=r[(t=e.getByte(f)<<8|e.getByte(f+1))>>10&63]+r[t>>4&63]+r[t<<2&63]+"="),u},r.base64FromJson=function(e){return btoa(unescape(encodeURIComponent("string"==typeof e?e:JSON.stringify(e))))},r.binaryStringToByteArray=o,r.base64ToByteArray=function(e){return o(atob(e))},r.getFirstBytes=function(r,n){var o;if("string"==typeof r)o=r.substr(0,n);else if(window.ArrayBuffer&&r instanceof ArrayBuffer)o=i(r,n);else if(window.Blob&&r instanceof Blob){o=new e;var a=new FileReader;a.onloadend=function(){a.error?o.resolve(""):o.resolve(i(a.result,n))},a.readAsArrayBuffer(r.slice(0,n))}return t(o||"")},r.isBase64=function(e){return e&&e.length%4==0&&/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+\/]+$/.test(e.replace(/={0,2}$/,""))},r.base64ToJson=function(e){return JSON.parse(decodeURIComponent(atob(e)))},r.getContentType=function(e){var t=r.getFileExtension(e);if(null===t)return null;switch(t){case"png":return"image/png";case"jpg":case"jpeg":return"image/jpeg";case"gif":return"image/gif";case"json":return"application/json";case"txt":return"text/plain";case"xml":return"text/xml";default:return null}},r.getFileExtension=function(e){var t=e.lastIndexOf(".")+1;return t?e.substr(t).toLowerCase():null},r}));