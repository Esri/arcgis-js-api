// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./dom"],function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o,t=function(e,r){for(var n=[];e!==r;)n.push(e),e=e.parentNode;return n};o=Array.prototype.find?function(e,r){return e.find(r)}:function(e,r){return e.filter(r)[0]};var i=function(e,r){var n=e;return r.forEach(function(e){n=n&&n.children?o(n.children,function(r){return r.domNode===e}):void 0}),n},u=function(e,r,n){var o=function(o){n("domEvent",o);var u=r(),d=t(o.currentTarget,u.domNode);d.reverse();var c=i(u.getLastRender(),d);e.scheduleRender();var a;return c&&(a=c.properties["on"+o.type].apply(c.properties.bind||this,arguments)),n("domEventProcessed",o),a};return function(e,r,n,t){return o}};r.createProjector=function(e){var r,o,t=n.applyDefaultProjectionOptions(e),i=t.performanceLogger,d=!0,c=!1,a=[],f=[],p=function(e,n,o){var d,c=function(){return d};t.eventHandlerInterceptor=u(r,c,i),d=e(n,o(),t),a.push(d),f.push(o)},v=function(){if(o=void 0,d){d=!1,i("renderStart",void 0);for(var e=0;e<a.length;e++){var r=f[e]();i("rendered",void 0),a[e].update(r),i("patched",void 0)}i("renderDone",void 0),d=!0}};return r={renderNow:v,scheduleRender:function(){o||c||(o=requestAnimationFrame(v))},stop:function(){o&&(cancelAnimationFrame(o),o=void 0),c=!0},resume:function(){c=!1,d=!0,r.scheduleRender()},append:function(e,r){p(n.dom.append,e,r)},insertBefore:function(e,r){p(n.dom.insertBefore,e,r)},merge:function(e,r){p(n.dom.merge,e,r)},replace:function(e,r){p(n.dom.replace,e,r)},detach:function(e){for(var r=0;r<f.length;r++)if(f[r]===e)return f.splice(r,1),a.splice(r,1)[0];throw new Error("renderFunction was not found")}}}});