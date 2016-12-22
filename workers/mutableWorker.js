// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

!function(a){function s(a){var s,t,r=a.data;if(r.action){switch(r.action){case"import-script":try{Array.isArray(r.url)||(r.url=[r.url]),e.importScripts.apply(e,r.url),t=!0}catch(c){s=c,postMessage({msgId:r.msgId,urls:r.url,status:"debug",message:"import failed - "+c.message})}break;case"add-callback":try{e.importScripts(r.url);var i=e[r.cbName||"main"];if(!i){s={message:(r.cbName||"main")+" was not found in "+r.url};break}e.postMessage=function(a){return function(s,e){i(s)!==!1&&(e?a(s,e):a(s))}}(e.postMessage),t=!0}catch(c){s=c}}if(t){var m={msgId:r.msgId,success:!0,action:r.action,actionUrl:r.url};"add-callback"==r.action&&(m.cbName=r.cbName||"main"),postMessage(m)}else s&&postMessage({status:"error",msgId:r.msgId,message:s.message,action:r.action})}}var e=a;e.__mutable||e.addEventListener("message",s,!1),e.__mutable=!0}(self);