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

define(["require","exports","../../core/ArrayPool","../../core/arrayUtils","../../core/has","../../core/Logger","../../libs/sanitizer/Sanitizer","maquette-css-transitions"],(function(e,r,t,i,n,a,o,s){Object.defineProperty(r,"__esModule",{value:!0});var d=n("dojo-debug-messages"),l=a.getLogger("esri.widgets.support.widgetUtils");r.join=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return d&&e.length<2&&l.error("[Widget] `join` is intended for 2 or more CSS classes."),e.join(" ")},r.classes=function(e){for(var r=t.acquire(),i=0;i<arguments.length;i++){var n=arguments[i],a=typeof n;if("string"===a)r.push(n);else if(Array.isArray(n))r.push.apply(r,n);else if("object"===a)for(var o in n)n[o]&&r.push(o)}var s=r.join(" ");return t.release(r),s},r.isRTL=function(){return"rtl"===document.dir},r.discardNode=function(e){var r=e.getAttribute("data-node-ref");if(d){if(!r)return void l.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(r in this))return void l.error("[Widget] cannot discard "+r+" if not defined on instance.")}this[r]=null},r.storeNode=function(e){var r=e.getAttribute("data-node-ref");if(d){if(!r)return void l.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(r in this))return void l.error("[Widget] cannot store "+r+" if not defined on instance.")}this[r]=e},r.cssTransition=function(e,r){return("enter"===e?s.createEnterCssTransition:s.createExitCssTransition)(r)};r.additionalWhiteListedTags=["h1","h2","h3","h4","h5","h6","sub","sup"].concat(["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]);var c=r.additionalWhiteListedTags.reduce((function(e,r){return e[r]=[],e}),{});r.safeAttrs=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"];r.renderingSanitizer=new o({whiteList:c,onTagAttr:function(e,t,n){var a=t+'="'+n+'"';if(i.includes(r.safeAttrs,t))return a},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0)}));