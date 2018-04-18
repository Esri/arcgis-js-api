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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/Logger","maquette-css-transitions"],function(e,t,r,n,o){function i(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return u&&e.length<2&&f.error("[Widget] `join` is intended for 2 or more CSS classes."),e.join(" ")}function s(){return"rtl"===document.dir}function d(e){var t=e.getAttribute("data-node-ref");if(u){if(!t)return void f.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");if(!(t in this))return void f.error("[Widget] cannot store "+t+" if not defined on instance.")}this[t]=e}function a(e,t){return("enter"===e?o.createEnterCssTransition:o.createExitCssTransition)(t)}Object.defineProperty(t,"__esModule",{value:!0});var u=r("dojo-debug-messages"),f=n.getLogger("esri.widgets.support.widgetUtils");t.join=i,t.isRtl=s,t.storeNode=d,t.cssTransition=a});