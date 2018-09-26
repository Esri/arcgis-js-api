// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/window","dojo/has","dojox/gfx","../kernel","../Color"],function(e,t,r,o,a,i){function s(e,t,r,o){if(f&&!p){var a=e&&e.rawNode,i=t.marker;if(r=r||t.color,!(a&&"none"!==t.style&&r&&i&&"arrow"===i.style&&i.placement))return void(a&&l(a));if(a.getTotalLength&&0===a.getTotalLength())return void l(a);var s=-1!==i.placement.indexOf("begin"),n=-1!==i.placement.indexOf("end");if(!s&&!n)return void l(a);if(a.removeAttribute("stroke-opacity"),a.setAttribute("opacity",r.a),s){c(e,o(e,r,"spear","start"),"start")}else a.removeAttribute("marker-start");if(n){c(e,o(e,r,"spear","end"),"end")}else a.removeAttribute("marker-end")}}function n(e,r,o,a){var i=b,s=i[o],n=t.doc.createElementNS(d,"marker");n.setAttribute("id",r),m(n,i.marker),m(n,s.marker[a]);var l=t.doc.createElementNS(d,"path");return l.setAttribute("fill",e.toCss()),m(l,s.path.common),m(l,s.path[a]),n.appendChild(l),n}function l(e){e.removeAttribute("marker-start"),e.removeAttribute("marker-end"),e.removeAttribute("opacity")}function m(e,t){for(var r in t)e.setAttribute(r,t[r])}function c(e,t,r){var o="url(#"+t.getAttribute("id")+")";e.rawNode.setAttribute("marker-"+r,o)}function u(e){for(var t=e.surface.createGroup(),r=e.colors,o=e.numClasses,a=e.size||75,i=a/o,s=0;s<o;s++)for(var n=s*i,l=0;l<o;l++){var m=r[s][l],c=l*i;t.createRect({x:c,y:n,width:i,height:i}).setFill(m).setStroke(null)}return t}var d="http://www.w3.org/2000/svg",f=-1!==o.renderer.toLowerCase().indexOf("svg"),p=9===r("ie"),b={marker:{markerWidth:"6",markerHeight:"6",markerUnits:"strokeWidth",orient:"auto"},spear:{marker:{end:{viewBox:"0 0 25.4 23.43",refX:"20",refY:"12.76"},start:{viewBox:"-25.4 0 25.4 23.43",refX:"-20",refY:"12.76"}},path:{common:{d:"M1.63 23.43 L5.37 16.6 L5.37 8.93 L1.63 2.09 L25.4 12.76 L1.63 23.43 Z","stroke-width":"0","fill-opacity":"1"},start:{transform:"matrix(-1, 0, 0, 1, 0, 0)"}}}},k={applyLineMarker:s,createSVGMarker:n,create2DColorRamp:u,setSymbolFillColor:function(e,t){if(e)switch(t=t?new i(t):null,e.type){case"simplemarkersymbol":"cross"===e.style||"x"===e.style?e.outline&&e.outline.setColor(t):e.setColor(t);break;case"simplelinesymbol":case"cartographiclinesymbol":case"simplefillsymbol":case"shieldlabelsymbol":case"textsymbol":e.setColor(t)}}};return r("extend-esri")&&e.setObject("renderer.utils",k,a),k});