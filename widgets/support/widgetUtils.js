// COPYRIGHT © 2017 Esri
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

define(["require","exports","../../core/Logger","dojo/has"],function(e,r,t,o){function n(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return s&&e.length<2&&u.error("[Widget] `join` is intended for 2 or more CSS classes."),e.join(" ")}function i(){return"rtl"===document.dir}function d(e){var r="data-node-ref",t=e.getAttribute(r);if(s){if(!t)return void u.error("[Widget] node ref not found, did you forget the 'data-node-ref' attribute?");var o=t in this;if(!o)return void u.error("[Widget] cannot store "+t+" if not defined on instance.")}this[t]=e}Object.defineProperty(r,"__esModule",{value:!0});var s=o("dojo-debug-messages"),u=t.getLogger("esri.widgets.support.widgetUtils");r.join=n,r.isRtl=i,r.storeNode=d});