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

define(["require","exports","dojo/Deferred","dojo/request/script","dojo/text!./iframe.html","../sniff"],(function(e,t,r,o,n,s){var i,a;Object.defineProperty(t,"__esModule",{value:!0});var d=0,c=[],l={};function p(e){var t=e.data;if("ready"===t){for(var r=0,o=c;r<o.length;r++){f(n=o[r],a)}c=null}else{var n;(n=l[t.id])&&(delete l[t.id],t.isError?n.dfd.reject(new Error(t.message)):n.dfd.resolve(t.response))}}function f(e,t){l[e.message.id]=e,t.port1.postMessage(e.message)}t.get=function(t,u){if(!s("esri-script-sandbox"))return o.get(t,u);var m=null;u&&(m={jsonp:u.jsonp,preventCache:u.preventCache,query:u.query,timeout:u.timeout});var v=new r((function(){if(c){var e=c.indexOf(j);e>-1&&c.splice(e,1)}else j.message.id in l&&delete l[j.message.id]})),j={dfd:v,message:{id:"id"+(++d+Math.random()),url:t,options:m}};return i||(i=function(){var t=document.createElement("iframe");if(t.name="esri_core_jsonp_iframe",t.style.display="none",t.setAttribute("sandbox","allow-scripts"),!s("ff")&&"srcdoc"in t){var r=e.toUrl("dojo/dojo.js"),o=n.replace("../../../dojo/dojo.js",r),i=r.slice(0,-7);o=o.replace("../../../dojo/",i),t.srcdoc=o}else{var a=e.toUrl("./iframe.html");"http:"===window.location.protocol&&0===a.indexOf("https:")&&(a=a.replace("https:","http:")),t.src=a}return document.body.appendChild(t),t}(),a=function(){var e=new MessageChannel;return e.port1.addEventListener("message",p),e.port1.start(),e}(),function(e,t){e.addEventListener("load",(function(){e.contentWindow.postMessage("init","*",[t.port2])}))}(i,a)),c?c.push(j):f(j,a),v.promise}}));