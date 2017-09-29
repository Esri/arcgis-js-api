// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/Deferred","dojo/when"],function(e,r){function t(r){var t=new e,n=new FileReader;return n.onloadend=function(){n.error?t.reject(n.error):t.resolve(n.result)},n.readAsArrayBuffer(r),t.promise}function n(e,r){return new Blob(e,{type:r||"application/octet-stream"})}function o(e){return"string"==typeof e?{source:e,getLength:function(){return this.source.length},getByte:function(e){return 255&this.source.charCodeAt(e)}}:window.ArrayBuffer&&e instanceof ArrayBuffer?{source:new Uint8Array(e),getLength:function(){return this.source.byteLength},getByte:function(e){return this.source[e]}}:e}function a(e){if("string"==typeof e)return e;e=o(e);for(var r,t,n,a,i=e.getLength(),u=i%4,f=i-u,g="",s=0;f>s;)r=e.getByte(s++),t=e.getByte(s++),n=e.getByte(s++),a=e.getByte(s++),g+=String.fromCharCode(r,t,n,a);return 1==u?g+=String.fromCharCode(e.getByte(s)):2==u?g+=String.fromCharCode(e.getByte(s),e.getByte(s+1)):3==u&&(g+=String.fromCharCode(e.getByte(s),e.getByte(s+1),e.getByte(s+2))),g}function i(e){var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";e=o(e);for(var t,n,a,i,u,f=e.getLength(),g=f%3,s=f-g,c="",y=0;s>y;y+=3)u=e.getByte(y)<<16|e.getByte(y+1)<<8|e.getByte(y+2),t=u>>18&63,n=u>>12&63,a=u>>6&63,i=63&u,c+=r[t]+r[n]+r[a]+r[i];return 1==g?(u=e.getByte(y),t=u>>2&63,n=u<<4&63,c+=r[t]+r[n]+"=="):2==g&&(u=e.getByte(y)<<8|e.getByte(y+1),t=u>>10&63,n=u>>4&63,a=u<<2&63,c+=r[t]+r[n]+r[a]+"="),c}function u(e){for(var r=e.length,t=new Uint8Array(e.length),n=0;r>n;n++)t[n]=e.charCodeAt(n);return t}function f(e){return u(atob(e))}function g(t,n){var o;if("string"==typeof t)o=t.substr(0,n);else if(window.ArrayBuffer&&t instanceof ArrayBuffer)o=s(t,n);else if(window.Blob&&t instanceof Blob){o=new e;var a=new FileReader;a.onloadend=function(){a.error?o.resolve(""):o.resolve(s(a.result,n))},a.readAsArrayBuffer(t.slice(0,n))}return r(o||"")}function s(e,r){var t=new Uint8Array(e);r=Math.min(r,t.byteLength);for(var n="",o=0;r>o;o++)n+=String.fromCharCode(t[o]);return n}function c(e){return e&&e.length%4==0&&/^[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+\/]+$/.test(e.replace(/={0,2}$/,""))}function y(e){var r=e.lastIndexOf(".")+1;if(!r)return null;switch(e.substr(r).toLowerCase()){case"png":return"image/png";case"jpg":case"jpeg":return"image/jpeg";case"gif":return"image/gif";case"json":return"application/json";case"txt":return"text/plain";case"xml":return"text/xml";default:return null}}var B={};return B.arrayBufferFromBlob=t,B.arrayBuffersToBlob=n,B.binaryStringFromByteSource=a,B.base64FromByteSource=i,B.binaryStringToByteArray=u,B.base64ToByteArray=f,B.getFirstBytes=g,B.isBase64=c,B.getContentType=y,B});