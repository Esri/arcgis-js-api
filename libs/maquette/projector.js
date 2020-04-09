// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","./dom"],(function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0});var o,t=function(e,r){for(var n=[];e!==r;)n.push(e),e=e.parentNode;return n};o=Array.prototype.find?function(e,r){return e.find(r)}:function(e,r){return e.filter(r)[0]};var i=function(e,r){var n=e;return r.forEach((function(e){n=n&&n.children?o(n.children,(function(r){return r.domNode===e})):void 0})),n};r.createProjector=function(e){var r,o,u=n.applyDefaultProjectionOptions(e),d=u.performanceLogger,c=!0,a=!1,f=[],p=[],s=function(e,n,o){var c;u.eventHandlerInterceptor=function(e,r,n){var o=function(o){n("domEvent",o);var u=r(),d=t(o.currentTarget,u.domNode);d.reverse();var c,a=i(u.getLastRender(),d);return e.scheduleRender(),a&&(c=a.properties["on"+o.type].apply(a.properties.bind||this,arguments)),n("domEventProcessed",o),c};return function(){return o}}(r,(function(){return c}),d),c=e(n,o(),u),f.push(c),p.push(o)},v=function(){if(o=void 0,c){c=!1,d("renderStart",void 0);for(var e=0;e<f.length;e++){var r=p[e]();d("rendered",void 0),f[e].update(r),d("patched",void 0)}d("renderDone",void 0),c=!0}};return r={renderNow:v,scheduleRender:function(){o||a||(o=requestAnimationFrame(v))},stop:function(){o&&(cancelAnimationFrame(o),o=void 0),a=!0},resume:function(){a=!1,c=!0,r.scheduleRender()},append:function(e,r){s(n.dom.append,e,r)},insertBefore:function(e,r){s(n.dom.insertBefore,e,r)},merge:function(e,r){s(n.dom.merge,e,r)},replace:function(e,r){s(n.dom.replace,e,r)},detach:function(e){for(var r=0;r<p.length;r++)if(p[r]===e)return p.splice(r,1),f.splice(r,1)[0];throw new Error("renderFunction was not found")}}}}));