// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["dojo/_base/lang","dojo/_base/window","dojo/has","dojox/gfx","../kernel","../Color"],(function(e,t,r,a,o,i){var s="http://www.w3.org/2000/svg",l=-1!==a.renderer.toLowerCase().indexOf("svg"),n=9===r("ie"),m={marker:{markerWidth:"6",markerHeight:"6",markerUnits:"strokeWidth",orient:"auto"},spear:{marker:{end:{viewBox:"0 0 25.4 23.43",refX:"20",refY:"12.76"},start:{viewBox:"-25.4 0 25.4 23.43",refX:"-20",refY:"12.76"}},path:{common:{d:"M1.63 23.43 L5.37 16.6 L5.37 8.93 L1.63 2.09 L25.4 12.76 L1.63 23.43 Z","stroke-width":"0","fill-opacity":"1"},start:{transform:"matrix(-1, 0, 0, 1, 0, 0)"}}}};function c(e){e.removeAttribute("marker-start"),e.removeAttribute("marker-end"),e.removeAttribute("opacity")}function u(e,t){for(var r in t)e.setAttribute(r,t[r])}function d(e,t,r){var a="url(#"+t.getAttribute("id")+")";e.rawNode.setAttribute("marker-"+r,a)}var f={applyLineMarker:function(e,t,r,a){if(l&&!n){var o=e&&e.rawNode,i=t.marker;if(r=r||t.color,o&&"none"!==t.style&&r&&i&&"arrow"===i.style&&i.placement)if(o.getTotalLength&&0===o.getTotalLength())c(o);else{var s=-1!==i.placement.indexOf("begin"),m=-1!==i.placement.indexOf("end");if(s||m){if(o.removeAttribute("stroke-opacity"),o.setAttribute("opacity",r.a),s)d(e,a(e,r,"spear","start"),"start");else o.removeAttribute("marker-start");if(m)d(e,a(e,r,"spear","end"),"end");else o.removeAttribute("marker-end")}else c(o)}else o&&c(o)}},createSVGMarker:function(e,r,a,o){var i=m,l=i[a],n=t.doc.createElementNS(s,"marker");n.setAttribute("id",r),u(n,i.marker),u(n,l.marker[o]);var c=t.doc.createElementNS(s,"path");return c.setAttribute("fill",e.toCss()),u(c,l.path.common),u(c,l.path[o]),n.appendChild(c),n},create2DColorRamp:function(e){for(var t=e.surface.createGroup(),r=e.colors,a=e.numClasses,o=(e.size||75)/a,i=0;i<a;i++)for(var s=i*o,l=0;l<a;l++){var n=r[i][l],m=l*o;t.createRect({x:m,y:s,width:o,height:o}).setFill(n).setStroke(null)}return t},setSymbolFillColor:function(e,t){if(e)switch(t=t?new i(t):null,e.type){case"simplemarkersymbol":"cross"===e.style||"x"===e.style?e.outline&&e.outline.setColor(t):e.setColor(t);break;case"simplelinesymbol":case"cartographiclinesymbol":case"simplefillsymbol":case"shieldlabelsymbol":case"textsymbol":e.setColor(t)}}};return r("extend-esri")&&e.setObject("renderer.utils",f,o),f}));