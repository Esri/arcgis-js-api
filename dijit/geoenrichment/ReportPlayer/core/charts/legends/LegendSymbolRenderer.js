// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/dom-class","dojo/dom-construct","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/ShapeUtil","./ChartLegendSymbols"],(function(e,o,r,t,i){var l={renderSymbol:function(l){var d=o.create("div",{class:"dijitInline esriGEReportPlayerChartLegendSymbol"}),a=l.stroke&&r.toCSSColor(l.stroke),n=l.fill&&r.toCSSColor(l.fill);if(l.marker&&!l.customSymbol){e.add(d,"isSVGSymbol");var s=t.createSVGNode({xmin:0,ymin:0,width:6,height:6},{width:(l.width||8)+"px",height:(l.height||8)+"px",overflow:"visible"});s.appendChild(t.createPathNode(l.marker,{borderColor:a||"transparent",borderWidth:2,fillColor:n||"transparent"})),o.place(s,d)}else{var h=l.customSymbol||l.defaultSymbol||i.SQUARE;e.add(d,h.toLowerCase()),n&&(d.style.backgroundColor=n),a&&(d.style.border=("line"===h.toLowerCase()?1:2)+"px solid "+a)}return d}};return l}));