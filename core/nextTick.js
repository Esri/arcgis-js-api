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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./global"],function(e,t,s){function n(){if(s.postMessage&&!s.importScripts){var e=s.onmessage,t=!0;return s.onmessage=function(){t=!1},s.postMessage("","*"),s.onmessage=e,t}return!1}var i=s.MutationObserver||s.WebKitMutationObserver;return function(){var e;if(s.process&&s.process.nextTick)e=function(e){s.process.nextTick(e)};else if(s.Promise)e=function(e){s.Promise.resolve().then(e)};else if(i){var t=[],r=document.createElement("div"),o=new i(function(){for(;t.length>0;)t.shift()()});o.observe(r,{attributes:!0}),e=function(e){t.push(e),r.setAttribute("queueStatus","1")}}else if(n()){var u=[];s.addEventListener("message",function(e){if(e.source===s&&"esri-nexttick-message"===e.data)for(e.stopPropagation();u.length;)u.shift()()},!0),e=function(e){u.push(e),s.postMessage("esri-nexttick-message","*")}}else e=s.setImmediate?function(e){return s.setImmediate(e)}:function(e){return s.setTimeout(e,0)};return e}()});