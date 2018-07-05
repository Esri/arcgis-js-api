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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/ArrayPool","../../core/Logger","maquette-css-transitions"],function(e,r,t,n,o,i){function s(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return c&&e.length<2&&g.error("[Widget] `join` is intended for 2 or more CSS classes."),e.join(" ")}function a(e){for(var r=n.acquire(),t=0;t<arguments.length;t++){var o=arguments[t],i=typeof o;if("string"===i)r.push(o);else if(Array.isArray(o))r.push.apply(r,o);else if("object"===i)for(var s in o)o[s]&&r.push(s)}var a=r.join(" ");return n.release(r),a}function d(){return"rtl"===document.dir}function u(e){var r=e.getAttribute("data-node-ref");if(c){if(!r)return void g.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(r in this))return void g.error("[Widget] cannot store "+r+" if not defined on instance.")}this[r]=e}function f(e,r){return("enter"===e?i.createEnterCssTransition:i.createExitCssTransition)(r)}Object.defineProperty(r,"__esModule",{value:!0});var c=t("dojo-debug-messages"),g=o.getLogger("esri.widgets.support.widgetUtils");r.join=s,r.classes=a,r.isRtl=d,r.storeNode=u,r.cssTransition=f});