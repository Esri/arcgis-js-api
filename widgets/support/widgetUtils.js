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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/ArrayPool","../../core/arrayUtils","../../core/has","../../core/Logger","../../libs/sanitizer/Sanitizer","maquette-css-transitions"],(function(e,t,r,i,n,a,o,s,d){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.keepMenuItemWithinView=t.renderingSanitizer=t.safeAttrs=t.additionalAllowedTags=t.cssTransition=t.storeNode=t.discardNode=t.isRTL=t.classes=void 0;var l=a("esri-debug-messages"),c=o.getLogger("esri.widgets.support.widgetUtils");t.classes=function(e){for(var t=i.acquire(),r=0;r<arguments.length;r++){var n=arguments[r],a=typeof n;if("string"===a)t.push(n);else if(Array.isArray(n))t.push.apply(t,n);else if("object"===a)for(var o in n)n[o]&&t.push(o)}var s=t.join(" ");return i.release(t),s},t.isRTL=function(){return"rtl"===document.dir},t.discardNode=function(e){var t=e.getAttribute("data-node-ref");if(l){if(!t)return void c.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(t in this))return void c.error("[Widget] cannot discard "+t+" if not defined on instance.")}this[t]=null},t.storeNode=function(e){var t=e.getAttribute("data-node-ref");if(l){if(!t)return void c.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(t in this))return void c.error("[Widget] cannot store "+t+" if not defined on instance.")}this[t]=e},t.cssTransition=function(e,t){return("enter"===e?d.createEnterCssTransition:d.createExitCssTransition)(t)};t.additionalAllowedTags=r.__spreadArrays(["h1","h2","h3","h4","h5","h6","sub","sup"],["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]);var g=t.additionalAllowedTags.reduce((function(e,t){return e[t]=[],e}),{});t.safeAttrs=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"];t.renderingSanitizer=new s({whiteList:g,onTagAttr:function(e,r,i){var a=r+'="'+i+'"';if(n.includes(t.safeAttrs,r))return a},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0),t.keepMenuItemWithinView=function(e,t){var r=e.getBoundingClientRect(),i=t.getBoundingClientRect(),n=r.top+r.height,a=i.top+i.height,o=r.top,s=i.top;(n>a||o<s)&&e.scrollIntoView({block:"end"})}}));