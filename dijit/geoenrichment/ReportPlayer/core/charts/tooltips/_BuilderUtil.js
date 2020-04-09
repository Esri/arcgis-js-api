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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/string","dojo/dom-class","dojo/dom-construct","dojo/dom-style","../legends/ChartLegendSymbols","../legends/LegendSymbolRenderer","dojo/i18n!esri/nls/jsapi"],(function(e,a,i,t,r,l,n){var o=n.geoenrichment.dijit.ReportPlayer.ChartContainer;return n=n.geoenrichment.dijit.ReportPlayer.ChartTooltip,{addTitle:function(e,a,t){var r=i.create("div",{class:"chartTooltip_title esriGERowHigh"},e,"first");t&&this.addColor(t,r),this.addLabel(a,r)},addColor:function(e,t){e=e||{};var n=l.renderSymbol({defaultSymbol:r.CIRCLE,fill:e.fill,stroke:e.stroke,marker:e.marker,width:8,height:10});a.add(n,"esriGESpaceAfterBig"),i.place(n,t)},addRowOffset:function(e){this.addColor(null,e)},addLabel:function(e,a){return i.create("div",{class:"chartTooltip_label dijitInline esriGESpaceAfterBig",innerHTML:e},a)},addValue:function(e,a){return i.create("div",{class:"chartTooltip_value dijitInline esriGESpaceAfterBig",innerHTML:e},a)},buildStatLabels:function(e,a,t,r,l,n,o){var d=this,s=[];function c(t,r){if(e[t]&&r){var l=i.create("div",{class:"chartTooltip_row esriGERowHigh"},a);d.addColor(null,l),s.push(d.addLabel(r,l)),d.addValue(e[t],l)}}return c("weightValueLabel",t),c("minValueLabel",r),c("maxValueLabel",l),c("avgValueLabel",n),c("weightInStackLabel",o),s},formatTable:function(e){var a=0;e.forEach((function(e){a=Math.max(a,t.get(e,"width"))})),e.forEach((function(e){t.set(e,"width",a+"px")}))},buildSeriesLabel:function(a){return!0===a.isThisAreaSpecific?a.seriesLabel&&!a.isThisAreaSingleSeries?e.substitute(n.thisAreaSeries,{seriesName:a.seriesLabel}):o.thisArea:a.seriesLabel},addBenchmarkValue:function(e,a){return this.addValue(e.unbenchmarkedValueLabel+" ("+(e.value>0?"+":"")+e.valueLabel+")",a)}}}));