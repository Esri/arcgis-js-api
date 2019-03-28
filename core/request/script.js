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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["require","exports","dojo/Deferred","dojo/request/script","dojo/text!./iframe.html","../sniff"],function(e,t,r,o,n,s){function i(e,t){if(!s("esri-script-sandbox"))return o.get(e,t);var n=null;t&&(n={jsonp:t.jsonp,preventCache:t.preventCache,query:t.query,timeout:t.timeout});var i=new r(function(){if(v){var e=v.indexOf(c);e>-1&&v.splice(e,1)}else c.message.id in j&&delete j[c.message.id]}),c={dfd:i,message:{id:"id"+(++m+Math.random()),url:e,options:n}};return f||(f=a(),u=d(),l(f,u)),v?v.push(c):p(c,u),i.promise}function a(){var t=document.createElement("iframe");if(t.name="esri_core_jsonp_iframe",t.style.display="none",t.setAttribute("sandbox","allow-scripts"),!s("ff")&&"srcdoc"in t){var r=e.toUrl("dojo/dojo.js"),o=n.replace("../../../dojo/dojo.js",r),i=r.slice(0,-7);o=o.replace("../../../dojo/",i),t.srcdoc=o}else{var a=e.toUrl("./iframe.html");"http:"===window.location.protocol&&0===a.indexOf("https:")&&(a=a.replace("https:","http:")),t.src=a}return document.body.appendChild(t),t}function d(){var e=new MessageChannel;return e.port1.addEventListener("message",c),e.port1.start(),e}function c(e){var t=e.data;if("ready"===t){for(var r=0,o=v;r<o.length;r++){var n=o[r];p(n,u)}v=null}else{var n=j[t.id];n&&(delete j[t.id],t.isError?n.dfd.reject(new Error(t.message)):n.dfd.resolve(t.response))}}function l(e,t){e.addEventListener("load",function(){e.contentWindow.postMessage("init","*",[t.port2])})}function p(e,t){j[e.message.id]=e,t.port1.postMessage(e.message)}Object.defineProperty(t,"__esModule",{value:!0});var f,u,m=0,v=[],j={};t.get=i});