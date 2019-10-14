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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","./DataUtil","./ImageUtil"],function(e,n,t){"use strict";function r(){return new e.reject(new Error("Saving not supported."))}var o=r,i=/[\\\/:*?"<>|]/g,a={savingSupported:function(){return void 0!==window.Blob},saveTextFile:function(e,n,t){return a.savingSupported()?a.saveAs(new Blob([e],{type:t||"text/plain"}),n||"text.txt"):r()},saveImageFile:function(e,o){if(!a.savingSupported())return void r();var i;if("string"==typeof e){var u=t.base64DataFromDataURL(e);i=n.binaryStringToByteArray(atob(u)).buffer}else e instanceof ArrayBuffer&&(i=e);return a.saveAs(i?n.arrayBuffersToBlob([i],"image/png"):e,o)},saveAs:function(e,n){return o(e,a.validateName(n||"download"))},validateName:function(e){return String(e).trim().replace(i,"")}};if(!a.savingSupported())return a;if(window.navigator&&window.navigator.msSaveOrOpenBlob)return o=function(n,t){var r=new e;return window.navigator.msSaveOrOpenBlob(n,t)?r.resolve():r.reject(new Error("Failed to save or open downloaded file.")),r.promise},a;var u=window.URL||window.webkitURL,v=function(){return window.document.createElement("a")};if("download"in v()){var s=function(e){var n;void 0!==window.MouseEvent?n=new MouseEvent("click",{bubbles:!0,cancelable:!1}):(n=document.createEvent("MouseEvent"),n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),e.dispatchEvent(n)};return o=function(n,t){var r=new e,o=u.createObjectURL(n),i=v();return i.href=o,i.download=t,s(i),setTimeout(function(){u.revokeObjectURL(o),r.resolve()},1e3),r.promise},a}return o=function(n,t){var r=new e,o=new File([n],t,{type:n.type}),i=u.createObjectURL(o);return window.open(i,"_blank"),setTimeout(function(){u.revokeObjectURL(i),r.resolve()},1e3),r.promise},a});