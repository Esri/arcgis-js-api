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

define(["dojo/Deferred"],function(e){"use strict";function n(){return new e.reject(new Error("Saving not supported."))}var t=n,r=/[\\\/:*?"<>|]/g,o={savingSupported:function(){return void 0!==window.Blob},saveTextFile:function(e,t,r){return o.savingSupported()?o.saveAs(new Blob([e],{type:r||"text/plain"}),t||"text.txt"):n()},saveAs:function(e,n){return t(e,o.validateName(n||"download"))},validateName:function(e){return String(e).trim().replace(r,"")}};if(!o.savingSupported())return o;if(window.navigator&&window.navigator.msSaveOrOpenBlob)return t=function(n,t){var r=new e;return window.navigator.msSaveOrOpenBlob(n,t)?r.resolve():r.reject(new Error("Failed to save or open downloaded file.")),r.promise},o;var i=window.URL||window.webkitURL,a=function(){return window.document.createElement("a")};if("download"in a()){var u=function(e){var n;void 0!==window.MouseEvent?n=new MouseEvent("click",{bubbles:!0,cancelable:!1}):(n=document.createEvent("MouseEvent"),n.initMouseEvent("click",!0,!1,window,0,0,0,0,0,!1,!1,!1,!1,0,null)),e.dispatchEvent(n)};return t=function(n,t){var r=new e,o=i.createObjectURL(n),v=a();return v.href=o,v.download=t,u(v),setTimeout(function(){i.revokeObjectURL(o),r.resolve()},1e3),r.promise},o}return t=function(n,t){var r=new e,o=new File([n],t,{type:n.type}),a=i.createObjectURL(o);return window.open(a,"_blank"),setTimeout(function(){i.revokeObjectURL(a),r.resolve()},1e3),r.promise},o});