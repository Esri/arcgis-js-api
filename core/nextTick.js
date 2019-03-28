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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","./global"],function(e,t,n){function r(){if(n.postMessage&&!n.importScripts){var e=n.onmessage,t=!0;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}return!1}function s(e){u.push(e),1===u.length&&o(function(){for(var e=0,t=f;e<t.length;e++){(0,t[e])()}var n=u.slice();u.length=0;for(var r=0,s=n;r<s.length;r++){(0,s[r])()}})}var i=n.MutationObserver||n.WebKitMutationObserver,o=function(){if(n.process&&n.process.nextTick)return function(e){n.process.nextTick(e)};if(n.Promise)return function(e){n.Promise.resolve().then(e)};if(i){var e=[],t=document.createElement("div");return new i(function(){for(;e.length>0;)e.shift()()}).observe(t,{attributes:!0}),function(n){e.push(n),t.setAttribute("queueStatus","1")}}if(r()){var s=[];return n.addEventListener("message",function(e){if(e.source===n&&"esri-nexttick-message"===e.data)for(e.stopPropagation();s.length;)s.shift()()},!0),function(e){s.push(e),n.postMessage("esri-nexttick-message","*")}}return n.setImmediate?function(e){return n.setImmediate(e)}:function(e){return n.setTimeout(e,0)}}(),u=[],f=[];return function(e){function t(e){return f.push(e),{remove:function(){f=f.filter(function(t){return t!==e})}}}e.before=t}(s||(s={})),s});