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

function sendRequest(e){var s=e.data,t=s.method,a=s.url,r=s.options||{},n=r.data,o=!r.sync,d=r.query;if(a&&!s.action){var l=new XMLHttpRequest;!n&&d&&(a+="?"+d),addEventListeners(l,s),l.open(t,a,o,r.user||void 0,r.password||void 0),r.withCredentials&&(l.withCredentials=r.withCredentials);var i=r.headers,p="application/x-www-form-urlencoded";if(i)for(var u in i)"content-type"===u.toLowerCase()?p=i[u]:i[u]&&l.setRequestHeader(u,i[u]);if(p&&p!==!1&&l.setRequestHeader("Content-Type",p),s.handleAs){var c=s.handleAs.toLowerCase();switch(c){case"xml":case"html":l.responseType="document";var g="xml"==c?"text/xml":"text/html";l.overrideMimeType(g);break;case"json":case"text":case"blob":case"arraybuffer":l.responseType=c}}postMessage({msgId:s.msgId,status:"progress",url:a,headers:i,data:n}),l.send(n)}}function addEventListeners(e,s){function t(e){var t=e.target,a=new Error("Unable to load "+s.url+" status: "+t.status,s);postMessage({msgId:s.msgId,status:"error",url:s.url,message:a.message})}function a(e){var t={msgId:s.msgId,status:"progress",url:s.url};e.lengthComputable&&(t.loaded=e.loaded,t.total=e.total),postMessage(t)}function r(e){var t=e.target,a=t.response instanceof Object?t.response:parseResponse(t,s.options.handleAs),r=t.getAllResponseHeaders(),n=r.match(/\w+[\-]?\w+?\:\s/g);r=r.split("\n");var o=n.reduce(function(e,s,t){return e[s.split(":")[0]]=r[t].split(s)[1],e},{});postMessage({msgId:s.msgId,url:s.url,response:a,headers:o,statusText:t.statusText,status:t.status,readyState:t.readyState})}e.addEventListener("load",r,!1),e.addEventListener("error",t,!1),e.addEventListener("progress",a,!1)}function parseResponse(e,s){var t=e.responseText,a=e.getResponseHeader("content-type");if(a.indexOf("json")>-1||"json"==s)try{t=JSON.parse(e.responseText)}catch(r){}else(a.indexOf("xml")>-1||"xml"==s)&&e.responseXML&&(t=e.responseXML);return t}self.addEventListener("message",sendRequest);