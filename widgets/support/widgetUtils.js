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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/ArrayPool","../../core/has","../../core/Logger","maquette-css-transitions"],function(e,r,t,n,i,o){function s(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return c&&e.length<2&&g.error("[Widget] `join` is intended for 2 or more CSS classes."),e.join(" ")}function a(e){for(var r=t.acquire(),n=0;n<arguments.length;n++){var i=arguments[n],o=typeof i;if("string"===o)r.push(i);else if(Array.isArray(i))r.push.apply(r,i);else if("object"===o)for(var s in i)i[s]&&r.push(s)}var a=r.join(" ");return t.release(r),a}function d(){return"rtl"===document.dir}function u(e){var r=e.getAttribute("data-node-ref");if(c){if(!r)return void g.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(r in this))return void g.error("[Widget] cannot store "+r+" if not defined on instance.")}this[r]=e}function f(e,r){return("enter"===e?o.createEnterCssTransition:o.createExitCssTransition)(r)}Object.defineProperty(r,"__esModule",{value:!0});var c=n("dojo-debug-messages"),g=i.getLogger("esri.widgets.support.widgetUtils");r.join=s,r.classes=a,r.isRTL=d,r.storeNode=u,r.cssTransition=f});