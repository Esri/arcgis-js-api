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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../core/ArrayPool","../../core/arrayUtils","../../core/has","../../core/Logger","../../libs/sanitizer/Sanitizer","maquette-css-transitions"],(function(e,r,t,i,n,a,s,o,d){Object.defineProperty(r,"__esModule",{value:!0});var l=a("esri-debug-messages"),c=s.getLogger("esri.widgets.support.widgetUtils");r.classes=function(e){for(var r=i.acquire(),t=0;t<arguments.length;t++){var n=arguments[t],a=typeof n;if("string"===a)r.push(n);else if(Array.isArray(n))r.push.apply(r,n);else if("object"===a)for(var s in n)n[s]&&r.push(s)}var o=r.join(" ");return i.release(r),o},r.isRTL=function(){return"rtl"===document.dir},r.discardNode=function(e){var r=e.getAttribute("data-node-ref");if(l){if(!r)return void c.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(r in this))return void c.error("[Widget] cannot discard "+r+" if not defined on instance.")}this[r]=null},r.storeNode=function(e){var r=e.getAttribute("data-node-ref");if(l){if(!r)return void c.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(r in this))return void c.error("[Widget] cannot store "+r+" if not defined on instance.")}this[r]=e},r.cssTransition=function(e,r){return("enter"===e?d.createEnterCssTransition:d.createExitCssTransition)(r)};r.additionalWhiteListedTags=t.__spreadArrays(["h1","h2","h3","h4","h5","h6","sub","sup"],["animate","animatetransform","circle","clippath","defs","ellipse","g","image","line","lineargradient","marker","mask","path","pattern","polygon","polyline","radialgradient","rect","stop","svg","switch","symbol","text","textpath","tspan","use"]);var u=r.additionalWhiteListedTags.reduce((function(e,r){return e[r]=[],e}),{});r.safeAttrs=["align","alink","alt","bgcolor","border","cellpadding","cellspacing","class","color","cols","colspan","coords","dir","face","height","hspace","ismap","lang","marginheight","marginwidth","multiple","nohref","noresize","noshade","nowrap","ref","rel","rev","rows","rowspan","scrolling","shape","span","summary","tabindex","title","usemap","valign","value","vlink","vspace","width"];r.renderingSanitizer=new o({whiteList:u,onTagAttr:function(e,t,i){var a=t+'="'+i+'"';if(n.includes(r.safeAttrs,t))return a},stripIgnoreTag:!0,stripIgnoreTagBody:["script","style"]},!0)}));