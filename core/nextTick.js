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

define(["require","exports"],function(e,t){function s(){if(n.postMessage&&!n.importScripts){var e=n.onmessage,t=!0;return n.onmessage=function(){t=!1},n.postMessage("","*"),n.onmessage=e,t}return!1}var n=function(){return this}(),i=n.MutationObserver||n.WebKitMutationObserver,r=function(){var e;if(n.process&&n.process.nextTick)e=function(e){n.process.nextTick(e)};else if(n.Promise)e=function(e){n.Promise.resolve().then(e)};else if(i){var t=[],r=document.createElement("div"),o=new i(function(){for(;t.length>0;)t.shift()()});o.observe(r,{attributes:!0}),e=function(e){t.push(e),r.setAttribute("queueStatus","1")}}else if(s()){var u=[];n.addEventListener("message",function(e){if(e.source===n&&"esri-nexttick-message"===e.data)for(e.stopPropagation();u.length;)u.shift()()},!0),e=function(e){u.push(e),n.postMessage("esri-nexttick-message","*")}}else e=n.setImmediate?function(e){return n.setImmediate(e)}:function(e){return n.setTimeout(e,0)};return e}();return r});