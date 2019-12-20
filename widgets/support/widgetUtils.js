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

define(["require","exports","../../core/ArrayPool","../../core/has","../../core/Logger","../../libs/sanitizer/Sanitizer","maquette-css-transitions"],function(e,r,t,i,n,o,s){function a(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return g&&e.length<2&&l.error("[Widget] `join` is intended for 2 or more CSS classes."),e.join(" ")}function d(e){for(var r=t.acquire(),i=0;i<arguments.length;i++){var n=arguments[i],o=typeof n;if("string"===o)r.push(n);else if(Array.isArray(n))r.push.apply(r,n);else if("object"===o)for(var s in n)n[s]&&r.push(s)}var a=r.join(" ");return t.release(r),a}function u(){return"rtl"===document.dir}function f(e){var r=e.getAttribute("data-node-ref");if(g){if(!r)return void l.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(r in this))return void l.error("[Widget] cannot store "+r+" if not defined on instance.")}this[r]=e}function c(e,r){return("enter"===e?s.createEnterCssTransition:s.createExitCssTransition)(r)}Object.defineProperty(r,"__esModule",{value:!0});var g=i("dojo-debug-messages"),l=n.getLogger("esri.widgets.support.widgetUtils");r.join=a,r.classes=d,r.isRTL=u,r.storeNode=f,r.cssTransition=c,r.sanitizer=new o});