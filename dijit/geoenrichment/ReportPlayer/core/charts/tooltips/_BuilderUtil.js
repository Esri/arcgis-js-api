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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../legends/ChartLegendSymbols","../legends/LegendSymbolRenderer","dojo/i18n!esri/nls/jsapi"],function(e,i,a,r,t,l,o){var n=o.geoenrichment.dijit.ReportPlayer.ChartContainer;return o=o.geoenrichment.dijit.ReportPlayer.ChartTooltip,{addTitle:function(e,i,r){var t=a.create("div",{class:"chartTooltip_title esriGERowHigh"},e,"first");r&&this.addColor(r,t),this.addLabel(i,t)},addColor:function(e,r){e=e||{};var o=l.renderSymbol({defaultSymbol:t.CIRCLE,fill:e.fill,stroke:e.stroke,marker:e.marker});i.add(o,"esriGESpaceAfterBig"),a.place(o,r)},addRowOffset:function(e){this.addColor(null,e)},addLabel:function(e,i){return a.create("div",{class:"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:e},i)},addValue:function(e,i){return a.create("div",{class:"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:e},i)},buildStatLabels:function(e,i,r,t,l,o,n){function s(r,t){if(e[r]&&t){var l=a.create("div",{class:"chartTooltip_row esriGERowHigh"},i);d.addColor(null,l),c.push(d.addLabel(t,l)),d.addValue(e[r],l)}}var d=this,c=[];return s("weightValueLabel",r),s("minValueLabel",t),s("maxValueLabel",l),s("avgValueLabel",o),s("weightInStackLabel",n),c},formatTable:function(e){var i=0;e.forEach(function(e){i=Math.max(i,r.get(e,"width"))}),e.forEach(function(e){r.set(e,"width",i+"px")})},buildSeriesLabel:function(i){return!0===i.isThisAreaSpecific?i.seriesLabel&&!i.isThisAreaSingleSeries?e.substitute(o.thisAreaSeries,{seriesName:i.seriesLabel}):n.thisArea:i.seriesLabel}}});