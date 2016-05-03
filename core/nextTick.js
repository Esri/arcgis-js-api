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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

define(["dojo/_base/window","./ObjectPool"],function(t,e){var i=t.global,n=i.MutationObserver||i.WebKitMutationObserver,s=new e(function(){this.isActive=!0,this.callback=null},function(){this.isActive=!1,this.callback=null}),r=function(){},u=function(){o.release(this)},o=new e(function(){this.remove=u},function(){this.remove=r,this.destructor&&this.destructor(),this.item.isActive=!1,this.item=null,this.destructor=null}),c=function(t,e){var i=o.acquire();return i.item=t,i.destructor=e,i},a=function(t){t.isActive&&(t.isActive=!1,t.callback()),t.isActive||s.release(t)},l=function(){var t,e,r=function(){if(i.postMessage&&!i.importScripts){var t=!0,e=i.onmessage;return i.onmessage=function(){t=!1},i.postMessage("","*"),i.onmessage=e,t}},u=[];if(n){var o=document.createElement("div"),l=new n(function(){for(;u.length>0;){var t=u.shift();a(t)}});l.observe(o,{attributes:!0}),e=function(t){u.push(t),o.setAttribute("queueStatus","1")}}else r()?(i.addEventListener("message",function(t){if(t.source==i&&"esri-nexttick-message"==t.data)for(t.stopPropagation();u.length;)a(u.shift())},!0),e=function(t){u.push(t),i.postMessage("esri-nexttick-message","*")}):i.setImmediate?(t=i.clearImmediate,e=function(t){return i.setImmediate(a.bind(null,t))}):(t=i.clearTimeout,e=function(t){return i.setTimeout(a.bind(null,t),0)});var f=function(i){var n=s.acquire();n.callback=i;var r=e(n);return c(n,t&&function(){t(r)})};return f}();return l});