// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.37/esri/copyright.txt for details.

!function(a){var s=a;s.__mutable||s.addEventListener("message",(function(a){var e,t,r,c=a.data;if(c.action){switch(c.action){case"import-script":try{Array.isArray(c.url)||(c.url=[c.url]),s.importScripts.apply(s,c.url),t=!0}catch(a){e=a,postMessage({msgId:c.msgId,urls:c.url,status:"debug",message:"import failed - "+a.message})}break;case"add-callback":try{s.importScripts(c.url);var i=s[c.cbName||"main"];if(!i){e={message:(c.cbName||"main")+" was not found in "+c.url};break}s.postMessage=(r=s.postMessage,function(a,s){!1!==i(a)&&(s?r(a,s):r(a))}),t=!0}catch(a){e=a}}if(t){var m={msgId:c.msgId,success:!0,action:c.action,actionUrl:c.url};"add-callback"==c.action&&(m.cbName=c.cbName||"main"),postMessage(m)}else e&&postMessage({status:"error",msgId:c.msgId,message:e.message,action:c.action})}}),!1),s.__mutable=!0}(self);