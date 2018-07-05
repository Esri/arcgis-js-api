// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/text!./iframe.html","dojo/request/script","../sniff"],function(e,t,r,o,n,s){function i(e,t){if(!s("esri-script-sandbox"))return n.get(e,t);var o=null;t&&(o={jsonp:t.jsonp,preventCache:t.preventCache,query:t.query,timeout:t.timeout});var i=new r(function(){if(j){var e=j.indexOf(l);e>-1&&j.splice(e,1)}else l.message.id in v&&delete v[l.message.id]}),l={dfd:i,message:{id:"id"+(++m+Math.random()),url:e,options:o}};return f||(f=d(),u=a(),c(f,u)),j?j.push(l):p(l,u),i.promise}function d(){var t=document.createElement("iframe");if(t.name="esri_core_jsonp_iframe",t.style.display="none",t.setAttribute("sandbox","allow-scripts"),!s("ff")&&"srcdoc"in t){var r=s("esri-built")?"dojo/dojo-lite.js":"dojo/dojo.js",n=e.toUrl(r),i=o.replace("../../../dojo/dojo.js",n),d=n.slice(0,n.lastIndexOf("/"));i=i.replace("../../../dojo/",d),t.srcdoc=i}else{var a=e.toUrl("./iframe.html");"http:"===window.location.protocol&&0===a.indexOf("https:")&&(a=a.replace("https:","http:")),t.src=a}return document.body.appendChild(t),t}function a(){var e=new MessageChannel;return e.port1.addEventListener("message",l),e.port1.start(),e}function l(e){var t=e.data;if("ready"===t){for(var r=0,o=j;r<o.length;r++){var n=o[r];p(n,u)}j=null}else{var n=v[t.id];n&&(delete v[t.id],t.isError?n.dfd.reject(new Error(t.message)):n.dfd.resolve(t.response))}}function c(e,t){e.addEventListener("load",function(){e.contentWindow.postMessage("init","*",[t.port2])})}function p(e,t){v[e.message.id]=e,t.port1.postMessage(e.message)}Object.defineProperty(t,"__esModule",{value:!0});var f,u,m=0,j=[],v={};t.get=i});