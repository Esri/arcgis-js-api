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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/window","dojo/has","dojox/gfx","../kernel"],function(e,t,r,a,i){function o(e,t,r,a){if(f&&!c){var i=e&&e.rawNode,o=t.marker;if(r=r||t.color,!(i&&"none"!==t.style&&r&&o&&"arrow"===o.style&&o.placement))return void(i&&d(i));if(i.getTotalLength&&0===i.getTotalLength())return void d(i);var n=-1!==o.placement.indexOf("begin"),s=-1!==o.placement.indexOf("end"),u="spear";if(!n&&!s)return void d(i);if(i.removeAttribute("stroke-opacity"),i.setAttribute("opacity",r.a),n){var l=a(e,r,u,"start");m(e,l,"start")}else i.removeAttribute("marker-start");if(s){var v=a(e,r,u,"end");m(e,v,"end")}else i.removeAttribute("marker-end")}}function n(e,r,a,i){var o=l,n=o[a],d=t.doc.createElementNS(u,"marker");d.setAttribute("id",r),s(d,o.marker),s(d,n.marker[i]);var m=t.doc.createElementNS(u,"path");return m.setAttribute("fill",e.toCss()),s(m,n.path.common),s(m,n.path[i]),d.appendChild(m),d}function d(e){e.removeAttribute("marker-start"),e.removeAttribute("marker-end"),e.removeAttribute("opacity")}function s(e,t){for(var r in t)e.setAttribute(r,t[r])}function m(e,t,r){var a="url(#"+t.getAttribute("id")+")";e.rawNode.setAttribute("marker-"+r,a)}var u="http://www.w3.org/2000/svg",f=-1!==a.renderer.toLowerCase().indexOf("svg"),c=9===r("ie"),l={marker:{markerWidth:"6",markerHeight:"6",markerUnits:"strokeWidth",orient:"auto"},spear:{marker:{end:{viewBox:"0 0 25.4 23.43",refX:"20",refY:"12.76"},start:{viewBox:"-25.4 0 25.4 23.43",refX:"-20",refY:"12.76"}},path:{common:{d:"M1.63 23.43 L5.37 16.6 L5.37 8.93 L1.63 2.09 L25.4 12.76 L1.63 23.43 Z","stroke-width":"0","fill-opacity":"1"},start:{transform:"matrix(-1, 0, 0, 1, 0, 0)"}}}},v={applyLineMarker:o,createSVGMarker:n};return r("extend-esri")&&e.setObject("renderer.utils",v,i),v});