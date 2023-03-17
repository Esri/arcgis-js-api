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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["esri/dijit/geoenrichment/Deferred","esri/dijit/geoenrichment/when","./DataUtil","./ImageUtil"],(function(e,n,t,r){"use strict";function i(){return new e.reject(new Error("Saving not supported."))}var a=i,o=/[\\/:*?"<>|]/g,u={savingSupported:function(){return void 0!==window.Blob},saveTextFile:function(e,n,t,r){return u.savingSupported()?u.saveAs(new Blob([e],{type:t||"text/plain"}),n||"text.txt",r):i()},saveImageFile:function(e,n){if(u.savingSupported()){var a;if("string"==typeof e){var o=r.base64DataFromDataURL(e);a=t.binaryStringToByteArray(atob(o)).buffer}else e instanceof ArrayBuffer&&(a=e);return u.saveAs(a?t.arrayBuffersToBlob([a],"image/png"):e,n)}i()},_queue:[],_isSavePendingFlag:!1,_saveTimeoutH:null,saveAs:function(n,t,r){if(r&&r.addDownloadIntervals){var i=new e;return u._queue.push({blob:n,name:t||"download",dfd:i}),u._trySaveAsNext(),i.promise}return a(n,u.validateName(t||"download"))},_trySaveAsNext:function(){if(u._queue.length&&!u._isSavePendingFlag){var e=u._queue.shift();u._isSavePendingFlag=!0,n(a(e.blob,u.validateName(e.name))).then(e.dfd.resolve,e.dfd.reject).always((function(){setTimeout((function(){u._isSavePendingFlag=!1,u._trySaveAsNext()}),100)}))}},validateName:function(e){return String(e).trim().replace(o,"")}};if(!u.savingSupported())return u;if(window.navigator&&window.navigator.msSaveOrOpenBlob)return a=function(n,t){var r=new e;return window.navigator.msSaveOrOpenBlob(n,t)?r.resolve():r.reject(new Error("Failed to save or open downloaded file.")),r.promise},u;var s=window.URL||window.webkitURL,d=function(){return window.document.createElement("a")};if("download"in d()){return a=function(n,t){var r,i,a=new e,o=s.createObjectURL(n),u=d();return u.href=o,u.download=t,r=u,void 0!==window.MouseEvent?i=new MouseEvent("click",{bubbles:!0,cancelable:!1}):(i=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(i),setTimeout((function(){s.revokeObjectURL(o),u=null,a.resolve(),a=null}),1e3),a.promise},u}return a=function(n,t){var r=new e,i=new File([n],t,{type:n.type}),a=s.createObjectURL(i);return window.open(a,"_blank"),setTimeout((function(){s.revokeObjectURL(a),r.resolve()}),1e3),r.promise},u}));